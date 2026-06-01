import { describe, expect, test } from 'vitest'
import { royalTs } from '../src'

describe('royal-ts', () => {
  describe('cliCommand', () => {
    test('should match the official rtscli action connect URI example', () => {
      const url = royalTs.cliCommand({
        scope: 'action',
        command: 'connect',
        options: { '-n': 'QNAP (SSH)' },
      })

      expect(url).toBe('rtscli://local/action/connect?-n=QNAP+(SSH)')
    })

    test('should repeat CLI option keys for array values', () => {
      const url = royalTs.cliCommand({
        scope: 'action',
        command: 'connect',
        options: {
          '-n': 'QNAP (SSH)',
          '--property': ['"AutoRefresh":"True"', '"AutoRefreshIntervalInSeconds":"5"'],
        },
      })

      expect(url).toBe(
        'rtscli://local/action/connect?-n=QNAP+(SSH)&--property=%22AutoRefresh%22%3A%22True%22&--property=%22AutoRefreshIntervalInSeconds%22%3A%225%22',
      )
    })
  })

  describe('connect', () => {
    test('should build the documented rtscli action connect URI from a name', () => {
      const url = royalTs.connect({ name: 'QNAP (SSH)' })

      expect(url).toBe('rtscli://local/action/connect?-n=QNAP+(SSH)')
    })

    test('should include documented action connect value options in order', () => {
      const url = royalTs.connect({
        id: '3c74baad-8303-47cd-a2d5-7dc40975acdc',
        name: 'QNAP (SSH)',
        templateId: '44b68e15-bf97-4fbb-a1b2-9fd5b4e36d3d',
        credentialId: 'b3e2b244-7b84-4cb7-8da9-a0fd7e23e96f',
        credentialName: 'Shared Admin',
        username: 'royal.user',
        password: 'p@ss word',
      })

      expect(url).toBe(
        'rtscli://local/action/connect?-i=3c74baad-8303-47cd-a2d5-7dc40975acdc&-n=QNAP+(SSH)&--template-id=44b68e15-bf97-4fbb-a1b2-9fd5b4e36d3d&--credential-id=b3e2b244-7b84-4cb7-8da9-a0fd7e23e96f&--credential-name=Shared+Admin&-u=royal.user&-p=p%40ss+word',
      )
    })
  })

  describe('legacyConnect', () => {
    test('should match the official legacy URI search example', () => {
      const url = royalTs.legacyConnect({
        protocolIdentifier: 'rdp',
        uri: '192.168.5.16',
        using: 'uri',
      })

      expect(url).toBe('rtsx://rdp%3a%2f%2f192.168.5.16?using=uri')
    })

    test('should match the official legacy name search example with a credential name', () => {
      const url = royalTs.legacyConnect({
        protocolIdentifier: 'rdp',
        auth: { username: 'admin' },
        uri: 'Web Server 1',
        using: 'name',
      })

      expect(url).toBe('rtsx://rdp%3a%2f%2fadmin@Web%20Server%201?using=name')
    })

    test('should match the official legacy ID search example', () => {
      const url = royalTs.legacyConnect({
        protocolIdentifier: 'filetransfer',
        uri: '3c74baad-8303-47cd-a2d5-7dc40975acdc',
        using: 'id',
      })

      expect(url).toBe('rtsx://filetransfer%3a%2f%2f3c74baad-8303-47cd-a2d5-7dc40975acdc?using=id')
    })

    test('should match the official legacy ad hoc properties example', () => {
      const url = royalTs.legacyConnect({
        protocolIdentifier: 'rdp',
        uri: '192.168.5.16',
        using: 'adhoc',
        action: 'connect',
        properties: {
          Description: 'Connected using URI',
          ColorDepth: 8,
        },
      })

      expect(url).toBe(
        'rtsx://rdp%3a%2f%2f192.168.5.16?using=adhoc&action=connect&property_Description=Connected%20using%20URI&property_ColorDepth=8',
      )
    })

    test('should support documented legacy query credentials and do-not-activate flag', () => {
      const url = royalTs.legacyConnect({
        protocolIdentifier: 'rdp',
        uri: 'server.example.com',
        username: 'admin user',
        password: 'p@ss word',
        credential: 'Shared Admin',
        doNotActivate: true,
      })

      expect(url).toBe(
        'rtsx://rdp%3a%2f%2fserver.example.com?username=admin%20user&password=p%40ss%20word&credential=Shared%20Admin&donotactivate=true',
      )
    })
  })

  describe('legacyDisconnect', () => {
    test('should match the official legacy disconnect example', () => {
      const url = royalTs.legacyDisconnect({
        protocolIdentifier: 'rdp',
        uri: 'Web Server 1',
        using: 'name',
      })

      expect(url).toBe('rtsx://rdp%3a%2f%2fWeb%20Server%201?using=name&action=disconnect')
    })
  })
})
