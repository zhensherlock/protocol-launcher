import { qs } from '@protocol-launcher/shared'

export type FindAnyFileWindowMode = 0 | 1 | 2

export type FindAnyFileTextValues = string | readonly string[]

export type FindAnyFileJsonPrimitive = string | number | boolean | null

export type FindAnyFileJsonValue =
  | FindAnyFileJsonPrimitive
  | readonly FindAnyFileJsonValue[]
  | { readonly [key: string]: FindAnyFileJsonValue }

export type FindAnyFileJsonData = { readonly [key: string]: FindAnyFileJsonValue }

export type FindAnyFileRunControl =
  | {
      /**
       * `run=0` prevents the search from automatically starting; `run=1` forces the search to start.
       */
      run?: 0 | 1
      norun?: never
    }
  | {
      run?: never
      /**
       * Adds FAF's documented bare `norun` parameter.
       */
      norun?: true
    }

export type FindAnyFileFindFields = {
  /**
   * Text for FAF's input fields. A string is serialized as `inp`; an array is serialized as `inp1`, `inp2`, ...
   */
  inp?: FindAnyFileTextValues
  /**
   * Search locations. A string is serialized as `loc`; an array is serialized as `loc1`, `loc2`, ...
   */
  loc?: FindAnyFileTextValues
  /**
   * Selects the Find window: 0 reuses the frontmost window, 1 reuses a non-altered window, 2 opens a new window.
   */
  win?: FindAnyFileWindowMode
  /**
   * `root=1` performs the search in root mode.
   */
  root?: 1
  /**
   * Search Template name without the `.faf` extension.
   */
  tpl?: string
}

export type FindAnyFileFindPayload = FindAnyFileFindFields & FindAnyFileRunControl

export type FindAnyFileFindInLocationPayload = Omit<FindAnyFileFindFields, 'loc'> &
  FindAnyFileRunControl & {
    /**
     * Search locations. A string is serialized as `loc`; an array is serialized as `loc1`, `loc2`, ...
     */
    loc: FindAnyFileTextValues
  }

export type FindAnyFileFindWithTemplatePayload = Omit<FindAnyFileFindFields, 'tpl'> &
  FindAnyFileRunControl & {
    /**
     * Search Template name without the `.faf` extension.
     */
    tpl: string
  }

function numberedParams(prefix: string, value: FindAnyFileTextValues | undefined, singleName: string) {
  if (value === undefined) return {}

  if (!Array.isArray(value)) {
    return { [singleName]: value }
  }

  return Object.fromEntries(value.map((item, index) => [`${prefix}${index + 1}`, item]))
}

export function findAnyFileFindUrl(payload: FindAnyFileFindPayload = {}) {
  const { inp, loc, win, root, run, norun, tpl } = payload
  const query = qs({
    ...numberedParams('inp', inp, 'inp'),
    ...numberedParams('loc', loc, 'loc'),
    win,
    root,
    run,
    tpl,
  })

  if (!norun) {
    return `fafapp://find${query || '?'}`
  }

  return `fafapp://find${query ? `${query}&norun` : '?norun'}`
}

function encodeJsonStrings(value: FindAnyFileJsonValue): FindAnyFileJsonValue {
  if (typeof value === 'string') {
    return encodeURIComponent(value)
  }

  if (Array.isArray(value)) {
    return value.map(encodeJsonStrings)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, encodeJsonStrings(item)]))
  }

  return value
}

export function encodeFindAnyFileJsonData(json: string | FindAnyFileJsonData) {
  return typeof json === 'string' ? json : JSON.stringify(encodeJsonStrings(json))
}
