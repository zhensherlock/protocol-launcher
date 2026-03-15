export interface Sms {
  phone?: string
}

/**
 * Open SMS app.
 *
 * @param payload - Optional phone number.
 * @returns SMS open URL.
 * @example
 * sms()
 * // => 'sms://'
 * @example
 * sms({ phone: '1234567890' })
 * // => 'sms://1234567890'
 */
export function sms(payload: Sms = {}) {
  const { phone = '' } = payload
  return `sms://${phone}`
}
