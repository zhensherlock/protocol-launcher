import { qs } from '@protocol-launcher/shared'

export type RemoteDesktopManagerAction = 'open' | 'find' | 'edit' | 'view' | 'OpenWithMacro' | 'select'

export type RemoteDesktopManagerSelectTabpage =
  | 'Overview'
  | 'Documentation'
  | 'Macros/Scripts/Tools'
  | 'Management Tools'
  | 'Information'
  | 'Attachments'
  | 'Logs'
  | 'Recordings'

export type RemoteDesktopManagerOpenExampleTabpage = 'Dashboard'

export type RemoteDesktopManagerTabpage = RemoteDesktopManagerOpenExampleTabpage | RemoteDesktopManagerSelectTabpage

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

type RemoteDesktopManagerBaseParameterPayload = {
  /**
   * Workspace or database ID.
   *
   * @example 'd4cb6537-0471-4c07-a91b-43a5e1f1f007'
   */
  dataSource?: string

  /**
   * Session ID from the Advanced properties of a session.
   *
   * @example 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'
   */
  session?: string

  /**
   * Template ID of an entry. Remote Desktop Manager requires `Host` when `Template` is used.
   *
   * @example 'b32e4f20-7c1e-4872-b5cb-c893cc2fc272'
   */
  template?: string

  /**
   * Hostname or IP address of the remote device.
   *
   * @example 'server.example.com'
   */
  host?: string

  /**
   * Port to use.
   *
   * @example 3389
   */
  port?: string | number

  /**
   * Username to use.
   *
   * @example 'admin'
   */
  username?: string

  /**
   * Password to use.
   *
   * @example 'password'
   */
  password?: string

  /**
   * Domain to use.
   *
   * @example 'EXAMPLE'
   */
  domain?: string

  /**
   * Tab title when a session is launched using Embedded display mode.
   *
   * @example 'Support Session'
   */
  title?: string

  /**
   * Value used to populate the Search field.
   *
   * @example 'RDP'
   */
  filter?: string
}

export type RemoteDesktopManagerParameterPayload = RemoteDesktopManagerBaseParameterPayload

type RemoteDesktopManagerNonTemplatePayload = Omit<RemoteDesktopManagerParameterPayload, 'template'> & {
  template?: undefined
}

type RemoteDesktopManagerTemplatePayload = RemoteDesktopManagerParameterPayload & {
  /**
   * Template ID of an entry. Remote Desktop Manager requires `Host` when `Template` is used.
   *
   * @example 'b32e4f20-7c1e-4872-b5cb-c893cc2fc272'
   */
  template: string

  /**
   * Hostname or IP address of the remote device.
   *
   * @example 'server.example.com'
   */
  host: string
}

export type RemoteDesktopManagerPayload =
  | RequireAtLeastOne<RemoteDesktopManagerNonTemplatePayload>
  | RemoteDesktopManagerTemplatePayload

export type RemoteDesktopManagerOpenPayload =
  | RemoteDesktopManagerPayload
  | (RemoteDesktopManagerPayload & {
      /**
       * Devolutions' official `open` example uses `Tabpage=Dashboard`.
       */
      tabpage: RemoteDesktopManagerOpenExampleTabpage
    })

export type RemoteDesktopManagerSelectPayload = RemoteDesktopManagerPayload & {
  /**
   * Dashboard tab to focus after startup.
   *
   * @example 'Overview'
   */
  tabpage?: RemoteDesktopManagerSelectTabpage
}

export function remoteDesktopManagerUrl(
  action: RemoteDesktopManagerAction,
  payload: RemoteDesktopManagerPayload | RemoteDesktopManagerOpenPayload | RemoteDesktopManagerSelectPayload,
) {
  const tabpage = 'tabpage' in payload ? payload.tabpage : undefined

  return `rdm://${action}${qs({
    DataSource: payload.dataSource,
    Session: payload.session,
    Template: payload.template,
    Host: payload.host,
    Port: payload.port,
    Username: payload.username,
    Password: payload.password,
    Domain: payload.domain,
    Title: payload.title,
    Filter: payload.filter,
    Tabpage: tabpage,
  })}`
}
