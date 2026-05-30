import { describe, expect, test } from 'vitest'
import { notebooks } from '../src'

describe('notebooks', () => {
  test('openDocument should return the official show document URL', () => {
    const url = notebooks.openDocument({
      path: 'escaped path to document',
    })

    expect(url).toBe('notebooks://show/escaped%20path%20to%20document')
  })

  test('openInternalLink should return the direct internal document URL', () => {
    const url = notebooks.openInternalLink({
      path: 'escaped path to document',
    })

    expect(url).toBe('notebooks://escaped%20path%20to%20document')
  })

  test('addNote should return an addnote URL with optional title and parent', () => {
    const url = notebooks.addNote({
      text: 'note body',
      title: 'Title is optional',
      parent: 'path to parent',
    })

    expect(url).toBe('notebooks://addnote/note%20body&title=Title%20is%20optional&parent=path%20to%20parent')
  })

  test('addNote should return an addnote URL with optional title only', () => {
    const url = notebooks.addNote({
      text: 'note body',
      title: 'title for document',
    })

    expect(url).toBe('notebooks://addnote/note%20body&title=title%20for%20document')
  })

  test('addNote should omit optional addnote values', () => {
    const url = notebooks.addNote({
      text: 'note body',
    })

    expect(url).toBe('notebooks://addnote/note%20body')
  })

  test('search should return a search URL with an optional scope', () => {
    const url = notebooks.search({
      term: 'term to search for',
      scope: 'book/to/search',
    })

    expect(url).toBe('notebooks://search/term%20to%20search%20for&scope=book/to/search')
  })

  test('search should omit scope when it is not provided', () => {
    const url = notebooks.search({
      term: 'term to search for',
    })

    expect(url).toBe('notebooks://search/term%20to%20search%20for')
  })

  test('newDocument should return the addNewDoc URL with and without parent', () => {
    expect(notebooks.newDocument()).toBe('notebooks://addNewDoc')
    expect(notebooks.newDocument({ parent: 'path to parent' })).toBe('notebooks://addNewDoc&parent=path%20to%20parent')
  })

  test('newTask should return the addNewTask URL with and without parent', () => {
    expect(notebooks.newTask()).toBe('notebooks://addNewTask')
    expect(notebooks.newTask({ parent: 'path to parent' })).toBe('notebooks://addNewTask&parent=path%20to%20parent')
  })

  test('newSketch should return the addNewSketch URL with and without parent', () => {
    expect(notebooks.newSketch()).toBe('notebooks://addNewSketch')
    expect(notebooks.newSketch({ parent: 'path to parent' })).toBe('notebooks://addNewSketch&parent=path%20to%20parent')
  })

  test('append should return the official append URL', () => {
    const url = notebooks.append({
      text: 'text to add',
      doc: 'path to document.txt',
    })

    expect(url).toBe('notebooks://append/text%20to%20add&doc=path%20to%20document.txt')
  })

  test('grab should return an import URL with optional title', () => {
    const url = notebooks.grab({
      url: 'URL',
      title: 'Title of document',
    })

    expect(url).toBe('notebooks://grab/URL&title=Title%20of%20document')
  })

  test('grab should return an import URL with optional title and parent', () => {
    const url = notebooks.grab({
      url: 'URL',
      title: 'Title of document',
      parent: 'Path to target book',
    })

    expect(url).toBe('notebooks://grab/URL&title=Title%20of%20document&parent=Path%20to%20target%20book')
  })

  test('grab should omit optional title and parent', () => {
    const url = notebooks.grab({
      url: 'URL',
    })

    expect(url).toBe('notebooks://grab/URL')
  })

  test('wifiSharing should return the top-level or scoped sharing URL', () => {
    expect(notebooks.wifiSharing()).toBe('notebooks://wifi_sharing')
    expect(notebooks.wifiSharing({ path: 'Path To Book To Share' })).toBe(
      'notebooks://wifi_sharing/Path%20To%20Book%20To%20Share',
    )
  })

  test('webdavSync should return the top-level or scoped sync URL', () => {
    expect(notebooks.webdavSync()).toBe('notebooks://webdav_sync')
    expect(notebooks.webdavSync({ path: 'Path To Book To Sync' })).toBe(
      'notebooks://webdav_sync/Path%20To%20Book%20To%20Sync',
    )
  })
})
