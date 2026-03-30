import { describe, expect, test } from 'vitest'
import { gladys } from '../src'

describe('gladys', () => {
  test('pasteClipboard should return a URL without parameters', async () => {
    const url = gladys.pasteClipboard({})
    expect(url).toBe('gladys://x-callback-url/paste-clipboard')
  })

  test('pasteClipboard should return a URL with title', async () => {
    const url = gladys.pasteClipboard({
      title: 'Override The Title',
    })
    expect(url).toBe('gladys://x-callback-url/paste-clipboard?title=Override%20The%20Title')
  })

  test('pasteClipboard should return a URL with all parameters', async () => {
    const url = gladys.pasteClipboard({
      title: 'Override The Title',
      labels: 'Pasted Items,New Items',
      note: 'Some Notes',
    })
    expect(url).toBe(
      'gladys://x-callback-url/paste-clipboard?title=Override%20The%20Title&labels=Pasted%20Items%2CNew%20Items&note=Some%20Notes',
    )
  })

  test('createItem should return a URL with text item', async () => {
    const url = gladys.createItem({
      text: 'Hi There',
      title: 'Greeting',
      labels: 'Created Items,New Items',
      note: 'Some Notes',
    })
    expect(url).toBe(
      'gladys://x-callback-url/create-item?text=Hi%20There&title=Greeting&labels=Created%20Items%2CNew%20Items&note=Some%20Notes',
    )
  })

  test('createItem should return a URL with url item', async () => {
    const url = gladys.createItem({
      url: 'http://bru.build',
      title: 'The Gladys Guy',
      labels: 'Developer,iOS,macOS,Embedded',
      note: 'Some Notes',
    })
    expect(url).toBe(
      'gladys://x-callback-url/create-item?url=http%3A%2F%2Fbru.build&title=The%20Gladys%20Guy&labels=Developer%2CiOS%2CmacOS%2CEmbedded&note=Some%20Notes',
    )
  })

  test('createItem should return a URL with base64data item', async () => {
    const url = gladys.createItem({
      base64data: 'RXhhbXBsZSB0ZXh0IGZpbGUuCg==',
      title: 'Test.txt',
      labels: 'Text Files',
      note: 'Pretending I am a file',
    })
    expect(url).toBe(
      'gladys://x-callback-url/create-item?base64data=RXhhbXBsZSB0ZXh0IGZpbGUuCg%3D%3D&title=Test.txt&labels=Text%20Files&note=Pretending%20I%20am%20a%20file',
    )
  })

  test('createItem should return a URL without parameters', async () => {
    const url = gladys.createItem({})
    expect(url).toBe('gladys://x-callback-url/create-item')
  })
})
