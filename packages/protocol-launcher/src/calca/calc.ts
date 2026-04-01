import { qs } from '@protocol-launcher/shared'

/**
 * Calc command payload definition.
 */
type Calc = {
  /**
   * The text to calculate, from simple query like '2+2=>' to full document.
   */
  body: string
  /**
   * The callback URL to open after calculation.
   * If contains '[[output]]', it will be replaced with the calculated text.
   */
  xSuccess: string
}

/**
 * Calculate a block of text in Calca and return the result to the calling application.
 *
 * @param payload Calc command payload.
 * @returns Calca calc URL.
 * @example
 * calc({ body: '2+2=>', xSuccess: 'app://callback' })
 * // => 'calca://x-callback-url/calc?body=2%2B2%3D&x-success=app%3A%2F%2Fcallback'
 * @example
 * calc({ body: '10*10=>', xSuccess: 'myapp://result?data=[[output]]' })
 * // => 'calca://x-callback-url/calc?body=10%2A10%3D&x-success=myapp%3A%2F%2Fresult%3Fdata%3D%5B%5Boutput%5D%5D'
 * @link http://calca.io/x-callback-url/
 */
export function calc(payload: Calc) {
  const { body, xSuccess } = payload
  const params = qs({
    body,
    'x-success': xSuccess,
  })

  return `calca://x-callback-url/calc${params}`
}
