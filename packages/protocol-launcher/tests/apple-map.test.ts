import { describe, expect, test } from 'vitest'
import { appleMap } from '../src'

describe('appleMap', () => {
  test('open should return base URL without options', async () => {
    const url = appleMap.open()
    expect(url).toBe('maps://')
  })

  test('open should return URL with query', async () => {
    const url = appleMap.open({ q: 'pizza' })
    expect(url).toBe('maps://?q=pizza')
  })

  test('open should return URL with location', async () => {
    const url = appleMap.open({ ll: '50.894967,4.341626' })
    expect(url).toBe('maps://?ll=50.894967%2C4.341626')
  })

  test('open should return URL with address', async () => {
    const url = appleMap.open({ address: '1,Infinite Loop,Cupertino,California' })
    expect(url).toBe('maps://?address=1%2CInfinite%20Loop%2CCupertino%2CCalifornia')
  })

  test('open should return URL with map type', async () => {
    const url = appleMap.open({ t: 'k' })
    expect(url).toBe('maps://?t=k')
  })

  test('open should return URL with zoom level', async () => {
    const url = appleMap.open({ ll: '50.894967,4.341626', z: 10 })
    expect(url).toBe('maps://?ll=50.894967%2C4.341626&z=10')
  })

  test('open should return URL with span', async () => {
    const url = appleMap.open({ ll: '50.894967,4.341626', spn: '0.5,0.5' })
    expect(url).toBe('maps://?ll=50.894967%2C4.341626&spn=0.5%2C0.5')
  })

  test('open should return URL with driving directions', async () => {
    const url = appleMap.open({ saddr: 'San Jose', daddr: 'San Francisco', dirflg: 'd' })
    expect(url).toBe('maps://?saddr=San%20Jose&daddr=San%20Francisco&dirflg=d')
  })

  test('open should return URL with walking directions', async () => {
    const url = appleMap.open({ saddr: 'San Jose', daddr: 'San Francisco', dirflg: 'w' })
    expect(url).toBe('maps://?saddr=San%20Jose&daddr=San%20Francisco&dirflg=w')
  })

  test('open should return URL with transit directions', async () => {
    const url = appleMap.open({ saddr: 'San Jose', daddr: 'San Francisco', dirflg: 'r' })
    expect(url).toBe('maps://?saddr=San%20Jose&daddr=San%20Francisco&dirflg=r')
  })

  test('open should return URL with search location', async () => {
    const url = appleMap.open({ sll: '50.894967,4.341626', z: 10 })
    expect(url).toBe('maps://?z=10&sll=50.894967%2C4.341626')
  })

  test('open should return URL with screen span', async () => {
    const url = appleMap.open({ sll: '50.894967,4.341626', sspn: '0.5,0.5' })
    expect(url).toBe('maps://?sll=50.894967%2C4.341626&sspn=0.5%2C0.5')
  })

  test('open should return URL with near parameter', async () => {
    const url = appleMap.open({ q: 'pizza', near: '50.894967,4.341626' })
    expect(url).toBe('maps://?q=pizza&near=50.894967%2C4.341626')
  })

  test('open should return URL with multiple parameters', async () => {
    const url = appleMap.open({
      q: 'Mexican Restaurant',
      sll: '50.894967,4.341626',
      z: 10,
      t: 'h',
    })
    expect(url).toBe('maps://?t=h&q=Mexican%20Restaurant&z=10&sll=50.894967%2C4.341626')
  })

  test('open should handle empty object', async () => {
    const url = appleMap.open({})
    expect(url).toBe('maps://')
  })
})
