import { type CleanShotArea, cleanShotUrl } from './shared'

/**
 * All-In-One payload definition.
 */
export type AllInOne = CleanShotArea

/**
 * Launch CleanShot's All-In-One mode.
 *
 * @param payload All-In-One payload.
 * @returns CleanShot All-In-One URL.
 * @example
 * allInOne()
 * // => 'cleanshot://all-in-one'
 * @example
 * allInOne({ x: 100, y: 120, width: 200, height: 150, display: 1 })
 * // => 'cleanshot://all-in-one?x=100&y=120&width=200&height=150&display=1'
 * @link https://cleanshot.com/docs-api
 */
export function allInOne(payload: AllInOne = {}) {
  return cleanShotUrl('all-in-one', payload)
}
