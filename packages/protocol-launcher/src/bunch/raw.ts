import { type BunchCallbacks, bunchUrl } from './shared'

type RawFile = {
  /**
   * Absolute path or a path relative to the configured Bunch folder.
   */
  file: string

  txt?: never
}

type RawText = {
  /**
   * Bunch text contents to process as if read from a file.
   */
  txt: string

  file?: never
}

/**
 * Raw method payload definition. Bunch documents that only one of `file` or `txt` should be specified.
 */
export type Raw = (RawFile | RawText) & BunchCallbacks

/**
 * Run raw text or a file as a Bunch.
 *
 * @param payload Raw method payload.
 * @returns Bunch raw URL.
 * @example
 * raw({ file: '~/MiscBunch.bunch' })
 * // => 'x-bunch://raw?file=~%2FMiscBunch.bunch'
 * @example
 * raw({ txt: '(dnd on)' })
 * // => 'x-bunch://raw?txt=(dnd%20on)'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function raw(payload: Raw) {
  const { file, txt } = payload

  return bunchUrl(
    'raw',
    file !== undefined
      ? {
          file,
        }
      : {
          txt,
        },
    payload,
  )
}
