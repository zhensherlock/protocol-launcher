import { describe, expect, test } from 'vitest'
import { jumpDesktop } from '../src'

describe('jump-desktop', () => {
  test('open should return a URL', async () => {
    const url = jumpDesktop.open()
    expect(url).toBe('jump://')
  })

  describe('connect', () => {
    test('should return URL with host only', () => {
      const url = jumpDesktop.connect({ host: '192.168.1.100' })
      expect(url).toBe('jump://?host=192.168.1.100')
    })

    test('should return URL with host and protocol', () => {
      const url = jumpDesktop.connect({ host: '192.168.1.100', protocol: 'vnc' })
      expect(url).toBe('jump://?host=192.168.1.100&protocol=vnc')
    })

    test('should return URL with host and port', () => {
      const url = jumpDesktop.connect({ host: '192.168.1.100', port: 5903 })
      expect(url).toBe('jump://?host=192.168.1.100&port=5903')
    })

    test('should return URL with username and password', () => {
      const url = jumpDesktop.connect({
        host: 'server.mydomain.com',
        username: 'testuser',
        password: 'pass',
      })
      expect(url).toBe('jump://?host=server.mydomain.com&password=pass&username=testuser')
    })

    test('should return URL with domain', () => {
      const url = jumpDesktop.connect({
        host: 'server.mydomain.com',
        username: 'testuser',
        password: 'pass',
        domain: 'MYDOMAIN',
      })
      expect(url).toBe('jump://?host=server.mydomain.com&password=pass&username=testuser&domain=MYDOMAIN')
    })

    test('should return URL with width and height', () => {
      const url = jumpDesktop.connect({
        host: '192.168.1.100',
        width: 1920,
        height: 1080,
      })
      expect(url).toBe('jump://?host=192.168.1.100&width=1920&height=1080')
    })

    test('should return URL with console session', () => {
      const url = jumpDesktop.connect({
        host: '192.168.1.100',
        console: 'yes',
      })
      expect(url).toBe('jump://?host=192.168.1.100&console=yes')
    })

    test('should return URL with depth', () => {
      const url = jumpDesktop.connect({
        host: '192.168.1.100',
        depth: 8,
      })
      expect(url).toBe('jump://?host=192.168.1.100&depth=8')
    })

    test('should return URL with all parameters', () => {
      const url = jumpDesktop.connect({
        host: 'server.mydomain.com',
        protocol: 'rdp',
        port: 3389,
        username: 'testuser',
        password: 'pass',
        domain: 'MYDOMAIN',
        width: 1920,
        height: 1080,
        depth: 16,
        console: 'yes',
      })
      expect(url).toBe(
        'jump://?host=server.mydomain.com&protocol=rdp&port=3389&password=pass&depth=16&username=testuser&domain=MYDOMAIN&width=1920&height=1080&console=yes',
      )
    })

    test('should support custom parameters', () => {
      const url = jumpDesktop.connect({
        host: '192.168.1.100',
        GestureProfileCode: 4,
      })
      expect(url).toBe('jump://?host=192.168.1.100&GestureProfileCode=4')
    })

    test('should encode special characters in parameters', () => {
      const url = jumpDesktop.connect({
        host: 'server.example.com',
        username: 'user@domain',
        password: 'p@ss=word',
      })
      expect(url).toBe('jump://?host=server.example.com&password=p%40ss%3Dword&username=user%40domain')
    })
  })
})
