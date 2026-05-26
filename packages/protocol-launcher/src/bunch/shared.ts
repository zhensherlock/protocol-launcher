import { qs } from '@protocol-launcher/shared'

export type BunchScheme = 'x-bunch' | 'x-bunch-beta'
export type BunchDebugLevel = 0 | 1 | 2 | 3 | 4
export type BunchBoolean = 0 | 1 | 'true' | 'false' | 'yes' | 'no'
export type BunchVariables = Record<string, string>

export type BunchMethodSyntax = 'query' | 'path'
export type BunchOpenSyntax = BunchMethodSyntax | 'shortcut'

export type BunchCallbacks = {
  /**
   * URL scheme to use. Bunch Beta can be targeted with `x-bunch-beta`.
   */
  scheme?: BunchScheme

  /**
   * Use Bunch's documented x-callback-url path format.
   */
  xCallback?: boolean

  /**
   * Optional x-callback-url source. Supplying this also uses x-callback-url format.
   */
  'x-source'?: string

  /**
   * Bundle ID, app name, or URL to open after executing the method.
   */
  'x-success'?: string

  /**
   * Number of seconds Bunch waits before calling `x-success`.
   */
  'x-delay'?: number
}

export type BunchByName = {
  /**
   * Bunch name without the `.bunch` extension.
   */
  bunch: string

  tag?: never
}

export type BunchByTag = {
  /**
   * Tag or tag combination. Bunch documents comma for OR and plus for AND.
   */
  tag: string

  bunch?: never
}

export type BunchTarget = BunchByName | BunchByTag

export type BunchTargetPayload = BunchTarget & BunchCallbacks

export function bunchUrl(method: string, params: Record<string, unknown> = {}, payload: BunchCallbacks = {}) {
  const { scheme = 'x-bunch', xCallback } = payload
  const path = `${xCallback || payload['x-source'] ? 'x-callback-url/' : ''}${method}`

  return `${scheme}://${path}${qs({
    ...params,
    ...callbackParams(payload),
  })}`
}

export function bunchPathUrl(
  method: string,
  bunch: string,
  params: Record<string, unknown> = {},
  payload: BunchCallbacks = {},
) {
  return bunchSegmentsUrl(method ? [method, bunch] : [bunch], params, payload)
}

export function bunchSegmentsUrl(
  segments: string[],
  params: Record<string, unknown> = {},
  payload: BunchCallbacks = {},
) {
  const { scheme = 'x-bunch' } = payload
  const path = segments.map(encodePathValue).join('/')

  return `${scheme}://${path}${qs({
    ...params,
    ...callbackParams(payload),
  })}`
}

export function targetParams(payload: BunchTarget) {
  const { bunch, tag } = payload

  return {
    ...(bunch !== undefined ? { bunch } : {}),
    ...(tag !== undefined ? { tag } : {}),
  }
}

function callbackParams(payload: BunchCallbacks) {
  return {
    ...(payload['x-source'] !== undefined ? { 'x-source': payload['x-source'] } : {}),
    ...(payload['x-success'] !== undefined ? { 'x-success': payload['x-success'] } : {}),
    ...(payload['x-delay'] !== undefined ? { 'x-delay': payload['x-delay'] } : {}),
  }
}

function encodePathValue(value: string) {
  return encodeURIComponent(value).replace(/%2C/g, ',')
}
