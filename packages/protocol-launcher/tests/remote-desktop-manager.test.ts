import { describe, expect, test } from 'vitest'
import { remoteDesktopManager } from '../src'

describe('remoteDesktopManager', () => {
  test('should expose only the documented Remote Desktop Manager protocol handler helpers', () => {
    expect(Object.keys(remoteDesktopManager).sort()).toEqual([
      'edit',
      'find',
      'open',
      'openWithMacro',
      'select',
      'view',
    ])
  })

  test('open should match the official search/filter example', () => {
    const url = remoteDesktopManager.open({
      filter: 'RDP',
      tabpage: 'Dashboard',
    })

    expect(url).toBe('rdm://open?Filter=RDP&Tabpage=Dashboard')
  })

  test('open should use DataSource and Session parameters for a session URL', () => {
    const url = remoteDesktopManager.open({
      dataSource: 'd4cb6537-0471-4c07-a91b-43a5e1f1f007',
      session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
    })

    expect(url).toBe(
      'rdm://open?DataSource=d4cb6537-0471-4c07-a91b-43a5e1f1f007&Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
    )
  })

  test('open should build a documented template URL with connection overrides', () => {
    const url = remoteDesktopManager.open({
      template: 'b32e4f20-7c1e-4872-b5cb-c893cc2fc272',
      host: 'server.example.com',
      port: 3389,
      username: 'admin',
      domain: 'EXAMPLE',
      title: 'Support Session',
    })

    expect(url).toBe(
      'rdm://open?Template=b32e4f20-7c1e-4872-b5cb-c893cc2fc272&Host=server.example.com&Port=3389&Username=admin&Domain=EXAMPLE&Title=Support%20Session',
    )
  })

  test('find should find sessions by host', () => {
    const url = remoteDesktopManager.find({
      host: 'server.example.com',
    })

    expect(url).toBe('rdm://find?Host=server.example.com')
  })

  test('edit should edit the specified connection', () => {
    const url = remoteDesktopManager.edit({
      session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
    })

    expect(url).toBe('rdm://edit?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1')
  })

  test('view should view the password of the specified entry', () => {
    const url = remoteDesktopManager.view({
      session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
    })

    expect(url).toBe('rdm://view?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1')
  })

  test('openWithMacro should use the documented OpenWithMacro action', () => {
    const url = remoteDesktopManager.openWithMacro({
      session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
    })

    expect(url).toBe('rdm://OpenWithMacro?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1')
  })

  test('select should select a connection and dashboard tab', () => {
    const url = remoteDesktopManager.select({
      session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1',
      tabpage: 'Macros/Scripts/Tools',
    })

    expect(url).toBe('rdm://select?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1&Tabpage=Macros%2FScripts%2FTools')
  })

  test('parameters should omit empty optional values and encode reserved characters', () => {
    const url = remoteDesktopManager.open({
      host: 'server.example.com',
      password: 'p@ss word',
      title: 'Ops & SRE',
      username: undefined,
    })

    expect(url).toBe('rdm://open?Host=server.example.com&Password=p%40ss%20word&Title=Ops%20%26%20SRE')
  })
})
