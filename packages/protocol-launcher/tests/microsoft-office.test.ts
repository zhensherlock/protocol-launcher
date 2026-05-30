import { describe, expect, test } from 'vitest'
import { microsoftOffice } from '../src'

describe('microsoftOffice', () => {
  test('openDocument should return the abbreviated Office URI form', () => {
    const url = microsoftOffice.openDocument({
      scheme: 'ms-word',
      uri: 'https://contoso.com/documents/report.docx',
    })

    expect(url).toBe('ms-word:https://contoso.com/documents/report.docx')
  })

  test('openForEdit should return an open-for-edit URI', () => {
    const url = microsoftOffice.openForEdit({
      scheme: 'ms-word',
      uri: 'https://contoso.com/documents/report.docx',
    })

    expect(url).toBe('ms-word:ofe|u|https://contoso.com/documents/report.docx')
  })

  test('openForView should return an open-for-view URI', () => {
    const url = microsoftOffice.openForView({
      scheme: 'ms-excel',
      uri: 'https://contoso.com/Q4/budget.xlsx',
    })

    expect(url).toBe('ms-excel:ofv|u|https://contoso.com/Q4/budget.xlsx')
  })

  test('newFromTemplate should include save location when provided', () => {
    const url = microsoftOffice.newFromTemplate({
      scheme: 'ms-powerpoint',
      templateUri: 'https://contoso.com/templates/status.potx',
      saveLocation: 'https://contoso.com/presentations/',
    })

    expect(url).toBe(
      'ms-powerpoint:nft|u|https://contoso.com/templates/status.potx|s|https://contoso.com/presentations/',
    )
  })

  test('newFromTemplate should omit save location when not provided', () => {
    const url = microsoftOffice.newFromTemplate({
      scheme: 'ms-excel',
      templateUri: 'https://contoso.com/templates/budget.xltx',
    })

    expect(url).toBe('ms-excel:nft|u|https://contoso.com/templates/budget.xltx')
  })

  test('app launchers should use their Office scheme names', () => {
    expect(microsoftOffice.word.openForEdit({ uri: 'https://contoso.com/documents/report.docx' })).toBe(
      'ms-word:ofe|u|https://contoso.com/documents/report.docx',
    )
    expect(microsoftOffice.powerPoint.openForView({ uri: 'https://contoso.com/decks/all-hands.pptx' })).toBe(
      'ms-powerpoint:ofv|u|https://contoso.com/decks/all-hands.pptx',
    )
    expect(microsoftOffice.excel.openDocument({ uri: 'https://contoso.com/Q4/budget.xlsx' })).toBe(
      'ms-excel:https://contoso.com/Q4/budget.xlsx',
    )
  })

  test('template-capable app launchers should create documents from templates', () => {
    const url = microsoftOffice.visio.newFromTemplate({
      templateUri: 'https://contoso.com/templates/process.vstx',
      saveLocation: 'https://contoso.com/diagrams/',
    })

    expect(url).toBe('ms-visio:nft|u|https://contoso.com/templates/process.vstx|s|https://contoso.com/diagrams/')
  })

  test('SharePoint Designer and InfoPath launchers should not expose template creation', () => {
    expect(microsoftOffice.sharePointDesigner.openForEdit({ uri: 'https://contoso.com/site/default.aspx' })).toBe(
      'ms-spd:ofe|u|https://contoso.com/site/default.aspx',
    )
    expect(microsoftOffice.infoPath.openForView({ uri: 'https://contoso.com/forms/request.xml' })).toBe(
      'ms-infopath:ofv|u|https://contoso.com/forms/request.xml',
    )
    expect('newFromTemplate' in microsoftOffice.sharePointDesigner).toBe(false)
    expect('newFromTemplate' in microsoftOffice.infoPath).toBe(false)
  })

  test('document URIs should be based on the http or https scheme', () => {
    expect(() =>
      microsoftOffice.openForEdit({
        scheme: 'ms-word',
        uri: 'file:///Users/example/report.docx',
      }),
    ).toThrow('Microsoft Office document URI must use the http or https scheme.')
  })

  test('template save location should point to the same host name as the template URI', () => {
    expect(() =>
      microsoftOffice.newFromTemplate({
        scheme: 'ms-word',
        templateUri: 'https://contoso.com/templates/elegance.dotx',
        saveLocation: 'https://example.com/documents/',
      }),
    ).toThrow('Microsoft Office save location URI must point to the same host name as the template URI.')
  })

  test('Excel command argument paths should be limited to 216 characters', () => {
    const path = `${'a'.repeat(217)}.xlsx`

    expect(() =>
      microsoftOffice.excel.openForView({
        uri: `https://contoso.com/${path}`,
      }),
    ).toThrow('Microsoft Office document URI path length must be 216 characters or fewer.')
  })

  test('URI path file names should reject characters disallowed by Office', () => {
    expect(() =>
      microsoftOffice.word.openForView({
        uri: 'https://contoso.com/documents/bad%7Cname.docx',
      }),
    ).toThrow('Microsoft Office URI path file names must not contain \\ / : ? < > | " or * characters.')
  })
})
