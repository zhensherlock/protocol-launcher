interface FaceTime {
  phone?: string
}

/**
 * Open FaceTime app.
 *
 * @param payload - Phone number.
 * @returns FaceTime open URL.
 * @example
 * facetime({ phone: '1234567890' })
 * // => 'tel://1234567890'
 */
export function facetime(payload: FaceTime = {}) {
  const { phone = '' } = payload
  return `tel://${phone}`
}
