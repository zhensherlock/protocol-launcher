import { describe, expect, test } from 'vitest'
import { yoinkIos } from '../src'

describe('yoinkIos', () => {
  test('should expose only the documented Yoink for iOS URL helpers', () => {
    expect(Object.keys(yoinkIos).sort()).toEqual([
      'addString',
      'copyToClipboard',
      'downloadUrl',
      'pasteFromClipboard',
      'showDownloadUi',
    ])
  })

  test('pasteFromClipboard should return a clipboard paste URL', () => {
    const url = yoinkIos.pasteFromClipboard({
      title: 'My Title',
      createStack: 0,
    })

    expect(url).toBe('yoinkios://pastefromclipboard?title=My%20Title&createStack=0')
  })

  test('pasteFromClipboard should omit optional values', () => {
    const url = yoinkIos.pasteFromClipboard()

    expect(url).toBe('yoinkios://pastefromclipboard')
  })

  test('copyToClipboard should return a copy URL', () => {
    const url = yoinkIos.copyToClipboard({
      index: 0,
    })

    expect(url).toBe('yoinkios://copytoclipboard?index=0')
  })

  test('showDownloadUi should return a URL without callback parameters', () => {
    const url = yoinkIos.showDownloadUi()

    expect(url).toBe('yoinkios://showdownloadui')
  })

  test('downloadUrl should return a download URL', () => {
    const url = yoinkIos.downloadUrl({
      url: 'https://eternalstorms.at/yoink/Yoink.zip',
    })

    expect(url).toBe('yoinkios://downloadurl?url=https%3A%2F%2Feternalstorms.at%2Fyoink%2FYoink.zip')
  })

  test('addString should return a string save URL', () => {
    const url = yoinkIos.addString({
      string: 'Yoink is available on\u0002iOS and macOS',
      title: 'Yoink Availability',
    })

    expect(url).toBe(
      'yoinkios://addstring?string=Yoink%20is%20available%20on%02iOS%20and%20macOS&title=Yoink%20Availability',
    )
  })

  test('documented callback parameters should be included where Yoink can call back', () => {
    const url = yoinkIos.downloadUrl({
      url: 'https://example.com/file.zip',
      xSuccess: 'shortcuts://success',
      xError: 'shortcuts://error',
    })

    expect(url).toBe(
      'yoinkios://downloadurl?url=https%3A%2F%2Fexample.com%2Ffile.zip&x-success=shortcuts%3A%2F%2Fsuccess&x-error=shortcuts%3A%2F%2Ferror',
    )
  })
})
