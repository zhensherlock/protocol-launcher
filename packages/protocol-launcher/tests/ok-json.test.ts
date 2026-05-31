import { describe, expect, test } from 'vitest'
import { okJson } from '../src'

describe('okJson', () => {
  test('should expose only actions documented by OK JSON', () => {
    expect(Object.keys(okJson).sort()).toEqual(['history', 'newJson', 'paste', 'runScript', 'scriptsPanel'])
  })

  test('paste should return the official paste URL', () => {
    const url = okJson.paste()

    expect(url).toBe('okjson://paste')
  })

  test('newJson should percent-encode JSON content', () => {
    const url = okJson.newJson({
      content: '{"hello":"world"}',
    })

    expect(url).toBe('okjson://new?content=%7B%22hello%22%3A%22world%22%7D')
  })

  test('history should return the official history URL', () => {
    const url = okJson.history()

    expect(url).toBe('okjson://history')
  })

  test('scriptsPanel should return the official scripts panel URL', () => {
    const url = okJson.scriptsPanel()

    expect(url).toBe('okjson://scripts-panel')
  })

  test('runScript should return the official script URL', () => {
    const url = okJson.runScript({
      scriptFileNameWithoutJsExtension: 'copy-minified-json',
    })

    expect(url).toBe('okjson://script/copy-minified-json')
  })
})
