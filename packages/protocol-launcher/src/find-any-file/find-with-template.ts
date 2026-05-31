import { type FindAnyFileFindWithTemplatePayload, findAnyFileFindUrl } from './shared'

/**
 * Find Any File find-with-template payload definition.
 */
export type FindWithTemplate = FindAnyFileFindWithTemplatePayload

/**
 * Open Find Any File with a saved Search Template.
 *
 * @param payload Find Any File template search payload.
 * @returns Find Any File find URL.
 * @example
 * findWithTemplate({
 *   tpl: 'LastWeek',
 *   inp: 'invoice',
 * })
 * // => 'fafapp://find?inp=invoice&tpl=LastWeek'
 * @link https://findanyfile.app/url-scheme.html
 */
export function findWithTemplate(payload: FindWithTemplate) {
  return findAnyFileFindUrl(payload)
}
