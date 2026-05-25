import { describe, expect, test } from 'vitest'
import { slack } from '../src'

describe('slack', () => {
  test('open should return the native Slack client URL', () => {
    const url = slack.open()

    expect(url).toBe('slack://open')
  })

  test('open should return the native Slack client URL with a team', () => {
    const url = slack.open({ team: 'T12345' })

    expect(url).toBe('slack://open?team=T12345')
  })

  test('openApp should return an App Home URL', () => {
    const url = slack.openApp({ team: 'T12345', id: 'A123ABC456' })

    expect(url).toBe('slack://app?team=T12345&id=A123ABC456')
  })

  test('openApp should return an App Home URL with a tab', () => {
    const url = slack.openApp({ team: 'T12345', id: 'A123ABC456', tab: 'messages' })

    expect(url).toBe('slack://app?team=T12345&id=A123ABC456&tab=messages')
  })

  test('openChannel should return a channel URL', () => {
    const url = slack.openChannel({ team: 'T12345', id: 'C123ABC456' })

    expect(url).toBe('slack://channel?team=T12345&id=C123ABC456')
  })

  test('openUser should return a direct message URL', () => {
    const url = slack.openUser({ team: 'T12345', id: 'U123ABC456' })

    expect(url).toBe('slack://user?team=T12345&id=U123ABC456')
  })

  test('openFile should return a file URL', () => {
    const url = slack.openFile({ team: 'T12345', id: 'F123ABC456' })

    expect(url).toBe('slack://file?team=T12345&id=F123ABC456')
  })

  test('shareFile should return a share file URL', () => {
    const url = slack.shareFile({ team: 'T12345', id: 'F123ABC456' })

    expect(url).toBe('slack://share-file?team=T12345&id=F123ABC456')
  })

  test('appRedirect should return an app redirect URL', () => {
    const url = slack.appRedirect({ app: 'A123ABC456' })

    expect(url).toBe('https://slack.com/app_redirect?app=A123ABC456')
  })

  test('appRedirect should return an app redirect URL with a team', () => {
    const url = slack.appRedirect({ app: 'A123ABC456', team: 'T12345' })

    expect(url).toBe('https://slack.com/app_redirect?app=A123ABC456&team=T12345')
  })

  test('channelRedirect should return a channel redirect URL', () => {
    const url = slack.channelRedirect({ channel: 'C123ABC456' })

    expect(url).toBe('https://slack.com/app_redirect?channel=C123ABC456')
  })

  test('channelRedirect should return a channel redirect URL by name with a team', () => {
    const url = slack.channelRedirect({ channel: 'release-notes', team: 'T12345' })

    expect(url).toBe('https://slack.com/app_redirect?channel=release-notes&team=T12345')
  })

  test('channelRedirect should URL-encode query parameters', () => {
    const url = slack.channelRedirect({ channel: 'release notes', team: 'T 12345' })

    expect(url).toBe('https://slack.com/app_redirect?channel=release%20notes&team=T%2012345')
  })
})
