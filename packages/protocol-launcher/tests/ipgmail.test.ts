import { describe, expect, test } from 'vitest'
import { ipgmail } from '../src'

describe('ipgmail', () => {
  describe('compose', () => {
    test('should return a URL with text', async () => {
      const url = ipgmail.compose({
        text: 'This is a test...',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/compose?text=This%20is%20a%20test...')
    })

    test('should return a URL with text containing newlines', async () => {
      const url = ipgmail.compose({
        text: 'This is a test...\nLine 2',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/compose?text=This%20is%20a%20test...%0ALine%202')
    })
  })

  describe('decrypt', () => {
    test('should return a URL with pgpmsg=clipboard', async () => {
      const url = ipgmail.decrypt({
        pgpmsg: 'clipboard',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/decrypt?pgpmsg=clipboard')
    })

    test('should return a URL with pgpmsg=clipboard and result=clipboard', async () => {
      const url = ipgmail.decrypt({
        pgpmsg: 'clipboard',
        result: 'clipboard',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/decrypt?pgpmsg=clipboard&result=clipboard')
    })

    test('should return a URL with full PGP message', async () => {
      const url = ipgmail.decrypt({
        pgpmsg: '-----BEGIN PGP MESSAGE-----',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/decrypt?pgpmsg=-----BEGIN%20PGP%20MESSAGE-----')
    })
  })

  describe('encrypt', () => {
    test('should return a URL with datasource, keyid and result=clipboard', async () => {
      const url = ipgmail.encrypt({
        datasource: 'clipboard',
        keyid: '47E3234C',
        result: 'clipboard',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt?datasource=clipboard&keyid=47E3234C&result=clipboard')
    })

    test('should return a URL with datasource, keyid and result=file', async () => {
      const url = ipgmail.encrypt({
        datasource: 'clipboard',
        keyid: '47E3234C',
        result: 'savefile.pgp',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt?datasource=clipboard&keyid=47E3234C&result=savefile.pgp')
    })

    test('should return a URL with text only', async () => {
      const url = ipgmail.encrypt({
        text: 'This is a test...',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt?text=This%20is%20a%20test...')
    })

    test('should return a URL with text and signkey', async () => {
      const url = ipgmail.encrypt({
        text: 'This is a test...',
        signkey: 'ABCD1234',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt?text=This%20is%20a%20test...&signkey=ABCD1234')
    })

    test('should return a URL with symmetric encryption', async () => {
      const url = ipgmail.encrypt({
        datasource: 'clipboard',
        symmetric: true,
        passwd: 'secret123',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt?datasource=clipboard&symmetric=true&passwd=secret123')
    })

    test('should return a URL with all parameters', async () => {
      const url = ipgmail.encrypt({
        datasource: 'clipboard',
        text: 'Secret message',
        keyid: '47E3234C',
        signkey: 'ABCD1234',
        result: 'encrypted.pgp',
        symmetric: true,
        passwd: 'password',
      })
      expect(url).toBe(
        'x-ipgmail://x-callback-url/encrypt?datasource=clipboard&text=Secret%20message&keyid=47E3234C&signkey=ABCD1234&result=encrypted.pgp&symmetric=true&passwd=password',
      )
    })

    test('should return a URL without parameters', async () => {
      const url = ipgmail.encrypt({})
      expect(url).toBe('x-ipgmail://x-callback-url/encrypt')
    })
  })

  describe('sign', () => {
    test('should return a URL with datasource, signkey and result=clipboard', async () => {
      const url = ipgmail.sign({
        datasource: 'clipboard',
        signkey: '47E3234C',
        result: 'clipboard',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/sign?datasource=clipboard&signkey=47E3234C&result=clipboard')
    })

    test('should return a URL with datasource, signkey and result=file', async () => {
      const url = ipgmail.sign({
        datasource: 'clipboard',
        signkey: '47E3234C',
        result: 'savefile.sig',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/sign?datasource=clipboard&signkey=47E3234C&result=savefile.sig')
    })

    test('should return a URL with text only', async () => {
      const url = ipgmail.sign({
        text: 'This is a test...',
      })
      expect(url).toBe('x-ipgmail://x-callback-url/sign?text=This%20is%20a%20test...')
    })

    test('should return a URL with all parameters', async () => {
      const url = ipgmail.sign({
        datasource: 'clipboard',
        text: 'Signed message',
        signkey: '47E3234C',
        result: 'signed.asc',
      })
      expect(url).toBe(
        'x-ipgmail://x-callback-url/sign?datasource=clipboard&text=Signed%20message&signkey=47E3234C&result=signed.asc',
      )
    })

    test('should return a URL without parameters', async () => {
      const url = ipgmail.sign({})
      expect(url).toBe('x-ipgmail://x-callback-url/sign')
    })
  })
})
