import { describe, expect, test } from 'vitest'
import { raycast } from '../src'

describe('raycast', () => {
  test('extensionCommand should return an extension command deeplink URL', () => {
    const url = raycast.extensionCommand({
      authorOrOwner: 'linear',
      extensionName: 'linear',
      commandName: 'create-issue-for-myself',
    })

    expect(url).toBe('raycast://extensions/linear/linear/create-issue-for-myself')
  })

  test('extensionCommand should return an extension command deeplink URL with query parameters', () => {
    const url = raycast.extensionCommand({
      authorOrOwner: 'linear',
      extensionName: 'linear',
      commandName: 'create-issue-for-myself',
      launchType: 'background',
      arguments: {
        title: 'Triage new issues',
      },
      context: {
        message: 'Hello, world!',
      },
      fallbackText: 'Create issue',
    })

    expect(url).toBe(
      'raycast://extensions/linear/linear/create-issue-for-myself?launchType=background&arguments=%7B%22title%22%3A%22Triage%20new%20issues%22%7D&context=%7B%22message%22%3A%22Hello%2C%20world!%22%7D&fallbackText=Create%20issue',
    )
  })

  test('extensionCommand should return a built-in extension command deeplink URL', () => {
    const url = raycast.extensionCommand({
      authorOrOwner: 'raycast',
      extensionName: 'calendar',
      commandName: 'my-schedule',
    })

    expect(url).toBe('raycast://extensions/raycast/calendar/my-schedule')
  })

  test('customWindowManagementCommand should return an empty command URL', () => {
    const url = raycast.customWindowManagementCommand()

    expect(url).toBe('raycast://customWindowManagementCommand')
  })

  test('customWindowManagementCommand should return a custom command URL', () => {
    const url = raycast.customWindowManagementCommand({
      name: 'MyCommand',
      position: 'center',
      absoluteWidth: '500.0',
      relativeHeight: '0.5',
      absoluteXOffset: '0.0',
      absoluteYOffset: '0.0',
    })

    expect(url).toBe(
      'raycast://customWindowManagementCommand?&name=MyCommand&position=center&absoluteWidth=500.0&relativeHeight=0.5&absoluteXOffset=0.0&absoluteYOffset=0.0',
    )
  })

  test('customWindowManagementCommand should return relative sizing and offset URL', () => {
    const url = raycast.customWindowManagementCommand({
      position: 'top-left',
      relativeWidth: '0.5',
      relativeHeight: '0.5',
      relativeXOffset: '0.1',
      relativeYOffset: '0.2',
    })

    expect(url).toBe(
      'raycast://customWindowManagementCommand?&position=top-left&relativeWidth=0.5&relativeHeight=0.5&relativeXOffset=0.1&relativeYOffset=0.2',
    )
  })
})
