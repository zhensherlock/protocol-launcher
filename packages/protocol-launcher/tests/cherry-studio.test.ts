import { describe, expect, test } from 'vitest'
import { cherryStudio } from '../src'

describe('cherry-studio', () => {
  test('installMCP should return a URL with base64-encoded payload', async () => {
    const url = cherryStudio.installMCP({
      mcpServers: {
        everything: {
          name: 'server-everything',
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-everything'],
        },
      },
    })
    expect(url).toBe(
      'cherrystudio://mcp/install?servers=eyJtY3BTZXJ2ZXJzIjp7ImV2ZXJ5dGhpbmciOnsibmFtZSI6InNlcnZlci1ldmVyeXRoaW5nIiwidHlwZSI6InN0ZGlvIiwiY29tbWFuZCI6Im5weCIsImFyZ3MiOlsiLXkiLCJAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2VydmVyLWV2ZXJ5dGhpbmciXX19fQ%3D%3D',
    )
  })

  test('installProvider should return a URL with base64-encoded payload', async () => {
    const url = cherryStudio.installProvider({
      id: 'new-api',
      baseUrl: 'https://open.cherryin.ai',
      apiKey: 'sk-xxxx',
    })
    expect(url).toBe(
      'cherrystudio://providers/api-keys?v=1&data=eyJpZCI6Im5ldy1hcGkiLCJiYXNlVXJsIjoiaHR0cHM6Ly9vcGVuLmNoZXJyeWluLmFpIiwiYXBpS2V5Ijoic2steHh4eCJ9',
    )
  })
})

describe('current Cherry Studio protocols', () => {
  test('navigate preserves route paths and encodes optional query values', () => {
    expect(cherryStudio.navigate({ path: '/settings/provider' })).toBe('cherrystudio://navigate/settings/provider')
    expect(
      cherryStudio.navigate({
        path: 'app/agents',
        query: { intent: 'feedback', sessionId: 'a b', missing: undefined, empty: null },
      }),
    ).toBe('cherrystudio://navigate/app/agents?intent=feedback&sessionId=a%20b')
  })

  test('MCP imports omit entity metadata rejected by the current protocol schema', () => {
    expect(
      cherryStudio.installMCP({
        name: 'demo',
        command: 'npx',
        registryUrl: 'https://example.com',
        provider: 'Example',
        tags: ['local'],
        timeout: 30,
        id: 'local-id',
      }),
    ).toBe('cherrystudio://mcp/install?servers=eyJuYW1lIjoiZGVtbyIsImNvbW1hbmQiOiJucHgifQ%3D%3D')
    expect(
      cherryStudio.installMCP({ mcpServers: { demo: { baseUrl: 'https://example.com', provider: 'Example' } } }),
    ).toBe(
      'cherrystudio://mcp/install?servers=eyJtY3BTZXJ2ZXJzIjp7ImRlbW8iOnsiYmFzZVVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20ifX19',
    )
  })

  test('MCP imports support arrays inside mcpServers', () => {
    expect(cherryStudio.installMCP({ mcpServers: [{ name: 'demo', command: 'npx', tags: ['local'] }] })).toBe(
      'cherrystudio://mcp/install?servers=eyJtY3BTZXJ2ZXJzIjpbeyJuYW1lIjoiZGVtbyIsImNvbW1hbmQiOiJucHgifV19',
    )
    expect(cherryStudio.installMCP([{ name: 'demo', command: 'npx', tags: ['local'] }])).toBe(
      'cherrystudio://mcp/install?servers=W3sibmFtZSI6ImRlbW8iLCJjb21tYW5kIjoibnB4In1d',
    )
  })
})
