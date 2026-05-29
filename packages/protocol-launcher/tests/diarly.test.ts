import { describe, expect, test } from 'vitest'
import { diarly } from '../src'

describe('diarly', () => {
  test('open should return the official note id URL', () => {
    const url = diarly.open({
      id: 'note-123',
    })

    expect(url).toBe('diarly://x-callback-url/open?id=note-123')
  })

  test('open should return the official daily entry URL with day and journal', () => {
    const url = diarly.open({
      day: '01-01-2019',
      journal: '2bc759b2-9dd8-4186-ba64-12890f5642c9',
    })

    expect(url).toBe('diarly://x-callback-url/open?day=01-01-2019&journal=2bc759b2-9dd8-4186-ba64-12890f5642c9')
  })

  test('open should return the official daily entry URL without journal', () => {
    const url = diarly.open({
      day: '01-01-2019',
    })

    expect(url).toBe('diarly://x-callback-url/open?day=01-01-2019')
  })

  test('append should return the official daily entry append URL', () => {
    const url = diarly.append({
      day: '16-12-2020',
      text: 'Hello World',
    })

    expect(url).toBe('diarly://x-callback-url/append?day=16-12-2020&text=Hello%20World')
  })

  test('append should return the official note id append URL', () => {
    const url = diarly.append({
      id: 'note-123',
      text: 'Hello World',
    })

    expect(url).toBe('diarly://x-callback-url/append?id=note-123&text=Hello%20World')
  })

  test('create should return the official create URL with text', () => {
    const url = diarly.create({
      text: 'Hello World',
    })

    expect(url).toBe('diarly://x-callback-url/create?text=Hello%20World')
  })

  test('create should include the documented journal parameter', () => {
    const url = diarly.create({
      journal: 'Personal',
      text: 'Hello World',
    })

    expect(url).toBe('diarly://x-callback-url/create?journal=Personal&text=Hello%20World')
  })

  test('search should return the official search URL', () => {
    const url = diarly.search({
      text: '@onThisDay',
    })

    expect(url).toBe('diarly://search?text=%40onThisDay')
  })
})
