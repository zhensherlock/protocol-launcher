import { launchbarUrl } from './shared'

/**
 * Execute payload definition.
 */
export type Execute = {
  /**
   * Full path of the Unix command.
   */
  path: string

  /**
   * Optional single argument. LaunchBar applies necessary quoting and escaping automatically.
   */
  argument?: string

  /**
   * Optional space-separated argument list. The caller must provide any necessary quoting or escaping.
   */
  arguments?: string
}

/**
 * Create a LaunchBar execute URL for Search Templates.
 *
 * @param payload Execute payload.
 * @returns LaunchBar execute URL.
 * @example
 * execute({ path: '/usr/local/bin/MyScript', argument: '*' })
 * // => 'x-launchbar:execute?path=/usr/local/bin/MyScript&argument=*'
 * @example
 * execute({ path: '/usr/bin/open', arguments: '-a "*"' })
 * // => 'x-launchbar:execute?path=/usr/bin/open&arguments=-a+%22*%22'
 * @link https://www.obdev.at/resources/launchbar/help/URLCommands.html
 */
export function execute(payload: Execute) {
  return launchbarUrl('execute', [
    ['path', payload.path],
    ['argument', payload.argument],
    ['arguments', payload.arguments],
  ])
}
