import { type PanoramaXQueryParams, panoramaXPath, panoramaXUrl } from './shared'

export type RunProcedurePayload = {
  /**
   * Panorama database name in the documented `run/database/procedure/label` path.
   */
  database: string

  /**
   * Panorama procedure name in the documented `run/database/procedure/label` path.
   */
  procedure: string

  /**
   * Procedure label to call.
   */
  label: string

  /**
   * Optional URL query data passed to Panorama with the callback URL.
   */
  params?: PanoramaXQueryParams
}

/**
 * Run a Panorama X procedure label through the documented x-callback-url run action.
 *
 * @param payload Procedure run payload.
 * @returns Panorama X procedure run URL.
 * @example
 * runProcedure({ database: 'database', procedure: 'procedure', label: 'xCallbackURLSuccess' })
 * // => 'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess'
 * @link https://www.provue.com/panoramax/help/Release_10_2.html
 * @link https://www.provue.com/panoramax/help/statement_xcallbackurl.html
 */
export function runProcedure(payload: RunProcedurePayload) {
  const { database, procedure, label, params } = payload

  return panoramaXUrl(`x-callback-url/run/${panoramaXPath([database, procedure, label])}`, params)
}
