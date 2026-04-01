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
