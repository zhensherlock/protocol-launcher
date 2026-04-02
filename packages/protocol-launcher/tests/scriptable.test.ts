import { describe, expect, test } from 'vitest'
import { scriptable } from '../src'

describe('scriptable', () => {
  test('open should return a URL', async () => {
    const url = scriptable.open()
    expect(url).toBe('scriptable://')
  })

  test('addScript should return a URL', async () => {
    const url = scriptable.addScript()
    expect(url).toBe('scriptable:///add')
  })

  test('openScript should return a URL with scriptName', async () => {
    const url = scriptable.openScript({
      scriptName: 'Example',
    })
    expect(url).toBe('scriptable:///open/Example')
  })

  test('openScript should return a URL with scriptName and openSettings', async () => {
    const url = scriptable.openScript({
      scriptName: 'Example',
      openSettings: true,
    })
    expect(url).toBe('scriptable:///open/Example?openSettings=true')
  })

  test('openScript should return a URL with scriptName and openSettings false', async () => {
    const url = scriptable.openScript({
      scriptName: 'Example',
      openSettings: false,
    })
    expect(url).toBe('scriptable:///open/Example')
  })

  test('openScript should return a URL with URL encoded scriptName', async () => {
    const url = scriptable.openScript({
      scriptName: 'My Script',
    })
    expect(url).toBe('scriptable:///open/My Script')
  })

  test('runScript should return a URL with scriptName', async () => {
    const url = scriptable.runScript({
      scriptName: 'Example',
    })
    expect(url).toBe('scriptable:///run/Example')
  })

  test('runScript should return a URL with scriptName and openEditor', async () => {
    const url = scriptable.runScript({
      scriptName: 'Example',
      openEditor: true,
    })
    expect(url).toBe('scriptable:///run/Example?openEditor=true')
  })

  test('runScript should return a URL with scriptName and openEditor false', async () => {
    const url = scriptable.runScript({
      scriptName: 'Example',
      openEditor: false,
    })
    expect(url).toBe('scriptable:///run/Example')
  })

  test('runScript should return a URL with URL encoded scriptName', async () => {
    const url = scriptable.runScript({
      scriptName: 'My Script',
    })
    expect(url).toBe('scriptable:///run/My Script')
  })
})
