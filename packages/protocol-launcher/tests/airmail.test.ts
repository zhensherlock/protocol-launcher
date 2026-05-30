import { describe, expect, test } from 'vitest'
import { airmail } from '../src'

describe('airmail', () => {
  describe('compose', () => {
    test('should return URL with empty payload', () => {
      const url = airmail.compose()

      expect(url).toBe('airmail://compose')
    })

    test('should return URL with the official compose example fields', () => {
      const url = airmail.compose({
        subject: 'Message subject',
        to: 'joe@example.com',
        plainBody: 'Message body',
      })

      expect(url).toBe('airmail://compose?subject=Message%20subject&to=joe%40example.com&plainBody=Message%20body')
    })

    test('should return URL with every field listed in the official compose scheme', () => {
      const url = airmail.compose({
        subject: 'Message subject',
        from: 'info@email.com',
        to: 'joe@example.com',
        cc: 'ann@example.com',
        bcc: 'hidden@example.com',
        plainBody: 'Message body',
        htmlBody: '<p>Message body</p>',
      })

      expect(url).toBe(
        'airmail://compose?subject=Message%20subject&from=info%40email.com&to=joe%40example.com&cc=ann%40example.com&bcc=hidden%40example.com&plainBody=Message%20body&htmlBody=%3Cp%3EMessage%20body%3C%2Fp%3E',
      )
    })

    test('should omit undefined optional compose fields', () => {
      const url = airmail.compose({
        subject: 'Message subject',
        plainBody: 'Message body',
      })

      expect(url).toBe('airmail://compose?subject=Message%20subject&plainBody=Message%20body')
    })
  })

  describe('send', () => {
    test('should return URL with empty payload', () => {
      const url = airmail.send()

      expect(url).toBe('airmail://x-callback-url/send')
    })

    test('should return URL with official x-callback-url send fields', () => {
      const url = airmail.send({
        from: 'info@email.com',
        subject: 'subj',
        to: 'infoto@email.com',
        plainBody: 'hello',
        xSource: 'sourceapp',
        xSuccess: 'sourceapp://success',
        xError: 'sourceapp://error',
        xCancel: 'sourceapp://cancelled',
      })

      expect(url).toBe(
        'airmail://x-callback-url/send?from=info%40email.com&subject=subj&to=infoto%40email.com&plainBody=hello&x-source=sourceapp&x-success=sourceapp%3A%2F%2Fsuccess&x-error=sourceapp%3A%2F%2Ferror&x-cancel=sourceapp%3A%2F%2Fcancelled',
      )
    })

    test('should omit undefined optional send fields', () => {
      const url = airmail.send({
        subject: 'subj',
        plainBody: 'hello',
      })

      expect(url).toBe('airmail://x-callback-url/send?subject=subj&plainBody=hello')
    })
  })
})
