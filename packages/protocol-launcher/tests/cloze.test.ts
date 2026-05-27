import { describe, expect, test } from 'vitest'
import { cloze } from '../src'

describe('cloze', () => {
  test('openContact should return the documented simplified iOS contact URLs', () => {
    expect(cloze.openContact({ identifier: 'someone@company.com' })).toBe('cloze://contact/someone@company.com')
    expect(cloze.openContact({ identifier: 'company.com' })).toBe('cloze://contact/company.com')
    expect(cloze.openContact({ identifier: 'twitter:cloze' })).toBe('cloze://contact/twitter%3Acloze')
    expect(cloze.openContact({ identifier: 'lead.salesforce.com:9425897598' })).toBe(
      'cloze://contact/lead.salesforce.com%3A9425897598',
    )
  })

  test('openContactCallback should return the documented x-callback-url contact URLs', () => {
    expect(cloze.openContactCallback({ identifier: 'someone@company.com' })).toBe(
      'cloze://x-callback-url/contact/someone@company.com',
    )
    expect(cloze.openContactCallback({ identifier: 'company.com' })).toBe('cloze://x-callback-url/contact/company.com')
    expect(cloze.openContactCallback({ identifier: 'twitter:cloze' })).toBe(
      'cloze://x-callback-url/contact/twitter%3Acloze',
    )
    expect(cloze.openContactCallback({ identifier: 'lead.salesforce.com:9425897598' })).toBe(
      'cloze://x-callback-url/contact/lead.salesforce.com%3A9425897598',
    )
  })

  test('openContactCallback should include x-success when provided', () => {
    const url = cloze.openContactCallback({
      identifier: 'someone@company.com',
      xSuccess: 'myapp://back',
    })

    expect(url).toBe('cloze://x-callback-url/contact/someone@company.com?x-success=myapp%3A%2F%2Fback')
  })

  test('openWebContact should return the documented web hash contact URLs', () => {
    expect(cloze.openWebContact({ identifier: 'someone@company.com' })).toBe(
      'https://www.cloze.com/in/#contact=someone@company.com',
    )
    expect(cloze.openWebContact({ identifier: '6175551234' })).toBe('https://www.cloze.com/in/#contact=6175551234')
    expect(cloze.openWebContact({ identifier: 'company.com' })).toBe('https://www.cloze.com/in/#contact=company.com')
    expect(cloze.openWebContact({ identifier: 'twitter:cloze' })).toBe(
      'https://www.cloze.com/in/#contact=twitter%3Acloze',
    )
    expect(cloze.openWebContact({ identifier: 'lead.salesforce.com:9425897598' })).toBe(
      'https://www.cloze.com/in/#contact=lead.salesforce.com%3A9425897598',
    )
  })

  test('openWebContact should return the documented web path contact examples', () => {
    expect(cloze.openWebContact({ identifier: 'someone@company.com', syntax: 'path' })).toBe(
      'https://www.cloze.com/in/contact/someone@company.com',
    )
    expect(cloze.openWebContact({ identifier: '6175551234', syntax: 'path' })).toBe(
      'https://www.cloze.com/in/contact/6175551234',
    )
  })

  test('openWebContact should support the documented full-screen flag', () => {
    const url = cloze.openWebContact({
      identifier: 'someone@company.com',
      full: true,
    })

    expect(url).toBe('https://www.cloze.com/in/#contact=someone@company.com,full')
  })

  test('openWebContact should support the documented full-screen back URL parameter', () => {
    const url = cloze.openWebContact({
      identifier: 'someone@company.com',
      full: true,
      back: 'http://www.evernote.com',
    })

    expect(url).toBe('https://www.cloze.com/in/#contact=someone@company.com,full,back=http%3A%2F%2Fwww.evernote.com')
  })
})
