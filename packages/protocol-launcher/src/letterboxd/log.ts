import { type LetterboxdRating, type LetterboxdXCallbackPayload, letterboxdUrl } from './shared'

export type LogPayload = LetterboxdXCallbackPayload & {
  /**
   * Film name. Letterboxd uses this as a search query and asks the user to manually confirm the correct result.
   */
  name?: string

  /**
   * ISO8601-formatted date the film was watched, i.e. `YYYY-MM-DD`.
   */
  date?: string

  /**
   * Indicates this viewing is a rewatch. Letterboxd documents this as valid only when `date` is specified.
   */
  rewatch?: boolean

  /**
   * Comma-separated list of tags.
   */
  tags?: string

  /**
   * Review text. The text can include these HTML tags:
   * `<strong> <em> <b> <i> <a href=""> <blockquote>`.
   */
  review?: string

  /**
   * Indicates the review text contains spoilers. Letterboxd documents this as valid only when `review` is specified.
   */
  containsSpoilers?: boolean

  /**
   * Rating from 0.5 to 5, at 0.5 intervals. Letterboxd interprets 0 as no rating.
   */
  rating?: LetterboxdRating

  /**
   * Indicates that the user's relationship to the film should be updated to show they liked the film.
   */
  like?: boolean

  /**
   * Enables sharing of the review to Facebook. Letterboxd documents this as valid only when `review` is specified and
   * the user's Facebook account is linked in Settings.
   *
   * @deprecated Deprecated in the official Letterboxd x-callback-url documentation.
   */
  shareOnFacebook?: boolean
}

/**
 * Add a new Letterboxd log entry, diary entry, or review for a film.
 *
 * @param payload Letterboxd log payload.
 * @returns Letterboxd log x-callback-url.
 * @example
 * log({ name: 'Heat', date: '2026-06-10', rating: 4.5, like: true })
 * // => 'letterboxd://x-callback-url/log?name=Heat&date=2026-06-10&rating=4.5&like=true'
 * @link https://github.com/Letterboxd/letterboxd-ios-x-callback-url
 */
export function log(payload: LogPayload = {}) {
  const {
    name,
    date,
    rewatch,
    tags,
    review,
    containsSpoilers,
    rating,
    like,
    shareOnFacebook,
    xSuccess,
    xCancel,
    xError,
  } = payload

  return letterboxdUrl('log', {
    name,
    date,
    rewatch,
    tags,
    review,
    containsSpoilers,
    rating,
    like,
    shareOnFacebook,
    xSuccess,
    xCancel,
    xError,
  })
}
