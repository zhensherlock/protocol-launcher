import { describe, expect, test } from 'vitest'
import { instapaper } from '../src'

describe('instapaper', () => {
  test('add should return a URL with required url parameter', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
    })
    expect(url).toBe('x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle')
  })

  test('add should return a URL with url and x-source', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
      xSource: 'MyReader',
    })
    expect(url).toBe(
      'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-source=MyReader',
    )
  })

  test('add should return a URL with url, x-source and x-success', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
      xSource: 'MyReader',
      xSuccess: 'myapp://success',
    })
    expect(url).toBe(
      'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-source=MyReader&x-success=myapp%3A%2F%2Fsuccess',
    )
  })

  test('add should return a URL with all parameters', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
      xSource: 'MyReader',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
    })
    expect(url).toBe(
      'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-source=MyReader&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror',
    )
  })

  test('add should return a URL with url and x-success only', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe(
      'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-success=myapp%3A%2F%2Fcallback',
    )
  })

  test('add should return a URL with url and x-error only', async () => {
    const url = instapaper.add({
      url: 'https://example.com/article',
      xError: 'myapp://error',
    })
    expect(url).toBe(
      'x-callback-instapaper://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Farticle&x-error=myapp%3A%2F%2Ferror',
    )
  })
})
