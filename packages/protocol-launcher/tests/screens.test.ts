import { describe, expect, test } from 'vitest'
import { screens } from '../src'

describe('screens', () => {
  describe('openSavedScreen', () => {
    test('should match the official IP address example', () => {
      const url = screens.openSavedScreen({ target: '10.0.1.10' })
      expect(url).toBe('screens://10.0.1.10')
    })

    test('should match the official hostname example', () => {
      const url = screens.openSavedScreen({ target: 'Johns-MacBook-Pro.local' })
      expect(url).toBe('screens://Johns-MacBook-Pro.local')
    })

    test('should match the official saved screen name example', () => {
      const url = screens.openSavedScreen({ target: "John's MacBook Pro" })
      expect(url).toBe("screens://John's%20MacBook%20Pro")
    })

    test('should match the official saved screen credentials example', () => {
      const url = screens.openSavedScreen({
        target: "John's MacBook Pro",
        username: 'john',
        password: 'sekret',
      })
      expect(url).toBe("screens://john:sekret@John's%20MacBook%20Pro")
    })

    test('should match the official guest parameter example', () => {
      const url = screens.openSavedScreen({
        target: 'Johns-MacBook-Pro.local',
        guest: true,
      })
      expect(url).toBe('screens://Johns-MacBook-Pro.local?guest=true')
    })
  })

  describe('vnc', () => {
    test('should match the official host-only example', () => {
      const url = screens.vnc({ host: '10.0.1.10' })
      expect(url).toBe('vnc://10.0.1.10')
    })

    test('should match the official host and port example', () => {
      const url = screens.vnc({ host: '10.0.1.10', port: 5900 })
      expect(url).toBe('vnc://10.0.1.10:5900')
    })

    test('should match the official username example', () => {
      const url = screens.vnc({ host: 'Johns-MacBook-Pro.local', username: 'john' })
      expect(url).toBe('vnc://john@Johns-MacBook-Pro.local')
    })

    test('should match the official username and password example', () => {
      const url = screens.vnc({
        host: 'Johns-MacBook-Pro.local',
        username: 'john',
        password: 'sekret',
      })
      expect(url).toBe('vnc://john:sekret@Johns-MacBook-Pro.local')
    })

    test('should match the official IP, username, and port example', () => {
      const url = screens.vnc({
        host: '192.168.1.14',
        username: 'bill',
        port: 5801,
      })
      expect(url).toBe('vnc://bill@192.168.1.14:5801')
    })

    test('should match the official observe parameter example', () => {
      const url = screens.vnc({
        host: '192.168.1.14',
        username: 'john',
        port: 5900,
        observe: true,
      })
      expect(url).toBe('vnc://john@192.168.1.14:5900?observe=true')
    })

    test('should encode VNC credentials', () => {
      const url = screens.vnc({
        host: 'server.example.com',
        username: 'john@example.com',
        password: 'p@ss=word',
      })
      expect(url).toBe('vnc://john%40example.com:p%40ss%3Dword@server.example.com')
    })
  })

  describe('ssh', () => {
    test('should match the official host-only example', () => {
      const url = screens.ssh({ host: '10.0.1.10' })
      expect(url).toBe('ssh://10.0.1.10')
    })

    test('should match the official host and port example', () => {
      const url = screens.ssh({ host: '10.0.1.10', port: 22 })
      expect(url).toBe('ssh://10.0.1.10:22')
    })

    test('should match the official username example', () => {
      const url = screens.ssh({ host: 'Johns-MacBook-Pro.local', username: 'john' })
      expect(url).toBe('ssh://john@Johns-MacBook-Pro.local')
    })

    test('should match the official username and password example', () => {
      const url = screens.ssh({
        host: 'Johns-MacBook-Pro.local',
        username: 'john',
        password: 'sekret',
      })
      expect(url).toBe('ssh://john:sekret@Johns-MacBook-Pro.local')
    })

    test('should match the official IP, username, and port example', () => {
      const url = screens.ssh({
        host: '192.168.1.14',
        username: 'bill',
        port: 222,
      })
      expect(url).toBe('ssh://bill@192.168.1.14:222')
    })

    test('should match the official stored SSH key parameter example', () => {
      const url = screens.ssh({
        host: 'server.example.com',
        username: 'john',
        sshKey: 'My Work Key',
      })
      expect(url).toBe('ssh://john@server.example.com?ssh-key=My%20Work%20Key')
    })

    test('should combine only official supported parameters', () => {
      const url = screens.ssh({
        host: 'server.example.com',
        username: 'john',
        password: 'sekret',
        port: 2222,
        sshKey: 'My Work Key',
        guest: true,
        observe: true,
      })
      expect(url).toBe('ssh://john:sekret@server.example.com:2222?ssh-key=My%20Work%20Key&guest=true&observe=true')
    })
  })
})
