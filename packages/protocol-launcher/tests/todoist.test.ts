import { describe, expect, test } from 'vitest'
import { todoist } from '../src'

describe('todoist', () => {
  describe('open', () => {
    test('open should return a URL', () => {
      const url = todoist.open()
      expect(url).toBe('todoist://')
    })
  })

  describe('openInbox', () => {
    test('openInbox should return a URL', () => {
      const url = todoist.openInbox()
      expect(url).toBe('todoist://inbox')
    })
  })

  describe('openToday', () => {
    test('openToday should return a URL', () => {
      const url = todoist.openToday()
      expect(url).toBe('todoist://today')
    })
  })

  describe('openUpcoming', () => {
    test('openUpcoming should return a URL', () => {
      const url = todoist.openUpcoming()
      expect(url).toBe('todoist://upcoming')
    })
  })

  describe('openProfile', () => {
    test('openProfile should return a URL (Mobile only)', () => {
      const url = todoist.openProfile()
      expect(url).toBe('todoist://profile')
    })
  })

  describe('openTeaminbox', () => {
    test('openTeaminbox should return a URL (Mobile only, Business accounts)', () => {
      const url = todoist.openTeaminbox()
      expect(url).toBe('todoist://teaminbox')
    })
  })

  describe('openNotifications', () => {
    test('openNotifications should return a URL', () => {
      const url = todoist.openNotifications()
      expect(url).toBe('todoist://notifications')
    })
  })

  describe('openProject', () => {
    test('openProject should return a URL with id', () => {
      const url = todoist.openProject({ id: '128501470' })
      expect(url).toBe('todoist://project?id=128501470')
    })

    test('openProject should return a URL with different id', () => {
      const url = todoist.openProject({ id: '98765' })
      expect(url).toBe('todoist://project?id=98765')
    })
  })

  describe('openTask', () => {
    test('openTask should return a URL with id', () => {
      const url = todoist.openTask({ id: '12345' })
      expect(url).toBe('todoist://task?id=12345')
    })

    test('openTask should return a URL with different id', () => {
      const url = todoist.openTask({ id: '67890' })
      expect(url).toBe('todoist://task?id=67890')
    })
  })

  describe('openProjects', () => {
    test('openProjects should return a URL without parameters', () => {
      const url = todoist.openProjects({})
      expect(url).toBe('todoist://projects')
    })

    test('openProjects should return a URL with workspaceId (Desktop only)', () => {
      const url = todoist.openProjects({ workspaceId: '1234' })
      expect(url).toBe('todoist://projects?workspaceId=1234')
    })
  })

  describe('openFilters', () => {
    test('openFilters should return a URL (Mobile only)', () => {
      const url = todoist.openFilters()
      expect(url).toBe('todoist://filters')
    })
  })

  describe('openFiltersLabels', () => {
    test('openFiltersLabels should return a URL (Desktop only)', () => {
      const url = todoist.openFiltersLabels()
      expect(url).toBe('todoist://filters-labels')
    })
  })

  describe('openFilter', () => {
    test('openFilter should return a URL with id', () => {
      const url = todoist.openFilter({ id: '9' })
      expect(url).toBe('todoist://filter?id=9')
    })

    test('openFilter should return a URL with different id', () => {
      const url = todoist.openFilter({ id: '123' })
      expect(url).toBe('todoist://filter?id=123')
    })
  })

  describe('openLabels', () => {
    test('openLabels should return a URL (Mobile only)', () => {
      const url = todoist.openLabels()
      expect(url).toBe('todoist://labels')
    })
  })

  describe('openLabel', () => {
    test('openLabel should return a URL with name (Mobile only)', () => {
      const url = todoist.openLabel({ name: 'Urgent' })
      expect(url).toBe('todoist://label?name=Urgent')
    })

    test('openLabel should return a URL with id (Desktop only)', () => {
      const url = todoist.openLabel({ id: '12345' })
      expect(url).toBe('todoist://label?id=12345')
    })

    test('openLabel should return a URL with special characters in name', () => {
      const url = todoist.openLabel({ name: 'Work & Personal' })
      expect(url).toBe('todoist://label?name=Work%20%26%20Personal')
    })
  })

  describe('openTemplates', () => {
    test('openTemplates should return a URL without parameters (Desktop only)', () => {
      const url = todoist.openTemplates({})
      expect(url).toBe('todoist://templates')
    })

    test('openTemplates should return a URL with id (Desktop only)', () => {
      const url = todoist.openTemplates({ id: '123' })
      expect(url).toBe('todoist://templates?id=123')
    })
  })

  describe('search', () => {
    test('search should return a URL with query', () => {
      const url = todoist.search({ query: 'Test & Today' })
      expect(url).toBe('todoist://search?query=Test%20%26%20Today')
    })

    test('search should return a URL with simple query', () => {
      const url = todoist.search({ query: 'vacation' })
      expect(url).toBe('todoist://search?query=vacation')
    })

    test('search should return a URL with encoded query', () => {
      const url = todoist.search({ query: 'Project:Work @today' })
      expect(url).toBe('todoist://search?query=Project%3AWork%20%40today')
    })
  })

  describe('addTask', () => {
    test('addTask should return a URL with content only (Mobile only)', () => {
      const url = todoist.addTask({ content: 'Buy Milk' })
      expect(url).toBe('todoist://addtask?content=Buy%20Milk')
    })

    test('addTask should return a URL with content and date', () => {
      const url = todoist.addTask({ content: 'Create document', date: 'Tomorrow @ 14:00' })
      expect(url).toBe('todoist://addtask?content=Create%20document&date=Tomorrow%20%40%2014%3A00')
    })

    test('addTask should return a URL with content and priority', () => {
      const url = todoist.addTask({ content: 'Urgent task', priority: 4 })
      expect(url).toBe('todoist://addtask?content=Urgent%20task&priority=4')
    })

    test('addTask should return a URL with content, date and priority', () => {
      const url = todoist.addTask({ content: 'Important meeting', date: 'Tomorrow', priority: 1 })
      expect(url).toBe('todoist://addtask?content=Important%20meeting&date=Tomorrow&priority=1')
    })

    test('addTask should return a URL with special characters in content', () => {
      const url = todoist.addTask({ content: 'Call John & Mary' })
      expect(url).toBe('todoist://addtask?content=Call%20John%20%26%20Mary')
    })
  })

  describe('openQuickAdd', () => {
    test('openQuickAdd should return a URL without parameters (Desktop only)', () => {
      const url = todoist.openQuickAdd({})
      expect(url).toBe('todoist://openquickadd')
    })

    test('openQuickAdd should return a URL with content', () => {
      const url = todoist.openQuickAdd({ content: 'My Task' })
      expect(url).toBe('todoist://openquickadd?content=My%20Task')
    })

    test('openQuickAdd should return a URL with content and description', () => {
      const url = todoist.openQuickAdd({ content: 'My Task', description: 'This is a description' })
      expect(url).toBe('todoist://openquickadd?content=My%20Task&description=This%20is%20a%20description')
    })

    test('openQuickAdd should return a URL with description only', () => {
      const url = todoist.openQuickAdd({ description: 'Just a description' })
      expect(url).toBe('todoist://openquickadd?description=Just%20a%20description')
    })

    test('openQuickAdd should return a URL with special characters', () => {
      const url = todoist.openQuickAdd({ content: 'Task & More', description: 'Desc with @ symbol' })
      expect(url).toBe('todoist://openquickadd?content=Task%20%26%20More&description=Desc%20with%20%40%20symbol')
    })
  })
})
