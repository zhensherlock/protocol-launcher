import { qs } from '@protocol-launcher/shared'

export type BarCutsCallbackPayload = {
  /**
   * Callback URL BarCuts should call when the workflow list query succeeds.
   */
  xSuccess?: string

  /**
   * Callback URL BarCuts should call when the workflow list query fails.
   */
  xError?: string
}

export type BarCutsWorkflowInputPayload = {
  /**
   * Optional text passed to the workflow as Shortcuts input.
   */
  input?: string
}

export function barCutsWorkflowsUrl(payload: BarCutsCallbackPayload = {}) {
  const { xSuccess, xError } = payload

  return `barcuts://workflows${barCutsQs({
    'x-success': xSuccess,
    'x-error': xError,
  })}`
}

export function barCutsRunWorkflowUrl(params: Record<string, string | undefined>) {
  return `barcuts://run-workflow${barCutsQs(params)}`
}

function barCutsQs(params: Record<string, unknown>) {
  return qs(params).replace(/[!'()*]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)
}
