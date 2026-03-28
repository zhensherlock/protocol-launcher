import { describe, expect, test } from 'vitest'
import { appigoTodo } from '../src'

describe('appigoTodo', () => {
  describe('showAllList', () => {
    test('should return a URL', () => {
      const url = appigoTodo.showAllList()
      expect(url).toBe('appigotodo://x-callback-url/showAllList')
    })
  })

  describe('showFocusList', () => {
    test('should return a URL', () => {
      const url = appigoTodo.showFocusList()
      expect(url).toBe('appigotodo://x-callback-url/showFocusList')
    })
  })

  describe('showStarredTasks', () => {
    test('should return a URL', () => {
      const url = appigoTodo.showStarredTasks()
      expect(url).toBe('appigotodo://x-callback-url/showStarredTasks')
    })
  })

  describe('showInbox', () => {
    test('should return a URL', () => {
      const url = appigoTodo.showInbox()
      expect(url).toBe('appigotodo://x-callback-url/showInbox')
    })
  })

  describe('showList', () => {
    test('should return a URL with name', () => {
      const url = appigoTodo.showList({
        name: 'Home Work',
      })
      expect(url).toBe('appigotodo://x-callback-url/showList?name=Home%20Work')
    })

    test('should return a URL with simple name', () => {
      const url = appigoTodo.showList({
        name: 'Shopping',
      })
      expect(url).toBe('appigotodo://x-callback-url/showList?name=Shopping')
    })
  })

  describe('showTask', () => {
    test('should return a URL with name', () => {
      const url = appigoTodo.showTask({
        name: 'Buy milk',
      })
      expect(url).toBe('appigotodo://x-callback-url/showTask?name=Buy%20milk')
    })

    test('should return a URL with task name containing spaces', () => {
      const url = appigoTodo.showTask({
        name: 'Call doctor',
      })
      expect(url).toBe('appigotodo://x-callback-url/showTask?name=Call%20doctor')
    })
  })

  describe('showProject', () => {
    test('should return a URL with name', () => {
      const url = appigoTodo.showProject({
        name: 'Home Renovation',
      })
      expect(url).toBe('appigotodo://x-callback-url/showProject?name=Home%20Renovation')
    })

    test('should return a URL with project name', () => {
      const url = appigoTodo.showProject({
        name: 'Vacation Planning',
      })
      expect(url).toBe('appigotodo://x-callback-url/showProject?name=Vacation%20Planning')
    })
  })

  describe('showChecklist', () => {
    test('should return a URL with name', () => {
      const url = appigoTodo.showChecklist({
        name: 'Grocery List',
      })
      expect(url).toBe('appigotodo://x-callback-url/showChecklist?name=Grocery%20List')
    })

    test('should return a URL with checklist name', () => {
      const url = appigoTodo.showChecklist({
        name: 'Packing List',
      })
      expect(url).toBe('appigotodo://x-callback-url/showChecklist?name=Packing%20List')
    })
  })

  describe('createTask', () => {
    test('should return a URL with name only', () => {
      const url = appigoTodo.createTask({
        name: 'Buy milk',
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Buy%20milk')
    })

    test('should return a URL with name and dueDate', () => {
      const url = appigoTodo.createTask({
        name: 'Call doctor',
        dueDate: '2024-12-31',
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Call%20doctor&due-date=2024-12-31')
    })

    test('should return a URL with name and priority', () => {
      const url = appigoTodo.createTask({
        name: 'Urgent task',
        priority: 1,
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Urgent%20task&priority=1')
    })

    test('should return a URL with name and note', () => {
      const url = appigoTodo.createTask({
        name: 'Weekly report',
        note: 'Submit to manager',
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Weekly%20report&note=Submit%20to%20manager')
    })

    test('should return a URL with name and repeat', () => {
      const url = appigoTodo.createTask({
        name: 'Weekly meeting',
        repeat: 1,
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Weekly%20meeting&repeat=1')
    })

    test('should return a URL with name and advancedRepeat', () => {
      const url = appigoTodo.createTask({
        name: 'Team sync',
        repeat: 50,
        advancedRepeat: 'Every mon and wed',
      })
      expect(url).toBe(
        'appigotodo://x-callback-url/createTask?name=Team%20sync&repeat=50&advanced-repeat=Every%20mon%20and%20wed',
      )
    })

    test('should return a URL with all parameters', () => {
      const url = appigoTodo.createTask({
        name: 'Complete project',
        dueDate: '2024-12-31',
        priority: 2,
        note: 'Important deadline',
        repeat: 2,
        advancedRepeat: 'Every month',
      })
      expect(url).toBe(
        'appigotodo://x-callback-url/createTask?name=Complete%20project&due-date=2024-12-31&priority=2&note=Important%20deadline&repeat=2&advanced-repeat=Every%20month',
      )
    })

    test('should return a URL with repeat from completion date', () => {
      const url = appigoTodo.createTask({
        name: 'Daily standup',
        repeat: 104,
      })
      expect(url).toBe('appigotodo://x-callback-url/createTask?name=Daily%20standup&repeat=104')
    })
  })
})
