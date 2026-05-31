import type { ForScoreOpenPayload } from './shared'
import { assertForScoreOpenPayload, forScoreUrl } from './shared'

/**
 * Open a score, setlist, bookmark, or page in forScore.
 *
 * The official `open` command requires at least one of `path`, `score`,
 * `setlist`, or `page`. When both `path` and `score` are supplied, forScore
 * gives `path` precedence.
 *
 * @param payload forScore open command payload.
 * @returns forScore open URL.
 * @example
 * open({ path: 'My Score.pdf' })
 * // => 'forscore://open?path=My%20Score.pdf'
 * @example
 * open({ setlist: 'My Setlist', score: 'My Score', bookmark: 'My Bookmark', page: 3 })
 * // => 'forscore://open?setlist=My%20Setlist&score=My%20Score&bookmark=My%20Bookmark&page=3'
 * @link https://forscore.co/developers-automation/
 */
export function open(payload: ForScoreOpenPayload) {
  assertForScoreOpenPayload(payload)

  const { path, score, setlist, page, bookmark } = payload

  if (setlist !== undefined) {
    return forScoreUrl('open', {
      setlist,
      ...(path !== undefined ? { path } : {}),
      ...(score !== undefined ? { score } : {}),
      ...(bookmark !== undefined ? { bookmark } : {}),
      ...(page !== undefined ? { page } : {}),
    })
  }

  return forScoreUrl('open', {
    ...(path !== undefined ? { path } : {}),
    ...(score !== undefined ? { score } : {}),
    ...(bookmark !== undefined ? { bookmark } : {}),
    ...(page !== undefined ? { page } : {}),
  })
}
