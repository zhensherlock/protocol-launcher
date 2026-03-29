import { qs } from '@protocol-launcher/shared'

/**
 * Parse command payload definition for creating events in Fantastical.
 */
type Parse = {
  /**
   * Natural language input for event creation.
   * If specified, other parameters will be ignored.
   *
   * @example 'Lunch with John at 12pm tomorrow'
   */
  sentence?: string

  /**
   * Automatically add the event (be careful!).
   *
   * @default false
   */
  add?: boolean

  /**
   * Create a reminder instead of an event.
   *
   * @default false
   */
  reminder?: boolean

  /**
   * Due date for the event or reminder.
   * Format: yyyy-MM-dd HH:mm
   *
   * @example '2026-03-30 14:00'
   */
  due?: string

  /**
   * Event title.
   *
   * @example 'Team Meeting'
   */
  title?: string

  /**
   * Event location.
   *
   * @example 'Conference Room A'
   */
  location?: string

  /**
   * Event URL.
   *
   * @example 'https://zoom.us/j/123456789'
   */
  url?: string

  /**
   * Event notes.
   *
   * @example 'Discuss Q2 roadmap'
   */
  notes?: string

  /**
   * Event start time.
   * Format: yyyy-MM-dd HH:mm
   *
   * @example '2026-03-30 10:00'
   */
  start?: string

  /**
   * Event end time.
   * Format: yyyy-MM-dd HH:mm
   *
   * @example '2026-03-30 11:00'
   */
  end?: string

  /**
   * All-day event.
   *
   * @default false
   */
  allDay?: boolean

  /**
   * Availability status.
   *
   * @default 'busy'
   */
  availability?: 'free' | 'busy' | 'tentative' | 'unavailable'

  /**
   * Private event (only applies to Exchange calendars).
   *
   * @default false
   */
  private?: boolean
}

/**
 * Create a new event in Fantastical using natural language or structured parameters.
 *
 * @param payload Parse command payload.
 * @returns Fantastical parse URL.
 * @example
 * parse({ sentence: 'Lunch with John at 12pm tomorrow' })
 * // => 'x-fantastical3://parse?sentence=Lunch%20with%20John%20at%2012pm%20tomorrow'
 * @example
 * parse({ title: 'Team Meeting', start: '2026-03-30 10:00', end: '2026-03-30 11:00' })
 * // => 'x-fantastical3://parse?title=Team%20Meeting&start=2026-03-30%2010%3A00&end=2026-03-30%2011%3A00'
 * @example
 * parse({ sentence: 'Meeting', notes: 'Discuss project', add: true })
 * // => 'x-fantastical3://parse?sentence=Meeting&notes=Discuss%20project&add=1'
 * @link https://flexibits.com/support/kb/51
 */
export function parse(payload: Parse = {}) {
  const {
    sentence,
    add = false,
    reminder = false,
    due,
    title,
    location,
    url,
    notes,
    start,
    end,
    allDay = false,
    availability,
    private: isPrivate = false,
  } = payload

  const params = qs({
    ...(sentence ? { sentence } : {}),
    ...(add ? { add: '1' } : {}),
    ...(reminder ? { reminder: '1' } : {}),
    ...(due ? { due } : {}),
    ...(title && !sentence ? { title } : {}),
    ...(location && !sentence ? { location } : {}),
    ...(url && !sentence ? { url } : {}),
    ...(notes ? { notes } : {}),
    ...(start && !sentence ? { start } : {}),
    ...(end && !sentence ? { end } : {}),
    ...(allDay ? { allDay: '1' } : {}),
    ...(availability && !sentence ? { availability } : {}),
    ...(isPrivate ? { private: '1' } : {}),
  })

  return `x-fantastical3://parse${params}`
}
