import { describe, expect, test } from 'vitest'
import { craft } from '../src'

describe('craft', () => {
  test('open should return a URL', async () => {
    const url = craft.open()
    expect(url).toBe('craftdocs://')
  })

  test('openDocument should return a URL with spaceId and blockId', async () => {
    const url = craft.openDocument({
      spaceId: 'abc-123',
      blockId: 'xyz-789',
    })
    expect(url).toBe('craftdocs://open?spaceId=abc-123&blockId=xyz-789')
  })

  test('openDocument should return a URL with complex ids', async () => {
    const url = craft.openDocument({
      spaceId: '550e8400-e29b-41d4-a716-446655440000',
      blockId: 'block-abc123',
    })
    expect(url).toBe('craftdocs://open?spaceId=550e8400-e29b-41d4-a716-446655440000&blockId=block-abc123')
  })

  test('openSpace should return a URL with spaceId only', async () => {
    const url = craft.openSpace({
      spaceId: 'abc-123',
    })
    expect(url).toBe('craftdocs://openspace?spaceId=abc-123')
  })

  test('openSpace should return a URL with spaceId and tab calendar', async () => {
    const url = craft.openSpace({
      spaceId: 'abc-123',
      tab: 'calendar',
    })
    expect(url).toBe('craftdocs://openspace?spaceId=abc-123&tab=calendar')
  })

  test('openSpace should return a URL with spaceId and tab search', async () => {
    const url = craft.openSpace({
      spaceId: 'abc-123',
      tab: 'search',
    })
    expect(url).toBe('craftdocs://openspace?spaceId=abc-123&tab=search')
  })

  test('openSpace should return a URL with spaceId and tab documents', async () => {
    const url = craft.openSpace({
      spaceId: 'abc-123',
      tab: 'documents',
    })
    expect(url).toBe('craftdocs://openspace?spaceId=abc-123&tab=documents')
  })

  test('createNewDocument should return a URL', async () => {
    const url = craft.createNewDocument()
    expect(url).toBe('craftdocs://createnewdocument')
  })

  test('createDocument should return a URL with all required parameters', async () => {
    const url = craft.createDocument({
      spaceId: 'abc-123',
      title: 'My Note',
      content: 'Hello **World**',
      folderId: '',
    })
    expect(url).toBe('craftdocs://createdocument?spaceId=abc-123&title=My%20Note&content=Hello%20**World**&folderId=')
  })

  test('createDocument should return a URL with folderId', async () => {
    const url = craft.createDocument({
      spaceId: 'abc-123',
      title: 'Test Document',
      content: 'Some content here',
      folderId: 'folder-456',
    })
    expect(url).toBe(
      'craftdocs://createdocument?spaceId=abc-123&title=Test%20Document&content=Some%20content%20here&folderId=folder-456',
    )
  })

  test('createDocument should handle markdown content', async () => {
    const url = craft.createDocument({
      spaceId: 'space-1',
      title: 'Markdown Test',
      content: '# Heading\n\n- List item 1\n- List item 2',
      folderId: '',
    })
    expect(url).toBe(
      'craftdocs://createdocument?spaceId=space-1&title=Markdown%20Test&content=%23%20Heading%0A%0A-%20List%20item%201%0A-%20List%20item%202&folderId=',
    )
  })

  test('createBlock should return a URL with append (large index)', async () => {
    const url = craft.createBlock({
      parentBlockId: 'doc-123',
      spaceId: 'abc-123',
      content: 'New content',
      index: 9999,
    })
    expect(url).toBe('craftdocs://createblock?parentBlockId=doc-123&spaceId=abc-123&content=New%20content&index=9999')
  })

  test('createBlock should return a URL with prepend (index 0)', async () => {
    const url = craft.createBlock({
      parentBlockId: 'doc-123',
      spaceId: 'abc-123',
      content: 'Prepended content',
      index: 0,
    })
    expect(url).toBe(
      'craftdocs://createblock?parentBlockId=doc-123&spaceId=abc-123&content=Prepended%20content&index=0',
    )
  })

  test('createBlock should handle markdown content', async () => {
    const url = craft.createBlock({
      parentBlockId: 'doc-456',
      spaceId: 'space-1',
      content: '## Subheading\n\nMore text',
      index: 100,
    })
    expect(url).toBe(
      'craftdocs://createblock?parentBlockId=doc-456&spaceId=space-1&content=%23%23%20Subheading%0A%0AMore%20text&index=100',
    )
  })

  test('openSearch should return a URL with spaceId and query', async () => {
    const url = craft.openSearch({
      spaceId: 'abc-123',
      query: 'vacation plans',
    })
    expect(url).toBe('craftdocs://opensearch?spaceId=abc-123&query=vacation%20plans')
  })

  test('openSearch should handle special characters in query', async () => {
    const url = craft.openSearch({
      spaceId: 'space-1',
      query: 'test & demo',
    })
    expect(url).toBe('craftdocs://opensearch?spaceId=space-1&query=test%20%26%20demo')
  })

  test('openSearch should handle multi-word query', async () => {
    const url = craft.openSearch({
      spaceId: 'workspace-abc',
      query: 'project meeting notes',
    })
    expect(url).toBe('craftdocs://opensearch?spaceId=workspace-abc&query=project%20meeting%20notes')
  })

  test('openDailyNote should return a URL with today (default)', async () => {
    const url = craft.openDailyNote({
      spaceId: 'abc-123',
    })
    expect(url).toBe('craftdocs://openByQuery?query=today&spaceId=abc-123')
  })

  test('openDailyNote should return a URL with type today', async () => {
    const url = craft.openDailyNote({
      spaceId: 'abc-123',
      type: 'today',
    })
    expect(url).toBe('craftdocs://openByQuery?query=today&spaceId=abc-123')
  })

  test('openDailyNote should return a URL with type yesterday', async () => {
    const url = craft.openDailyNote({
      spaceId: 'abc-123',
      type: 'yesterday',
    })
    expect(url).toBe('craftdocs://openByQuery?query=yesterday&spaceId=abc-123')
  })

  test('openDailyNote should return a URL with type tomorrow', async () => {
    const url = craft.openDailyNote({
      spaceId: 'abc-123',
      type: 'tomorrow',
    })
    expect(url).toBe('craftdocs://openByQuery?query=tomorrow&spaceId=abc-123')
  })

  test('openDailyNote should handle complex spaceId', async () => {
    const url = craft.openDailyNote({
      spaceId: '550e8400-e29b-41d4-a716-446655440000',
      type: 'today',
    })
    expect(url).toBe('craftdocs://openByQuery?query=today&spaceId=550e8400-e29b-41d4-a716-446655440000')
  })
})
