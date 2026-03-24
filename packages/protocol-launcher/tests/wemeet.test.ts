import { describe, expect, test } from 'vitest'
import { wemeet } from '../src'

describe('wemeet', () => {
  test('open should return a URL', async () => {
    const url = wemeet.open()
    expect(url).toBe('wemeet://')
  })

  test('joinMeeting should return a URL with meeting_code', async () => {
    const url = wemeet.joinMeeting({
      meetingCode: '123456789',
    })
    expect(url).toBe('wemeet://page/inmeeting?meeting_code=123456789')
  })
})
