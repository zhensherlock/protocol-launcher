type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>
  }[Keys]

export interface DashSearchPayload {
  /**
   * Search query to send to Dash.
   *
   * @example 'string'
   */
  query: string
}

export interface DashSearchDocsetsPayload extends DashSearchPayload {
  /**
   * Dash docset keyword or Search Profile keyword trigger.
   *
   * @example 'php'
   */
  keyword: string
}

export type DashPluginSearchPayload = RequireAtLeastOne<{
  /**
   * Comma-separated Dash docset keywords.
   *
   * @example 'python,django'
   */
  keys?: string
  /**
   * Search query to send to Dash. Dash's plugin docs require this value to be percent-encoded.
   *
   * @example 'string'
   */
  query?: string
}>

export interface DashFeedPayload {
  /**
   * Docset feed URL.
   *
   * @example 'http://kapeli.com/feeds/NodeJS.xml'
   */
  url: string
}

export interface DashInstallDocsetPayload {
  /**
   * Name of the repo to install from, as seen in Dash Settings > Downloads.
   *
   * @example 'Ruby Docsets'
   */
  repoName: string
  /**
   * Name of the docset entry to install, as shown in repo search results.
   *
   * @example 'cheatset'
   */
  entryName: string
  /**
   * Optional version number to install when the entry supports specific versions.
   *
   * @example '1.3.3'
   */
  version?: string
}

function dashValue(value: string) {
  return encodeURIComponent(value)
}

export function dashSearchQuery(query: string) {
  return `dash://?query=${dashValue(query)}`
}

export function dashKeywordSearchQuery(payload: DashSearchDocsetsPayload) {
  return `dash://?query=${dashValue(payload.keyword)}:${dashValue(payload.query)}`
}

function normalizePluginKeys(keys: string) {
  return keys
    .split(',')
    .map(key => dashValue(key))
    .join(',')
}

export function dashPluginSearchUrl(payload: DashPluginSearchPayload) {
  const params = [
    ...(payload.keys !== undefined ? [`keys=${normalizePluginKeys(payload.keys)}`] : []),
    ...(payload.query !== undefined ? [`query=${dashValue(payload.query)}`] : []),
  ]

  return `dash-plugin://${params.join('&')}`
}

export function dashFeedUrl(url: string) {
  return `dash-feed://${dashValue(url)}`
}

export function dashInstallUrl(payload: DashInstallDocsetPayload) {
  const params = [
    `repo_name=${payload.repoName}`,
    `entry_name=${payload.entryName}`,
    ...(payload.version !== undefined ? [`version=${payload.version}`] : []),
  ]

  return `dash-install://${params.join('&')}`
}
