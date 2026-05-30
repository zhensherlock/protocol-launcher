import { describe, expect, test } from 'vitest'
import { hiddify } from '../src'

describe('hiddify', () => {
  test('importConfig should return the official import URL with a profile title fragment', () => {
    const url = hiddify.importConfig({
      sublink: 'https://hiddify.com/autosub',
      name: 'name',
    })

    expect(url).toBe('hiddify://import/https://hiddify.com/autosub#name')
  })

  test('importConfig should omit the optional profile title fragment', () => {
    const url = hiddify.importConfig({
      sublink: 'https://example.com/subscriptions/singbox.json',
    })

    expect(url).toBe('hiddify://import/https://example.com/subscriptions/singbox.json')
  })

  test('importSubscriptionUrl should preserve the sublink URL query string', () => {
    const url = hiddify.importSubscriptionUrl({
      sublink: 'https://example.com/subscriptions/v2ray.txt?format=base64',
    })

    expect(url).toBe('hiddify://import/https://example.com/subscriptions/v2ray.txt?format=base64')
  })

  test('importProxyUrl should preserve a single proxy share link fragment', () => {
    const url = hiddify.importProxyUrl({
      sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
    })

    expect(url).toBe('hiddify://import/trojan://REPLACE_WITH_PASSWORD@example.com:443#name')
  })
})
