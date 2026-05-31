import { describe, expect, test } from 'vitest'
import { omnioutliner } from '../src'

describe('omnioutliner', () => {
  test('openDocument should return the official default connected-folder example URL', () => {
    const url = omnioutliner.openDocument({
      documentName: 'My Outline.ooutline',
      folder: 'iCloud Drive',
    })

    expect(url).toBe('omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive')
  })

  test('openDocument should return the official nested document URL with focus and row elements', () => {
    const url = omnioutliner.openDocument({
      path: 'foo/bar',
      documentName: 'My Outline.ooutline',
      folder: 'Work Server 9070',
      focus: 'mDFTZpAeCb8',
      row: 'fh4Q0jgg5iB',
    })

    expect(url).toBe(
      'omnioutliner:///doc/foo/bar/My%20Outline.ooutline?folder=Work%20Server%209070&focus=mDFTZpAeCb8&row=fh4Q0jgg5iB',
    )
  })

  test('openDocumentRow should require and include a selected row element', () => {
    const url = omnioutliner.openDocumentRow({
      documentName: 'My Outline.ooutline',
      folder: 'iCloud Drive',
      row: 'fh4Q0jgg5iB',
    })

    expect(url).toBe('omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive&row=fh4Q0jgg5iB')
  })

  test('openLegacyLink should return the simplest possible legacy link', () => {
    const url = omnioutliner.openLegacyLink()

    expect(url).toBe('omnioutliner:///open')
  })

  test('openLegacyLink should return a legacy link with focus and row elements', () => {
    const url = omnioutliner.openLegacyLink({
      focus: 'nBZUyLQl3b6',
      row: 'j3NzslZpCi8',
    })

    expect(url).toBe('omnioutliner:///open?focus=nBZUyLQl3b6&row=j3NzslZpCi8')
  })

  test('openLink should return an existing OmniOutliner URL unchanged', () => {
    const url = omnioutliner.openLink({
      url: 'omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive',
    })

    expect(url).toBe('omnioutliner:///doc/My%20Outline.ooutline?folder=iCloud%20Drive')
  })
})
