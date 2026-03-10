import { describe, expect, test } from 'vitest'
import { appleScript } from '../src'

describe('appleScript', () => {
  test('open should return a URL', async () => {
    const url = appleScript.open()
    expect(url).toBe('applescript://com.apple.scripteditor')
  })

  test('addScript should return a URL', async () => {
    const url = appleScript.addScript({
      script: 'tell application "System Events" to display alert "hello world"',
    })
    expect(url).toBe(
      'applescript://com.apple.scripteditor?script=tell%20application%20%22System%20Events%22%20to%20display%20alert%20%22hello%20world%22',
    )
  })
})
