import { describe, expect, test } from 'vitest'
import { qoder } from '../src'

describe('command metadata', () => {
  test('supports description and project scope', () => {
    expect(
      qoder.createCommand({ name: 'review_pr', text: 'Review', description: 'Review & explain', scope: 'project' }),
    ).toBe(
      'qoder://aicoding.aicoding-deeplink/command?name=review_pr&text=Review&description=Review%20%26%20explain&scope=project',
    )
  })

  test('rejects a command name outside the documented character set', () => {
    expect(() => qoder.createCommand({ name: 'Review PR', text: 'Review' })).toThrow(
      'Command name can only contain lowercase letters, numbers, hyphens, and underscores.',
    )
  })

  test('encodes an MCP server name without changing the config format', () => {
    expect(qoder.installMCP({ name: 'A & 中文', type: 'stdio' })).toBe(
      'qoder://aicoding.aicoding-deeplink/mcp/add?name=A%20%26%20%E4%B8%AD%E6%96%87&config=JTdCJTIydHlwZSUyMiUzQSUyMnN0ZGlvJTIyJTdE',
    )
  })
})

describe('qoder', () => {
  test('open should return a URL', async () => {
    const url = qoder.open()
    expect(url).toBe('qoder://')
  })

  test('createChat should return a URL with payload', async () => {
    const url = qoder.createChat({
      text: 'Hello, Qoder!',
      mode: 'agent',
    })
    expect(url).toBe('qoder://aicoding.aicoding-deeplink/chat?text=Hello%2C%20Qoder!&mode=agent')
  })

  test('createChat should return a URL with payload and openInNewWindow', async () => {
    const url = qoder.createChat({
      text: 'Hello, Qoder!',
      mode: 'agent',
      openInNewWindow: true,
    })
    expect(url).toBe('qoder://aicoding.aicoding-deeplink/chat?text=Hello%2C%20Qoder!&mode=agent&windowId=_blank')
  })

  test('createQuest should return a URL with payload', async () => {
    const url = qoder.createQuest({
      text: 'Hello, Qoder!',
      agentClass: 'LocalAgent',
    })
    expect(url).toBe('qoder://aicoding.aicoding-deeplink/quest?text=Hello%2C%20Qoder!&agentClass=LocalAgent')
  })

  test('installMCP should return a URL with payload', async () => {
    const url = qoder.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'qoder://aicoding.aicoding-deeplink/mcp/add?name=server-everything&config=JTdCJTIydHlwZSUyMiUzQSUyMnN0ZGlvJTIyJTJDJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlMjIteSUyMiUyQyUyMiU0MG1vZGVsY29udGV4dHByb3RvY29sJTJGc2VydmVyLWV2ZXJ5dGhpbmclMjIlNUQlN0Q%3D',
    )
  })

  test('installMCP should return a URL with payload and openInNewWindow', async () => {
    const url = qoder.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      openInNewWindow: true,
    })
    expect(url).toBe(
      'qoder://aicoding.aicoding-deeplink/mcp/add?name=server-everything&config=JTdCJTIydHlwZSUyMiUzQSUyMnN0ZGlvJTIyJTJDJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlMjIteSUyMiUyQyUyMiU0MG1vZGVsY29udGV4dHByb3RvY29sJTJGc2VydmVyLWV2ZXJ5dGhpbmclMjIlNUQlN0Q%3D&windowId=_blank',
    )
  })

  test('openFile should return a URL with path', async () => {
    const url = qoder.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('qoder://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = qoder.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('qoder://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = qoder.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('qoder://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = qoder.openFolder({
      path: '/etc',
    })
    expect(url).toBe('qoder://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = qoder.openSettings()
    expect(url).toBe('qoder://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = qoder.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('qoder://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = qoder.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('qoder://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = qoder.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('qoder://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = qoder.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('qoder://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('openExtension should return a URL with payload', async () => {
    const url = qoder.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('qoder:extension/esbenp.prettier-vscode')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = qoder.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('qoder://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })

  test('createRule should return a URL with payload', async () => {
    const url = qoder.createRule({
      name: 'my_rule',
      text: 'You are a development expert.',
    })
    expect(url).toBe('qoder://aicoding.aicoding-deeplink/rule?name=my_rule&text=You%20are%20a%20development%20expert.')
  })

  test('createRule should throw error for invalid name', async () => {
    expect(() =>
      qoder.createRule({
        name: 'invalid name!',
        text: 'test',
      }),
    ).toThrow('Rule name can only contain letters, numbers, underscores, and hyphens.')
  })
})

describe('documented URL updates', () => {
  test('createCommand uses the custom command endpoint', () => {
    expect(qoder.createCommand({ name: 'review', text: 'Review & explain' })).toBe(
      'qoder://aicoding.aicoding-deeplink/command?name=review&text=Review%20%26%20explain',
    )
  })

  test('createChat supports the current chat mode in the existing chat', () => {
    expect(qoder.createChat({ text: 'Hello', mode: 'chat', isNewChat: false })).toBe(
      'qoder://aicoding.aicoding-deeplink/chat?text=Hello&mode=chat&isNewChat=false',
    )
  })

  test('createChat supports Experts and explicit new chat', () => {
    expect(qoder.createChat({ text: 'Hello', mode: 'experts', isNewChat: true, openInNewWindow: true })).toBe(
      'qoder://aicoding.aicoding-deeplink/chat?text=Hello&mode=experts&isNewChat=true&windowId=_blank',
    )
  })

  test('createChat retains its default agent mode', () => {
    expect(qoder.createChat({ text: 'Hello' })).toBe('qoder://aicoding.aicoding-deeplink/chat?text=Hello&mode=agent')
  })

  test('createQuest retains RemoteAgent compatibility', () => {
    expect(qoder.createQuest({ text: 'Hello', agentClass: 'RemoteAgent' })).toBe(
      'qoder://aicoding.aicoding-deeplink/quest?text=Hello&agentClass=RemoteAgent',
    )
  })
})
