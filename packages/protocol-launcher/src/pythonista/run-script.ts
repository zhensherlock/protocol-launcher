import { qs } from '@protocol-launcher/shared'
import type { PythonistaPythonVersion, PythonistaRoot, PythonistaScheme } from './shared'

type PythonVersionParameter =
  | {
      /**
       * Run the script with Python 2 or Python 3 using the `version` parameter.
       */
      version?: PythonistaPythonVersion
      py?: never
    }
  | {
      version?: never
      /**
       * Run the script with Python 2 or Python 3 using the `py` parameter.
       */
      py?: PythonistaPythonVersion
    }
  | {
      version?: undefined
      py?: undefined
    }

type RunScriptBase = {
  /**
   * The script path to run.
   *
   * By default, the path is relative to Pythonista's local documents folder.
   */
  path: string
  /**
   * Make the script path relative to Pythonista's iCloud folder.
   */
  root?: PythonistaRoot
  /**
   * The Pythonista URL scheme to use.
   *
   * Defaults to `pythonista`.
   */
  scheme?: PythonistaScheme
  /**
   * Command-line arguments as one string. Pythonista splits this by spaces.
   */
  args?: string
  /**
   * Command-line arguments as repeated `argv` URL parameters.
   *
   * If at least one `argv` parameter is present, Pythonista ignores `args`.
   */
  argv?: string[]
}

/**
 * Run script payload definition.
 */
type RunScript = RunScriptBase & PythonVersionParameter

/**
 * Run a Pythonista script from your library.
 *
 * @param payload Run script payload.
 * @returns Pythonista run script URL.
 * @example
 * runScript({ path: 'MyScript.py' })
 * // => 'pythonista://MyScript.py?action=run'
 * @example
 * runScript({ path: 'MyScript.py', args: 'foo bar' })
 * // => 'pythonista://MyScript.py?action=run&args=foo%20bar'
 * @example
 * runScript({ path: 'MyScript.py', argv: ['foo', 'bar'] })
 * // => 'pythonista://MyScript.py?action=run&argv=foo&argv=bar'
 * @link https://omz-software.com/pythonista/docs/ios/urlscheme.html
 */
export function runScript(payload: RunScript) {
  const { path, root, scheme = 'pythonista', args, argv, version, py } = payload
  const hasArgv = Array.isArray(argv) && argv.length > 0
  const params = qs({
    action: 'run',
    ...(root ? { root } : {}),
    ...(hasArgv ? { argv } : args ? { args } : {}),
    ...(version ? { version } : {}),
    ...(py ? { py } : {}),
  })

  return `${scheme}://${path}${params}`
}
