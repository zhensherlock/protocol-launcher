import { describe, expect, test } from 'vitest'
import { vscode } from '../src'

describe('vscode', () => {
  test('openFile should return a URL with path', async () => {
    const url = vscode.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('vscode://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = vscode.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = vscode.openFolder({
      path: '/System',
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://file/System?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = vscode.openFolder({
      path: '/System',
    })
    expect(url).toBe('vscode://file/System')
  })

  test('openSettings should return a URL', async () => {
    const url = vscode.openSettings()
    expect(url).toBe('vscode://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = vscode.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://settings?windowId=_blank')
  })
})
