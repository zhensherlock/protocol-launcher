export type TrueContextCustomScheme = 'truecontext' | 'tcxt' | 'prontoforms'

export type TrueContextUrlFormat = 'scheme' | 'web'

export type TrueContextParameterValue = string | number

export type TrueContextAnswers = Record<string, TrueContextParameterValue>

export type TrueContextTagOperator = 'AND' | 'OR'

export type TrueContextListType = 'forms' | 'drafts' | 'inbox' | 'sent' | 'groupinbox' | 'resourcelibrary'

export type TrueContextOpenType = Exclude<TrueContextListType, 'sent'>

export type TrueContextSendType = 'forms' | 'drafts' | 'inbox'

export type TrueContextStateFilter = 'Any' | 'AllComplete' | 'AllIncomplete' | 'IncompleteUnassigned'

export type TrueContextDateSearchType = 'AnyDate' | 'DatePeriod' | 'DateRange'

export type TrueContextDatePeriod =
  | 'Today'
  | 'Yesterday'
  | 'ThisWeek'
  | 'ThisMonth'
  | 'LastHour'
  | 'TwentyFourHours'
  | 'SevenDays'
  | 'ThirtyDays'

export interface TrueContextUrlOptions {
  /**
   * Custom URL scheme to use for App-to-App calls. TrueContext recommends `truecontext` or `tcxt`.
   */
  scheme?: TrueContextCustomScheme
  /**
   * Use the documented `https://prontofor.ms` alternative instead of a custom URL scheme.
   */
  format?: TrueContextUrlFormat
}

export interface TrueContextCallbacks {
  /**
   * Callback URL used when the user saves, sends, or transfers a form.
   */
  xSuccess?: string
  /**
   * Callback URL used when the user cancels an action.
   */
  xCancel?: string
  /**
   * Callback URL used when the app cannot complete the requested action.
   */
  xError?: string
}

export interface TrueContextTaggedParameters {
  /**
   * Form or resource tag.
   */
  tag?: string
  /**
   * Form or resource tags serialized as the documented `tag.list=[tag1,tag2]` value.
   */
  tagList?: readonly string[]
  /**
   * Match all tags by default, or any tag when set to `OR`.
   */
  tagOperator?: TrueContextTagOperator
}

export type TrueContextActionOptions = TrueContextUrlOptions & TrueContextCallbacks

type TrueContextQueryValue = TrueContextParameterValue | null | undefined

const optionKeys = new Set(['scheme', 'format'])

const parameterNames: Record<string, string> = {
  lang: '_lang',
  tagList: 'tag.list',
  xCancel: 'x-cancel',
  xError: 'x-error',
  xSuccess: 'x-success',
}

function trueContextBase(options: TrueContextUrlOptions) {
  if (options.format === 'web') {
    return 'https://prontofor.ms/x-callback-url'
  }

  return `${options.scheme ?? 'truecontext'}://x-callback-url`
}

function normalizeQueryValue(key: string, value: unknown): TrueContextQueryValue {
  if (key === 'tagList') {
    const tags = Array.isArray(value) ? value : []
    return tags.length > 0 ? `[${tags.join(',')}]` : undefined
  }

  return value as TrueContextQueryValue
}

function encodeTrueContextComponent(value: string) {
  return encodeURIComponent(value).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\*/g, '%2A')
}

function trueContextQuery(entries: Array<[string, TrueContextQueryValue]>) {
  const query = entries
    .flatMap(([key, value]) => {
      if (value === null || value === undefined) return []
      return `${encodeTrueContextComponent(key)}=${encodeTrueContextComponent(String(value))}`
    })
    .join('&')

  return query ? `?${query}` : ''
}

export function trueContextUrl(action: string, payload: object = {}) {
  const entries: Array<[string, TrueContextQueryValue]> = []
  const options = payload as TrueContextUrlOptions

  for (const [key, value] of Object.entries(payload)) {
    if (optionKeys.has(key)) continue

    if (key === 'answers') {
      for (const [answerKey, answerValue] of Object.entries((value ?? {}) as TrueContextAnswers)) {
        entries.push([answerKey, answerValue])
      }
      continue
    }

    entries.push([parameterNames[key] ?? key, normalizeQueryValue(key, value)])
  }

  return `${trueContextBase(options)}${action ? `/${action}` : ''}${trueContextQuery(entries)}`
}
