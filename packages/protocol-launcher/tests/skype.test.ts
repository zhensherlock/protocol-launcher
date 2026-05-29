import { describe, expect, test } from 'vitest'
import { skype } from '../src'

describe('skype', () => {
  test('open should return the official focus URL', () => {
    const url = skype.open()

    expect(url).toBe('skype:')
  })

  test('implicitCall should return the official implicit audio call URL', () => {
    const url = skype.implicitCall({
      participants: 'skype.test.user.1',
    })

    expect(url).toBe('skype:skype.test.user.1')
  })

  test('implicitCall should support multiple participants separated with semicolons', () => {
    const url = skype.implicitCall({
      participants: ['skype.test.user.1', 'skype.test.user.2', 'skype.test.user.3'],
    })

    expect(url).toBe('skype:skype.test.user.1;skype.test.user.2;skype.test.user.3')
  })

  test('call should return the official explicit audio call URL', () => {
    const url = skype.call({
      participants: 'skype.test.user.1',
    })

    expect(url).toBe('skype:skype.test.user.1?call')
  })

  test('call should support the official conference topic argument', () => {
    const url = skype.call({
      participants: ['skype.test.user.1', 'skype.test.user.2', '+16505550123'],
      topic: 'Geek Conspiracy',
    })

    expect(url).toBe('skype:skype.test.user.1;skype.test.user.2;+16505550123?call&topic=Geek%20Conspiracy')
  })

  test('videoCall should return the official video call URL', () => {
    const url = skype.videoCall({
      participants: 'skype.test.user.1',
    })

    expect(url).toBe('skype:skype.test.user.1?call&video=true')
  })

  test('videoCall should support multiple participants separated with semicolons', () => {
    const url = skype.videoCall({
      participants: ['skype.test.user.1', 'skype.test.user.2', 'skype.test.user.3'],
    })

    expect(url).toBe('skype:skype.test.user.1;skype.test.user.2;skype.test.user.3?call&video=true')
  })

  test('chat should return the official chat URL', () => {
    const url = skype.chat({
      participants: 'skype.test.user.1',
    })

    expect(url).toBe('skype:skype.test.user.1?chat')
  })

  test('chat should support the official multi chat topic argument', () => {
    const url = skype.chat({
      participants: ['skype.test.user.1', 'skype.test.user.2'],
      topic: 'Quantum Mechanics 101',
    })

    expect(url).toBe('skype:skype.test.user.1;skype.test.user.2?chat&topic=Quantum%20Mechanics%20101')
  })
})
