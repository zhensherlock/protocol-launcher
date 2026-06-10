import { describe, expect, test } from 'vitest'
import { dynamics365FieldServiceMobile } from '../src'

const appBase = {
  orgUrl: 'contoso.onmicrosoft.com',
  appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
}

describe('dynamics365FieldServiceMobile', () => {
  test('should expose only the documented Dynamics 365 Field Service mobile URL helpers', () => {
    expect(Object.keys(dynamics365FieldServiceMobile).sort()).toEqual([
      'createEntityRecord',
      'openEntityList',
      'openEntityRecord',
    ])
  })

  test('openEntityRecord should return an entityrecord deep link', () => {
    const url = dynamics365FieldServiceMobile.openEntityRecord({
      ...appBase,
      etn: 'bookableresourcebooking',
      id: '00000000-1111-2222-3333-444444444444',
    })

    expect(url).toBe(
      'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444',
    )
  })

  test('openEntityRecord should include documented extraqs values', () => {
    const url = dynamics365FieldServiceMobile.openEntityRecord({
      ...appBase,
      etn: 'bookableresourcebooking',
      id: '00000000-1111-2222-3333-444444444444',
      extraqs: 'formid=main form',
    })

    expect(url).toBe(
      'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444&extraqs=formid%3Dmain%20form',
    )
  })

  test('createEntityRecord should return an entityrecord create form deep link', () => {
    const url = dynamics365FieldServiceMobile.createEntityRecord({
      ...appBase,
      etn: 'bookableresourcebooking',
    })

    expect(url).toBe(
      'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=',
    )
  })

  test('createEntityRecord should include documented extraqs values', () => {
    const url = dynamics365FieldServiceMobile.createEntityRecord({
      ...appBase,
      etn: 'bookableresourcebooking',
      extraqs: 'formid=main form',
    })

    expect(url).toBe(
      'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=&extraqs=formid%3Dmain%20form',
    )
  })

  test('openEntityList should return an entitylist deep link with documented view parameters', () => {
    const url = dynamics365FieldServiceMobile.openEntityList({
      ...appBase,
      etn: 'bookableresourcebooking',
      viewid: '11111111-2222-3333-4444-555555555555',
      viewType: 1039,
    })

    expect(url).toBe(
      'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039',
    )
  })
})
