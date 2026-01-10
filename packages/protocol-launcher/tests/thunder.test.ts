import { describe, expect, test } from 'vitest'
import { thunder } from '../src'

describe('thunder.ts', () => {
  test('download should return a URL with base64-encoded payload', async () => {
    const url = thunder.downloadUrl({
      url: 'https://raw.githubusercontent.com/zhensherlock/zhensherlock/main/profile-3d-contrib/profile-night-view.svg',
    })
    expect(url).toBe(
      'thunder://QUFodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vemhlbnNoZXJsb2NrL3poZW5zaGVybG9jay9tYWluL3Byb2ZpbGUtM2QtY29udHJpYi9wcm9maWxlLW5pZ2h0LXZpZXcuc3ZnWlo=',
    )
  })
})
