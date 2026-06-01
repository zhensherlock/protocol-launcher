export type RoyalTsCliScalar = string | number

export type RoyalTsCliOptionValue = RoyalTsCliScalar | readonly RoyalTsCliScalar[] | null | undefined

export type RoyalTsActionConnectCliOptionName =
  | '-i'
  | '-n'
  | '--template-id'
  | '--credential-id'
  | '--credential-name'
  | '-u'
  | '-p'
  | '--property'

export type RoyalTsActionConnectCliOptions = Partial<Record<RoyalTsActionConnectCliOptionName, RoyalTsCliOptionValue>>

export type RoyalTsDocumentOpenCliOptions = {
  /**
   * Path to the document file to open.
   *
   * @example 'C:\\Connections\\example.rtsz'
   */
  '-f': string

  /**
   * Optional password for a protected document.
   *
   * @example 'password'
   */
  '-p'?: string
}

export type RoyalTsCliOptions = RoyalTsActionConnectCliOptions | RoyalTsDocumentOpenCliOptions

export type RoyalTsCliCommandPayload =
  | {
      /**
       * Royal TS CLI scope for connection actions.
       *
       * @example 'action'
       */
      scope: 'action'

      /**
       * Royal TS CLI action command documented in the command-line page.
       *
       * @example 'connect'
       */
      command: 'connect'

      /**
       * CLI arguments and options to append as URI query parameters.
       *
       * @example { '-n': 'QNAP (SSH)' }
       */
      options?: RoyalTsActionConnectCliOptions
    }
  | {
      /**
       * Royal TS CLI scope for document commands.
       *
       * @example 'document'
       */
      scope: 'document'

      /**
       * Royal TS CLI document commands listed in the command-line page.
       *
       * @example 'open'
       * @example 'close'
       */
      command: 'open'

      /**
       * CLI arguments and options to append as URI query parameters.
       *
       * @example { '-f': 'C:\\Connections\\example.rtsz' }
       */
      options: RoyalTsDocumentOpenCliOptions
    }
  | {
      /**
       * Royal TS CLI scope for document commands.
       *
       * @example 'document'
       */
      scope: 'document'

      /**
       * Royal TS CLI document close command listed in the command-line page.
       *
       * @example 'close'
       */
      command: 'close'

      options?: never
    }

type RoyalTsLegacyCommonPayload = {
  /**
   * Protocol identifier or alias for the connection type.
   *
   * @example 'rdp'
   * @example 'filetransfer'
   */
  protocolIdentifier: string

  /**
   * URI portion after the protocol identifier.
   *
   * @example '192.168.5.16'
   * @example 'Web Server 1'
   */
  uri: string

  /**
   * Optional credentials in the documented `[username:password@]` URI section.
   */
  auth?: RoyalTsLegacyAuth

  /**
   * Legacy `username` query parameter.
   *
   * @example 'admin'
   */
  username?: string

  /**
   * Legacy `password` query parameter.
   *
   * @example 'password'
   */
  password?: string

  /**
   * Legacy `credential` query parameter.
   *
   * @example 'Shared Admin'
   */
  credential?: string

  /**
   * Append the documented `donotactivate=true` query parameter.
   *
   * @example true
   */
  doNotActivate?: true
}

export type RoyalTsLegacyAction = 'connect' | 'disconnect'

export type RoyalTsLegacyUsing = 'uri' | 'name' | 'id' | 'adhoc'

export type RoyalTsLegacyPropertyValue = string | number

export type RoyalTsLegacyAuth = {
  /**
   * Username or credential name in the documented `[username:password@]` URI section.
   *
   * @example 'admin'
   */
  username: string

  /**
   * Optional password in the documented `[username:password@]` URI section.
   *
   * @example 'password'
   */
  password?: string
}

export type RoyalTsLegacyNonAdHocPayload = RoyalTsLegacyCommonPayload & {
  /**
   * Search for an existing object by URI, name, ID, or use the documented default.
   *
   * @example 'uri'
   * @example 'name'
   */
  using?: Exclude<RoyalTsLegacyUsing, 'adhoc'>

  properties?: never
}

export type RoyalTsLegacyAdHocPayload = RoyalTsLegacyCommonPayload & {
  /**
   * Create a new ad hoc connection.
   *
   * @example 'adhoc'
   */
  using: 'adhoc'

  /**
   * Legacy `property_<name>` query parameters. Official docs limit this to `using=adhoc` connections.
   *
   * @example { Description: 'Connected using URI', ColorDepth: 8 }
   */
  properties?: Record<string, RoyalTsLegacyPropertyValue>
}

export type RoyalTsLegacyBasePayload = RoyalTsLegacyNonAdHocPayload | RoyalTsLegacyAdHocPayload

export type RoyalTsLegacyPayload = RoyalTsLegacyBasePayload & {
  /**
   * Legacy action query parameter. Defaults to `connect` in Royal TS when omitted.
   *
   * @example 'connect'
   */
  action?: RoyalTsLegacyAction
}

function encodeCliComponent(value: RoyalTsCliScalar) {
  return encodeURIComponent(String(value)).replace(/%20/g, '+')
}

function cliOptionEntries(options: RoyalTsCliOptions | undefined) {
  return Object.entries(options ?? {}).flatMap(([key, value]) => {
    if (value === undefined || value === null) return []
    if (Array.isArray(value)) {
      return value.map(item => [key, item] as const)
    }

    return [[key, value] as const]
  })
}

function cliQuery(options: RoyalTsCliOptions | undefined) {
  const entries = cliOptionEntries(options)

  if (entries.length === 0) return ''

  return `?${entries.map(([key, value]) => `${encodeCliComponent(key)}=${encodeCliComponent(value)}`).join('&')}`
}

export function royalTsCliUrl(payload: RoyalTsCliCommandPayload) {
  return `rtscli://local/${encodeURIComponent(payload.scope)}/${encodeURIComponent(payload.command)}${cliQuery(payload.options)}`
}

function encodeLegacyComponent(value: RoyalTsLegacyPropertyValue) {
  return encodeURIComponent(String(value))
}

function legacyAuth(auth: RoyalTsLegacyAuth | undefined) {
  if (!auth) return ''

  const password = auth.password === undefined ? '' : `:${encodeLegacyComponent(auth.password)}`

  return `${encodeLegacyComponent(auth.username)}${password}@`
}

function legacyQuery(payload: RoyalTsLegacyPayload) {
  const entries: Array<readonly [string, RoyalTsLegacyPropertyValue]> = [
    ...(payload.using ? ([['using', payload.using]] as const) : []),
    ...(payload.action ? ([['action', payload.action]] as const) : []),
    ...(payload.username ? ([['username', payload.username]] as const) : []),
    ...(payload.password ? ([['password', payload.password]] as const) : []),
    ...(payload.credential ? ([['credential', payload.credential]] as const) : []),
    ...Object.entries(payload.properties ?? {}).map(([name, value]) => [`property_${name}`, value] as const),
    ...(payload.doNotActivate ? ([['donotactivate', 'true']] as const) : []),
  ]

  if (entries.length === 0) return ''

  return `?${entries.map(([key, value]) => `${encodeLegacyComponent(key)}=${encodeLegacyComponent(value)}`).join('&')}`
}

export function royalTsLegacyUrl(payload: RoyalTsLegacyPayload) {
  return `rtsx://${encodeLegacyComponent(payload.protocolIdentifier)}%3a%2f%2f${legacyAuth(payload.auth)}${encodeLegacyComponent(
    payload.uri,
  )}${legacyQuery(payload)}`
}
