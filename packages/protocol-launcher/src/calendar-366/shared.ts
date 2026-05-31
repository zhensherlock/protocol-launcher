import { qs } from '@protocol-launcher/shared'

export type Calendar366ItemType = 'event' | 'task'
export type Calendar366Command = 'add' | 'open' | 'show' | 'summarize' | 'import'
export type Calendar366View = 'year' | 'month' | 'agenda' | 'week' | 'day' | 'tasks'
export type Calendar366TaskList = 0 | 1 | 2 | 3
export type Calendar366ImportUrl = `file://${string}` | `https://${string}`

/**
 * Calendar 366 add command payload definition.
 */
export type Calendar366AddPayload = {
  /**
   * Item type to add.
   */
  type: Calendar366ItemType

  /**
   * Natural language input.
   */
  query?: string
}

/**
 * Calendar 366 item creation payload definition.
 */
export type Calendar366AddItemPayload = {
  /**
   * Natural language input.
   */
  query?: string
}

/**
 * Calendar 366 open command payload definition.
 */
export type Calendar366OpenItemPayload =
  | {
      /**
       * Event item type.
       */
      type: 'event'

      /**
       * EventKit calendarItemExternalIdentifier or identifier.
       */
      id: string
    }
  | {
      /**
       * Task item type.
       */
      type: 'task'

      /**
       * EventKit calendarItemExternalIdentifier or identifier.
       */
      id: string

      /**
       * Optional task date as timeIntervalSince1970.
       */
      date?: number
    }

/**
 * Calendar 366 show command payload definition.
 */
export type Calendar366ShowPayload = {
  /**
   * View to show.
   */
  view?: Calendar366View

  /**
   * Task list filter: `0` Today, `1` Overdue, `2` All, `3` Important.
   */
  tasks?: Calendar366TaskList

  /**
   * Date as timeIntervalSince1970.
   */
  date?: number
}

/**
 * Calendar 366 import command payload definition.
 */
export type Calendar366ImportCalendarPayload = {
  /**
   * Calendar file URL. Calendar 366 documents `file://` and `https://` URLs.
   */
  url: Calendar366ImportUrl
}

export function calendar366Url(command: Calendar366Command, params: Record<string, unknown> = {}) {
  return `cal366://${command}${qs(params)}`
}

export function assertCalendar366ImportUrl(url: string): asserts url is Calendar366ImportUrl {
  if (!url.startsWith('file://') && !url.startsWith('https://')) {
    throw new Error('Calendar 366 import URL must start with file:// or https://.')
  }
}
