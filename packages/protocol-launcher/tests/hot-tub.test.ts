import { describe, expect, test } from 'vitest'
import { hotTub } from '../src'

describe('hotTub', () => {
  test('addSource should return the official source URL', () => {
    const url = hotTub.addSource({
      url: 'https://api.myvideosite.com',
    })

    expect(url).toBe('hottub://source?url=https%3A%2F%2Fapi.myvideosite.com')
  })

  test('addSource should include the optional privacy parameter', () => {
    const url = hotTub.addSource({
      url: 'https://api.myvideosite.com',
      privacy: false,
    })

    expect(url).toBe('hottub://source?url=https%3A%2F%2Fapi.myvideosite.com&privacy=false')
  })

  test('addSourceRedirect should return the documented web redirect URL', () => {
    const url = hotTub.addSourceRedirect({
      domain: 'api.myvideosite.com',
    })

    expect(url).toBe('https://hottubapp.io/add/api.myvideosite.com')
  })

  test('openWebView should return the official webview URL', () => {
    const url = hotTub.openWebView({
      url: 'https://help.example.com',
    })

    expect(url).toBe('hottub://webview?url=https%3A%2F%2Fhelp.example.com')
  })

  test('openWebView should include the optional privacy parameter', () => {
    const url = hotTub.openWebView({
      url: 'https://help.example.com',
      privacy: true,
    })

    expect(url).toBe('hottub://webview?url=https%3A%2F%2Fhelp.example.com&privacy=true')
  })

  test('search should return the official search URL', () => {
    const url = hotTub.search({
      q: 'funny cats',
    })

    expect(url).toBe('hottub://search?q=funny%20cats')
  })

  test('openProfile should return the documented uploader profile URL', () => {
    const url = hotTub.openProfile({
      uploader: 'yanks',
    })

    expect(url).toBe('hottub://profile?uploader=yanks')
  })

  test('openProfile should support the documented creator alias', () => {
    const url = hotTub.openProfile({
      creator: 'yanks',
    })

    expect(url).toBe('hottub://profile?creator=yanks')
  })

  test('handoffSearch should return the documented HTTPS handoff URL for tag/search pages', () => {
    const url = hotTub.handoffSearch({
      baseUrl: 'https://hottubapp.io',
      q: 'nature documentaries',
    })

    expect(url).toBe('https://hottubapp.io/app?action=search&q=nature%20documentaries')
  })

  test('handoffProfile should return the documented HTTPS handoff URL for creator pages', () => {
    const url = hotTub.handoffProfile({
      baseUrl: 'https://hottubapp.io',
      uploader: 'yanks',
    })

    expect(url).toBe('https://hottubapp.io/app?action=profile&uploader=yanks')
  })

  test('handoffOpen should return the documented HTTPS handoff URL for generic pages', () => {
    const url = hotTub.handoffOpen({
      baseUrl: 'https://hottubapp.io',
      url: 'https://example.com/watch/12345',
    })

    expect(url).toBe('https://hottubapp.io/app?action=open&url=https%3A%2F%2Fexample.com%2Fwatch%2F12345')
  })

  test('handoffFavorite should return the documented HTTPS handoff URL for generic pages', () => {
    const url = hotTub.handoffFavorite({
      baseUrl: 'https://hottubapp.io',
      url: 'https://example.com/watch/12345',
    })

    expect(url).toBe('https://hottubapp.io/app?action=favorite&url=https%3A%2F%2Fexample.com%2Fwatch%2F12345')
  })

  test('play should return the native video player URL form', () => {
    const url = hotTub.play({
      video: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
    })

    expect(url).toBe('hottub://play?video=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy0sF5xhGreA')
  })

  test('play should return the web view player URL form', () => {
    const url = hotTub.play({
      url: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
    })

    expect(url).toBe('hottub://play?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy0sF5xhGreA')
  })

  test('notification should return the official notification URL', () => {
    const url = hotTub.notification({
      type: 'success',
      title: 'Success',
      message: 'Video added to playlist!',
    })

    expect(url).toBe('hottub://notification?type=success&title=Success&message=Video%20added%20to%20playlist!')
  })

  test('notification should omit optional payload fields', () => {
    const url = hotTub.notification()

    expect(url).toBe('hottub://notification')
  })

  test('message should return the official debug message URL', () => {
    const url = hotTub.message({
      content: 'Configuration loaded: API v2.1, 15 channels active',
    })

    expect(url).toBe('hottub://message?content=Configuration%20loaded%3A%20API%20v2.1%2C%2015%20channels%20active')
  })
})
