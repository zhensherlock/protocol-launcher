import {
  type BunchByName,
  type BunchByTag,
  type BunchCallbacks,
  type BunchMethodSyntax,
  bunchPathUrl,
  bunchUrl,
  targetParams,
} from './shared'

type EditByName = BunchByName &
  BunchCallbacks & {
    /**
     * URL syntax documented by Bunch.
     */
    syntax?: BunchMethodSyntax
  }

type EditByTag = BunchByTag &
  BunchCallbacks & {
    syntax?: never
  }

/**
 * Edit method payload definition.
 */
export type Edit = EditByName | EditByTag

/**
 * Edit a Bunch.
 *
 * @param payload Edit method payload.
 * @returns Bunch edit URL.
 * @example
 * edit({ bunch: 'Example' })
 * // => 'x-bunch://edit?bunch=Example'
 * @example
 * edit({ bunch: 'Example', syntax: 'path' })
 * // => 'x-bunch://edit/Example'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function edit(payload: Edit) {
  if ('bunch' in payload && payload.bunch !== undefined && payload.syntax === 'path') {
    return bunchPathUrl('edit', payload.bunch, {}, payload)
  }

  return bunchUrl('edit', targetParams(payload), payload)
}
