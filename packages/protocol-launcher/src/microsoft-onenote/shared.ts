/**
 * Microsoft Graph OneNote client URL payload definition.
 */
export interface OneNoteClientUrlPayload {
  /**
   * OneNote client URL returned by Microsoft Graph at `links.oneNoteClientUrl.href`.
   *
   * @example 'onenote:https://...'
   */
  href: string
}

export function oneNoteClientUrl(href: string) {
  validateOneNoteClientUrl(href)

  return href
}

export function oneNoteAndroidClientUrl(href: string) {
  return oneNoteClientUrl(href).replace(
    /=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&/g,
    '={$1}&',
  )
}

function validateOneNoteClientUrl(href: string) {
  const schemeSeparator = href.indexOf(':')

  if (schemeSeparator === -1 || href.slice(0, schemeSeparator) !== 'onenote') {
    throw new Error('Microsoft OneNote client URL must start with the onenote: prefix.')
  }

  let url: URL

  try {
    url = new URL(href.slice(schemeSeparator + 1))
  } catch {
    throw new Error('Microsoft OneNote client URL must contain a valid HTTPS URL after the onenote: prefix.')
  }

  if (url.protocol !== 'https:') {
    throw new Error('Microsoft OneNote client URL must contain an HTTPS URL after the onenote: prefix.')
  }
}
