import { describe, expect, test } from 'vitest'
import { cardhop } from '../src'

describe('cardhop', () => {
  test('open should return the documented Cardhop scheme', () => {
    const url = cardhop.open()

    expect(url).toBe('x-cardhop://')
  })

  test('parse should return the official parse URL with text', () => {
    const url = cardhop.parse({
      s: 'call Mike',
    })

    expect(url).toBe('x-cardhop://parse?s=call%20Mike')
  })

  test('parse should include list and documented add value', () => {
    const url = cardhop.parse({
      s: 'Sarah Jones',
      list: 'Friends',
      add: '1',
    })

    expect(url).toBe('x-cardhop://parse?s=Sarah%20Jones&list=Friends&add=1')
  })

  test('show should return the official contact URL', () => {
    const url = cardhop.show({
      contact: 'Mike Ross',
    })

    expect(url).toBe('x-cardhop://show?contact=Mike%20Ross')
  })

  test('show should return contact action and list parameters', () => {
    const url = cardhop.show({
      id: 'ABCD-1234',
      action: 'call',
      list: 'Team',
    })

    expect(url).toBe('x-cardhop://show?id=ABCD-1234&action=call&list=Team')
  })

  test('show should return view and list parameters', () => {
    const url = cardhop.show({
      view: 'contacts',
      list: 'Friends',
    })

    expect(url).toBe('x-cardhop://show?view=contacts&list=Friends')
  })

  test('preferences should return the official preferences URL', () => {
    const url = cardhop.preferences({
      path: 'notifications',
    })

    expect(url).toBe('x-cardhop://preferences?path=notifications')
  })
})
