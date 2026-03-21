/**
 * Swap foreground and background colors in Pika.
 *
 * @returns Pika swap colors URL.
 * @example
 * swap()
 * // => 'pika://swap'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function swap() {
  return 'pika://swap'
}

/**
 * Undo last action in Pika.
 *
 * @returns Pika undo URL.
 * @example
 * undo()
 * // => 'pika://undo'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function undo() {
  return 'pika://undo'
}

/**
 * Redo last action in Pika.
 *
 * @returns Pika redo URL.
 * @example
 * redo()
 * // => 'pika://redo'
 * @link https://github.com/superhighfives/pika/blob/main/Pika/Views/HelpView.swift
 */
export function redo() {
  return 'pika://redo'
}
