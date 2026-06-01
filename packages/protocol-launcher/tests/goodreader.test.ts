import { describe, expect, test } from 'vitest'
import { goodreader } from '../src'

describe('goodreader', () => {
  test('openInternalFile should return an internal GoodReader file URL', () => {
    const url = goodreader.openInternalFile({
      path: 'Manuals/Guide.pdf',
    })

    expect(url).toBe('gropen://Manuals/Guide.pdf')
  })

  test('openInternalFile should preserve the provided internal path exactly', () => {
    const url = goodreader.openInternalFile({
      path: 'Manuals/Quick%20Start.pdf',
    })

    expect(url).toBe('gropen://Manuals/Quick%20Start.pdf')
  })

  test('downloadUrl should add g before an http URL', () => {
    const url = goodreader.downloadUrl({
      url: 'http://example.com/Guide.pdf',
    })

    expect(url).toBe('ghttp://example.com/Guide.pdf')
  })

  test('downloadUrl should add g before an https URL', () => {
    const url = goodreader.downloadUrl({
      url: 'https://example.com/Guide.pdf',
    })

    expect(url).toBe('ghttps://example.com/Guide.pdf')
  })

  test('downloadUrl should throw for unsupported URL schemes', () => {
    expect(() =>
      goodreader.downloadUrl({
        url: 'ftp://example.com/Guide.pdf',
      }),
    ).toThrow('Unsupported GoodReader download URL format.')
  })
})
