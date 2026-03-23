import { describe, expect, test } from 'vitest'
import { sketch } from '../src'

describe('sketch', () => {
  test('open should return a URL', async () => {
    const url = sketch.open()
    expect(url).toBe('sketch://')
  })

  test('openFile should return a URL with path', async () => {
    const url = sketch.openFile({
      path: '/Users/name/Documents/design.sketch',
    })
    expect(url).toBe('sketch:///Users/name/Documents/design.sketch')
  })

  test('openFile should return a URL with centerOnLayer', async () => {
    const url = sketch.openFile({
      path: '/Users/name/Documents/design.sketch',
      centerOnLayer: 'layer-123',
    })
    expect(url).toBe('sketch:///Users/name/Documents/design.sketch?centerOnLayer=layer-123')
  })

  test('openFile should return a URL with zoom', async () => {
    const url = sketch.openFile({
      path: '/Users/name/Documents/design.sketch',
      zoom: 2,
    })
    expect(url).toBe('sketch:///Users/name/Documents/design.sketch?zoom=2')
  })

  test('openFile should return a URL with centerOnLayer and zoom', async () => {
    const url = sketch.openFile({
      path: '/Users/name/Documents/design.sketch',
      centerOnLayer: 'layer-123',
      zoom: 2,
    })
    expect(url).toBe('sketch:///Users/name/Documents/design.sketch?centerOnLayer=layer-123&zoom=2')
  })

  test('runPlugin should return a URL without query', async () => {
    const url = sketch.runPlugin({
      pluginId: 'com.example.sketch.messenger',
      commandId: 'message.show',
    })
    expect(url).toBe('sketch://plugin/com.example.sketch.messenger/message.show')
  })

  test('runPlugin should return a URL with query', async () => {
    const url = sketch.runPlugin({
      pluginId: 'com.example.sketch.messenger',
      commandId: 'message.show',
      query: { msg: 'Hello World' },
    })
    expect(url).toBe('sketch://plugin/com.example.sketch.messenger/message.show?msg=Hello%20World')
  })

  test('addLibrary should return a URL', async () => {
    const url = sketch.addLibrary({
      url: 'https://developer.apple.com/design/downloads/sketch.rss',
    })
    expect(url).toBe('sketch://add-library?url=https%3A%2F%2Fdeveloper.apple.com%2Fdesign%2Fdownloads%2Fsketch.rss')
  })
})
