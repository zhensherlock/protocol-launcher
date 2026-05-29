import { describe, expect, test } from 'vitest'
import { pushcut } from '../src'

describe('pushcut', () => {
  test('open should return a URL', () => {
    const url = pushcut.open()
    expect(url).toBe('pushcut://open/')
  })

  test('openView should return a documented view URL', () => {
    const url = pushcut.openView({ view: 'notifications' })
    expect(url).toBe('pushcut://open/notifications')
  })

  test('openNotifications should return a URL', () => {
    const url = pushcut.openNotifications()
    expect(url).toBe('pushcut://open/notifications')
  })

  test('openTriggers should return a URL', () => {
    const url = pushcut.openTriggers()
    expect(url).toBe('pushcut://open/triggers')
  })

  test('openWidgets should return a URL', () => {
    const url = pushcut.openWidgets()
    expect(url).toBe('pushcut://open/widgets')
  })

  test('openServer should return a URL', () => {
    const url = pushcut.openServer()
    expect(url).toBe('pushcut://open/server')
  })

  test('openAccount should return a URL', () => {
    const url = pushcut.openAccount()
    expect(url).toBe('pushcut://open/account')
  })

  test('runServer should return a URL', () => {
    const url = pushcut.runServer()
    expect(url).toBe('pushcut://open/runServer')
  })

  test('monitorServer should return a URL', () => {
    const url = pushcut.monitorServer()
    expect(url).toBe('pushcut://open/monitorServer')
  })

  test('openNotificationsLog should return a URL', () => {
    const url = pushcut.openNotificationsLog()
    expect(url).toBe('pushcut://open/notificationsLog')
  })
})
