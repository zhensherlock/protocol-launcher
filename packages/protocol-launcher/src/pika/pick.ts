/**
 * Pick color type definition.
 */
type PickColor = {
  /**
   * Color type (hex, rgb, hsb, hsl, lab, opengl, oklch).
   *
   * @default 'hex'
   * @example 'hex'
   */
  type?: string
}

/**
 * Pick foreground color in Pika.
 *
 * @param payload Pick color command payload.
 * @returns Pika pick foreground color URL.
 * @example
 * pickForeground()
 * // => 'pika://pick/foreground'
 * @example
 * pickForeground({ type: 'hex' })
 * // => 'pika://pick/foreground/hex'
 * @example
 * pickForeground({ type: 'rgb' })
 * // => 'pika://pick/foreground/rgb'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function pickForeground(payload: PickColor = {}) {
  const { type = 'hex' } = payload
  return `pika://pick/foreground/${type}`
}

/**
 * Pick background color in Pika.
 *
 * @param payload Pick color command payload.
 * @returns Pika pick background color URL.
 * @example
 * pickBackground()
 * // => 'pika://pick/background'
 * @example
 * pickBackground({ type: 'hex' })
 * // => 'pika://pick/background/hex'
 * @example
 * pickBackground({ type: 'rgb' })
 * // => 'pika://pick/background/rgb'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function pickBackground(payload: PickColor = {}) {
  const { type = 'hex' } = payload
  return `pika://pick/background/${type}`
}
