import { describe, expect, test } from 'vitest'
import { shopi } from '../src'

describe('shopi', () => {
  test('showLists should return a URL', async () => {
    const url = shopi.showLists()
    expect(url).toBe('shopi://x-callback-url/show-lists')
  })

  test('showList should return a URL with name', async () => {
    const url = shopi.showList({
      name: 'groceries',
    })
    expect(url).toBe('shopi://x-callback-url/show-list?name=groceries')
  })

  test('showList should return a URL with encoded name', async () => {
    const url = shopi.showList({
      name: 'weekly shopping',
    })
    expect(url).toBe('shopi://x-callback-url/show-list?name=weekly%20shopping')
  })

  test('createList should return a URL with name', async () => {
    const url = shopi.createList({
      name: 'weekly shopping',
    })
    expect(url).toBe('shopi://x-callback-url/create-list?name=weekly%20shopping')
  })

  test('createList should return a URL with simple name', async () => {
    const url = shopi.createList({
      name: 'groceries',
    })
    expect(url).toBe('shopi://x-callback-url/create-list?name=groceries')
  })

  test('addItem should return a URL with list and name', async () => {
    const url = shopi.addItem({
      list: 'groceries',
      name: 'milk',
    })
    expect(url).toBe('shopi://x-callback-url/add-item?list=groceries&name=milk')
  })

  test('addItem should return a URL with list, name and amount', async () => {
    const url = shopi.addItem({
      list: 'groceries',
      name: 'milk',
      amount: '2',
    })
    expect(url).toBe('shopi://x-callback-url/add-item?list=groceries&name=milk&amount=2')
  })

  test('addItem should return a URL with name and crossed', async () => {
    const url = shopi.addItem({
      name: 'bread',
      crossed: 'no',
    })
    expect(url).toBe('shopi://x-callback-url/add-item?name=bread&crossed=no')
  })

  test('addItem should return a URL with all parameters', async () => {
    const url = shopi.addItem({
      list: 'groceries',
      name: 'eggs',
      amount: '12',
      crossed: 'yes',
    })
    expect(url).toBe('shopi://x-callback-url/add-item?list=groceries&name=eggs&amount=12&crossed=yes')
  })

  test('addItem should return a URL without list (use current list)', async () => {
    const url = shopi.addItem({
      name: 'butter',
    })
    expect(url).toBe('shopi://x-callback-url/add-item?name=butter')
  })

  test('clearList should return a URL with name', async () => {
    const url = shopi.clearList({
      name: 'groceries',
    })
    expect(url).toBe('shopi://x-callback-url/clear-list?name=groceries')
  })

  test('clearList should return a URL with name and crossedOnly', async () => {
    const url = shopi.clearList({
      name: 'groceries',
      crossedOnly: 'yes',
    })
    expect(url).toBe('shopi://x-callback-url/clear-list?name=groceries&crossedOnly=yes')
  })

  test('clearList should return a URL with name and crossedOnly no', async () => {
    const url = shopi.clearList({
      name: 'groceries',
      crossedOnly: 'no',
    })
    expect(url).toBe('shopi://x-callback-url/clear-list?name=groceries&crossedOnly=no')
  })
})
