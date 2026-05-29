import { qs } from '@protocol-launcher/shared'

export type TimepageEvent = 'next' | (string & {})

export type TimepageDay = string

export type TimepageIndex = 'this' | 'next' | number

export interface AddEventPayload {
  /**
   * Event title.
   */
  title?: string

  /**
   * Event day. Official formats include `yyyy-mm-dd`, `today`, `tomorrow`, or an upcoming weekday name.
   */
  day?: TimepageDay

  /**
   * x-callback-url success callback URL.
   */
  xSuccess?: string

  /**
   * x-callback-url cancel callback URL.
   */
  xCancel?: string
}

export interface EventPayload {
  /**
   * `next` or a Timepage event id.
   */
  event: TimepageEvent
}

export interface DayPayload {
  /**
   * Day to open. Official formats include `yyyy-mm-dd`, `today`, `tomorrow`, or an upcoming weekday name.
   */
  day: TimepageDay
}

export interface WeekPayload {
  /**
   * Week to open: `this`, `next`, or a numeric offset from the current week.
   */
  week: TimepageIndex
}

export interface MonthPayload {
  /**
   * Month to open: `this`, `next`, or a numeric offset from the current month.
   */
  month: TimepageIndex
}

export type WeatherPayload = (DayPayload & { week?: never }) | (WeekPayload & { day?: never })

export interface SearchPayload {
  /**
   * Search terms to show in Timepage.
   */
  query: string
}

export interface GetEventPayload extends EventPayload {
  /**
   * x-callback-url success callback URL.
   */
  xSuccess: string
}

export function timepageUrl(action = '', params: Record<string, unknown> = {}) {
  return `timepage://${action}${qs(params)}`
}

export function timepageXCallbackUrl(action: string, params: Record<string, unknown>) {
  return `timepage://x-callback-url/${action}${qs(params)}`
}
