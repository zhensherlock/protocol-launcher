import { qs } from '@protocol-launcher/shared'

export type NozbeXCallback = {
  /**
   * Authentication code generated in Nozbe Settings -> Advanced -> Automate with x-callback-url.
   */
  secret: string

  /**
   * Optional x-callback-url success URL.
   */
  xSuccess?: string

  /**
   * Optional x-callback-url error URL.
   */
  xError?: string
}

export type NozbeColor =
  | 'red'
  | 'yellow'
  | 'sand'
  | 'darkgreen'
  | 'stone'
  | 'pink'
  | 'orange'
  | 'dustpink'
  | 'olive'
  | 'lightblue'
  | 'lightpink'
  | 'ocher'
  | 'taupe'
  | 'green'
  | 'blue'
  | 'heather'
  | 'brown'
  | 'burntsienna'
  | 'aquamarine'
  | 'ultramarine'
  | 'purple'
  | 'karmin'
  | 'mauve'
  | 'teal'
  | 'indigo'
  | 'deeppurple'
  | 'aubergine'
  | 'midnight'
  | 'ocean'
  | 'navy'
  | 'pedro'
  | 'toto'
  | 'fluffy'
  | 'felus'
  | 'luna'
  | 'rufus'
  | 'maja'
  | 'elwi'

export function gotoUrl(path: string) {
  return `nozbe4://goto/${path}`
}

export function xCallbackUrl(action: string, params: Record<string, unknown>) {
  return `nozbe4://x-callback-url/${action}${qs(params)}`
}

export function xCallbackParams(payload: NozbeXCallback) {
  const { secret, xSuccess, xError } = payload

  return {
    secret,
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  }
}
