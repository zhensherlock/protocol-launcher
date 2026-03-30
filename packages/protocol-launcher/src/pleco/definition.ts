import { qs } from '@protocol-launcher/shared'

/**
 * Definition screen tab options.
 */
type DefinitionTab = 'dict' | 'stroke' | 'chars' | 'words' | 'sents'

/**
 * Definition command payload definition.
 */
type Definition = {
  /**
   * The headword characters to display.
   *
   * @example '你好'
   */
  hw: string

  /**
   * Optional pinyin pronunciation to differentiate homonyms.
   *
   * @example 'ni3hao3'
   */
  py?: string

  /**
   * Optional tab to jump to in the definition screen.
   *
   * @default 'dict'
   */
  sec?: DefinitionTab

  /**
   * The name of your app or website for display in Pleco's return button.
   *
   * @example 'MyApp'
   */
  xSource?: string

  /**
   * A URL that Pleco should call when the user taps the return button.
   *
   * @example 'myapp://success'
   */
  xSuccess?: string
}

/**
 * Open a definition screen in Pleco using x-callback-url standard.
 *
 * @param payload Definition command payload.
 * @returns Pleco definition URL.
 * @example
 * definition({ hw: '你好' })
 * // => 'plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD'
 * @example
 * definition({ hw: '你好', py: 'ni3hao3', sec: 'stroke' })
 * // => 'plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD&py=ni3hao3&sec=stroke'
 * @example
 * definition({ hw: '你好', xSource: 'MyApp', xSuccess: 'myapp://success' })
 * // => 'plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess'
 * @link https://iphone.pleco.com/manual/30200/vershist.html
 */
export function definition(payload: Definition) {
  const { hw, py, sec, xSource, xSuccess } = payload
  const params = qs({
    hw,
    ...(py ? { py } : {}),
    ...(sec ? { sec } : {}),
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `plecoapi://x-callback-url/df${params}`
}
