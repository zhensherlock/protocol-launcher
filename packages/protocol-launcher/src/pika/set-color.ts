/**
 * Set color definition.
 */
type SetColor = {
  /**
   * Color value in hex format.
   *
   * @example 'fbbf24'
   * @example 'e74661'
   */
  hex: string
}

/**
 * Set foreground color in Pika.
 *
 * @param payload Set color command payload.
 * @returns Pika set foreground color URL.
 * @example
 * setForeground({ hex: 'fbbf24' })
 * // => 'pika://set/foreground/fbbf24'
 * @example
 * setForeground({ hex: 'e74661' })
 * // => 'pika://set/foreground/e74661'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function setForeground(payload: SetColor) {
  const { hex } = payload
  return `pika://set/foreground/${hex}`
}

/**
 * Set background color in Pika.
 *
 * @param payload Set color command payload.
 * @returns Pika set background color URL.
 * @example
 * setBackground({ hex: 'fbbf24' })
 * // => 'pika://set/background/fbbf24'
 * @example
 * setBackground({ hex: 'e74661' })
 * // => 'pika://set/background/e74661'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function setBackground(payload: SetColor) {
  const { hex } = payload
  return `pika://set/background/${hex}`
}
