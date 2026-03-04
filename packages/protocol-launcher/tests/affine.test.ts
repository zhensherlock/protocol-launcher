import { describe, expect, test } from 'vitest'
import { affine } from '../src'

describe('affine', () => {
  test('open should return a URL with path', async () => {
    const url = affine.open()
    expect(url).toBe('affine://')
  })

  test('openDoc should return a URL with workspaceId and docId', async () => {
    const url = affine.openDoc({
      workspaceId: '4f5a46cf-5eeb-4130-beda-25b438cd8c60',
      docId: 'ykchLzhvFXEUMwJu_spHY',
    })
    expect(url).toBe(
      'affine://app.affine.pro/workspace/4f5a46cf-5eeb-4130-beda-25b438cd8c60/ykchLzhvFXEUMwJu_spHY?new-tab=1',
    )
  })
})
