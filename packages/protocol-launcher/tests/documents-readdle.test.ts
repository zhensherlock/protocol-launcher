import { describe, expect, test } from 'vitest'
import { documentsReaddle } from '../src'

describe('documentsReaddle', () => {
  test('openFile should return an rdocs URL with an internal My Files path', () => {
    const url = documentsReaddle.openFile({
      path: 'folder/subfolder/file.pdf',
    })

    expect(url).toBe('rdocs:///folder/subfolder/file.pdf')
  })

  test('openSyncedFile should return an rdocs URL with the SyncedFolders static path', () => {
    const url = documentsReaddle.openSyncedFile({
      path: 'folder1/folder2/test.pdf',
    })

    expect(url).toBe('rdocs:///SyncedFolders/folder1/folder2/test.pdf')
  })

  test('openSyncedFile should support the official translated Synced folders segment', () => {
    const url = documentsReaddle.openSyncedFile({
      syncedFoldersPath: '同期フォルダ',
      path: 'folder1/folder2/test.pdf',
    })

    expect(url).toBe('rdocs:///同期フォルダ/folder1/folder2/test.pdf')
  })
})
