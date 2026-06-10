export interface SplashtopBusinessAccountPayload {
  /**
   * Splashtop account used by the Business app.
   */
  account: string
}

const splashtopBusinessBaseUrl = 'st-business://com.splashtop.business'

export function splashtopBusinessUrl(account: string, parameterName: 'mac' | 'sos', parameterValue: string) {
  return `${splashtopBusinessBaseUrl}?account=${account}&${parameterName}=${parameterValue}`
}
