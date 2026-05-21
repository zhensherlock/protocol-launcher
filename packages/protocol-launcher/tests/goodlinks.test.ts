import { describe, expect, test } from 'vitest'
import { goodlinks } from '../src'

describe('goodlinks', () => {
  test('save should return a URL with official example parameters', async () => {
    const url = goodlinks.save({
      url: 'https://apple.com',
      starred: '1',
      tags: 'apple ios',
    })

    expect(url).toBe('goodlinks://x-callback-url/save?url=https%3A%2F%2Fapple.com&starred=1&tags=apple%20ios')
  })

  test('save should return a URL with quick save parameter', async () => {
    const url = goodlinks.save({
      quick: '1',
    })

    expect(url).toBe('goodlinks://x-callback-url/save?quick=1')
  })

  test('save should return a URL with all documented action parameters', async () => {
    const url = goodlinks.save({
      url: 'https://example.com/article',
      title: 'Example Article',
      summary: 'A short summary',
      tags: 'reading research',
      starred: 'true',
      read: 'true',
      quick: 'true',
    })

    expect(url).toBe(
      'goodlinks://x-callback-url/save?url=https%3A%2F%2Fexample.com%2Farticle&title=Example%20Article&summary=A%20short%20summary&starred=true&tags=reading%20research&read=true&quick=true',
    )
  })

  test('open should return a URL with required url', async () => {
    const url = goodlinks.open({
      url: 'https://example.com/article',
    })

    expect(url).toBe('goodlinks://x-callback-url/open?url=https%3A%2F%2Fexample.com%2Farticle')
  })

  test('pick should return a URL without parameters', async () => {
    const url = goodlinks.pick()

    expect(url).toBe('goodlinks://x-callback-url/pick')
  })

  test('pick should return a URL with documented return parameter names', async () => {
    const url = goodlinks.pick({
      urlParam: 'link',
      titleParam: 'name',
      summaryParam: 'description',
    })

    expect(url).toBe('goodlinks://x-callback-url/pick?url-param=link&title-param=name&summary-param=description')
  })

  test('last should return a URL', async () => {
    const url = goodlinks.last()

    expect(url).toBe('goodlinks://x-callback-url/last')
  })

  test('random should return a URL', async () => {
    const url = goodlinks.random()

    expect(url).toBe('goodlinks://x-callback-url/random')
  })

  test('unread should return a URL', async () => {
    const url = goodlinks.unread()

    expect(url).toBe('goodlinks://x-callback-url/unread')
  })

  test('starred should return a URL', async () => {
    const url = goodlinks.starred()

    expect(url).toBe('goodlinks://x-callback-url/starred')
  })

  test('untagged should return a URL', async () => {
    const url = goodlinks.untagged()

    expect(url).toBe('goodlinks://x-callback-url/untagged')
  })

  test('read should return a URL', async () => {
    const url = goodlinks.read()

    expect(url).toBe('goodlinks://x-callback-url/read')
  })

  test('tag should return a URL with required name', async () => {
    const url = goodlinks.tag({
      name: 'apple',
    })

    expect(url).toBe('goodlinks://x-callback-url/tag?name=apple')
  })

  test('actions should support all documented x-callback parameters', async () => {
    const url = goodlinks.tag({
      name: 'apple',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
      xCancel: 'myapp://cancel',
    })

    expect(url).toBe(
      'goodlinks://x-callback-url/tag?name=apple&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel',
    )
  })
})
