import { describe, expect, test } from 'vitest'
import { pythonista } from '../src'

describe('pythonista', () => {
  test('open should return a URL', async () => {
    const url = pythonista.open()
    expect(url).toBe('pythonista://')
  })

  test('open should support the Pythonista 3 scheme', async () => {
    const url = pythonista.open({ scheme: 'pythonista3' })
    expect(url).toBe('pythonista3://')
  })

  test('open should support the Pythonista 2 scheme', async () => {
    const url = pythonista.open({ scheme: 'pythonista2' })
    expect(url).toBe('pythonista2://')
  })

  test('openScript should return a URL for a local script', async () => {
    const url = pythonista.openScript({ path: 'MyScript.py' })
    expect(url).toBe('pythonista://MyScript.py')
  })

  test('openScript should return a URL for an iCloud script', async () => {
    const url = pythonista.openScript({ path: 'MyScript.py', root: 'icloud' })
    expect(url).toBe('pythonista://MyScript.py?root=icloud')
  })

  test('openScript should support an iCloud path prefix', async () => {
    const url = pythonista.openScript({ path: 'iCloud/MyScript.py' })
    expect(url).toBe('pythonista://iCloud/MyScript.py')
  })

  test('runScript should return a URL with action=run', async () => {
    const url = pythonista.runScript({ path: 'MyScript.py' })
    expect(url).toBe('pythonista://MyScript.py?action=run')
  })

  test('runScript should return a URL with root=icloud', async () => {
    const url = pythonista.runScript({ path: 'MyScript.py', root: 'icloud' })
    expect(url).toBe('pythonista://MyScript.py?action=run&root=icloud')
  })

  test('runScript should return a URL with args', async () => {
    const url = pythonista.runScript({ path: 'MyScript', args: 'foo bar' })
    expect(url).toBe('pythonista://MyScript?action=run&args=foo%20bar')
  })

  test('runScript should return a URL with repeated argv parameters', async () => {
    const url = pythonista.runScript({ path: 'MyScript', argv: ['foo', 'bar'] })
    expect(url).toBe('pythonista://MyScript?action=run&argv=foo&argv=bar')
  })

  test('runScript should prefer argv over args when argv has values', async () => {
    const url = pythonista.runScript({
      path: 'MyScript',
      args: 'ignored',
      argv: ['foo', 'bar'],
    })
    expect(url).toBe('pythonista://MyScript?action=run&argv=foo&argv=bar')
  })

  test('runScript should return a URL with version', async () => {
    const url = pythonista.runScript({ path: 'MyScript.py', version: 3 })
    expect(url).toBe('pythonista://MyScript.py?action=run&version=3')
  })

  test('runScript should return a URL with py', async () => {
    const url = pythonista.runScript({ path: 'MyScript.py', py: 2 })
    expect(url).toBe('pythonista://MyScript.py?action=run&py=2')
  })

  test('runScript should support the Pythonista 2 scheme', async () => {
    const url = pythonista.runScript({ path: 'MyScript.py', scheme: 'pythonista2' })
    expect(url).toBe('pythonista2://MyScript.py?action=run')
  })

  test('exec should return a URL with embedded code', async () => {
    const url = pythonista.exec({ code: 'print("Hello")' })
    expect(url).toBe('pythonista://?exec=print(%22Hello%22)')
  })
})
