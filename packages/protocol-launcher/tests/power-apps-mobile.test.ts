import { describe, expect, test } from 'vitest'
import { powerAppsMobile } from '../src'

const modelDrivenBase = {
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
  appLogicalName: 'cr12_e567',
}

const canvasAppBase = {
  appId: '11111111-2222-3333-4444-555555555555',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
  environmentId: 'g67tfyufhkjfg',
}

describe('powerAppsMobile', () => {
  test('should expose only the documented Power Apps mobile URL helpers', () => {
    expect(Object.keys(powerAppsMobile).sort()).toEqual([
      'openCanvasApp',
      'openEntityList',
      'openEntityRecord',
      'openModelDrivenApp',
      'openWrappedApp',
    ])
  })

  test('openModelDrivenApp should return the documented Power Apps mobile model-driven app link', () => {
    const url = powerAppsMobile.openModelDrivenApp(modelDrivenBase)

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true',
    )
  })

  test('openModelDrivenApp should include documented optional model-driven parameters', () => {
    const url = powerAppsMobile.openModelDrivenApp({
      ...modelDrivenBase,
      restartApp: true,
      forceOfflineDataSync: true,
      autoLoginUpn: 'user@example.com',
    })

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&autoLoginUpn=user%40example.com',
    )
  })

  test('openModelDrivenApp should omit undocumented false flag values', () => {
    const url = powerAppsMobile.openModelDrivenApp({
      ...modelDrivenBase,
      restartApp: false,
      forceOfflineDataSync: false,
    } as never)

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true',
    )
  })

  test('openEntityRecord should return an entityrecord deep link', () => {
    const url = powerAppsMobile.openEntityRecord({
      ...modelDrivenBase,
      etn: 'account',
      id: '00000000-1111-2222-3333-444444444444',
    })

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&etn=account&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444',
    )
  })

  test('openEntityRecord should include documented extraqs values', () => {
    const url = powerAppsMobile.openEntityRecord({
      ...modelDrivenBase,
      etn: 'account',
      id: '',
      extraqs: 'formid=main form',
    })

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&etn=account&pagetype=entityrecord&id=&extraqs=formid%3Dmain%20form',
    )
  })

  test('openEntityList should return an entitylist deep link with documented view parameters', () => {
    const url = powerAppsMobile.openEntityList({
      ...modelDrivenBase,
      etn: 'account',
      viewid: '11111111-2222-3333-4444-555555555555',
      viewType: 1039,
    })

    expect(url).toBe(
      'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&etn=account&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039',
    )
  })

  test('openCanvasApp should return the documented Power Apps mobile canvas app link', () => {
    const url = powerAppsMobile.openCanvasApp(canvasAppBase)

    expect(url).toBe(
      'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg',
    )
  })

  test('openCanvasApp should include documented optional canvas app parameters', () => {
    const url = powerAppsMobile.openCanvasApp({
      ...canvasAppBase,
      restartApp: true,
      autoLoginUpn: 'user@example.com',
    })

    expect(url).toBe(
      'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&restartApp=true&autoLoginUpn=user%40example.com',
    )
  })

  test('openCanvasApp should omit undocumented false restartApp values', () => {
    const url = powerAppsMobile.openCanvasApp({
      ...canvasAppBase,
      restartApp: false,
    } as never)

    expect(url).toBe(
      'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg',
    )
  })

  test('openWrappedApp should return the documented wrapped native mobile app link', () => {
    const url = powerAppsMobile.openWrappedApp({
      appId: canvasAppBase.appId,
      tenantId: canvasAppBase.tenantId,
    })

    expect(url).toBe(
      'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee',
    )
  })

  test('openWrappedApp should include documented optional wrapped app parameters', () => {
    const url = powerAppsMobile.openWrappedApp({
      appId: canvasAppBase.appId,
      tenantId: canvasAppBase.tenantId,
      restartApp: true,
      autoLoginUpn: 'user@example.com',
    })

    expect(url).toBe(
      'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&restartApp=true&autoLoginUpn=user%40example.com',
    )
  })

  test('openWrappedApp should omit undocumented false restartApp values', () => {
    const url = powerAppsMobile.openWrappedApp({
      appId: canvasAppBase.appId,
      tenantId: canvasAppBase.tenantId,
      restartApp: false,
    } as never)

    expect(url).toBe(
      'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee',
    )
  })
})
