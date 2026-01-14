import { describe, expect, test } from 'vitest'
import { cursor } from '../src'

describe('cursor.ts', () => {
  test('installMCP should return a URL with base64-encoded payload', async () => {
    const url = cursor.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'cursor://anysphere.cursor-deeplink/mcp/install?name=server-everything&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZXJ2ZXItZXZlcnl0aGluZyJdfQ%3D%3D',
    )
  })

  test('installMCP should return a URL with base64-encoded payload and openInNewWindow', async () => {
    const url = cursor.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      openInNewWindow: true,
    })
    expect(url).toBe(
      'cursor://anysphere.cursor-deeplink/mcp/install?name=server-everything&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZXJ2ZXItZXZlcnl0aGluZyJdfQ%3D%3D&windowId=_blank',
    )
  })

  test('openFile should return a URL with path', async () => {
    const url = cursor.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('cursor://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = cursor.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('cursor://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = cursor.openFolder({
      path: '/System',
      openInNewWindow: true,
    })
    expect(url).toBe('cursor://file/System?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = cursor.openFolder({
      path: '/System',
    })
    expect(url).toBe('cursor://file/System')
  })

  test('openSettings should return a URL', async () => {
    const url = cursor.openSettings()
    expect(url).toBe('cursor://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = cursor.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('cursor://settings?windowId=_blank')
  })

  test('createChat should return a URL with prompt', async () => {
    const url = cursor.createChat({
      prompt: 'Hello, Cursor!',
    })
    expect(url).toBe('cursor://anysphere.cursor-deeplink/prompt?text=Hello%2C%20Cursor!')
  })

  test('createChat should return a URL with prompt and openInNewWindow', async () => {
    const url = cursor.createChat({
      prompt: 'Hello, Cursor!',
      openInNewWindow: true,
    })
    expect(url).toBe('cursor://anysphere.cursor-deeplink/prompt?text=Hello%2C%20Cursor!&windowId=_blank')
  })
})
