export type PushcutView =
  | 'notifications'
  | 'triggers'
  | 'widgets'
  | 'server'
  | 'account'
  | 'runServer'
  | 'monitorServer'
  | 'notificationsLog'

export interface OpenViewPayload {
  /**
   * Pushcut view name documented by the official URL scheme page.
   */
  view: PushcutView
}

export function pushcutOpenUrl(view?: PushcutView) {
  return `pushcut://open/${view ?? ''}`
}
