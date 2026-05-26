import {
  type BunchByName,
  type BunchByTag,
  type BunchCallbacks,
  type BunchOpenSyntax,
  type BunchVariables,
  bunchPathUrl,
  bunchUrl,
  targetParams,
} from './shared'

type OpenByName = BunchByName &
  BunchCallbacks & {
    /**
     * URL syntax documented by Bunch.
     */
    syntax?: BunchOpenSyntax

    /**
     * Additional query parameters passed as frontmatter values.
     */
    variables?: BunchVariables
  }

type OpenByTag = BunchByTag &
  BunchCallbacks & {
    syntax?: never

    /**
     * Additional query parameters passed as frontmatter values.
     */
    variables?: BunchVariables
  }

/**
 * Open method payload definition.
 */
export type Open = OpenByName | OpenByTag

/**
 * Open a Bunch.
 *
 * @param payload Open method payload.
 * @returns Bunch open URL.
 * @example
 * open({ bunch: 'Comms' })
 * // => 'x-bunch://open?bunch=Comms'
 * @example
 * open({ bunch: 'Comms', syntax: 'shortcut' })
 * // => 'x-bunch://Comms'
 * @example
 * open({ bunch: 'WorkBunch', syntax: 'path' })
 * // => 'x-bunch://open/WorkBunch'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function open(payload: Open) {
  const { variables, syntax } = payload

  if ('bunch' in payload && payload.bunch !== undefined && (syntax === 'shortcut' || syntax === 'path')) {
    return bunchPathUrl(syntax === 'path' ? 'open' : '', payload.bunch, variables, payload)
  }

  return bunchUrl(
    'open',
    {
      ...targetParams(payload),
      ...variables,
    },
    payload,
  )
}
