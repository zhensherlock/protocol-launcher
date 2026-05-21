import { describe, expect, test } from 'vitest'
import { iaWriter } from '../src'

describe('iaWriter', () => {
  test('open should return a URL with path', async () => {
    const url = iaWriter.open({
      path: '/Drafts/Notes.txt',
    })
    expect(url).toBe('ia-writer://open?path=%2FDrafts%2FNotes.txt')
  })

  test('open should return a URL with edit and new-window', async () => {
    const url = iaWriter.open({
      path: '/Drafts/Notes.txt',
      edit: true,
      newWindow: true,
    })
    expect(url).toBe('ia-writer://open?path=%2FDrafts%2FNotes.txt&edit=true&new-window=true')
  })

  test('open should return an x-callback-url when x-success is provided', async () => {
    const url = iaWriter.open({
      path: '/Drafts/Notes.txt',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('ia-writer://x-callback-url/open?path=%2FDrafts%2FNotes.txt&x-success=myapp%3A%2F%2Fcallback')
  })

  test('newFile should return a URL without parameters', async () => {
    const url = iaWriter.newFile()
    expect(url).toBe('ia-writer://new')
  })

  test('newFile should return a URL with text and author', async () => {
    const url = iaWriter.newFile({
      path: '/Drafts/Notes.txt',
      text: 'Hello world',
      author: 'AI',
    })
    expect(url).toBe('ia-writer://new?path=%2FDrafts%2FNotes.txt&text=Hello%20world&author=AI')
  })

  test('quickSearch should return a URL with query', async () => {
    const url = iaWriter.quickSearch({
      query: 'meeting notes',
    })
    expect(url).toBe('ia-writer://quick-search?query=meeting%20notes')
  })

  test('quickSearch should return a URL without parameters', async () => {
    const url = iaWriter.quickSearch()
    expect(url).toBe('ia-writer://quick-search')
  })

  test('read should return a URL with auth-token and path', async () => {
    const url = iaWriter.read({
      authToken: 'TOKEN',
      path: '/Drafts/Notes.txt',
    })
    expect(url).toBe('ia-writer://read?auth-token=TOKEN&path=%2FDrafts%2FNotes.txt')
  })

  test('read should return an x-callback-url when x-success is provided', async () => {
    const url = iaWriter.read({
      authToken: 'TOKEN',
      path: '/Drafts/Notes.txt',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe(
      'ia-writer://x-callback-url/read?auth-token=TOKEN&path=%2FDrafts%2FNotes.txt&x-success=myapp%3A%2F%2Fcallback',
    )
  })

  test('write should return a URL with required parameters', async () => {
    const url = iaWriter.write({
      authToken: 'TOKEN',
      path: '/Drafts/Notes.txt',
    })
    expect(url).toBe('ia-writer://write?auth-token=TOKEN&path=%2FDrafts%2FNotes.txt')
  })

  test('write should return a URL with all documented parameters', async () => {
    const url = iaWriter.write({
      authToken: 'TOKEN',
      path: '/Drafts/Notes.txt',
      text: 'Hello world',
      mode: 'add',
      addLocation: 'beginning',
      addPadding: 'sentence',
      author: 'ChatGPT <chat.openai.com>',
    })
    expect(url).toBe(
      'ia-writer://write?auth-token=TOKEN&path=%2FDrafts%2FNotes.txt&text=Hello%20world&mode=add&add-location=beginning&add-padding=sentence&author=ChatGPT%20%3Cchat.openai.com%3E',
    )
  })

  test('write should return an x-callback-url when x-success is provided', async () => {
    const url = iaWriter.write({
      authToken: 'TOKEN',
      path: '/Drafts/Notes.txt',
      text: 'Hello world',
      mode: 'replace',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe(
      'ia-writer://x-callback-url/write?auth-token=TOKEN&path=%2FDrafts%2FNotes.txt&text=Hello%20world&mode=replace&x-success=myapp%3A%2F%2Fcallback',
    )
  })

  test('version should return a URL without parameters', async () => {
    const url = iaWriter.version()
    expect(url).toBe('ia-writer://version')
  })

  test('version should return an x-callback-url when x-success is provided', async () => {
    const url = iaWriter.version({
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('ia-writer://x-callback-url/version?x-success=myapp%3A%2F%2Fcallback')
  })
})
