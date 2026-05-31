import { qs } from '@protocol-launcher/shared'

export type SortedOpenItem = 'today' | 'inbox' | 'new' | 'search'
export type SortedWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7
export type SortedEarlyAlert = number | 'none'
export type SortedLock = string

/**
 * Sorted open item payload definition.
 */
export type SortedOpenPayload = {
  /**
   * Official Sorted open item value.
   */
  item: SortedOpenItem
}

/**
 * Sorted open date payload definition.
 */
export type SortedOpenDatePayload = {
  /**
   * Date in `yyyy-MM-dd` format, or a documented casual date such as `today`, `tomorrow`, or `yesterday`.
   */
  date: string
}

/**
 * Sorted open date offset payload definition.
 */
export type SortedOpenOffsetPayload = {
  /**
   * Number of days from today.
   */
  offset: number
}

/**
 * Sorted open next weekday payload definition.
 */
export type SortedOpenWeekdayPayload = {
  /**
   * Number code for the next weekday. Sunday is `1`, Monday is `2`, etc.
   */
  weekday: SortedWeekday
}

/**
 * Sorted open list payload definition.
 */
export type SortedOpenListPayload = {
  /**
   * Title of the list.
   */
  list: string

  /**
   * Comma-separated list of tag titles.
   */
  filterByTags?: string
}

/**
 * Sorted open tag payload definition.
 */
export type SortedOpenTagPayload = {
  /**
   * Title of the tag.
   */
  tag: string

  /**
   * Comma-separated list of tag titles.
   */
  filterByTags?: string
}

/**
 * Sorted search payload definition.
 */
export type SortedSearchPayload = {
  /**
   * Keywords of the items.
   */
  search: string
}

/**
 * Sorted shared add payload definition.
 */
export type SortedAddSharedPayload = {
  /**
   * Text title for the item.
   */
  title: string

  /**
   * Date in `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` format.
   */
  date?: string

  /**
   * Time in `HH:mm` format. Sorted ignores this when `date` is given.
   */
  time?: string

  /**
   * Duration of item in minutes.
   */
  duration?: number

  /**
   * Early alert in minutes, or `none` for no alert.
   */
  earlyAlert?: SortedEarlyAlert
}

/**
 * Sorted add task payload definition.
 */
export type SortedAddTaskPayload = SortedAddSharedPayload & {
  /**
   * Name of the list.
   */
  list?: string

  /**
   * Comma-separated list of tag titles.
   */
  tags?: string

  /**
   * Official `lock` parameter value. Sorted documents the parameter but does not specify concrete serialized values.
   */
  lock?: SortedLock

  /**
   * Completion date in `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` format.
   */
  completionDate?: string
}

/**
 * Sorted add event payload definition.
 */
export type SortedAddEventPayload = SortedAddSharedPayload & {
  /**
   * Name of the calendar.
   */
  calendar?: string

  /**
   * Location text.
   */
  location?: string
}

export function sortedOpenUrl(params: Record<string, unknown>) {
  return sortedUrl('open', params)
}

export function sortedAddUrl(params: Record<string, unknown>) {
  return sortedUrl('add', params)
}

export function sortedSharedAddParams(payload: SortedAddSharedPayload) {
  const { title, date, time, duration, earlyAlert } = payload

  return {
    title,
    ...(date ? { date } : {}),
    ...(time ? { time } : {}),
    ...(duration !== undefined ? { duration } : {}),
    ...(earlyAlert !== undefined ? { earlyAlert } : {}),
  }
}

function sortedUrl(action: 'open' | 'add', params: Record<string, unknown>) {
  return `sorted://x-callback-url/${action}${qs(params)}`
}
