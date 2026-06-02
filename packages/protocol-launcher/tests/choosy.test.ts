import { describe, expect, test } from 'vitest'
import { choosy } from '../src'

describe('choosy', () => {
  test('open should return a URL with open API method', async () => {
    const url = choosy.open({
      url: 'https://example.com',
    })

    expect(url).toBe('x-choosy://open/https://example.com')
  })

  test('promptAll should return a URL with prompt.all API method', async () => {
    const url = choosy.promptAll({
      url: 'https://www.georgebrock.com',
    })

    expect(url).toBe('x-choosy://prompt.all/https://www.georgebrock.com')
  })

  test('promptRunning should return a URL with prompt.running API method', async () => {
    const url = choosy.promptRunning({
      url: 'https://example.com',
    })

    expect(url).toBe('x-choosy://prompt.running/https://example.com')
  })

  test('bestAll should return a URL with best.all API method', async () => {
    const url = choosy.bestAll({
      url: 'https://example.com',
    })

    expect(url).toBe('x-choosy://best.all/https://example.com')
  })

  test('bestRunning should return a URL with best.running API method', async () => {
    const url = choosy.bestRunning({
      url: 'https://example.com/search?q=choosy',
    })

    expect(url).toBe('x-choosy://best.running/https://example.com/search?q=choosy')
  })

  test('customApiMethod should return a URL with the custom API method', async () => {
    const url = choosy.customApiMethod({
      method: 'my.rule',
      url: 'https://www.google.com',
    })

    expect(url).toBe('x-choosy://my.rule/https://www.google.com')
  })
})
