import { describe, expect, test } from 'vitest'
import { appStore } from '../src'

describe('appStore', () => {
  test('open should return a URL', async () => {
    const url = appStore.open()
    expect(url).toBe('itms-apps://')
  })

  test('open should return a URL with path', async () => {
    const url = appStore.open({
      path: 'account/subscriptions',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/account/subscriptions')
  })

  test('open should return a URL with discover path', async () => {
    const url = appStore.open({
      path: 'discover',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/discover')
  })

  test('open should return a URL with arcade path', async () => {
    const url = appStore.open({
      path: 'arcade',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/arcade')
  })

  test('open should return a URL with updates path', async () => {
    const url = appStore.open({
      path: 'updates',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/updates')
  })

  test('app should return a URL with id', async () => {
    const url = appStore.app({
      id: '836500024',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/app/id836500024')
  })

  test('app should return a URL with id and action', async () => {
    const url = appStore.app({
      id: '836500024',
      action: 'write-review',
    })
    expect(url).toBe('itms-apps://itunes.apple.com/app/id836500024?action=write-review')
  })

  test('search should return a URL with query', async () => {
    const url = appStore.search({
      query: 'things',
    })
    expect(url).toBe('itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=things')
  })

  test('search should return a URL with complex query', async () => {
    const url = appStore.search({
      query: 'task manager',
    })
    expect(url).toBe(
      'itms-apps://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?media=software&term=task%20manager',
    )
  })
})
