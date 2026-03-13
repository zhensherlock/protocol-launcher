import { qs } from '@protocol-launcher/shared'

/**
 * X-Callback-URL run shortcut definition.
 */
type XCallbackRunShortcut = {
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

  /**
   * URL to open on success.
   */
  xSuccess?: string

  /**
   * URL to open on cancel.
   */
  xCancel?: string

  /**
   * URL to open on error.
   */
  xError?: string
}

/**
 * Run a shortcut using x-callback-url protocol.
 *
 * @param payload X-Callback-URL run shortcut definition.
 * @returns Shortcuts x-callback-url run shortcut URL.
 * @example
 * xCallbackRunShortcut({ name: '计算小费', input: 'text', text: '24.99' })
 * // => 'shortcuts://x-callback-url/run-shortcut?name=计算小费&input=text&text=24.99'
 * @example
 * xCallbackRunShortcut({
 *   name: '计算小费',
 *   input: 'text',
 *   text: '24.99',
 *   xSuccess: 'myapp://success',
 *   xCancel: 'myapp://cancel',
 * })
 * // => 'shortcuts://x-callback-url/run-shortcut?name=计算小费&input=text&text=24.99&x-success=myapp://success&x-cancel=myapp://cancel'
 * @link https://support.apple.com/zh-cn/guide/shortcuts/apdcd7f20a6f/9.0/ios/26
 */
export function xCallbackRunShortcut(payload: XCallbackRunShortcut) {
  const { name, input, text, xSuccess, xCancel, xError } = payload
  const params = {
    name,
    ...(input ? { input } : {}),
    ...(text ? { text } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  }
  return `shortcuts://x-callback-url/run-shortcut?${qs(params)}`
}
