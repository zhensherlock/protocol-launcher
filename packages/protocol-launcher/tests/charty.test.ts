import { describe, expect, test } from 'vitest'
import { charty } from '../src'

describe('charty', () => {
  test('should expose only the documented Charty URL scheme helper', () => {
    expect(Object.keys(charty).sort()).toEqual(['addTheme'])
  })

  test('addTheme should return the official add-theme URL', () => {
    const url = charty.addTheme({
      name: 'BlGrYeOrRe',
      baseColors: 0,
      colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
    })

    expect(url).toBe('charty://add-theme?name=BlGrYeOrRe&baseColors=0&colors=1a76e8,28d475,ffd416,ff6f1d,eb2d40')
  })

  test('addTheme should return the official gradient theme URL with baseColors 3', () => {
    const url = charty.addTheme({
      name: 'Charty',
      baseColors: 3,
      colors: 'ff2e55,ed3364,da3772,c73b80,b43f8e,a2449d,8f48ab,7d4dba,6b52c9,5856d7',
    })

    expect(url).toBe(
      'charty://add-theme?name=Charty&baseColors=3&colors=ff2e55,ed3364,da3772,c73b80,b43f8e,a2449d,8f48ab,7d4dba,6b52c9,5856d7',
    )
  })

  test('addTheme should return the official gradient theme URL with baseColors 4', () => {
    const url = charty.addTheme({
      name: 'BlGrPiRe',
      baseColors: 4,
      colors: '182940,525a66,8c8c8c,bfb0aa,f2d4c9,f2827c,f2302f,d82d2d,bf2a2a,a81666',
    })

    expect(url).toBe(
      'charty://add-theme?name=BlGrPiRe&baseColors=4&colors=182940,525a66,8c8c8c,bfb0aa,f2d4c9,f2827c,f2302f,d82d2d,bf2a2a,a81666',
    )
  })
})
