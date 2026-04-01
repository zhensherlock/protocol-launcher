import { qs } from '@protocol-launcher/shared'

/**
 * Open daily prompt payload definition.
 */
type OpenDailyPrompt = {
  /**
   * The prompt ID to use.
   *
   * @example 'ck7zw8sybj6kv09983znvrmof'
   */
  promptId?: string
  /**
   * The date for the prompt (YYYY-MM-DD format).
   *
   * @example '2020-04-02'
   */
  promptDate?: string
}

/**
 * Create and open a new entry with daily prompt in Day One.
 *
 * @param payload Open daily prompt payload.
 * @returns Day One daily prompt URL.
 * @example
 * openDailyPrompt()
 * // => 'dayone://new/daily-prompt'
 * @example
 * openDailyPrompt({ promptId: 'ck7zw8sybj6kv09983znvrmof' })
 * // => 'dayone://new/daily-prompt?promptId=ck7zw8sybj6kv09983znvrmof'
 * @example
 * openDailyPrompt({ promptDate: '2020-04-02' })
 * // => 'dayone://new/daily-prompt?promptDate=2020-04-02'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function openDailyPrompt(payload: OpenDailyPrompt = {}) {
  const { promptId, promptDate } = payload
  const params = qs({
    ...(promptId ? { promptId } : {}),
    ...(promptDate ? { promptDate } : {}),
  })

  return `dayone://new/daily-prompt${params}`
}
