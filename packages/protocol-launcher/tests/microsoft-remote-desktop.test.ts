import { describe, expect, test } from 'vitest'
import { microsoftRemoteDesktop } from '../src'

describe('microsoftRemoteDesktop', () => {
  test('should expose only the documented Microsoft Remote Desktop URI helpers', () => {
    expect(Object.keys(microsoftRemoteDesktop).sort()).toEqual(['avdConnect', 'legacyRdp', 'open', 'subscribe'])
  })

  test('open should return the documented ms-rd launch URI', () => {
    const url = microsoftRemoteDesktop.open()

    expect(url).toBe('ms-rd:')
  })

  test('subscribe should return the documented ms-rd subscribe URI', () => {
    const url = microsoftRemoteDesktop.subscribe({
      url: 'https://rdweb.wvd.microsoft.com',
    })

    expect(url).toBe('ms-rd:subscribe?url=https://rdweb.wvd.microsoft.com')
  })

  test('legacyRdp should serialize documented RDP attributes with their type prefixes', () => {
    const url = microsoftRemoteDesktop.legacyRdp({
      attributes: [
        { name: 'full address', value: 'mypc:3389' },
        { name: 'audiomode', value: 2 },
        { name: 'disable themes', value: 1 },
      ],
    })

    expect(url).toBe('rdp://full%20address=s:mypc:3389&audiomode=i:2&disable%20themes=i:1')
  })

  test('legacyRdp should encode reserved characters in RDP attribute values', () => {
    const url = microsoftRemoteDesktop.legacyRdp({
      attributes: [
        { name: 'username', value: 'user@example.com' },
        { name: 'remoteapplicationcmdline', value: '/safe "value & more"' },
      ],
    })

    expect(url).toBe(
      'rdp://username=s:user%40example.com&remoteapplicationcmdline=s:%2Fsafe%20%22value%20%26%20more%22',
    )
  })

  test('legacyRdp should support the documented drive redirection value', () => {
    const url = microsoftRemoteDesktop.legacyRdp({
      attributes: [{ name: 'drivestoredirect', value: '*' }],
    })

    expect(url).toBe('rdp://drivestoredirect=s:*')
  })

  test('avdConnect should return the documented ms-avd connect URI', () => {
    const url = microsoftRemoteDesktop.avdConnect({
      workspaceId: '1638e073-63b2-46d8-bd84-ea02ea905467',
      resourceid: 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1',
      username: 'user@contoso.com',
      version: 0,
    })

    expect(url).toBe(
      'ms-avd:connect?workspaceId=1638e073-63b2-46d8-bd84-ea02ea905467&resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com&version=0',
    )
  })

  test('avdConnect should include documented optional diagnostics and display parameters', () => {
    const url = microsoftRemoteDesktop.avdConnect({
      workspaceId: '1638e073-63b2-46d8-bd84-ea02ea905467',
      resourceid: 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1',
      username: 'user@contoso.com',
      env: 'avdarm',
      version: 0,
      launchpartnerid: '11111111-2222-3333-4444-555555555555',
      peeractivityid: '66666666-7777-8888-9999-000000000000',
      usemultimon: true,
    })

    expect(url).toBe(
      'ms-avd:connect?workspaceId=1638e073-63b2-46d8-bd84-ea02ea905467&resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com&env=avdarm&version=0&launchpartnerid=11111111-2222-3333-4444-555555555555&peeractivityid=66666666-7777-8888-9999-000000000000&usemultimon=true',
    )
  })

  test('avdConnect should omit optional values', () => {
    const url = microsoftRemoteDesktop.avdConnect({
      resourceid: 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1',
      username: 'user@contoso.com',
    })

    expect(url).toBe('ms-avd:connect?resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com')
  })
})
