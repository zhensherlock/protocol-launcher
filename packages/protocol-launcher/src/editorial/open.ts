import { qs } from '@protocol-launcher/shared'

/**
 * Open file command payload definition.
 */
type OpenFile = {
  /**
   * The name of the file to open.
   */
  filename?: string

  /**
   * The root location of the file. Can be 'dropbox' or 'local'. If omitted, 'local' is assumed.
   */
  root?: 'dropbox' | 'local'

  /**
   * The initial selected text range when opening a file. Specified as from-to, for example 0-10 to select the first 10 characters.
   */
  selection?: string

  /**
   * An editor command (workflow) by name that should be executed after opening the file.
   */
  command?: string

  /**
   * The input for the first action in the workflow that is run with the command parameter.
   */
  input?: string
}

/**
 * Open an existing file in Editorial.
 *
 * @param payload Open file command payload.
 * @returns Editorial open file URL.
 * @example
 * open({ filename: 'myfile.txt' })
 * // => 'editorial://open/myfile.txt'
 * @example
 * open({ filename: 'myfile.txt', root: 'dropbox' })
 * // => 'editorial://open/myfile.txt?root=dropbox'
 * @example
 * open({ filename: 'myfile.txt', selection: '0-10' })
 * // => 'editorial://open/myfile.txt?selection=0-10'
 * @example
 * open({ filename: 'myfile.txt', command: 'My Workflow' })
 * // => 'editorial://open/myfile.txt?command=My%20Workflow'
 * @link https://omz-software.com/editorial/docs/ios/urlscheme.html
 */
export function open(payload: OpenFile = {}) {
  const { filename, root, selection, command, input } = payload

  const params = qs({
    ...(root ? { root } : {}),
    ...(selection ? { selection } : {}),
    ...(command ? { command } : {}),
    ...(input ? { input } : {}),
  })

  if (filename) {
    return `editorial://open/${filename}${params}`
  }

  return `editorial://open${params}`
}
