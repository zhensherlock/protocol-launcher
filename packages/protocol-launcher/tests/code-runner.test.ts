import { describe, expect, test } from 'vitest'
import { codeRunner } from '../src'

describe('code-runner', () => {
  test('open should return a URL', async () => {
    const url = codeRunner.open()
    expect(url).toBe('coderunner://')
  })

  test('openFile should return a URL with path', async () => {
    const url = codeRunner.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('coderunner:///etc/hosts')
  })

  test('openFolder should return a URL with path', async () => {
    const url = codeRunner.openFolder({
      path: '/etc',
    })
    expect(url).toBe('coderunner:///etc')
  })
})
