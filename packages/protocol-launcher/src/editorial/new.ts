import { qs } from '@protocol-launcher/shared'

/**
 * New file command payload definition.
 */
type NewFile = {
  /**
   * The name of the new file to create. If a file with the given name already exists, a numeric suffix is automatically appended.
   */
  filename?: string

  /**
   * The root location of the file. Can be 'dropbox' or 'local'. If omitted, 'local' is assumed.
   */
  root?: 'dropbox' | 'local'

  /**
   * The initial selected text range when creating a file. Specified as from-to, for example 0-10 to select the first 10 characters.
   */
  selection?: string

  /**
   * An editor command (workflow) by name that should be executed after creating the file.
   */
  command?: string

  /**
   * The input for the first action in the workflow that is run with the command parameter.
   */
  input?: string
}

/**
 * Create a new file in Editorial.
 *
 * @param payload New file command payload.
 * @returns Editorial new file URL.
 * @example
 * newFile({ filename: 'newfile.txt' })
 * // => 'editorial://new/newfile.txt'
 * @example
 * newFile({ filename: 'newfile.txt', root: 'dropbox' })
 * // => 'editorial://new/newfile.txt?root=dropbox'
 * @example
 * newFile({ filename: 'newfile.txt', selection: '0-10' })
 * // => 'editorial://new/newfile.txt?selection=0-10'
 * @example
 * newFile({ filename: 'newfile.txt', command: 'My Workflow' })
 * // => 'editorial://new/newfile.txt?command=My%20Workflow'
 * @link https://omz-software.com/editorial/docs/ios/urlscheme.html
 */
export function newFile(payload: NewFile = {}) {
  const { filename, root, selection, command, input } = payload

  const params = qs({
    ...(root ? { root } : {}),
    ...(selection ? { selection } : {}),
    ...(command ? { command } : {}),
    ...(input ? { input } : {}),
  })

  if (filename) {
    return `editorial://new/${filename}${params}`
  }

  return `editorial://new${params}`
}
