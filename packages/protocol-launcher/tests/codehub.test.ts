import { describe, expect, test } from 'vitest'
import { codehub } from '../src'

describe('codehub', () => {
  test('open should return a URL', async () => {
    const url = codehub.open()
    expect(url).toBe('codehub://')
  })

  test('createGist should return a URL without parameters', async () => {
    const url = codehub.createGist()
    expect(url).toBe('codehub://x-callback-url/gist/create')
  })

  test('createGist should return a URL with empty payload', async () => {
    const url = codehub.createGist({})
    expect(url).toBe('codehub://x-callback-url/gist/create')
  })

  test('createGist should return a URL with description', async () => {
    const url = codehub.createGist({
      description: 'Hello',
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?description=Hello')
  })

  test('createGist should return a URL with public', async () => {
    const url = codehub.createGist({
      public: true,
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?public=true')
  })

  test('createGist should return a URL with public false (default)', async () => {
    const url = codehub.createGist({
      public: false,
    })
    expect(url).toBe('codehub://x-callback-url/gist/create')
  })

  test('createGist should return a URL with one file', async () => {
    const url = codehub.createGist({
      files: {
        file1: 'This is file one',
      },
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?file1=This%20is%20file%20one')
  })

  test('createGist should return a URL with multiple files', async () => {
    const url = codehub.createGist({
      files: {
        file1: 'This is file one',
        file2: 'CodeHub Rocks',
      },
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?file1=This%20is%20file%20one&file2=CodeHub%20Rocks')
  })

  test('createGist should return a URL with description and public', async () => {
    const url = codehub.createGist({
      description: 'Hello',
      public: true,
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?description=Hello&public=true')
  })

  test('createGist should return a URL with description and files', async () => {
    const url = codehub.createGist({
      description: 'Hello',
      files: {
        file1: 'This is file one',
        file2: 'CodeHub Rocks',
      },
    })
    expect(url).toBe(
      'codehub://x-callback-url/gist/create?description=Hello&file1=This%20is%20file%20one&file2=CodeHub%20Rocks',
    )
  })

  test('createGist should return a URL with all parameters', async () => {
    const url = codehub.createGist({
      description: 'Hello',
      public: true,
      files: {
        file1: 'This is file one',
        file2: 'CodeHub Rocks',
      },
    })
    expect(url).toBe(
      'codehub://x-callback-url/gist/create?description=Hello&public=true&file1=This%20is%20file%20one&file2=CodeHub%20Rocks',
    )
  })

  test('createGist should handle special characters in description', async () => {
    const url = codehub.createGist({
      description: 'Hello & World <test>',
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?description=Hello%20%26%20World%20%3Ctest%3E')
  })

  test('createGist should handle special characters in files', async () => {
    const url = codehub.createGist({
      files: {
        file1: 'console.log("Hello & World")',
      },
    })
    expect(url).toBe('codehub://x-callback-url/gist/create?file1=console.log(%22Hello%20%26%20World%22)')
  })
})
