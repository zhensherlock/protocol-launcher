import { describe, expect, test } from 'vitest'
import { cubox } from '../src'

describe('cubox', () => {
  test('open should return a URL', async () => {
    const url = cubox.open()
    expect(url).toBe('cubox://')
  })

  test('openInbox should return a URL', async () => {
    const url = cubox.openInbox()
    expect(url).toBe('cubox://inbox')
  })

  test('openStarred should return a URL', async () => {
    const url = cubox.openStarred()
    expect(url).toBe('cubox://starred')
  })

  test('openFolder should return a URL with name', async () => {
    const url = cubox.openFolder({
      name: 'Reading List',
    })
    expect(url).toBe('cubox://folder?name=Reading%20List')
  })

  test('openFolder should return a URL with chinese name', async () => {
    const url = cubox.openFolder({
      name: '我的收藏',
    })
    expect(url).toBe('cubox://folder?name=%E6%88%91%E7%9A%84%E6%94%B6%E8%97%8F')
  })

  test('openSmartFolder should return a URL with name', async () => {
    const url = cubox.openSmartFolder({
      name: 'Recent Articles',
    })
    expect(url).toBe('cubox://smartfolder?name=Recent%20Articles')
  })

  test('openTag should return a URL with name', async () => {
    const url = cubox.openTag({
      name: 'important',
    })
    expect(url).toBe('cubox://tag?name=important')
  })

  test('openTag should return a URL with chinese name', async () => {
    const url = cubox.openTag({
      name: '重要',
    })
    expect(url).toBe('cubox://tag?name=%E9%87%8D%E8%A6%81')
  })

  test('addLink should return a URL with url', async () => {
    const url = cubox.addLink({
      url: 'https://example.com/article',
    })
    expect(url).toBe('cubox://add?url=https%3A%2F%2Fexample.com%2Farticle')
  })

  test('addMemo should return a URL with memo', async () => {
    const url = cubox.addMemo({
      memo: 'Remember to buy groceries',
    })
    expect(url).toBe('cubox://add?memo=Remember%20to%20buy%20groceries')
  })

  test('addMemo should return a URL with chinese memo', async () => {
    const url = cubox.addMemo({
      memo: '记得买 groceries',
    })
    expect(url).toBe('cubox://add?memo=%E8%AE%B0%E5%BE%97%E4%B9%B0%20groceries')
  })

  test('search should return a URL with query', async () => {
    const url = cubox.search({
      query: 'typescript',
    })
    expect(url).toBe('cubox://search?query=typescript')
  })

  test('search should return a URL with query and type card', async () => {
    const url = cubox.search({
      query: 'notes',
      type: 'card',
    })
    expect(url).toBe('cubox://search?type=card&query=notes')
  })

  test('search should return a URL with query and type annot', async () => {
    const url = cubox.search({
      query: 'annotations',
      type: 'annot',
    })
    expect(url).toBe('cubox://search?type=annot&query=annotations')
  })

  test('search should return a URL with query and type fulltext', async () => {
    const url = cubox.search({
      query: 'fulltext search',
      type: 'fulltext',
    })
    expect(url).toBe('cubox://search?type=fulltext&query=fulltext%20search')
  })

  test('search should return a URL without parameters', async () => {
    const url = cubox.search({})
    expect(url).toBe('cubox://search')
  })
})
