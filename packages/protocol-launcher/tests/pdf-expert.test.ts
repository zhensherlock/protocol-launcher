import { describe, expect, test } from 'vitest'
import { pdfExpert } from '../src'

describe('pdfExpert', () => {
  test('openRemotePdf should add the PDFE prefix to a direct PDF URL', () => {
    const url = pdfExpert.openRemotePdf({
      url: 'https://example.com/Guide.pdf',
    })

    expect(url).toBe('PDFEhttps://example.com/Guide.pdf')
  })

  test('openFile should return a PDFEFILE URL with an internal file path', () => {
    const url = pdfExpert.openFile({
      path: 'Folder/Subfolder/File.pdf',
    })

    expect(url).toBe('PDFEFILE:///Folder/Subfolder/File.pdf')
  })

  test('openFile should preserve encoded spaces in paths', () => {
    const url = pdfExpert.openFile({
      path: 'Folder%201/Folder%202/File.pdf',
    })

    expect(url).toBe('PDFEFILE:///Folder%201/Folder%202/File.pdf')
  })

  test('openSyncedFile should return a pdfefile URL with the SyncedFolders static path', () => {
    const url = pdfExpert.openSyncedFile({
      path: 'folder1/folder2/test.pdf',
    })

    expect(url).toBe('pdfefile:///SyncedFolders/folder1/folder2/test.pdf')
  })

  test('openSyncedFile should preserve encoded spaces in synced paths', () => {
    const url = pdfExpert.openSyncedFile({
      path: 'folder%201/folder%202/test.pdf',
    })

    expect(url).toBe('pdfefile:///SyncedFolders/folder%201/folder%202/test.pdf')
  })
})
