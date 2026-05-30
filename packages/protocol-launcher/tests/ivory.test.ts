import { describe, expect, test } from 'vitest'
import { ivory } from '../src'

describe('ivory', () => {
  test('tab helpers should return the official Ivory tab URLs for the active account', () => {
    expect(ivory.openHome()).toBe('ivory:///home')
    expect(ivory.openTimeline()).toBe('ivory:///timeline')
    expect(ivory.openMentions()).toBe('ivory:///mentions')
    expect(ivory.openLists()).toBe('ivory:///lists')
    expect(ivory.openFavorites()).toBe('ivory:///favorites')
    expect(ivory.openBookmarks()).toBe('ivory:///bookmarks')
    expect(ivory.openStatistics()).toBe('ivory:///statistics')
    expect(ivory.openProfileTab()).toBe('ivory:///profile')
    expect(ivory.openSearch()).toBe('ivory:///search')
  })

  test('tab helpers should include a short or fully qualified account selector', () => {
    expect(ivory.openMentions({ acct: '@alice' })).toBe('ivory://@alice/mentions')
    expect(ivory.openHome({ acct: '@alice@mastodon.social' })).toBe('ivory://@alice@mastodon.social/home')
  })

  test('openUrl should encode the official url and callback_url query parameters', () => {
    const url = ivory.openUrl({
      acct: '@alice@mastodon.social',
      url: 'https://mastodon.social/@tapbots',
      callbackUrl: 'launcher://done',
    })

    expect(url).toBe(
      'ivory://@alice@mastodon.social/openURL?url=https%3A%2F%2Fmastodon.social%2F%40tapbots&callback_url=launcher%3A%2F%2Fdone',
    )
  })

  test('openStatus should return the official status path and optional callback_url', () => {
    const url = ivory.openStatus({
      acct: '@alice@mastodon.social',
      statusId: '110123456789',
      callbackUrl: 'launcher://done',
    })

    expect(url).toBe('ivory://@alice@mastodon.social/status/110123456789?callback_url=launcher%3A%2F%2Fdone')
  })

  test('openProfile should return the official user_profile path', () => {
    const url = ivory.openProfile({
      acct: '@alice@mastodon.social',
      userAcct: '@tapbots@mastodon.social',
    })

    expect(url).toBe('ivory://@alice@mastodon.social/user_profile/@tapbots@mastodon.social')
  })

  test('compose should return the official post URL without query parameters', () => {
    expect(ivory.compose()).toBe('ivory:///post')
  })

  test('compose should support the documented modal callback_url parameter', () => {
    const url = ivory.compose({
      acct: '@alice',
      callbackUrl: 'launcher://done',
    })

    expect(url).toBe('ivory://@alice/post?callback_url=launcher%3A%2F%2Fdone')
  })

  test('composeReply should encode documented text, in_reply_to_status_url, and callback_url parameters', () => {
    const url = ivory.composeReply({
      acct: '@alice',
      text: 'Hello Ivory',
      inReplyToStatusUrl: 'https://mastodon.social/@tapbots/110123456789',
      callbackUrl: 'launcher://done',
    })

    expect(url).toBe(
      'ivory://@alice/post?text=Hello%20Ivory&in_reply_to_status_url=https%3A%2F%2Fmastodon.social%2F%40tapbots%2F110123456789&callback_url=launcher%3A%2F%2Fdone',
    )
  })

  test('composeText should return the official post text path form', () => {
    const url = ivory.composeText({
      acct: '@alice',
      text: 'Hello Ivory',
      callbackUrl: 'launcher://done',
    })

    expect(url).toBe('ivory://@alice/post/Hello%20Ivory?callback_url=launcher%3A%2F%2Fdone')
  })
})
