import { describe, expect, test } from 'vitest'
import { powerBiMobile } from '../src'

const dashboardObjectId = 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb'
const tileObjectId = 'cccccccc-2222-3333-4444-dddddddddddd'
const reportObjectId = 'dddddddd-3333-4444-5555-eeeeeeeeeeee'
const groupObjectId = 'ffffffff-5555-6666-7777-aaaaaaaaaaaa'
const contextGroupObjectId = 'eeeeeeee-4444-5555-6666-ffffffffffff'
const bookmarkGuid = 'eeeeeeee-4444-5555-6666-ffffffffffff'

describe('powerBiMobile', () => {
  test('should expose only the documented Power BI mobile URL helpers', () => {
    expect(Object.keys(powerBiMobile).sort()).toEqual(['openApp', 'openDashboard', 'openReport', 'openTile'])
  })

  test('openApp should return the Power BI mobile app URL scheme', () => {
    const url = powerBiMobile.openApp()

    expect(url).toBe('mspbi://app/')
  })

  test('openDashboard should return a dashboard deep link without workspace parameters', () => {
    const url = powerBiMobile.openDashboard({ dashboardObjectId })

    expect(url).toBe('mspbi://app/OpenDashboard?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb')
  })

  test('openDashboard should include the optional workspace group object ID', () => {
    const url = powerBiMobile.openDashboard({
      dashboardObjectId,
      groupObjectId,
    })

    expect(url).toBe(
      'mspbi://app/OpenDashboard?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb&GroupObjectId=ffffffff-5555-6666-7777-aaaaaaaaaaaa',
    )
  })

  test('openTile should return a tile focus deep link without workspace parameters', () => {
    const url = powerBiMobile.openTile({
      dashboardObjectId,
      tileObjectId,
    })

    expect(url).toBe(
      'mspbi://app/OpenTile?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb&TileObjectId=cccccccc-2222-3333-4444-dddddddddddd',
    )
  })

  test('openTile should include the optional workspace group object ID', () => {
    const url = powerBiMobile.openTile({
      dashboardObjectId,
      tileObjectId,
      groupObjectId,
    })

    expect(url).toBe(
      'mspbi://app/OpenTile?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb&TileObjectId=cccccccc-2222-3333-4444-dddddddddddd&GroupObjectId=ffffffff-5555-6666-7777-aaaaaaaaaaaa',
    )
  })

  test('openReport should return a report deep link without workspace parameters', () => {
    const url = powerBiMobile.openReport({ reportObjectId })

    expect(url).toBe('mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee')
  })

  test('openReport should include the optional workspace group object ID', () => {
    const url = powerBiMobile.openReport({
      reportObjectId,
      groupObjectId,
    })

    expect(url).toBe(
      'mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee&GroupObjectId=ffffffff-5555-6666-7777-aaaaaaaaaaaa',
    )
  })

  test('openReport should include the documented report page parameter', () => {
    const url = powerBiMobile.openReport({
      reportObjectId,
      reportPage: 'ReportSection11',
    })

    expect(url).toBe(
      'mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee&reportPage=ReportSection11',
    )
  })

  test('openReport should include the documented bookmark GUID parameter', () => {
    const url = powerBiMobile.openReport({
      reportObjectId,
      bookmarkGuid,
    })

    expect(url).toBe(
      'mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee&bookmarkGuid=eeeeeeee-4444-5555-6666-ffffffffffff',
    )
  })

  test('openReport should include the documented context parameter', () => {
    const url = powerBiMobile.openReport({
      reportObjectId,
      groupObjectId: contextGroupObjectId,
      context: 'SlackDeepLink',
    })

    expect(url).toBe(
      'mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee&GroupObjectId=eeeeeeee-4444-5555-6666-ffffffffffff&context=SlackDeepLink',
    )
  })
})
