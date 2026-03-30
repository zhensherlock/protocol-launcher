import { describe, expect, test } from 'vitest'
import { opener } from '../src'

describe('opener', () => {
  test('showOptions should return a URL with url', async () => {
    const url = opener.showOptions({
      url: 'https://twitter.com/piercedavid/status/594646584232542208',
    })
    expect(url).toBe(
      'opener://x-callback-url/show-options?url=https%3A%2F%2Ftwitter.com%2Fpiercedavid%2Fstatus%2F594646584232542208',
    )
  })

  test('showOptions should return a URL with url and allowAutoOpen false', async () => {
    const url = opener.showOptions({
      url: 'https://example.com',
      allowAutoOpen: false,
    })
    expect(url).toBe('opener://x-callback-url/show-options?url=https%3A%2F%2Fexample.com&allow-auto-open=false')
  })

  test('showOptions should return a URL with url and default allowAutoOpen true', async () => {
    const url = opener.showOptions({
      url: 'https://example.com',
      allowAutoOpen: true,
    })
    expect(url).toBe('opener://x-callback-url/show-options?url=https%3A%2F%2Fexample.com')
  })

  test('showStoreProductDetails should return a URL with string id', async () => {
    const url = opener.showStoreProductDetails({
      id: '989565871',
    })
    expect(url).toBe('opener://x-callback-url/show-store-product-details?id=989565871')
  })

  test('showStoreProductDetails should return a URL with number id', async () => {
    const url = opener.showStoreProductDetails({
      id: 989565871,
    })
    expect(url).toBe('opener://x-callback-url/show-store-product-details?id=989565871')
  })
})
