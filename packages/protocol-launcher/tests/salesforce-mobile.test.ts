import { describe, expect, test } from 'vitest'
import { salesforceMobile } from '../src'

describe('salesforceMobile', () => {
  test('should expose only the documented Salesforce mobile URL helpers', () => {
    expect(Object.keys(salesforceMobile).sort()).toEqual([
      'downloadFile',
      'editRecord',
      'followUser',
      'objectHome',
      'viewRecord',
    ])
  })

  test('viewRecord should return the documented record detail URL', () => {
    const url = salesforceMobile.viewRecord({ id: '001D000000Jwj9v' })

    expect(url).toBe('salesforce1://sObject/001D000000Jwj9v/view')
  })

  test('editRecord should return the documented record edit URL', () => {
    const url = salesforceMobile.editRecord({ id: '006R0000001r7Rq' })

    expect(url).toBe('salesforce1://sObject/006R0000001r7Rq/edit')
  })

  test('objectHome should return the documented object home URL', () => {
    const url = salesforceMobile.objectHome({ objectName: 'Account' })

    expect(url).toBe('salesforce1://sObject/Account/home')
  })

  test('downloadFile should return the documented file download URL', () => {
    const url = salesforceMobile.downloadFile({ id: '069R00000000mr3' })

    expect(url).toBe('salesforce1://sObject/069R00000000mr3/download')
  })

  test('followUser should return the documented user follow URL', () => {
    const url = salesforceMobile.followUser({
      id: '005R0000000Df5W',
      userid: '005R0000000HfcF',
    })

    expect(url).toBe('salesforce1://sObject/005R0000000Df5W/follow?userid=005R0000000HfcF')
  })

  test('record URLs should include documented additional query parameters', () => {
    const url = salesforceMobile.viewRecord({
      id: '001D000000Jwj9v',
      s1oid: '00DT00000000ABC',
      s1nid: '00UT00000000XYZ',
      s1uid: '005T0000000AAAA',
      iosoru: 'https://example.com/fallback',
    })

    expect(url).toBe(
      'salesforce1://sObject/001D000000Jwj9v/view?s1oid=00DT00000000ABC&s1nid=00UT00000000XYZ&s1uid=005T0000000AAAA&iosoru=https%3A%2F%2Fexample.com%2Ffallback',
    )
  })

  test('objectHome should include documented additional query parameters', () => {
    const url = salesforceMobile.objectHome({
      objectName: 'Opportunity',
      s1oid: '00DT00000000ABC',
      s1nid: '00UT00000000XYZ',
    })

    expect(url).toBe('salesforce1://sObject/Opportunity/home?s1oid=00DT00000000ABC&s1nid=00UT00000000XYZ')
  })
})
