import { describe, expect, test } from 'vitest'
import { webex } from '../src'

describe('webex', () => {
  test('openChat should return the official Webex one-person chat URL', () => {
    const url = webex.openChat({
      email: 'barbara@example.com',
    })

    expect(url).toBe('webexteams://im?email=barbara%40example.com')
  })

  test('openSpace should return the official Webex space URL', () => {
    const url = webex.openSpace({
      space: '0000aa-a0a0',
    })

    expect(url).toBe('webexteams://im?space=0000aa-a0a0')
  })

  test('meet should return the official Webex Teams meet URL for a SIP address', () => {
    const url = webex.meet({
      sip: 'user@example.com',
    })

    expect(url).toBe('webexteams://meet?sip=user%40example.com')
  })

  test('call should return the official webextel call URL for a telephone number', () => {
    const url = webex.call({
      destination: '+1234567890',
    })

    expect(url).toBe('webextel:+1234567890')
  })

  test('call should return the official webextel call URL for a SIP-style address', () => {
    const url = webex.call({
      destination: 'device@example.com',
    })

    expect(url).toBe('webextel:device@example.com')
  })

  test('crossLaunchCall should return the official webextel login URL', () => {
    const url = webex.crossLaunchCall({
      telephone: '123456789',
      xSuccess: 'appb://success_flow',
      xCancel: 'appb://cancel_flow',
    })

    expect(url).toBe(
      'webextel://login?telephone=123456789&x-success=appb%3A%2F%2Fsuccess_flow&x-cancel=appb%3A%2F%2Fcancel_flow',
    )
  })

  test('crossLaunchCall should support the official x-source parameter', () => {
    const url = webex.crossLaunchCall({
      telephone: '123456789',
      xSource: 'App B',
    })

    expect(url).toBe('webextel://login?telephone=123456789&x-source=App%20B')
  })

  test('crossLaunchSignIn should return the official webexauth login URL', () => {
    const url = webex.crossLaunchSignIn({
      email: 'user1@example.com',
      telephone: '123456789',
      xSuccess: 'appb://success_flow',
      xCancel: 'appb://cancel_flow',
    })

    expect(url).toBe(
      'webexauth://login?email=user1%40example.com&telephone=123456789&x-success=appb%3A%2F%2Fsuccess_flow&x-cancel=appb%3A%2F%2Fcancel_flow',
    )
  })

  test('crossLaunchSignIn should omit optional values', () => {
    const url = webex.crossLaunchSignIn({
      email: 'user1@example.com',
    })

    expect(url).toBe('webexauth://login?email=user1%40example.com')
  })

  test('logout should return the official webexauth logout URL', () => {
    const url = webex.logout()

    expect(url).toBe('webexauth://logout')
  })

  test('universalLinkLogout should return the official managed iOS logout URL', () => {
    const url = webex.universalLinkLogout({
      ulcSuccess: 'https://sampledomain.com/success',
      ulcError: 'https://sampledomain.com/error',
    })

    expect(url).toBe(
      'https://cisco.webex.com/logout?ulc-success=https%3A%2F%2Fsampledomain.com%2Fsuccess&ulc-error=https%3A%2F%2Fsampledomain.com%2Ferror',
    )
  })
})
