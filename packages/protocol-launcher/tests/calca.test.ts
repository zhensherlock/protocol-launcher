import { describe, expect, test } from 'vitest'
import { calca } from '../src'

describe('calca', () => {
  test('open should return a URL', async () => {
    const url = calca.open()
    expect(url).toBe('calca://')
  })

  test('create should return a URL without parameters', async () => {
    const url = calca.create()
    expect(url).toBe('calca://x-callback-url/create')
  })

  test('create should return a URL with empty payload', async () => {
    const url = calca.create({})
    expect(url).toBe('calca://x-callback-url/create')
  })

  test('create should return a URL with body', async () => {
    const url = calca.create({
      body: '2+2=>',
    })
    expect(url).toBe('calca://x-callback-url/create?body=2%2B2%3D%3E')
  })

  test('create should return a URL with title', async () => {
    const url = calca.create({
      title: 'Math Notes',
    })
    expect(url).toBe('calca://x-callback-url/create?title=Math%20Notes')
  })

  test('create should return a URL with body and title', async () => {
    const url = calca.create({
      body: '2+2=>',
      title: 'Math',
    })
    expect(url).toBe('calca://x-callback-url/create?body=2%2B2%3D%3E&title=Math')
  })

  test('create should return a URL with markdown body', async () => {
    const url = calca.create({
      body: '# Heading\n\nSome text with **bold**.',
      title: 'Document',
    })
    expect(url).toBe(
      'calca://x-callback-url/create?body=%23%20Heading%0A%0ASome%20text%20with%20**bold**.&title=Document',
    )
  })

  test('create should return a URL with special characters in title', async () => {
    const url = calca.create({
      body: 'Test',
      title: 'Hello & World',
    })
    expect(url).toBe('calca://x-callback-url/create?body=Test&title=Hello%20%26%20World')
  })

  test('calc should return a URL with body and x-success', async () => {
    const url = calca.calc({
      body: '2+2=>',
      xSuccess: 'app://callback',
    })
    expect(url).toBe('calca://x-callback-url/calc?body=2%2B2%3D%3E&x-success=app%3A%2F%2Fcallback')
  })

  test('calc should return a URL with simple calculation', async () => {
    const url = calca.calc({
      body: '10*10=>',
      xSuccess: 'myapp://result',
    })
    expect(url).toBe('calca://x-callback-url/calc?body=10*10%3D%3E&x-success=myapp%3A%2F%2Fresult')
  })

  test('calc should return a URL with [[output]] placeholder', async () => {
    const url = calca.calc({
      body: '5*5=>',
      xSuccess: 'myapp://result?data=[[output]]',
    })
    expect(url).toBe(
      'calca://x-callback-url/calc?body=5*5%3D%3E&x-success=myapp%3A%2F%2Fresult%3Fdata%3D%5B%5Boutput%5D%5D',
    )
  })

  test('calc should return a URL with full document body', async () => {
    const url = calca.calc({
      body: '# Report\n\nRevenue: 1000\nExpenses: 500\nProfit: =>',
      xSuccess: 'app://callback',
    })
    expect(url).toBe(
      'calca://x-callback-url/calc?body=%23%20Report%0A%0ARevenue%3A%201000%0AExpenses%3A%20500%0AProfit%3A%20%3D%3E&x-success=app%3A%2F%2Fcallback',
    )
  })

  test('calc should return a URL with complex x-success URL', async () => {
    const url = calca.calc({
      body: '2+2=>',
      xSuccess: 'myapp://callback?param=value&other=123',
    })
    expect(url).toBe(
      'calca://x-callback-url/calc?body=2%2B2%3D%3E&x-success=myapp%3A%2F%2Fcallback%3Fparam%3Dvalue%26other%3D123',
    )
  })
})
