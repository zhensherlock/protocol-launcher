type CopyColor = {
  /** Optional output format: hex, rgb, hsb, hsl, lab, opengl, or oklch. */
  type?: string
}

/**
 * Copy foreground color in Pika.
 *
 * @returns Pika copy foreground color URL.
 * @example
 * copyForeground()
 * // => 'pika://copy/foreground'
 * @example
 * copyForeground({ type: 'oklch' })
 * // => 'pika://copy/foreground/oklch'
 * @link https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift
 */
export function copyForeground(payload: CopyColor = {}) {
  return `pika://copy/foreground${payload.type ? `/${payload.type}` : ''}`
}

/**
 * Copy background color in Pika.
 *
 * @returns Pika copy background color URL.
 * @example
 * copyBackground()
 * // => 'pika://copy/background'
 * @example
 * copyBackground({ type: 'oklch' })
 * // => 'pika://copy/background/oklch'
 * @link https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift
 */
export function copyBackground(payload: CopyColor = {}) {
  return `pika://copy/background${payload.type ? `/${payload.type}` : ''}`
}

/**
 * Copy all text in Pika.
 *
 * @returns Pika copy all text URL.
 * @example
 * copyText()
 * // => 'pika://copy/text'
 * @link https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift
 */
export function copyText() {
  return 'pika://copy/text'
}

/**
 * Copy all as JSON in Pika.
 *
 * @returns Pika copy all as JSON URL.
 * @example
 * copyJson()
 * // => 'pika://copy/json'
 * @link https://github.com/superhighfives/pika/blob/1.9.0/Pika/Views/HelpData.swift
 */
export function copyJson() {
  return 'pika://copy/json'
}
