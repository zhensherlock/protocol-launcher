import { describe, expect, test } from 'vitest'
import { postman } from '../src'

describe('postman', () => {
  test('should expose only the documented Postman URL scheme helpers', () => {
    expect(Object.keys(postman).sort()).toEqual(['openLocalFlow'])
  })

  test('openLocalFlow should return the documented local flow URL', () => {
    const url = postman.openLocalFlow({
      filePath: '/Users/username/GitHub/postman/flows/New flow.flow',
    })

    expect(url).toBe(
      'postman://app/flows/open?filePath=%2FUsers%2Fusername%2FGitHub%2Fpostman%2Fflows%2FNew%20flow.flow',
    )
  })

  test('openLocalFlow should URL-encode the absolute flow file path', () => {
    const url = postman.openLocalFlow({
      filePath: '/Users/username/GitHub/postman/flows/Team Flow #1.flow',
    })

    expect(url).toBe(
      'postman://app/flows/open?filePath=%2FUsers%2Fusername%2FGitHub%2Fpostman%2Fflows%2FTeam%20Flow%20%231.flow',
    )
  })
})
