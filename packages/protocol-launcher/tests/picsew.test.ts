import { describe, expect, test } from 'vitest'
import { picsew } from '../src'

describe('picsew', () => {
  test('should expose only Picsew documented stitching actions', () => {
    expect(Object.keys(picsew).sort()).toEqual(['hori', 'scroll', 'vert'])
  })

  test('scroll should return the official scroll example URL', () => {
    const url = picsew.scroll({
      in: 'recent',
      out: 'save',
      clean_status: 'yes',
      mockup2: 'iphone-14-blue',
      delete_source: 'yes',
    })

    expect(url).toBe(
      'picsew://x-callback-url/scroll?in=recent&out=save&clean_status=yes&mockup2=iphone-14-blue&delete_source=yes',
    )
  })

  test('vert should return the official latest images example URL', () => {
    const url = picsew.vert({
      in: 'latest',
      count: 3,
      out: 'copy',
      watermark: 'repeat',
    })

    expect(url).toBe('picsew://x-callback-url/vert?in=latest&count=3&out=copy&watermark=repeat')
  })

  test('hori should return the official hori URL with required parameters', () => {
    const url = picsew.hori({
      in: 'paste',
      out: 'copy',
    })

    expect(url).toBe('picsew://x-callback-url/hori?in=paste&out=copy')
  })

  test('scroll should omit optional parameters when they are not provided', () => {
    const url = picsew.scroll({
      in: 'paste',
      out: 'copy',
    })

    expect(url).toBe('picsew://x-callback-url/scroll?in=paste&out=copy')
  })
})

describe('documented URL updates', () => {
  test('scroll supports the Picsew 3.18.1 mockup example', () => {
    expect(
      picsew.scroll({ in: 'paste', out: 'save', mockupName: 'iphone-air-sky-blue', mockupBackgroundWidth: 50 }),
    ).toBe(
      'picsew://x-callback-url/scroll?in=paste&out=save&mockup-name=iphone-air-sky-blue&mockup-background-width=50',
    )
  })

  test('vert preserves zero background width', () => {
    expect(
      picsew.vert({ in: 'latest', count: 2, out: 'copy', mockupName: 'my device', mockupBackgroundWidth: 0 }),
    ).toBe('picsew://x-callback-url/vert?in=latest&count=2&out=copy&mockup-name=my%20device&mockup-background-width=0')
  })

  test('hori supports background width with the legacy alias', () => {
    expect(picsew.hori({ in: 'paste', out: 'save', mockup2: 'iphone-14-blue', mockupBackgroundWidth: 100 })).toBe(
      'picsew://x-callback-url/hori?in=paste&out=save&mockup2=iphone-14-blue&mockup-background-width=100',
    )
  })
})
