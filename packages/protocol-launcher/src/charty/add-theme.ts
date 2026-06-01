import type { ChartyAddThemePayload } from './shared'
import { chartyUrl } from './shared'

/**
 * Charty add theme payload definition.
 */
export type AddTheme = ChartyAddThemePayload

/**
 * Add a custom Charty color theme.
 *
 * @param payload Charty add theme payload.
 * @returns Charty add theme URL.
 * @example
 * addTheme({
 *   name: 'BlGrYeOrRe',
 *   baseColors: 0,
 *   colors: '1a76e8,28d475,ffd416,ff6f1d,eb2d40',
 * })
 * // => 'charty://add-theme?name=BlGrYeOrRe&baseColors=0&colors=1a76e8,28d475,ffd416,ff6f1d,eb2d40'
 * @link https://chartyios.app/blog/charty11iris.html
 * @link https://chartyios.app/themes.html
 */
export function addTheme(payload: AddTheme) {
  const { name, baseColors, colors } = payload

  return chartyUrl('add-theme', {
    name,
    baseColors,
    colors,
  })
}
