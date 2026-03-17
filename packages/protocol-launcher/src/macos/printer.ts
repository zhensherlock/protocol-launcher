interface Printer {
  host?: string
}

/**
 * Add a printer.
 *
 * @param payload - Printer hostname or IP address.
 * @returns Printer addition URL.
 * @example
 * printer()
 * // => 'ipp://'
 * @example
 * printer({ host: '192.168.1.100' })
 * // => 'ipp://192.168.1.100'
 */
export function printer(payload: Printer = {}) {
  const { host = '' } = payload
  return `ipp://${host}`
}
