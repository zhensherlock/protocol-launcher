import { describe, expect, test } from 'vitest'
import { obsidian } from '../src'

describe('obsidian', () => {
  describe('open', () => {
    test('should return base URL', () => {
      const url = obsidian.open()
      expect(url).toBe('obsidian://')
    })
  })

  describe('openNote', () => {
    test('should return URL with vault and file', () => {
      const url = obsidian.openNote({
        vault: 'My Vault',
        file: 'Notes/Meeting.md',
      })
      expect(url).toBe('obsidian://open?vault=My%20Vault&file=Notes%2FMeeting.md')
    })
  })

  describe('search', () => {
    test('should return URL with vault and query', () => {
      const url = obsidian.search({
        vault: 'My Vault',
        query: 'meeting notes',
      })
      expect(url).toBe('obsidian://search?vault=My%20Vault&query=meeting%20notes')
    })
  })

  describe('newNote', () => {
    test('should return URL with vault, name and content', () => {
      const url = obsidian.newNote({
        vault: 'My Vault',
        name: 'New Note',
        content: 'Hello World',
      })
      expect(url).toBe('obsidian://new?vault=My%20Vault&name=New%20Note&content=Hello%20World')
    })

    test('should return URL with append and open options', () => {
      const url = obsidian.newNote({
        vault: 'My Vault',
        name: 'Daily Note',
        append: true,
        open: false,
      })
      expect(url).toBe('obsidian://new?vault=My%20Vault&name=Daily%20Note&append=true&open=false')
    })

    test('should return URL with only vault', () => {
      const url = obsidian.newNote({
        vault: 'My Vault',
      })
      expect(url).toBe('obsidian://new?vault=My%20Vault')
    })
  })

  describe('insert', () => {
    test('should return URL with vault and content', () => {
      const url = obsidian.insert({
        vault: 'My Vault',
        content: '## Heading',
      })
      expect(url).toBe('obsidian://insert?vault=My%20Vault&content=%23%23%20Heading')
    })
  })

  describe('command', () => {
    test('should return URL with vault and command id', () => {
      const url = obsidian.command({
        vault: 'My Vault',
        id: 'editor:save-file',
      })
      expect(url).toBe('obsidian://command?vault=My%20Vault&id=editor%3Asave-file')
    })
  })

  describe('settings', () => {
    test('should return URL with vault and page', () => {
      const url = obsidian.settings({
        vault: 'My Vault',
        page: 'editor',
      })
      expect(url).toBe('obsidian://settings?vault=My%20Vault&page=editor')
    })

    test('should return URL with only vault', () => {
      const url = obsidian.settings({
        vault: 'My Vault',
      })
      expect(url).toBe('obsidian://settings?vault=My%20Vault')
    })
  })

  describe('options', () => {
    test('should return URL with vault', () => {
      const url = obsidian.options({
        vault: 'My Vault',
      })
      expect(url).toBe('obsidian://options?vault=My%20Vault')
    })
  })
})

describe('documented URL updates', () => {
  test('openNote supports absolute paths and pane types', () => {
    expect(obsidian.openNote({ path: '/home/user/My Vault/note.md', paneType: 'window' })).toBe(
      'obsidian://open?path=%2Fhome%2Fuser%2FMy%20Vault%2Fnote.md&paneType=window',
    )
  })

  test('openNote can open the vault without a file', () => {
    expect(obsidian.openNote({ vault: 'My Vault' })).toBe('obsidian://open?vault=My%20Vault')
  })

  test('openNote supports the active vault', () => {
    expect(obsidian.openNote()).toBe('obsidian://open')
  })

  test('newNote supports file paths, clipboard, silent, overwrite and callback', () => {
    expect(
      obsidian.newNote({
        vault: 'My Vault',
        file: 'Notes/Meeting.md',
        paneType: 'split',
        clipboard: true,
        silent: true,
        overwrite: true,
        xSuccess: 'myapp://x-callback-url/note',
      }),
    ).toBe(
      'obsidian://new?vault=My%20Vault&file=Notes%2FMeeting.md&paneType=split&clipboard=true&silent=true&overwrite=true&x-success=myapp%3A%2F%2Fx-callback-url%2Fnote',
    )
  })

  test('newNote supports an absolute path', () => {
    expect(obsidian.newNote({ path: '/home/user/note.md' })).toBe('obsidian://new?path=%2Fhome%2Fuser%2Fnote.md')
  })

  test('newNote omits absent optional parameters', () => {
    expect(obsidian.newNote()).toBe('obsidian://new')
  })

  test('dailyNote uses the official daily endpoint', () => {
    expect(obsidian.dailyNote({ vault: 'My Vault', name: 'Daily', content: 'Hello', append: true })).toBe(
      'obsidian://daily?vault=My%20Vault&name=Daily&content=Hello&append=true',
    )
  })

  test('dailyNote supports path and callback', () => {
    expect(
      obsidian.dailyNote({
        file: 'Notes/Today.md',
        path: '/vault/today.md',
        paneType: 'tab',
        clipboard: true,
        silent: true,
        overwrite: true,
        xSuccess: 'myapp://success',
      }),
    ).toBe(
      'obsidian://daily?file=Notes%2FToday.md&path=%2Fvault%2Ftoday.md&paneType=tab&clipboard=true&silent=true&overwrite=true&x-success=myapp%3A%2F%2Fsuccess',
    )
  })

  test('dailyNote supports default options', () => {
    expect(obsidian.dailyNote()).toBe('obsidian://daily')
  })

  test('uniqueNote supports content, clipboard and callback', () => {
    expect(
      obsidian.uniqueNote({
        vault: 'My Vault',
        paneType: 'tab',
        content: 'A & B',
        clipboard: true,
        xSuccess: 'myapp://success',
      }),
    ).toBe(
      'obsidian://unique?vault=My%20Vault&paneType=tab&content=A%20%26%20B&clipboard=true&x-success=myapp%3A%2F%2Fsuccess',
    )
  })

  test('uniqueNote supports default options', () => {
    expect(obsidian.uniqueNote()).toBe('obsidian://unique')
  })

  test('hookGetAddress supports callbacks', () => {
    expect(
      obsidian.hookGetAddress({
        vault: 'My Vault',
        xSuccess: 'hook://x-callback-url/setCurrentNode',
        xError: 'hook://x-callback-url/error',
      }),
    ).toBe(
      'obsidian://hook-get-address?vault=My%20Vault&x-success=hook%3A%2F%2Fx-callback-url%2FsetCurrentNode&x-error=hook%3A%2F%2Fx-callback-url%2Ferror',
    )
  })

  test('hookGetAddress uses the focused note without callbacks', () => {
    expect(obsidian.hookGetAddress()).toBe('obsidian://hook-get-address')
  })

  test('chooseVault opens the vault manager', () => {
    expect(obsidian.chooseVault()).toBe('obsidian://choose-vault')
  })
})
