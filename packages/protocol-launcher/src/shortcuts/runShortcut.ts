import { qs } from '@protocol-launcher/shared'

/**
 * Run shortcut definition.
 */
type RunShortcut = {
  /**
   * Shortcut name to run.
   */
  name: string

  /**
   * Input type for the shortcut.
   */
  input?: 'text' | 'clipboard'

  /**
   * Text input value (only used when input is 'text').
   */
  text?: string
}

/**
 * Run a specific shortcut.
 *
 * @param payload Run shortcut definition.
 * @returns Shortcuts run shortcut URL.
 * @example
 * runShortcut({ name: 'Kaleidoscope Compare' })
 * // => 'shortcuts://run-shortcut?name=Kaleidoscope%20Compare'
 * @example
 * runShortcut({
 *   name: '将文本转为音频',
 *   input: 'text',
 *   text: '测试将文本转为音频',
 * })
 * // => 'shortcuts://run-shortcut?name=将文本转为音频&input=text&text=测试将文本转为音频'
 * @example
 * runShortcut({ name: 'Add to Notes', input: 'clipboard' })
 * // => 'shortcuts://run-shortcut?name=Add%20to%20Notes&input=clipboard'
 * @link https://support.apple.com/zh-cn/guide/shortcuts/apd624386f42/9.0/ios/26
 */
export function runShortcut(payload: RunShortcut) {
  const { name, input, text } = payload
  const params = {
    name,
    ...(input ? { input } : {}),
    ...(text ? { text } : {}),
  }
  return `shortcuts://run-shortcut?${qs(params)}`
}
