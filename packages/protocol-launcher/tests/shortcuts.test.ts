import { describe, expect, test } from 'vitest'
import { shortcuts } from '../src'
import { importWorkflow } from '../src/shortcuts/importWorkflow'

describe('shortcuts', () => {
  describe('open', () => {
    test('should return the base URL', () => {
      const url = shortcuts.open()
      expect(url).toBe('shortcuts://')
    })
  })

  describe('openGallery', () => {
    test('should return gallery URL without query', () => {
      const url = shortcuts.openGallery()
      expect(url).toBe('shortcuts://gallery')
    })

    test('should return gallery search URL with query', () => {
      const url = shortcuts.openGallery({ query: 'photos' })
      expect(url).toBe('shortcuts://gallery/search?query=photos')
    })

    test('should encode query parameter', () => {
      const url = shortcuts.openGallery({ query: 'hello world' })
      expect(url).toBe('shortcuts://gallery/search?query=hello%20world')
    })
  })

  describe('create', () => {
    test('should return create shortcut URL', () => {
      const url = shortcuts.create()
      expect(url).toBe('shortcuts://create-shortcut')
    })
  })

  describe('openShortcut', () => {
    test('should return open shortcut URL with name', () => {
      const url = shortcuts.openShortcut({ name: 'Kaleidoscope Compare' })
      expect(url).toBe('shortcuts://open-shortcut?name=Kaleidoscope%20Compare')
    })

    test('should encode name parameter', () => {
      const url = shortcuts.openShortcut({ name: '测试快捷指令' })
      expect(url).toBe('shortcuts://open-shortcut?name=%E6%B5%8B%E8%AF%95%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4')
    })
  })

  describe('importWorkflow', () => {
    test('should return import workflow URL with url only', () => {
      const url = importWorkflow({
        url: 'https://sharecuts.app/download/AFD6417C-FE65-4A21-B363-ADCCE53617F3.shortcut',
      })
      expect(url).toBe(
        'shortcuts://import-workflow?url=https%3A%2F%2Fsharecuts.app%2Fdownload%2FAFD6417C-FE65-4A21-B363-ADCCE53617F3.shortcut',
      )
    })

    test('should return import workflow URL with name', () => {
      const url = importWorkflow({
        url: 'https://sharecuts.app/download/AFD6417C.shortcut',
        name: 'Respring',
      })
      expect(url).toBe(
        'shortcuts://import-workflow?url=https%3A%2F%2Fsharecuts.app%2Fdownload%2FAFD6417C.shortcut&name=Respring',
      )
    })
  })

  describe('runShortcut', () => {
    test('should return run shortcut URL with name only', () => {
      const url = shortcuts.runShortcut({ name: 'Kaleidoscope Compare' })
      expect(url).toBe('shortcuts://run-shortcut?name=Kaleidoscope%20Compare')
    })

    test('should return run shortcut URL with text input', () => {
      const url = shortcuts.runShortcut({
        name: '将文本转为音频',
        input: 'text',
        text: '测试将文本转为音频',
      })
      expect(url).toBe(
        'shortcuts://run-shortcut?name=%E5%B0%86%E6%96%87%E6%9C%AC%E8%BD%AC%E4%B8%BA%E9%9F%B3%E9%A2%91&input=text&text=%E6%B5%8B%E8%AF%95%E5%B0%86%E6%96%87%E6%9C%AC%E8%BD%AC%E4%B8%BA%E9%9F%B3%E9%A2%91',
      )
    })

    test('should return run shortcut URL with clipboard input', () => {
      const url = shortcuts.runShortcut({
        name: 'Add to Notes',
        input: 'clipboard',
      })
      expect(url).toBe('shortcuts://run-shortcut?name=Add%20to%20Notes&input=clipboard')
    })
  })

  describe('xCallbackRunShortcut', () => {
    test('should return x-callback-url with name only', () => {
      const url = shortcuts.xCallbackRunShortcut({ name: '计算小费' })
      expect(url).toBe('shortcuts://x-callback-url/run-shortcut?name=%E8%AE%A1%E7%AE%97%E5%B0%8F%E8%B4%B9')
    })

    test('should return x-callback-url with input and text', () => {
      const url = shortcuts.xCallbackRunShortcut({
        name: '计算小费',
        input: 'text',
        text: '24.99',
      })
      expect(url).toBe(
        'shortcuts://x-callback-url/run-shortcut?name=%E8%AE%A1%E7%AE%97%E5%B0%8F%E8%B4%B9&input=text&text=24.99',
      )
    })

    test('should return x-callback-url with x-success', () => {
      const url = shortcuts.xCallbackRunShortcut({
        name: 'Test',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe('shortcuts://x-callback-url/run-shortcut?name=Test&x-success=myapp%3A%2F%2Fsuccess')
    })

    test('should return x-callback-url with all callback URLs', () => {
      const url = shortcuts.xCallbackRunShortcut({
        name: 'Test',
        xSuccess: 'myapp://success',
        xCancel: 'myapp://cancel',
        xError: 'myapp://error',
      })
      expect(url).toBe(
        'shortcuts://x-callback-url/run-shortcut?name=Test&x-success=myapp%3A%2F%2Fsuccess&x-cancel=myapp%3A%2F%2Fcancel&x-error=myapp%3A%2F%2Ferror',
      )
    })
  })
})
