import { describe, expect, test } from 'vitest'
import { evernote } from '../src'

describe('evernote', () => {
  test('open should return a URL', async () => {
    const url = evernote.open()
    expect(url).toBe('evernote://')
  })

  test('viewNote should return a URL with userId, shardId and noteGuid', async () => {
    const url = evernote.viewNote({
      userId: '12053455',
      shardId: 's60',
      noteGuid: '3915a8ac-eb08-456e-91d4-8c32f921d7a1',
    })
    expect(url).toBe(
      'evernote:///view/12053455/s60/3915a8ac-eb08-456e-91d4-8c32f921d7a1/3915a8ac-eb08-456e-91d4-8c32f921d7a1/',
    )
  })
})
