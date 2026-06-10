import { describe, expect, test } from 'vitest'
import { truecontext } from '../src'

describe('truecontext', () => {
  test('should expose only the documented TrueContext App-to-App actions', () => {
    expect(Object.keys(truecontext).sort()).toEqual(['launch', 'list', 'open', 'refresh', 'search', 'send'])
  })

  test('launch should return the documented x-callback-url launch action', () => {
    const url = truecontext.launch()

    expect(url).toBe('truecontext://x-callback-url/launch')
  })

  test('refresh should return the documented x-callback-url refresh action', () => {
    const url = truecontext.refresh()

    expect(url).toBe('truecontext://x-callback-url/refresh')
  })

  test('list should display the documented Inbox view', () => {
    const url = truecontext.list({ type: 'inbox' })

    expect(url).toBe('truecontext://x-callback-url/list?type=inbox')
  })

  test('list should serialize the documented tag.list and tagOperator parameters', () => {
    const url = truecontext.list({
      type: 'resourcelibrary',
      tagOperator: 'AND',
      tagList: ['install', 'checklist'],
    })

    expect(url).toBe(
      'truecontext://x-callback-url/list?type=resourcelibrary&tagOperator=AND&tag.list=%5Binstall%2Cchecklist%5D',
    )
  })

  test('open should return the official form dispatch example with encoded question unique IDs', () => {
    const url = truecontext.open({
      name: 'Universal Work Order',
      answers: {
        'Job - Type': 'Warranty',
        'Job - Work Order #': 1234567,
      },
    })

    expect(url).toBe(
      'truecontext://x-callback-url/open?name=Universal%20Work%20Order&Job%20-%20Type=Warranty&Job%20-%20Work%20Order%20%23=1234567',
    )
  })

  test('open should support the documented x-callback parameters', () => {
    const url = truecontext.open({
      name: 'Universal Work Order',
      answers: {
        'Job - Type': 'Warranty',
        'Job - Work Order #': 1234567,
      },
      xSuccess: 'pftest://success',
      xCancel: 'pftest://cancel',
      xError: 'pftest://error',
    })

    expect(url).toBe(
      'truecontext://x-callback-url/open?name=Universal%20Work%20Order&Job%20-%20Type=Warranty&Job%20-%20Work%20Order%20%23=1234567&x-success=pftest%3A%2F%2Fsuccess&x-cancel=pftest%3A%2F%2Fcancel&x-error=pftest%3A%2F%2Ferror',
    )
  })

  test('open should support documented resource and draft identifiers', () => {
    expect(
      truecontext.open({
        type: 'resourcelibrary',
        resourceID: 1234567891,
      }),
    ).toBe('truecontext://x-callback-url/open?type=resourcelibrary&resourceID=1234567891')

    expect(
      truecontext.open({
        clientDataRecordID: 'A1A1A1A1-AAAA-1111-AAAAAA111111',
      }),
    ).toBe('truecontext://x-callback-url/open?clientDataRecordID=A1A1A1A1-AAAA-1111-AAAAAA111111')
  })

  test('open should serialize the documented multi-language _lang parameter', () => {
    const url = truecontext.open({ name: 'asset list', lang: 'es' })

    expect(url).toBe('truecontext://x-callback-url/open?name=asset%20list&_lang=es')
  })

  test('open should percent-encode special characters while preserving parentheses per TrueContext docs', () => {
    const url = truecontext.open({
      name: "Inspection Form (A)!*'",
      answers: {
        "Question (ID)!*'": "Value (ok)!*'",
      },
    })

    expect(url).toBe(
      'truecontext://x-callback-url/open?name=Inspection%20Form%20(A)%21%2A%27&Question%20(ID)%21%2A%27=Value%20(ok)%21%2A%27',
    )
  })

  test('send should return the documented formID dispatch and send URL', () => {
    const url = truecontext.send({
      type: 'forms',
      formID: 99999999,
      answers: {
        ServiceType: 'Warranty',
      },
    })

    expect(url).toBe('truecontext://x-callback-url/send?type=forms&formID=99999999&ServiceType=Warranty')
  })

  test('send should support documented draft and inbox identifiers', () => {
    expect(
      truecontext.send({
        type: 'drafts',
        clientDataRecordID: 'A1A1A1A1-AAAA-1111-AAAAAA111111',
      }),
    ).toBe('truecontext://x-callback-url/send?type=drafts&clientDataRecordID=A1A1A1A1-AAAA-1111-AAAAAA111111')

    expect(
      truecontext.send({
        type: 'inbox',
        dataRecordID: 123456789,
      }),
    ).toBe('truecontext://x-callback-url/send?type=inbox&dataRecordID=123456789')
  })

  test('search should support documented state and date period filters', () => {
    const url = truecontext.search({
      stateFilter: 'AllIncomplete',
      dateSearchType: 'DatePeriod',
      datePeriod: 'ThisWeek',
    })

    expect(url).toBe(
      'truecontext://x-callback-url/search?stateFilter=AllIncomplete&dateSearchType=DatePeriod&datePeriod=ThisWeek',
    )
  })

  test('search should support documented date range filters', () => {
    const url = truecontext.search({
      dateSearchType: 'DateRange',
      dateRangeStart: '2021-06-16T04:00Z',
      dateRangeEnd: '2021-06-18T04:00Z',
    })

    expect(url).toBe(
      'truecontext://x-callback-url/search?dateSearchType=DateRange&dateRangeStart=2021-06-16T04%3A00Z&dateRangeEnd=2021-06-18T04%3A00Z',
    )
  })

  test('should support documented alternative TrueContext schemes and HTTPS format', () => {
    expect(truecontext.launch({ scheme: 'tcxt' })).toBe('tcxt://x-callback-url/launch')
    expect(truecontext.launch({ scheme: 'prontoforms' })).toBe('prontoforms://x-callback-url/launch')
    expect(truecontext.open({ format: 'web', name: 'asset list' })).toBe(
      'https://prontofor.ms/x-callback-url/open?name=asset%20list',
    )
  })
})
