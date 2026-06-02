import { describe, expect, test } from 'vitest'
import { ivantiWebWork } from '../src'

describe('ivantiWebWork', () => {
  test('openHttpUrl should replace http scheme with mibrowser', async () => {
    const url = ivantiWebWork.openHttpUrl({
      url: 'http://www.example.com/intranet',
    })

    expect(url).toBe('mibrowser://www.example.com/intranet')
  })

  test('openHttpsUrl should replace https scheme with mibrowsers', async () => {
    const url = ivantiWebWork.openHttpsUrl({
      url: 'https://www.example.com/secure',
    })

    expect(url).toBe('mibrowsers://www.example.com/secure')
  })

  test('openFullScreenHttpUrl should replace http scheme with mibrowserf', async () => {
    const url = ivantiWebWork.openFullScreenHttpUrl({
      url: 'http://www.example.com/app',
    })

    expect(url).toBe('mibrowserf://www.example.com/app')
  })

  test('openFullScreenHttpsUrl should replace https scheme with mibrowsersf', async () => {
    const url = ivantiWebWork.openFullScreenHttpsUrl({
      url: 'https://www.example.com/app',
    })

    expect(url).toBe('mibrowsersf://www.example.com/app')
  })

  test('openHttpsUrl should preserve the rest of the URL', async () => {
    const url = ivantiWebWork.openHttpsUrl({
      url: 'https://example.com/path?q=http%3A%2F%2Fexample.org#section',
    })

    expect(url).toBe('mibrowsers://example.com/path?q=http%3A%2F%2Fexample.org#section')
  })

  test('openHttpUrl should throw for non-http URLs', async () => {
    expect(() =>
      ivantiWebWork.openHttpUrl({
        url: 'https://www.example.com/secure',
      }),
    ).toThrow('Unsupported Ivanti Web@Work HTTP URL format.')
  })

  test('openHttpsUrl should throw for non-https URLs', async () => {
    expect(() =>
      ivantiWebWork.openHttpsUrl({
        url: 'http://www.example.com/intranet',
      }),
    ).toThrow('Unsupported Ivanti Web@Work HTTPS URL format.')
  })

  test('openFullScreenHttpUrl should throw for non-http URLs', async () => {
    expect(() =>
      ivantiWebWork.openFullScreenHttpUrl({
        url: 'https://www.example.com/app',
      }),
    ).toThrow('Unsupported Ivanti Web@Work HTTP URL format.')
  })

  test('openFullScreenHttpsUrl should throw for non-https URLs', async () => {
    expect(() =>
      ivantiWebWork.openFullScreenHttpsUrl({
        url: 'http://www.example.com/app',
      }),
    ).toThrow('Unsupported Ivanti Web@Work HTTPS URL format.')
  })
})
