import { describe, expect, test } from 'vitest'
import { termius } from '../src'

describe('termius', () => {
  test('open should return a URL', async () => {
    const url = termius.open()
    expect(url).toBe('termius://')
  })

  test('appHostSharing should return a URL with all parameters', async () => {
    const url = termius.appHostSharing({
      label: 'Production Database',
      ip: '192.168.1.100',
      port: 22,
      username: 'admin',
      os: 'linux',
    })
    expect(url).toBe(
      'termius://app/host-sharing?label=Production%20Database&ip=192.168.1.100&port=22&username=admin&os=linux',
    )
  })

  test('appHostSharing should return a URL with label, ip, port and username', async () => {
    const url = termius.appHostSharing({
      label: 'Web Server',
      ip: '10.0.0.50',
      port: 22,
      username: 'deploy',
    })
    expect(url).toBe('termius://app/host-sharing?label=Web%20Server&ip=10.0.0.50&port=22&username=deploy')
  })

  test('appHostSharing should return a URL with ip and port only', async () => {
    const url = termius.appHostSharing({
      ip: '192.168.1.1',
      port: 22,
    })
    expect(url).toBe('termius://app/host-sharing?ip=192.168.1.1&port=22')
  })

  test('appHostSharing should return a URL with string port', async () => {
    const url = termius.appHostSharing({
      ip: '10.0.0.1',
      port: '8080',
    })
    expect(url).toBe('termius://app/host-sharing?ip=10.0.0.1&port=8080')
  })

  test('appHostSharing should return a URL without parameters', async () => {
    const url = termius.appHostSharing({})
    expect(url).toBe('termius://app/host-sharing')
  })
})
