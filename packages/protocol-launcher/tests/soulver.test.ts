import { describe, expect, test } from 'vitest'
import { soulver } from '../src'

describe('soulver', () => {
  test('open should return a URL', async () => {
    const url = soulver.open()
    expect(url).toBe('x-soulver://')
  })

  test('create should return a URL without expression', async () => {
    const url = soulver.create({})
    expect(url).toBe('x-soulver://x-callback-url/create')
  })

  test('create should return a URL with expression', async () => {
    const url = soulver.create({
      expression: '$3k earnings / 5 people',
    })
    expect(url).toBe('x-soulver://x-callback-url/create?expression=%243k%20earnings%20%2F%205%20people')
  })

  test('openSheet should return a URL with id', async () => {
    const url = soulver.openSheet({
      id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
    })
    expect(url).toBe('x-soulver://x-callback-url/open?id=3BBFDEB9-E705-4AC1-846D-433446BA0C60')
  })

  test('calculate should return a URL with expression', async () => {
    const url = soulver.calculate({
      expression: 'lunch was $55 + 25% tip',
    })
    expect(url).toBe(
      'x-soulver://x-callback-url/calculate?expression=lunch%20was%20%2455%20%2B%2025%25%20tip&to_clipboard=true',
    )
  })

  test('appendLine should return a URL', async () => {
    const url = soulver.appendLine({
      id: '3BBFDEB9-E705-4AC1-846D-433446BA0C60',
      expression: '$500 in EUR',
    })
    expect(url).toBe(
      'x-soulver://x-callback-url/append-line?id=3BBFDEB9-E705-4AC1-846D-433446BA0C60&expression=%24500%20in%20EUR',
    )
  })
})
