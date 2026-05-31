export type CalendarsReaddleCommand = 'open' | 'newevent' | 'parse' | 'newtask'
export type CalendarsReaddleScheme = 'calendarslite' | 'calendars'

/**
 * Calendars by Readdle scheme selection payload definition.
 */
export type CalendarsReaddleSchemePayload = {
  /**
   * Official URL scheme. `calendarslite` is documented for Calendars, and `calendars`
   * is documented for Calendars 5.
   */
  scheme?: CalendarsReaddleScheme
}

/**
 * Calendars by Readdle parse command payload definition.
 */
export type CalendarsReaddleParseEventPayload = CalendarsReaddleSchemePayload & {
  /**
   * Natural-language event name.
   */
  text?: string
}

export function calendarsReaddleUrl(command: CalendarsReaddleCommand, payload: CalendarsReaddleSchemePayload = {}) {
  const { scheme = 'calendarslite' } = payload

  return `${scheme}://${command}`
}

export function calendarsReaddleParseUrl(payload: CalendarsReaddleParseEventPayload = {}) {
  const { text } = payload
  const url = calendarsReaddleUrl('parse', payload)

  return text === undefined ? url : `${url}="${encodeURIComponent(text)}"`
}
