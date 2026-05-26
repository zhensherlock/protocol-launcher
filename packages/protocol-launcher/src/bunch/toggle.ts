import {
  type BunchByName,
  type BunchByTag,
  type BunchCallbacks,
  type BunchMethodSyntax,
  type BunchVariables,
  bunchPathUrl,
  bunchUrl,
  targetParams,
} from './shared'

type ToggleByName = BunchByName &
  BunchCallbacks & {
    /**
     * URL syntax documented by Bunch.
     */
    syntax?: BunchMethodSyntax

    /**
     * Additional query parameters passed as frontmatter values.
     */
    variables?: BunchVariables
  }

type ToggleByTag = BunchByTag &
  BunchCallbacks & {
    syntax?: never

    /**
     * Additional query parameters passed as frontmatter values.
     */
    variables?: BunchVariables
  }

/**
 * Toggle method payload definition.
 */
export type Toggle = ToggleByName | ToggleByTag

/**
 * Toggle a Bunch.
 *
 * @param payload Toggle method payload.
 * @returns Bunch toggle URL.
 * @example
 * toggle({ bunch: 'Comms' })
 * // => 'x-bunch://toggle?bunch=Comms'
 * @example
 * toggle({ bunch: 'Comms', syntax: 'path' })
 * // => 'x-bunch://toggle/Comms'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function toggle(payload: Toggle) {
  const { variables } = payload

  if ('bunch' in payload && payload.bunch !== undefined && payload.syntax === 'path') {
    return bunchPathUrl('toggle', payload.bunch, variables, payload)
  }

  return bunchUrl(
    'toggle',
    {
      ...targetParams(payload),
      ...variables,
    },
    payload,
  )
}
