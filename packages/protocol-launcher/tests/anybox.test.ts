import { describe, expect, test } from 'vitest'
import { anybox } from '../src'

describe('anybox', () => {
  test('show should return a URL', async () => {
    const url = anybox.show()

    expect(url).toBe('anybox://show')
  })

  test('paste should return a URL without parameters', async () => {
    const url = anybox.paste()

    expect(url).toBe('anybox://paste')
  })

  test('paste should return a URL with tag and starred parameters', async () => {
    const url = anybox.paste({
      tag: 'Reading List',
      starred: 'yes',
    })

    expect(url).toBe('anybox://paste?tag=Reading%20List&starred=yes')
  })

  test('paste should return a URL with multiple tags', async () => {
    const url = anybox.paste({
      tags: '5101B23C-8F64-4335-951C-FD2067B8909E,Reading',
      starred: 'yes',
    })

    expect(url).toBe('anybox://paste?tags=5101B23C-8F64-4335-951C-FD2067B8909E,Reading&starred=yes')
  })

  test('save should return a URL with text', async () => {
    const url = anybox.save({
      text: 'helloWorld',
    })

    expect(url).toBe('anybox://save?text=helloWorld')
  })

  test('save should return a URL with documented parameters', async () => {
    const url = anybox.save({
      text: 'https://example.com/article',
      tag: 'Reading',
      starred: 'yes',
      archive: 'webarchive',
    })

    expect(url).toBe(
      'anybox://save?text=https%3A%2F%2Fexample.com%2Farticle&tag=Reading&starred=yes&archive=webarchive',
    )
  })

  test('save should return the official multiple tags example URL', async () => {
    const url = anybox.save({
      tags: '5101B23C-8F64-4335-951C-FD2067B8909E,Reading',
      starred: 'yes',
    })

    expect(url).toBe('anybox://save?tags=5101B23C-8F64-4335-951C-FD2067B8909E,Reading&starred=yes')
  })

  test('download should return a URL with url and tag', async () => {
    const url = anybox.download({
      url: 'https://example.com/file.pdf',
      tag: 'Reading',
    })

    expect(url).toBe('anybox://download?url=https%3A%2F%2Fexample.com%2Ffile.pdf&tag=Reading')
  })

  test('saveTab should return a URL without parameters', async () => {
    const url = anybox.saveTab()

    expect(url).toBe('anybox://save-tab')
  })

  test('saveTab should return a URL with documented parameters', async () => {
    const url = anybox.saveTab({
      tag: 'Reading',
      starred: 'yes',
      archive: 'pdf',
    })

    expect(url).toBe('anybox://save-tab?tag=Reading&starred=yes&archive=pdf')
  })

  test('openLinkFromPasteboard should return a URL', async () => {
    const url = anybox.openLinkFromPasteboard()

    expect(url).toBe('anybox://open-link-from-pasteboard')
  })

  test('copyPasteboardLinkAsMarkdown should return a URL', async () => {
    const url = anybox.copyPasteboardLinkAsMarkdown()

    expect(url).toBe('anybox://copy-pasteboard-link-as-markdown')
  })

  test('quickFind should return a URL without parameters', async () => {
    const url = anybox.quickFind()

    expect(url).toBe('anybox://quick-find')
  })

  test('quickFind should return a URL with tags', async () => {
    const url = anybox.quickFind({
      tags: 'identifier1,identifier2',
    })

    expect(url).toBe('anybox://quick-find?tags=identifier1,identifier2')
  })

  test('quickFind should return a URL with filter', async () => {
    const url = anybox.quickFind({
      filter: 'identifier',
    })

    expect(url).toBe('anybox://quick-find?filter=identifier')
  })

  test('quickFind should return a URL with search keywords', async () => {
    const url = anybox.quickFind({
      q: 'search query',
    })

    expect(url).toBe('anybox://quick-find?q=search%20query')
  })

  test('quickSave should return a URL', async () => {
    const url = anybox.quickSave()

    expect(url).toBe('anybox://quick-save')
  })

  test('stashBox should return a URL', async () => {
    const url = anybox.stashBox()

    expect(url).toBe('anybox://stash-box')
  })

  test('toggleAnydock should return a URL', async () => {
    const url = anybox.toggleAnydock()

    expect(url).toBe('anybox://toggle-anydock')
  })

  test('newNote should return a URL', async () => {
    const url = anybox.newNote()

    expect(url).toBe('anybox://new-note')
  })

  test('latestPhoto should return a URL', async () => {
    const url = anybox.latestPhoto()

    expect(url).toBe('anybox://latest-photo')
  })

  test('photos should return a URL', async () => {
    const url = anybox.photos()

    expect(url).toBe('anybox://photos')
  })

  test('xCallbackSave should return a URL with x-success and x-error', async () => {
    const url = anybox.xCallbackSave({
      text: 'helloWorld',
      xSuccess: 'successURL',
      xError: 'errorURL',
    })

    expect(url).toBe('anybox://x-callback-url/save?text=helloWorld&x-success=successURL&x-error=errorURL')
  })

  test('xCallbackSave should accept the same parameters as save', async () => {
    const url = anybox.xCallbackSave({
      text: 'https://example.com/article',
      tag: 'Reading',
      starred: 'yes',
      archive: 'image',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })

    expect(url).toBe(
      'anybox://x-callback-url/save?text=https%3A%2F%2Fexample.com%2Farticle&tag=Reading&starred=yes&archive=image&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror',
    )
  })

  test('xCallbackPaste should return a URL with x-success and x-error', async () => {
    const url = anybox.xCallbackPaste({
      xSuccess: 'successURL',
      xError: 'errorURL',
    })

    expect(url).toBe('anybox://x-callback-url/paste?x-success=successURL&x-error=errorURL')
  })

  test('xCallbackPaste should accept the same parameters as paste', async () => {
    const url = anybox.xCallbackPaste({
      tag: 'Reading',
      starred: 'yes',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })

    expect(url).toBe(
      'anybox://x-callback-url/paste?tag=Reading&starred=yes&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror',
    )
  })
})
