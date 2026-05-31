import { qs } from '@protocol-launcher/shared'

export type FocusXCallback = {
  /**
   * x-callback-url success callback URL.
   */
  xSuccess?: string

  /**
   * x-callback-url error callback URL.
   */
  xError?: string
}

export function focusCallbackParams(payload: FocusXCallback) {
  const { xSuccess, xError } = payload

  return {
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  }
}

export function focusUrl(command: string, params: Record<string, unknown> = {}, rawQuestionMarkParams: string[] = []) {
  const query = rawQuestionMarkParams.reduce((currentQuery, paramName) => {
    const pattern = new RegExp(`([?&]${paramName}=[^&]*)`, 'g')
    return currentQuery.replace(pattern, match => match.replace(/%3F/g, '?'))
  }, qs(params))

  return `focusapp://${command}${query}`
}
