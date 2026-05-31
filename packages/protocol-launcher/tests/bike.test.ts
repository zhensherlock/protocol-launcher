import { describe, expect, test } from 'vitest'
import { bike } from '../src'

describe('bike', () => {
  test('openRow should return the official row link example URL', () => {
    const url = bike.openRow({
      rootId: 'KOcw9x9N',
      focusId: 'ch',
      selectedId: 'zf',
    })

    expect(url).toBe('bike://KOcw9x9N/ch#zf')
  })

  test('openRow should omit optional focus and selected row ids', () => {
    const url = bike.openRow({
      rootId: 'KOcw9x9N',
    })

    expect(url).toBe('bike://KOcw9x9N')
  })

  test('openPathRow should return the official path row link example URL', () => {
    const url = bike.openPathRow({
      path: '/Users/jessegrosjean/Documents/todo.bike',
      selectedId: 'aF',
    })

    expect(url).toBe('bike:///Users/jessegrosjean/Documents/todo.bike#aF')
  })

  test('openRowLink should return an existing Bike row link unchanged', () => {
    const url = bike.openRowLink({
      url: 'bike://KOcw9x9N/ch#zf',
    })

    expect(url).toBe('bike://KOcw9x9N/ch#zf')
  })

  test('openRowLink should return an existing Bike path row link unchanged', () => {
    const url = bike.openRowLink({
      url: 'bike:///Users/jessegrosjean/Documents/todo.bike#aF',
    })

    expect(url).toBe('bike:///Users/jessegrosjean/Documents/todo.bike#aF')
  })
})
