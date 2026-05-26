import { describe, expect, test } from 'vitest'
import { capacities } from '../src'

describe('capacities', () => {
  test('createNewObject should return the official testing example URL', async () => {
    const url = capacities.createNewObject({
      name: 'Test',
    })

    expect(url).toBe('capacities://x-callback-url/createNewObject?name=Test')
  })

  test('createNewObject should return the official example URL with name', async () => {
    const url = capacities.createNewObject({
      name: 'My new object',
    })

    expect(url).toBe('capacities://x-callback-url/createNewObject?name=My%20new%20object')
  })

  test('createNewObject should include documented optional parameters', async () => {
    const url = capacities.createNewObject({
      spaceId: 'space-id',
      type: 'REPLACE_WITH_OBJECT_TYPE',
      title: '',
      content: '# Hello',
      xSource: 'SourceApp',
      xSuccess: 'sourceapp://x-callback-url/response',
      xError: 'sourceapp://x-callback-url/error',
    })

    expect(url).toBe(
      'capacities://x-callback-url/createNewObject?spaceId=space-id&type=REPLACE_WITH_OBJECT_TYPE&title=&content=%23%20Hello&x-source=SourceApp&x-success=sourceapp%3A%2F%2Fx-callback-url%2Fresponse&x-error=sourceapp%3A%2F%2Fx-callback-url%2Ferror',
    )
  })

  test('appendToDailyNote should return the official example URL', async () => {
    const url = capacities.appendToDailyNote({
      content: 'My content',
    })

    expect(url).toBe('capacities://x-callback-url/appendToDailyNote?content=My%20content')
  })

  test('appendToDailyNote should include space and x-callback parameters', async () => {
    const url = capacities.appendToDailyNote({
      spaceId: 'space-id',
      content: '- Captured note',
      xSource: 'SourceApp',
      xSuccess: 'sourceapp://x-callback-url/response',
      xError: 'sourceapp://x-callback-url/error',
    })

    expect(url).toBe(
      'capacities://x-callback-url/appendToDailyNote?spaceId=space-id&content=-%20Captured%20note&x-source=SourceApp&x-success=sourceapp%3A%2F%2Fx-callback-url%2Fresponse&x-error=sourceapp%3A%2F%2Fx-callback-url%2Ferror',
    )
  })

  test('getCurrentObject should return a URL without parameters', async () => {
    const url = capacities.getCurrentObject()

    expect(url).toBe('capacities://x-callback-url/getCurrentObject')
  })

  test('getCurrentObject should return the official callback example URL', async () => {
    const url = capacities.getCurrentObject({
      xSource: 'SourceApp',
      xSuccess: 'sourceapp://x-callback-url/response',
      xError: 'sourceapp://x-callback-url/error',
    })

    expect(url).toBe(
      'capacities://x-callback-url/getCurrentObject?x-source=SourceApp&x-success=sourceapp%3A%2F%2Fx-callback-url%2Fresponse&x-error=sourceapp%3A%2F%2Fx-callback-url%2Ferror',
    )
  })
})
