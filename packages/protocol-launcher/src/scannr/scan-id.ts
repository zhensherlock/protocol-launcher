import { type ScanIdPayload, scannrUrl } from './shared'

/**
 * Launch Scannr to perform ID scanning.
 *
 * Without `callbackScheme`, this returns the official Android launch URL
 * `scannr://`. With `callbackScheme`, this returns the official iOS launch URL
 * `scannr://?callbackScheme=<foo>`.
 *
 * @param payload Scannr ID scan launch payload.
 * @returns Scannr ID scan URL.
 * @example
 * scanId()
 * // => 'scannr://'
 * @example
 * scanId({ callbackScheme: 'foo' })
 * // => 'scannr://?callbackScheme=foo'
 * @link https://scannrapp.com/scannr_url_scheme.pdf
 */
export function scanId(payload: ScanIdPayload = {}) {
  const { callbackScheme } = payload

  return scannrUrl({
    ...(callbackScheme ? { callbackScheme } : {}),
  })
}
