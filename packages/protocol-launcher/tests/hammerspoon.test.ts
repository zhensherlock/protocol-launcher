import { describe, expect, test } from 'vitest'
import { hammerspoon } from '../src'

describe('hammerspoon', () => {
  test('urlEvent should return a URL event without query parameters', () => {
    const url = hammerspoon.urlEvent({
      eventName: 'doThingA',
    })

    expect(url).toBe('hammerspoon://doThingA')
  })

  test('urlEvent should return the official URL event example shape', () => {
    const url = hammerspoon.urlEvent({
      eventName: 'doThingA',
      params: {
        value: '1',
      },
    })

    expect(url).toBe('hammerspoon://doThingA?value=1')
  })

  test('urlEvent should return the official host and query parameter example shape', () => {
    const url = hammerspoon.urlEvent({
      eventName: 'someEventToHandle',
      params: {
        someParam: 'things',
        otherParam: 'stuff',
      },
    })

    expect(url).toBe('hammerspoon://someEventToHandle?someParam=things&otherParam=stuff')
  })

  test('urlEvent should encode URL parameter values', () => {
    const url = hammerspoon.urlEvent({
      eventName: 'someEventToHandle',
      params: {
        message: 'hello world',
      },
    })

    expect(url).toBe('hammerspoon://someEventToHandle?message=hello%20world')
  })
})
