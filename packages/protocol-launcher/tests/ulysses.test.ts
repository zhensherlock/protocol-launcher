import { describe, expect, test } from 'vitest'
import { ulysses } from '../src'

describe('ulysses', () => {
  describe('open', () => {
    test('open should return a URL without parameters', async () => {
      const url = ulysses.open()
      expect(url).toBe('ulysses://')
    })
  })

  describe('openItem', () => {
    test('openItem should return a URL with id', async () => {
      const url = ulysses.openItem({
        id: 'DCj45UWKr_g15y2vBPwJdQ',
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=DCj45UWKr_g15y2vBPwJdQ')
    })

    test('openItem should return a URL with sheet identifier', async () => {
      const url = ulysses.openItem({
        id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=hZ7IX2jqKbVmPGlYUXkZjQ')
    })

    test('openItem should return a URL with group name', async () => {
      const url = ulysses.openItem({
        id: 'My Group',
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=My%20Group')
    })

    test('openItem should return a URL with group path', async () => {
      const url = ulysses.openItem({
        id: '/Books/Huckleberry Finn',
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=%2FBooks%2FHuckleberry%20Finn')
    })

    test('openItem should return a URL with x-success callback', async () => {
      const url = ulysses.openItem({
        id: 'DCj45UWKr_g15y2vBPwJdQ',
        xSuccess: 'myapp://x-callback-url/success',
      })
      expect(url).toBe(
        'ulysses://x-callback-url/open?id=DCj45UWKr_g15y2vBPwJdQ&x-success=myapp%3A%2F%2Fx-callback-url%2Fsuccess',
      )
    })

    test('openItem should return a URL with x-error callback', async () => {
      const url = ulysses.openItem({
        id: 'DCj45UWKr_g15y2vBPwJdQ',
        xError: 'myapp://x-callback-url/error',
      })
      expect(url).toBe(
        'ulysses://x-callback-url/open?id=DCj45UWKr_g15y2vBPwJdQ&x-error=myapp%3A%2F%2Fx-callback-url%2Ferror',
      )
    })

    test('openItem should return a URL with x-success and x-error callbacks', async () => {
      const url = ulysses.openItem({
        id: 'DCj45UWKr_g15y2vBPwJdQ',
        xSuccess: 'myapp://x-callback-url/success',
        xError: 'myapp://x-callback-url/error',
      })
      expect(url).toBe(
        'ulysses://x-callback-url/open?id=DCj45UWKr_g15y2vBPwJdQ&x-success=myapp%3A%2F%2Fx-callback-url%2Fsuccess&x-error=myapp%3A%2F%2Fx-callback-url%2Ferror',
      )
    })

    test('openItem should return a URL with silent-mode', async () => {
      const url = ulysses.openItem({
        id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
        silentMode: true,
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=hZ7IX2jqKbVmPGlYUXkZjQ&silent-mode=YES')
    })

    test('openItem should return a URL with all parameters', async () => {
      const url = ulysses.openItem({
        id: '/Books/Huckleberry Finn',
        xSuccess: 'myapp://x-callback-url/success',
        xError: 'myapp://x-callback-url/error',
        silentMode: true,
      })
      expect(url).toBe(
        'ulysses://x-callback-url/open?id=%2FBooks%2FHuckleberry%20Finn&x-success=myapp%3A%2F%2Fx-callback-url%2Fsuccess&x-error=myapp%3A%2F%2Fx-callback-url%2Ferror&silent-mode=YES',
      )
    })

    test('openItem should return a URL without optional parameters', async () => {
      const url = ulysses.openItem({
        id: 'Inbox',
      })
      expect(url).toBe('ulysses://x-callback-url/open?id=Inbox')
    })
  })

  describe('openAll', () => {
    test('openAll should return a URL', async () => {
      const url = ulysses.openAll()
      expect(url).toBe('ulysses://x-callback-url/open-all')
    })
  })

  describe('openRecent', () => {
    test('openRecent should return a URL', async () => {
      const url = ulysses.openRecent()
      expect(url).toBe('ulysses://x-callback-url/open-recent')
    })
  })

  describe('openFavorites', () => {
    test('openFavorites should return a URL', async () => {
      const url = ulysses.openFavorites()
      expect(url).toBe('ulysses://x-callback-url/open-favorites')
    })
  })

  describe('newSheet', () => {
    test('newSheet should return a URL without parameters', async () => {
      const url = ulysses.newSheet()
      expect(url).toBe('ulysses://x-callback-url/new-sheet')
    })

    test('newSheet should return a URL with text', async () => {
      const url = ulysses.newSheet({
        text: 'My new sheet',
      })
      expect(url).toBe('ulysses://x-callback-url/new-sheet?text=My%20new%20sheet')
    })

    test('newSheet should return a URL with text and index', async () => {
      const url = ulysses.newSheet({
        text: 'My new sheet',
        index: 2,
      })
      expect(url).toBe('ulysses://x-callback-url/new-sheet?text=My%20new%20sheet&index=2')
    })

    test('newSheet should return a URL with text, group and format', async () => {
      const url = ulysses.newSheet({
        text: 'Content',
        group: '/My Group',
        format: 'text',
      })
      expect(url).toBe('ulysses://x-callback-url/new-sheet?text=Content&group=%2FMy%20Group&format=text')
    })

    test('newSheet should return a URL with all parameters', async () => {
      const url = ulysses.newSheet({
        text: 'My sheet content',
        group: '/My Group/Subgroup',
        format: 'html',
        index: 0,
      })
      expect(url).toBe(
        'ulysses://x-callback-url/new-sheet?text=My%20sheet%20content&group=%2FMy%20Group%2FSubgroup&format=html&index=0',
      )
    })
  })

  describe('newGroup', () => {
    test('newGroup should return a URL with name', async () => {
      const url = ulysses.newGroup({
        name: 'My Group',
      })
      expect(url).toBe('ulysses://x-callback-url/new-group?name=My%20Group')
    })

    test('newGroup should return a URL with name and index', async () => {
      const url = ulysses.newGroup({
        name: 'My Group',
        index: 3,
      })
      expect(url).toBe('ulysses://x-callback-url/new-group?name=My%20Group&index=3')
    })

    test('newGroup should return a URL with name, parent and index', async () => {
      const url = ulysses.newGroup({
        name: 'Subgroup',
        parent: '/My Group',
        index: 0,
      })
      expect(url).toBe('ulysses://x-callback-url/new-group?name=Subgroup&parent=%2FMy%20Group&index=0')
    })

    test('newGroup should return a URL with name and parent identifier', async () => {
      const url = ulysses.newGroup({
        name: 'Subgroup',
        parent: 'DCj45UWKr_g15y2vBPwJdQ',
      })
      expect(url).toBe('ulysses://x-callback-url/new-group?name=Subgroup&parent=DCj45UWKr_g15y2vBPwJdQ')
    })
  })

  describe('insert', () => {
    test('insert should return a URL with id and text', async () => {
      const url = ulysses.insert({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'Inserted text',
      })
      expect(url).toBe('ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Inserted%20text')
    })

    test('insert should return a URL with id, text and position', async () => {
      const url = ulysses.insert({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'Text',
        position: 'begin',
      })
      expect(url).toBe('ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Text&position=begin')
    })

    test('insert should return a URL with id, text, format and newline', async () => {
      const url = ulysses.insert({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'Text',
        format: 'html',
        newline: 'prepend',
      })
      expect(url).toBe(
        'ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Text&format=html&newline=prepend',
      )
    })

    test('insert should return a URL with all parameters', async () => {
      const url = ulysses.insert({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'Content',
        format: 'text',
        position: 'end',
        newline: 'enclose',
      })
      expect(url).toBe(
        'ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Content&format=text&position=end&newline=enclose',
      )
    })
  })

  describe('attachNote', () => {
    test('attachNote should return a URL with id and text', async () => {
      const url = ulysses.attachNote({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'My new note',
      })
      expect(url).toBe('ulysses://x-callback-url/attach-note?id=H8zLAmc1I0njH-0Ql-3YGQ&text=My%20new%20note')
    })

    test('attachNote should return a URL with id, text and format', async () => {
      const url = ulysses.attachNote({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        text: 'Note',
        format: 'text',
      })
      expect(url).toBe('ulysses://x-callback-url/attach-note?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Note&format=text')
    })
  })

  describe('attachKeywords', () => {
    test('attachKeywords should return a URL with id and keywords', async () => {
      const url = ulysses.attachKeywords({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        keywords: 'Draft,Important',
      })
      expect(url).toBe('ulysses://x-callback-url/attach-keywords?id=H8zLAmc1I0njH-0Ql-3YGQ&keywords=Draft%2CImportant')
    })

    test('attachKeywords should return a URL with single keyword', async () => {
      const url = ulysses.attachKeywords({
        id: 'H8zLAmc1I0njH-0Ql-3YGQ',
        keywords: 'Work',
      })
      expect(url).toBe('ulysses://x-callback-url/attach-keywords?id=H8zLAmc1I0njH-0Ql-3YGQ&keywords=Work')
    })
  })

  describe('copy', () => {
    test('copy should return a URL with id', async () => {
      const url = ulysses.copy({
        id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
      })
      expect(url).toBe('ulysses://x-callback-url/copy?id=hZ7IX2jqKbVmPGlYUXkZjQ')
    })

    test('copy should return a URL with id, targetGroup and index', async () => {
      const url = ulysses.copy({
        id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
        targetGroup: 'H8zLAmc1I0njH-0Ql-3YGQ',
        index: 4,
      })
      expect(url).toBe(
        'ulysses://x-callback-url/copy?id=hZ7IX2jqKbVmPGlYUXkZjQ&targetGroup=H8zLAmc1I0njH-0Ql-3YGQ&index=4',
      )
    })

    test('copy should return a URL with id and targetGroup path', async () => {
      const url = ulysses.copy({
        id: 'hZ7IX2jqKbVmPGlYUXkZjQ',
        targetGroup: '/My Group/Subgroup',
      })
      expect(url).toBe('ulysses://x-callback-url/copy?id=hZ7IX2jqKbVmPGlYUXkZjQ&targetGroup=%2FMy%20Group%2FSubgroup')
    })
  })

  describe('getVersion', () => {
    test('getVersion should return a URL', async () => {
      const url = ulysses.getVersion()
      expect(url).toBe('ulysses://x-callback-url/get-version')
    })
  })
})
