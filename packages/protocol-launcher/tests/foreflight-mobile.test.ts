import { describe, expect, test } from 'vitest'
import { foreflightMobile } from '../src'

describe('foreflightMobile', () => {
  test('should expose only the documented ForeFlight Mobile URL helpers', () => {
    expect(Object.keys(foreflightMobile).sort()).toEqual(['mapSearch'])
  })

  test('mapSearch should return the documented route URL', () => {
    const url = foreflightMobile.mapSearch({ q: 'KISM OCF NITTS KSRQ 165 16 8000' })

    expect(url).toBe('foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+165+16+8000')
  })

  test('mapSearch should return the documented route URL with explicit units', () => {
    const url = foreflightMobile.mapSearch({ q: 'KISM OCF NITTS KSRQ 125mph 12gph 8000' })

    expect(url).toBe('foreflightmobile://maps/search?q=KISM+OCF+NITTS+KSRQ+125mph+12gph+8000')
  })

  test('mapSearch should return the documented route URL with metric fuel and altitude units', () => {
    const url = foreflightMobile.mapSearch({ q: 'KOSH GEP KFCM 130kts 410kgph 4000ft' })

    expect(url).toBe('foreflightmobile://maps/search?q=KOSH+GEP+KFCM+130kts+410kgph+4000ft')
  })

  test('mapSearch should preserve the documented USER@ waypoint syntax', () => {
    const url = foreflightMobile.mapSearch({ q: 'KOSH GEP USER@MYHOUSE KFCM 130kts' })

    expect(url).toBe('foreflightmobile://maps/search?q=KOSH+GEP+USER@MYHOUSE+KFCM+130kts')
  })

  test('mapSearch should preserve the documented CONTPACK@ waypoint syntax', () => {
    const url = foreflightMobile.mapSearch({ q: 'KOSH GEP CONTPACK@THECABIN KFCM 130kts' })

    expect(url).toBe('foreflightmobile://maps/search?q=KOSH+GEP+CONTPACK@THECABIN+KFCM+130kts')
  })

  test('mapSearch should preserve documented route units and tail numbers', () => {
    const url = foreflightMobile.mapSearch({ q: 'KAUS ELA KSGR 165kts 20.5gph 14000ft N12345' })

    expect(url).toBe('foreflightmobile://maps/search?q=KAUS+ELA+KSGR+165kts+20.5gph+14000ft+N12345')
  })

  test('mapSearch should preserve the documented intermediate speed and altitude change syntax', () => {
    const url = foreflightMobile.mapSearch({ q: 'KISM OCF/F060 NITTS/N0100F040 KSRQ 8000' })

    expect(url).toBe('foreflightmobile://maps/search?q=KISM+OCF/F060+NITTS/N0100F040+KSRQ+8000')
  })

  test('mapSearch should still encode reserved query separators inside the search string', () => {
    const url = foreflightMobile.mapSearch({ q: 'KISM OCF&NITTS KSRQ' })

    expect(url).toBe('foreflightmobile://maps/search?q=KISM+OCF%26NITTS+KSRQ')
  })
})
