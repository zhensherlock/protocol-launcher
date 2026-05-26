import {
  type BunchByName,
  type BunchByTag,
  type BunchCallbacks,
  type BunchMethodSyntax,
  bunchPathUrl,
  bunchUrl,
  targetParams,
} from './shared'

type CloseByName = BunchByName &
  BunchCallbacks & {
    /**
     * URL syntax documented by Bunch.
     */
    syntax?: BunchMethodSyntax
  }

type CloseByTag = BunchByTag &
  BunchCallbacks & {
    syntax?: never
  }

/**
 * Close method payload definition.
 */
export type Close = CloseByName | CloseByTag

/**
 * Close a Bunch.
 *
 * @param payload Close method payload.
 * @returns Bunch close URL.
 * @example
 * close({ bunch: 'Comms' })
 * // => 'x-bunch://close?bunch=Comms'
 * @example
 * close({ bunch: 'Comms', syntax: 'path' })
 * // => 'x-bunch://close/Comms'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function close(payload: Close) {
  if ('bunch' in payload && payload.bunch !== undefined && payload.syntax === 'path') {
    return bunchPathUrl('close', payload.bunch, {}, payload)
  }

  return bunchUrl('close', targetParams(payload), payload)
}
