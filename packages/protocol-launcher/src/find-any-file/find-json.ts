import {
  encodeFindAnyFileJsonData,
  type FindAnyFileJsonData,
  type FindAnyFileJsonValue,
  type FindAnyFileWindowMode,
} from './shared'

export type { FindAnyFileJsonData, FindAnyFileJsonValue }

export type FindJson = {
  /**
   * JSON data copied from a saved Find Any File search. String payloads are used unchanged; string values in object payloads are percent-encoded.
   */
  jsondata: string | FindAnyFileJsonData
  /**
   * Optional window mode: 0 reuses the frontmost window, 1 reuses a non-altered window, 2 opens a new window.
   */
  wmode?: FindAnyFileWindowMode
}

/**
 * Open Find Any File with JSON search rules.
 *
 * @param payload Find Any File JSON payload.
 * @returns Find Any File findjson URL.
 * @example
 * findJson({
 *   jsondata: {
 *     specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
 *     title: 'Name contains report 2021',
 *     autoStart: true,
 *     sources: ['/'],
 *   },
 * })
 * // => 'fafapp://findjson/{"specs":[{"verb":9,"val":"report%202021","subj":0}],"title":"Name%20contains%20report%202021","autoStart":true,"sources":["%2F"]}'
 * @link https://findanyfile.app/url-scheme.html
 */
export function findJson(payload: FindJson) {
  const { jsondata, wmode } = payload
  const encodedJson = encodeFindAnyFileJsonData(jsondata)
  const mode = wmode === undefined ? '' : `/${wmode}`

  return `fafapp://findjson/${encodedJson}${mode}`
}
