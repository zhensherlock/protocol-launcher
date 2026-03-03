import { describe, expect, test } from 'vitest'
import { nova } from '../src'

describe('nova', () => {
  test('cloneProject should return a URL with url', async () => {
    const url = nova.cloneProject({
      url: 'https://github.com/zhensherlock/protocol-launcher.git',
    })
    expect(url).toBe('nova://clone?url=https://github.com/zhensherlock/protocol-launcher.git')
  })

  test('openExtension should return a URL with id', async () => {
    const url = nova.openExtension({
      id: 'com.panic.Playdate',
    })
    expect(url).toBe('nova://extension?id=com.panic.Playdate')
  })

  test('openFile should return a URL with path', async () => {
    const url = nova.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('nova://open?path=/etc/hosts')
  })

  test('openFile should return a URL with path and line', async () => {
    const url = nova.openFile({
      path: '/etc/hosts',
      line: 10,
    })
    expect(url).toBe('nova://open?path=/etc/hosts&line=10')
  })

  test('openFile should return a URL with path, line and column', async () => {
    const url = nova.openFile({
      path: '/etc/hosts',
      line: 10,
      column: 5,
    })
    expect(url).toBe('nova://open?path=/etc/hosts&line=10&column=5')
  })

  test('openFile should return a URL with path, line, column and type', async () => {
    const url = nova.openFile({
      path: '/etc/hosts',
      line: 10,
      column: 5,
      type: 'ini',
    })
    expect(url).toBe('nova://open?path=/etc/hosts&line=10&column=5&type=ini')
  })

  test('openFolder should return a URL with path', async () => {
    const url = nova.openFolder({
      path: '/etc/hosts',
    })
    expect(url).toBe('nova://open?path=/etc/hosts')
  })

  test('open should return a URL', async () => {
    const url = nova.open()
    expect(url).toBe('nova://')
  })

  test('register should return a URL with path', async () => {
    const url = nova.register({
      serial: '1234567890',
    })
    expect(url).toBe('nova://register?serial=1234567890')
  })
})
