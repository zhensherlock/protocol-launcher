/**
 * BusyCal URL path segment value.
 */
export type BusyCalPathValue = string | number

/**
 * BusyCal iOS autosave parameter.
 */
export type BusyCalIosAutosave = true | 1

/**
 * BusyCal iOS launch view.
 */
export type BusyCalIosView = 'list' | 'day' | 'week' | 'month' | 'tasks'

/**
 * BusyCal macOS logging level.
 */
export type BusyCalLogLevel = -2 | -1 | 0 | 1 | 2 | 3 | 4

/**
 * BusyCal macOS crash reporting option.
 */
export type BusyCalCrashReportingOption = 0 | 1

/**
 * BusyCal natural language event payload definition.
 */
export type BusyCalNewEventPayload = {
  /**
   * Natural language event description.
   *
   * @example 'Staff meeting Thursday at 10am'
   */
  description: string

  /**
   * Text to show in the notes section.
   */
  notes?: string
}

/**
 * BusyCal natural language task payload definition.
 */
export type BusyCalNewTaskPayload = {
  /**
   * Natural language task description, without the leading task hyphen.
   *
   * @example 'Call Bob tomorrow'
   */
  description: string

  /**
   * Text to show in the notes section.
   */
  notes?: string
}

/**
 * BusyCal iOS natural language event payload definition.
 */
export type BusyCalNewIosEventPayload = BusyCalNewEventPayload & {
  /**
   * Optional iOS autosave parameter. BusyCal documents `true` and `1`.
   */
  autosave?: BusyCalIosAutosave
}

/**
 * BusyCal iOS natural language task payload definition.
 */
export type BusyCalNewIosTaskPayload = BusyCalNewTaskPayload & {
  /**
   * Optional iOS autosave parameter. BusyCal documents `true` and `1`.
   */
  autosave?: BusyCalIosAutosave
}

/**
 * BusyCal find payload definition.
 */
export type BusyCalFindPayload = {
  /**
   * Calendar name. Leave undefined to search all calendars.
   */
  calendar?: string

  /**
   * Event or task title.
   */
  title: string

  /**
   * Occurrence date in `yyyy-MM-dd'T'HH:mm:ssZ` or `yyyy-MM-dd` format.
   */
  date?: string
}

/**
 * BusyCal date payload definition.
 */
export type BusyCalDatePayload = {
  /**
   * Date in `yyyy-MM-dd` format, or `now`.
   */
  date: string
}

/**
 * BusyCal filter payload definition.
 */
export type BusyCalFilterPayload = {
  /**
   * Exact Smart Filter or Calendar Set name.
   */
  name: string
}

/**
 * BusyCal calendar subscription payload definition.
 */
export type BusyCalSubscribeCalendarPayload = {
  /**
   * Calendar feed URL using the documented `webcal://` scheme.
   */
  url: string
}

/**
 * BusyCal iOS launch view payload definition.
 */
export type BusyCalLaunchIosViewPayload = {
  /**
   * BusyCal iOS view to open.
   */
  view: BusyCalIosView
}

/**
 * BusyCal do-not-disturb payload definition.
 */
export type BusyCalDoNotDisturbPayload = {
  /**
   * Number of minutes. Use `0` to turn DND off.
   */
  minutes: number
}

/**
 * BusyCal logging level payload definition.
 */
export type BusyCalLogLevelPayload = {
  /**
   * Logging level: Off = -2, Error = -1, Warn = 0, Info = 1,
   * Detailed = 2, Verbose = 3, Low Level = 4.
   */
  level: BusyCalLogLevel
}

/**
 * BusyCal crash reporting payload definition.
 */
export type BusyCalCrashReportingPayload = {
  /**
   * Crash reporting option: Off = 0, On = 1.
   */
  option: BusyCalCrashReportingOption
}

export function encodeBusyCalSegment(value: BusyCalPathValue) {
  return encodeURIComponent(String(value)).replace(/%2B/g, '+')
}

export function busyCalNewUrl(scheme: 'busycalevent' | 'busycal', description: string, notes?: string) {
  return `${scheme}://new/${encodeBusyCalSegment(description)}${notes === undefined ? '' : `/${encodeBusyCalSegment(notes)}`}`
}

export function busyCalNewIosUrl(description: string, notes?: string, autosave?: BusyCalIosAutosave) {
  const url = busyCalNewUrl('busycal', description, notes)

  if (autosave === undefined) return url

  return `${url}${notes === undefined ? '/' : ''}/${autosave}`
}

export function busyCalNewIosTaskUrl(description: string, notes?: string, autosave?: BusyCalIosAutosave) {
  const url = busyCalNewUrl('busycal', `-${description}`, notes)

  if (autosave === undefined) return url

  return `${url}/${autosave}`
}
