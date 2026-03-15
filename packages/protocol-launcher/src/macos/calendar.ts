interface Calendar {
  link?: string
}

/**
 * Open Calendar app.
 *
 * @param payload - Optional webcal subscription link.
 * @returns Calendar open URL.
 * @example
 * calendar()
 * // => 'ical://'
 * @example
 * calendar({ link: 'https://p10-calendars.icloud.com/holiday/CN_zh.ics' })
 * // => 'webcal://p10-calendars.icloud.com/holiday/CN_zh.ics'
 */
export function calendar(payload: Calendar = {}) {
  const { link = '' } = payload
  if (!link) {
    return 'ical://'
  }

  return link.replace(/^https?:\/\//, 'webcal://')
}
