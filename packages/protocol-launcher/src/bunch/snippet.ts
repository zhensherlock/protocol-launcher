import { type BunchCallbacks, type BunchMethodSyntax, type BunchVariables, bunchSegmentsUrl, bunchUrl } from './shared'

/**
 * Snippet method payload definition.
 */
export type Snippet = BunchCallbacks & {
  /**
   * Path to the snippet file.
   */
  file: string

  /**
   * Optional fragment name to load from the snippet.
   */
  fragment?: string

  /**
   * URL syntax documented by Bunch.
   */
  syntax?: BunchMethodSyntax

  /**
   * Additional query parameters passed as snippet variables.
   */
  variables?: BunchVariables
}

/**
 * Load a Bunch snippet and pass optional variables.
 *
 * @param payload Snippet method payload.
 * @returns Bunch snippet URL.
 * @example
 * snippet({ file: 'useful.snippets', fragment: 'Music', variables: { playlist: 'spotify:playlist:123' } })
 * // => 'x-bunch://snippet?file=useful.snippets&fragment=Music&playlist=spotify%3Aplaylist%3A123'
 * @example
 * snippet({ file: 'useful.snippets', fragment: 'Speak', syntax: 'path', variables: { var1: 'foo' } })
 * // => 'x-bunch://snippet/useful.snippets/Speak?var1=foo'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function snippet(payload: Snippet) {
  const { file, fragment, syntax, variables } = payload

  if (syntax === 'path') {
    return bunchSegmentsUrl(['snippet', file, ...(fragment ? [fragment] : [])], variables, payload)
  }

  return bunchUrl(
    'snippet',
    {
      file,
      fragment,
      ...variables,
    },
    payload,
  )
}
