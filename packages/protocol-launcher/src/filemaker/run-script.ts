import {
  buildFileMakerUrl,
  type FileMakerFilePayload,
  type FileMakerLocalVariable,
  fileMakerVariableParams,
} from './shared'

/**
 * Run FileMaker script payload definition.
 */
export type RunScript = FileMakerFilePayload & {
  /**
   * Script name to run.
   */
  script: string
  /**
   * Script parameter.
   */
  param?: string
  /**
   * Option value for handling a running script.
   */
  option?: string | number
  /**
   * Local variables passed to the script.
   */
  variables?: FileMakerLocalVariable[]
}

/**
 * Run a script in a shared, local, or already open FileMaker Pro file.
 *
 * @param payload Run script payload.
 * @returns FileMaker Pro run-script URL.
 * @example
 * runScript({ address: '~', filename: 'Clients', script: 'ListClients' })
 * // => 'fmp://~/Clients?script=ListClients'
 * @example
 * runScript({
 *   address: 'sales.example.com',
 *   filename: 'Clients',
 *   script: 'ListClients',
 *   param: 'TopClients',
 *   option: 3,
 *   variables: [{ name: 'NumberToList', value: 10 }],
 * })
 * // => 'fmp://sales.example.com/Clients?script=ListClients&param=TopClients&option=3&$NumberToList=10'
 * @link https://help.claris.com/en/pro-help/content/opening-files-url.html
 */
export function runScript(payload: RunScript) {
  const { script, param, option, variables } = payload

  return buildFileMakerUrl(payload, {
    script,
    param,
    option,
    ...fileMakerVariableParams(variables),
  })
}
