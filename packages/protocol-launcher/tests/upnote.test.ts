import { describe, expect, test } from 'vitest'
import { upnote } from '../src'

describe('upnote', () => {
  test('openNote should return the official openNote URL', () => {
    const url = upnote.openNote({
      noteId: 'note-123',
      newWindow: false,
    })

    expect(url).toBe('upnote://x-callback-url/openNote?noteId=note-123&new_window=false')
  })

  test('newNote should return the official note/new URL with all documented parameters', () => {
    const url = upnote.newNote({
      title: 'Daily Plan',
      text: '# Today',
      notebook: 'Work',
      newWindow: true,
      markdown: true,
    })

    expect(url).toBe(
      'upnote://x-callback-url/note/new?title=Daily%20Plan&text=%23%20Today&notebook=Work&new_window=true&markdown=true',
    )
  })

  test('openNotebook should return the official openNotebook URL', () => {
    const url = upnote.openNotebook({
      notebookId: 'notebook-123',
    })

    expect(url).toBe('upnote://x-callback-url/openNotebook?notebookId=notebook-123')
  })

  test('newNotebook should return the official notebook/new URL', () => {
    const url = upnote.newNotebook({
      title: 'Project Notes',
    })

    expect(url).toBe('upnote://x-callback-url/notebook/new?title=Project%20Notes')
  })

  test('viewTag should return the official tag/view URL', () => {
    const url = upnote.viewTag({
      tag: 'project notes',
    })

    expect(url).toBe('upnote://x-callback-url/tag/view?tag=project%20notes')
  })

  test('openFilter should return the official openFilter URL', () => {
    const url = upnote.openFilter({
      filterId: 'filter-123',
    })

    expect(url).toBe('upnote://x-callback-url/openFilter?filterId=filter-123')
  })

  test('view should return a notebook view URL with documented query parameter order', () => {
    const url = upnote.view({
      mode: 'notebooks',
      notebookId: 'notebook-123',
      spaceId: 'default',
    })

    expect(url).toBe('upnote://x-callback-url/view?mode=notebooks&notebookId=notebook-123&spaceId=default')
  })

  test('view should return a search action URL', () => {
    const url = upnote.view({
      mode: 'all_notes',
      action: 'search',
      query: 'meeting notes',
    })

    expect(url).toBe('upnote://x-callback-url/view?mode=all_notes&action=search&query=meeting%20notes')
  })

  test('view should match the official base URL when query parameters are omitted', () => {
    const url = upnote.view()

    expect(url).toBe('upnote://x-callback-url/view?')
  })
})
