import { describe, expect, test } from 'vitest'
import { mailAssistant } from '../src'

describe('mailAssistant', () => {
  describe('sendMail', () => {
    test('should return URL with empty payload', async () => {
      const url = mailAssistant.sendMail({})
      expect(url).toBe('mail-assistant://sendMail')
    })

    test('should return URL with subject only', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
      })
      expect(url).toBe('mail-assistant://sendMail?subject=Test')
    })

    test('should return URL with body only', async () => {
      const url = mailAssistant.sendMail({
        body: 'My encoded content',
      })
      expect(url).toBe('mail-assistant://sendMail?body=My%20encoded%20content')
    })

    test('should return URL with subject and body', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
        body: 'My encoded content',
      })
      expect(url).toBe('mail-assistant://sendMail?subject=Test&body=My%20encoded%20content')
    })

    test('should return URL with to recipient', async () => {
      const url = mailAssistant.sendMail({
        to: 'john@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?to=john%40example.com')
    })

    test('should return URL with multiple to recipients', async () => {
      const url = mailAssistant.sendMail({
        to: 'john@example.com, jane@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?to=john%40example.com%2C%20jane%40example.com')
    })

    test('should return URL with named recipients', async () => {
      const url = mailAssistant.sendMail({
        to: 'John Doe <john@example.com>, Jane Smith <jane@example.com>',
      })
      expect(url).toBe(
        'mail-assistant://sendMail?to=John%20Doe%20%3Cjohn%40example.com%3E%2C%20Jane%20Smith%20%3Cjane%40example.com%3E',
      )
    })

    test('should return URL with cc recipient', async () => {
      const url = mailAssistant.sendMail({
        cc: 'manager@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?cc=manager%40example.com')
    })

    test('should return URL with bcc recipient', async () => {
      const url = mailAssistant.sendMail({
        bcc: 'secret@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?bcc=secret%40example.com')
    })

    test('should return URL with to, cc, and bcc', async () => {
      const url = mailAssistant.sendMail({
        to: 'john@example.com',
        cc: 'jane@example.com',
        bcc: 'secret@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?to=john%40example.com&cc=jane%40example.com&bcc=secret%40example.com')
    })

    test('should return URL with from address', async () => {
      const url = mailAssistant.sendMail({
        from: 'sender@example.com',
      })
      expect(url).toBe('mail-assistant://sendMail?from=sender%40example.com')
    })

    test('should return URL with html set to true', async () => {
      const url = mailAssistant.sendMail({
        body: '<h1>HTML Content</h1>',
        html: true,
      })
      expect(url).toBe('mail-assistant://sendMail?body=%3Ch1%3EHTML%20Content%3C%2Fh1%3E&html=true')
    })

    test('should return URL with html set to false', async () => {
      const url = mailAssistant.sendMail({
        body: 'Plain text',
        html: false,
      })
      expect(url).toBe('mail-assistant://sendMail?body=Plain%20text&html=false')
    })

    test('should return URL with full email composition', async () => {
      const url = mailAssistant.sendMail({
        to: 'john@example.com',
        cc: 'jane@example.com',
        subject: 'Meeting',
        body: '<h1>Meeting Notes</h1>',
        from: 'sender@example.com',
        html: true,
      })
      expect(url).toBe(
        'mail-assistant://sendMail?to=john%40example.com&cc=jane%40example.com&subject=Meeting&body=%3Ch1%3EMeeting%20Notes%3C%2Fh1%3E&from=sender%40example.com&html=true',
      )
    })

    test('should return URL with x-success callback', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe('mail-assistant://sendMail?subject=Test&x-success=myapp%3A%2F%2Fsuccess')
    })

    test('should return URL with x-cancel callback', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
        xCancel: 'myapp://cancel',
      })
      expect(url).toBe('mail-assistant://sendMail?subject=Test&x-cancel=myapp%3A%2F%2Fcancel')
    })

    test('should return URL with x-error callback', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
        xError: 'myapp://error',
      })
      expect(url).toBe('mail-assistant://sendMail?subject=Test&x-error=myapp%3A%2F%2Ferror')
    })

    test('should return URL with all x-callback-url parameters', async () => {
      const url = mailAssistant.sendMail({
        subject: 'Test',
        xSuccess: 'myapp://success',
        xCancel: 'myapp://cancel',
        xError: 'myapp://error',
      })
      expect(url).toBe(
        'mail-assistant://sendMail?subject=Test&x-success=myapp%3A%2F%2Fsuccess&x-cancel=myapp%3A%2F%2Fcancel&x-error=myapp%3A%2F%2Ferror',
      )
    })

    test('should return URL with complete email and callbacks', async () => {
      const url = mailAssistant.sendMail({
        to: 'recipient@example.com',
        subject: 'Complete Test',
        body: 'This is a complete test email',
        html: false,
        xSuccess: 'myapp://success',
        xCancel: 'myapp://cancel',
      })
      expect(url).toBe(
        'mail-assistant://sendMail?to=recipient%40example.com&subject=Complete%20Test&body=This%20is%20a%20complete%20test%20email&html=false&x-success=myapp%3A%2F%2Fsuccess&x-cancel=myapp%3A%2F%2Fcancel',
      )
    })
  })
})
