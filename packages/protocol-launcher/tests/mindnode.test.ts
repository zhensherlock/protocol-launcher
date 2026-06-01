import { describe, expect, test } from 'vitest'
import { mindnode } from '../src'

describe('mindnode', () => {
  test('should expose only the documented MindNode URL scheme helper', () => {
    expect(Object.keys(mindnode).sort()).toEqual(['openDocument'])
  })

  test('openDocument should return the official open document URL', () => {
    const url = mindnode.openDocument({ name: 'YourDocument' })

    expect(url).toBe('mindnode://open?name=YourDocument')
  })
})
