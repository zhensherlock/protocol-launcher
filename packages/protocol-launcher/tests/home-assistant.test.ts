import { describe, expect, test } from 'vitest'
import { homeAssistant } from '../src'

describe('homeAssistant', () => {
  test('navigate should return a URL for a frontend path', () => {
    const url = homeAssistant.navigate({
      path: '/dashboard-mobile/my-subview',
    })

    expect(url).toBe('homeassistant://navigate/dashboard-mobile/my-subview')
  })

  test('navigate should include server when provided', () => {
    const url = homeAssistant.navigate({
      path: '/webcams',
      server: 'My home',
    })

    expect(url).toBe('homeassistant://navigate/webcams?server=My%20home')
  })

  test('callService should return a URL with dictionary query parameters', () => {
    const url = homeAssistant.callService({
      service: 'device_tracker.see',
      params: {
        entity_id: 'device_tracker.entity',
      },
    })

    expect(url).toBe('homeassistant://call_service/device_tracker.see?entity_id=device_tracker.entity')
  })

  test('callService should omit optional query parameters', () => {
    const url = homeAssistant.callService({
      service: 'homeassistant.restart',
    })

    expect(url).toBe('homeassistant://call_service/homeassistant.restart')
  })

  test('fireEvent should return a URL with dictionary query parameters', () => {
    const url = homeAssistant.fireEvent({
      eventType: 'custom_event',
      params: {
        entity_id: 'MY_CUSTOM_EVENT',
      },
    })

    expect(url).toBe('homeassistant://fire_event/custom_event?entity_id=MY_CUSTOM_EVENT')
  })

  test('sendLocation should return a URL', () => {
    const url = homeAssistant.sendLocation()

    expect(url).toBe('homeassistant://send_location/')
  })

  test('openTag should return the official tag universal link', () => {
    const url = homeAssistant.openTag({
      tagId: '50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D',
    })

    expect(url).toBe('https://www.home-assistant.io/tag/50A3C7C8-1FE7-4BE8-8DC9-06E07D41B63D')
  })

  test('nfcUniversalLink should return the official old-style NFC universal link', () => {
    const url = homeAssistant.nfcUniversalLink({
      url: 'homeassistant://navigate/dashboard-mobile/my-subview',
    })

    expect(url).toBe(
      'https://www.home-assistant.io/ios/nfc/?url=homeassistant%3A%2F%2Fnavigate%2Fdashboard-mobile%2Fmy-subview',
    )
  })
})
