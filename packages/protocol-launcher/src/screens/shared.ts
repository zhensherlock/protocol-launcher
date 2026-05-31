import { qs } from '@protocol-launcher/shared'

/**
 * Screens query parameters shared by `screens://`, `vnc://`, and `ssh://`.
 */
export type ScreensCommonOptions = {
  /**
   * Initiate the connection to a Mac as a Guest user.
   *
   * @example true
   */
  guest?: true

  /**
   * Initiate the connection in Observe mode.
   *
   * @example true
   */
  observe?: true
}

/**
 * Screens username/password URL credentials.
 */
export type ScreensCredentials =
  | {
      username?: undefined
      password?: undefined
    }
  | {
      /**
       * Username to include before the remote target.
       *
       * @example 'john'
       */
      username: string

      /**
       * Password to include with the username.
       *
       * @example 'sekret'
       */
      password?: string
    }

/**
 * Open a saved Screen payload definition.
 */
export type ScreensSavedScreenPayload = ScreensCredentials &
  ScreensCommonOptions & {
    /**
     * Saved screen IP address, hostname, or name.
     *
     * @example 'Johns-MacBook-Pro.local'
     */
    target: string
  }

/**
 * VNC connection payload definition.
 */
export type ScreensConnectionPayload = ScreensCredentials &
  ScreensCommonOptions & {
    /**
     * Remote IP address or hostname.
     *
     * @example '10.0.1.10'
     */
    host: string

    /**
     * Remote port.
     *
     * @example 5900
     */
    port?: string | number
  }

/**
 * SSH-secured Screens connection payload definition.
 */
export type ScreensSshPayload = ScreensConnectionPayload & {
  /**
   * Stored SSH key name in Screens. It must match the name in Screens' SSH Keys settings.
   *
   * @example 'My Work Key'
   */
  sshKey?: string
}

type ScreensScheme = 'screens' | 'vnc' | 'ssh'

type ScreensAuthorityPayload = {
  target: string
  port?: string | number
  username?: string
  password?: string
}

type ScreensQueryPayload = ScreensCommonOptions & {
  sshKey?: string
}

function encodeScreensComponent(value: string | number) {
  return encodeURIComponent(String(value))
}

function credentials(payload: ScreensAuthorityPayload) {
  if (!payload.username) return ''

  const username = encodeScreensComponent(payload.username)
  const password = payload.password === undefined ? '' : `:${encodeScreensComponent(payload.password)}`

  return `${username}${password}@`
}

export function screensUrl(scheme: ScreensScheme, payload: ScreensAuthorityPayload, query: ScreensQueryPayload = {}) {
  const port = payload.port === undefined ? '' : `:${encodeScreensComponent(payload.port)}`
  const params = qs({
    ...(query.sshKey ? { 'ssh-key': query.sshKey } : {}),
    ...(query.guest ? { guest: true } : {}),
    ...(query.observe ? { observe: true } : {}),
  })

  return `${scheme}://${credentials(payload)}${encodeScreensComponent(payload.target)}${port}${params}`
}
