import { describe, expect, test } from 'vitest'
import { oneWriter } from '../src'

describe('oneWriter', () => {
  test('create should return a URL with path, name and text', async () => {
    const url = oneWriter.create({
      path: 'Dropbox/Documents',
      name: 'Notes.txt',
      text: 'Hello world',
    })
    expect(url).toBe('onewriter://x-callback-url/create?path=Dropbox%2FDocuments&name=Notes.txt&text=Hello%20world')
  })

  test('create should return a URL with path only', async () => {
    const url = oneWriter.create({
      path: 'iCloud/Work',
    })
    expect(url).toBe('onewriter://x-callback-url/create?path=iCloud%2FWork')
  })

  test('create should return a URL without parameters', async () => {
    const url = oneWriter.create({})
    expect(url).toBe('onewriter://x-callback-url/create')
  })

  test('replace should return a URL with path and text', async () => {
    const url = oneWriter.replace({
      path: 'Dropbox/Documents/Notes.txt',
      text: 'Hello world',
    })
    expect(url).toBe('onewriter://x-callback-url/replace?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world')
  })

  test('replace should return a URL with path only', async () => {
    const url = oneWriter.replace({
      path: 'iCloud/Work/Actions.txt',
    })
    expect(url).toBe('onewriter://x-callback-url/replace?path=iCloud%2FWork%2FActions.txt')
  })

  test('replace should return a URL without parameters', async () => {
    const url = oneWriter.replace({})
    expect(url).toBe('onewriter://x-callback-url/replace')
  })

  test('replaceSelection should return a URL with text', async () => {
    const url = oneWriter.replaceSelection({
      text: 'New text',
    })
    expect(url).toBe('onewriter://x-callback-url/replace-selection?text=New%20text')
  })

  test('content should return a URL with path', async () => {
    const url = oneWriter.content({
      path: 'Dropbox/Documents/Notes.txt',
    })
    expect(url).toBe('onewriter://x-callback-url/content?path=Dropbox%2FDocuments%2FNotes.txt')
  })

  test('content should return a URL with path and param', async () => {
    const url = oneWriter.content({
      path: 'Notes.txt',
      param: 'content',
    })
    expect(url).toBe('onewriter://x-callback-url/content?path=Notes.txt&param=content')
  })

  test('content should return a URL without parameters', async () => {
    const url = oneWriter.content({})
    expect(url).toBe('onewriter://x-callback-url/content')
  })

  test('open should return a URL with path', async () => {
    const url = oneWriter.open({
      path: 'Dropbox/Documents/Notes.txt',
    })
    expect(url).toBe('onewriter://x-callback-url/open?path=Dropbox%2FDocuments%2FNotes.txt')
  })

  test('open should return a URL without parameters', async () => {
    const url = oneWriter.open({})
    expect(url).toBe('onewriter://x-callback-url/open')
  })

  test('append should return a URL with path and text', async () => {
    const url = oneWriter.append({
      path: 'Dropbox/Documents/Notes.txt',
      text: 'Hello world',
    })
    expect(url).toBe('onewriter://x-callback-url/append?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world')
  })

  test('append should return a URL with path only', async () => {
    const url = oneWriter.append({
      path: 'Notes.txt',
    })
    expect(url).toBe('onewriter://x-callback-url/append?path=Notes.txt')
  })

  test('append should return a URL without parameters', async () => {
    const url = oneWriter.append({})
    expect(url).toBe('onewriter://x-callback-url/append')
  })

  test('prepend should return a URL with path and text', async () => {
    const url = oneWriter.prepend({
      path: 'Dropbox/Documents/Notes.txt',
      text: 'Hello world',
    })
    expect(url).toBe('onewriter://x-callback-url/prepend?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world')
  })

  test('prepend should return a URL with path only', async () => {
    const url = oneWriter.prepend({
      path: 'Notes.txt',
    })
    expect(url).toBe('onewriter://x-callback-url/prepend?path=Notes.txt')
  })

  test('prepend should return a URL without parameters', async () => {
    const url = oneWriter.prepend({})
    expect(url).toBe('onewriter://x-callback-url/prepend')
  })
})
