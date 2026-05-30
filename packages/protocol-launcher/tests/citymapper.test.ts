import { describe, expect, test } from 'vitest'
import { citymapper } from '../src'

describe('citymapper', () => {
  test('webDirections should return a Citymapper web directions URL with the required destination coordinate', () => {
    const url = citymapper.webDirections({
      endcoord: '51.537060,-0.079179',
    })

    expect(url).toBe('https://citymapper.com/directions?endcoord=51.537060%2C-0.079179')
  })

  test('webDirections should include destination name and address when provided', () => {
    const url = citymapper.webDirections({
      endcoord: '51.537060,-0.079179',
      endname: 'The Proud Archivist',
      endaddress: '2-10 Hertford Road, London, N1 5ET',
    })

    expect(url).toBe(
      'https://citymapper.com/directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET',
    )
  })

  test('directions should return a Citymapper native directions URL', () => {
    const url = citymapper.directions({
      endcoord: '51.537060,-0.079179',
      endname: 'The Proud Archivist',
      endaddress: '2-10 Hertford Road, London, N1 5ET',
    })

    expect(url).toBe(
      'citymapper://directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET',
    )
  })

  test('directions should include official start point fields and arrival_time', () => {
    const url = citymapper.directions({
      startcoord: '51.500729,-0.124625',
      startname: 'Westminster',
      startaddress: 'London SW1A 0AA',
      endcoord: '51.537060,-0.079179',
      endname: 'The Proud Archivist',
      endaddress: '2-10 Hertford Road, London, N1 5ET',
      arrivalTime: '2016-08-06T21:00+01:00',
    })

    expect(url).toBe(
      'citymapper://directions?startcoord=51.500729%2C-0.124625&startname=Westminster&startaddress=London%20SW1A%200AA&endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET&arrival_time=2016-08-06T21%3A00%2B01%3A00',
    )
  })

  test('directions should serialize arrivalTime to the official arrival_time parameter', () => {
    const url = citymapper.directions({
      endcoord: '51.537060,-0.079179',
      arrivalTime: '2016-08-06T21:00+01:00',
    })

    expect(url).toBe('citymapper://directions?endcoord=51.537060%2C-0.079179&arrival_time=2016-08-06T21%3A00%2B01%3A00')
  })

  test('xCallbackDirections should return the documented Citymapper x-callback-url directions URL', () => {
    const url = citymapper.xCallbackDirections({
      endcoord: '51.537060,-0.079179',
      endname: 'The Proud Archivist',
      endaddress: '2-10 Hertford Road, London, N1 5ET',
      xSource: 'My App Name',
      xSuccess: 'myappscheme://',
    })

    expect(url).toBe(
      'citymapper://x-callback-url/directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET&x-source=My%20App%20Name&x-success=myappscheme%3A%2F%2F',
    )
  })
})
