import { describe, expect, test } from 'vitest'
import { spark } from '../src'

describe('spark', () => {
  test('openDeepLink should return the documented Spark Deep Link format unchanged', () => {
    const url = spark.openDeepLink({
      url: 'readdle-spark://bl=',
    })

    expect(url).toBe('readdle-spark://bl=')
  })

  test('openDeepLink should return a copied Spark Deep Link unchanged', () => {
    const url = spark.openDeepLink({
      url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
    })

    expect(url).toBe('readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE')
  })

  test('openDeepLink should throw for non-Spark Deep Links', () => {
    expect(() =>
      spark.openDeepLink({
        url: 'https://sparkmailapp.com/',
      }),
    ).toThrow('Unsupported Spark Deep Link format.')
  })
})
