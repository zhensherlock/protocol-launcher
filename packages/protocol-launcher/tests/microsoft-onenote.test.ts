import { describe, expect, test } from 'vitest'
import { microsoftOneNote } from '../src'

describe('microsoftOneNote', () => {
  test('openClientUrl should pass through a OneNote client URL returned by Microsoft Graph', () => {
    const url = microsoftOneNote.openClientUrl({
      href: 'onenote:https://...',
    })

    expect(url).toBe('onenote:https://...')
  })

  test('openAndroidClientUrl should surround GUID values with braces', () => {
    const url = microsoftOneNote.openAndroidClientUrl({
      href: 'onenote:https://...?value=11111111-1111-1111-1111-111111111111&',
    })

    expect(url).toBe('onenote:https://...?value={11111111-1111-1111-1111-111111111111}&')
  })

  test('client URLs should use the onenote prefix', () => {
    expect(() =>
      microsoftOneNote.openClientUrl({
        href: 'https://...',
      }),
    ).toThrow('Microsoft OneNote client URL must start with the onenote: prefix.')
  })

  test('client URLs should use the documented lowercase onenote prefix', () => {
    expect(() =>
      microsoftOneNote.openClientUrl({
        href: 'OneNote:https://...',
      }),
    ).toThrow('Microsoft OneNote client URL must start with the onenote: prefix.')
  })

  test('client URLs should contain a valid HTTPS URL after the onenote prefix', () => {
    expect(() =>
      microsoftOneNote.openClientUrl({
        href: 'onenote:https://',
      }),
    ).toThrow('Microsoft OneNote client URL must contain a valid HTTPS URL after the onenote: prefix.')
  })

  test('client URLs should not wrap non-HTTPS URLs', () => {
    expect(() =>
      microsoftOneNote.openClientUrl({
        href: 'onenote:http://...',
      }),
    ).toThrow('Microsoft OneNote client URL must contain an HTTPS URL after the onenote: prefix.')
  })
})
