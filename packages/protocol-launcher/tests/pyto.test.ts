import { describe, expect, test } from 'vitest'
import { pyto } from '../src'

describe('pyto', () => {
  test('open should return a URL', async () => {
    const url = pyto.open()
    expect(url).toBe('pyto://')
  })

  test('runCode should return a URL with code', async () => {
    const url = pyto.runCode({
      code: 'import sys; print(sys.version)',
    })
    expect(url).toBe('pyto://x-callback/?code=import%20sys%3B%20print(sys.version)')
  })

  test('runCode should return a URL with code and xSuccess', async () => {
    const url = pyto.runCode({
      code: 'import sys; print(sys.version)',
      xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
    })
    expect(url).toBe(
      'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)&x-success=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleResult',
    )
  })

  test('runCode should return a URL with code and xError', async () => {
    const url = pyto.runCode({
      code: 'import sys; print(sys.version)',
      xError: 'shortcuts://run-shortcut?name=HandleError',
    })
    expect(url).toBe(
      'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)&x-error=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleError',
    )
  })

  test('runCode should return a URL with code and xCancel', async () => {
    const url = pyto.runCode({
      code: 'import sys; print(sys.version)',
      xCancel: 'shortcuts://run-shortcut?name=HandleCancel',
    })
    expect(url).toBe(
      'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)&x-cancel=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleCancel',
    )
  })

  test('runCode should return a URL with all parameters', async () => {
    const url = pyto.runCode({
      code: 'import sys; print(sys.version)',
      xSuccess: 'shortcuts://run-shortcut?name=HandleResult',
      xError: 'shortcuts://run-shortcut?name=HandleError',
      xCancel: 'shortcuts://run-shortcut?name=HandleCancel',
    })
    expect(url).toBe(
      'pyto://x-callback/?code=import%20sys%3B%20print(sys.version)&x-success=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleResult&x-error=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleError&x-cancel=shortcuts%3A%2F%2Frun-shortcut%3Fname%3DHandleCancel',
    )
  })
})
