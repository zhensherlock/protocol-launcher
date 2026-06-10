import { describe, expect, test } from 'vitest'
import { box } from '../src'

describe('box', () => {
  test('should expose only the documented Box mobile deep links', () => {
    expect(Object.keys(box).sort()).toEqual([
      'openEmmFile',
      'openEmmFolder',
      'openEmmSharedLink',
      'openFile',
      'openFolder',
      'openSharedLink',
    ])
  })

  test('openFolder should return the documented Box folder URL', () => {
    const url = box.openFolder({ id: '123456789' })

    expect(url).toBe('boxapp://folder?id=123456789')
  })

  test('openFile should return the documented Box file URL', () => {
    const url = box.openFile({ id: '987654321' })

    expect(url).toBe('boxapp://file?id=987654321')
  })

  test('openSharedLink should return the documented Box shared-link URL', () => {
    const url = box.openSharedLink({ url: 'https://app.box.com/s/shared-link-id' })

    expect(url).toBe('boxapp://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id')
  })

  test('openEmmFolder should return the documented Box for EMM folder URL', () => {
    const url = box.openEmmFolder({ id: '123456789' })

    expect(url).toBe('boxemm://folder?id=123456789')
  })

  test('openEmmFile should return the documented Box for EMM file URL', () => {
    const url = box.openEmmFile({ id: '987654321' })

    expect(url).toBe('boxemm://file?id=987654321')
  })

  test('openEmmSharedLink should return the documented Box for EMM shared-link URL', () => {
    const url = box.openEmmSharedLink({ url: 'https://app.box.com/s/shared-link-id' })

    expect(url).toBe('boxemm://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id')
  })
})
