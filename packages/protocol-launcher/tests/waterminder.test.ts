import { describe, expect, test } from 'vitest'
import { waterminder } from '../src'

describe('waterminder', () => {
  test('open should return a URL', async () => {
    const url = waterminder.open()
    expect(url).toBe('waterminder://')
  })

  test('addWater should return a URL with amount', async () => {
    const url = waterminder.addWater({
      amount: 100,
    })
    expect(url).toBe('waterminder://x-callback-url/add-water?amount=100')
  })

  test('addWater should return a URL with amount and time', async () => {
    const url = waterminder.addWater({
      amount: 250,
      time: '22/01/2019T13:17',
    })
    expect(url).toBe('waterminder://x-callback-url/add-water?amount=250&time=22%2F01%2F2019T13%3A17')
  })

  test('addCaffeine should return a URL with amount', async () => {
    const url = waterminder.addCaffeine({
      amount: 115,
    })
    expect(url).toBe('waterminder://x-callback-url/add-caffeine?amount=115')
  })

  test('addCaffeine should return a URL with amount and time', async () => {
    const url = waterminder.addCaffeine({
      amount: 115,
      time: '09/04/2021T13:17',
    })
    expect(url).toBe('waterminder://x-callback-url/add-caffeine?amount=115&time=09%2F04%2F2021T13%3A17')
  })

  test('addOther should return a URL with amount and type', async () => {
    const url = waterminder.addOther({
      amount: 250,
      type: 'carbonated_water',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=250&type=carbonated_water')
  })

  test('addOther should return a URL with amount, type and time', async () => {
    const url = waterminder.addOther({
      amount: 200,
      type: 'coffee',
      time: '09/04/2021T13:17',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=200&type=coffee&time=09%2F04%2F2021T13%3A17')
  })

  test('addOther should return a URL with water type', async () => {
    const url = waterminder.addOther({
      amount: 300,
      type: 'water',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=300&type=water')
  })

  test('addOther should return a URL with tea type', async () => {
    const url = waterminder.addOther({
      amount: 150,
      type: 'tea',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=150&type=tea')
  })

  test('addOther should return a URL with juice type', async () => {
    const url = waterminder.addOther({
      amount: 200,
      type: 'juice',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=200&type=juice')
  })

  test('addOther should return a URL with beer type', async () => {
    const url = waterminder.addOther({
      amount: 330,
      type: 'beer',
    })
    expect(url).toBe('waterminder://x-callback-url/add-other?amount=330&type=beer')
  })

  test('logCup should return a URL with amount and cupName', async () => {
    const url = waterminder.logCup({
      amount: 250,
      cupName: 'my mug',
    })
    expect(url).toBe('waterminder://x-callback-url/log-cup?amount=250&cupName=my%20mug')
  })

  test('logCup should return a URL with amount, cupName and time', async () => {
    const url = waterminder.logCup({
      amount: 300,
      cupName: 'Morning Glass',
      time: '22/01/2019T08:00',
    })
    expect(url).toBe(
      'waterminder://x-callback-url/log-cup?amount=300&cupName=Morning%20Glass&time=22%2F01%2F2019T08%3A00',
    )
  })

  test('logCup should return a URL with cupName containing spaces', async () => {
    const url = waterminder.logCup({
      amount: 200,
      cupName: 'Coffee Mug',
    })
    expect(url).toBe('waterminder://x-callback-url/log-cup?amount=200&cupName=Coffee%20Mug')
  })
})
