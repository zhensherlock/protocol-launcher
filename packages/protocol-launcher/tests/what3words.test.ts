import { describe, expect, test } from 'vitest'
import { what3words } from '../src'

describe('what3words', () => {
  test('showCurrentLocation should return the documented current-location URL', () => {
    const url = what3words.showCurrentLocation()

    expect(url).toBe('w3w://show?currentlocation')
  })

  test('showThreeWords should return the documented 3 word address URL', () => {
    const url = what3words.showThreeWords({ threeWords: 'daring.lion.race' })

    expect(url).toBe('w3w://show?threewords=daring.lion.race')
  })

  test('showThreeWords should support another official example address', () => {
    const url = what3words.showThreeWords({ threeWords: 'index.home.raft' })

    expect(url).toBe('w3w://show?threewords=index.home.raft')
  })

  test('showThreeWords should support the official Swift example address', () => {
    const url = what3words.showThreeWords({ threeWords: 'fancy.duck.cloud' })

    expect(url).toBe('w3w://show?threewords=fancy.duck.cloud')
  })
})
