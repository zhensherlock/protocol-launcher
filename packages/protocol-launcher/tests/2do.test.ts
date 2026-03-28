import { describe, expect, test } from 'vitest'
import { twoDo } from '../src'

describe('twoDo', () => {
  test('open should return a URL', async () => {
    const url = twoDo.open()
    expect(url).toBe('twodo://')
  })

  test('showAll should return a URL', async () => {
    const url = twoDo.showAll()
    expect(url).toBe('twodo://x-callback-url/showAll')
  })

  test('showToday should return a URL', async () => {
    const url = twoDo.showToday()
    expect(url).toBe('twodo://x-callback-url/showToday')
  })

  test('showStarred should return a URL', async () => {
    const url = twoDo.showStarred()
    expect(url).toBe('twodo://x-callback-url/showStarred')
  })

  test('showScheduled should return a URL', async () => {
    const url = twoDo.showScheduled()
    expect(url).toBe('twodo://x-callback-url/showScheduled')
  })

  test('showList should return a URL with name', async () => {
    const url = twoDo.showList({
      name: 'Work',
    })
    expect(url).toBe('twodo://x-callback-url/showList?name=Work')
  })

  test('search should return a URL with text', async () => {
    const url = twoDo.search({
      text: 'John',
    })
    expect(url).toBe('twodo://x-callback-url/search?text=John')
  })

  test('search should return a URL with advanced search syntax', async () => {
    const url = twoDo.search({
      text: 'type:overdue',
    })
    expect(url).toBe('twodo://x-callback-url/search?text=type%3Aoverdue')
  })

  test('search should return a URL with clipboard', async () => {
    const url = twoDo.search({
      text: '(clipboard)',
    })
    expect(url).toBe('twodo://x-callback-url/search?text=(clipboard)')
  })

  test('addNewTask should return a URL without payload', async () => {
    const url = twoDo.addNewTask()
    expect(url).toBe('twodo://x-callback-url/addNewTask')
  })

  test('addNewTask should return a URL with ignoreDefaults', async () => {
    const url = twoDo.addNewTask({
      ignoreDefaults: 1,
    })
    expect(url).toBe('twodo://x-callback-url/addNewTask?ignoreDefaults=1')
  })

  test('add should return a URL with task and due', async () => {
    const url = twoDo.add({
      task: 'Dinner at 8pm',
      due: '1',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Dinner%20at%208pm&due=1')
  })

  test('add should return a URL with task from clipboard', async () => {
    const url = twoDo.add({
      task: '(clipboard)',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=(clipboard)')
  })

  test('add should return a URL with priority', async () => {
    const url = twoDo.add({
      task: 'Title',
      priority: 3,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&priority=3')
  })

  test('add should return a URL with tags', async () => {
    const url = twoDo.add({
      task: 'Monthly subscription',
      tags: 'bill,payment',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Monthly%20subscription&tags=bill%2Cpayment')
  })

  test('add should return a URL with due time', async () => {
    const url = twoDo.add({
      task: 'Title',
      due: '0',
      dueTime: '18:00',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&due=0&dueTime=18%3A00')
  })

  test('add should return a URL with project and list', async () => {
    const url = twoDo.add({
      task: 'Buy a new charger',
      forParentName: 'Shopping List',
      forList: 'Home',
    })
    expect(url).toBe(
      'twodo://x-callback-url/add?task=Buy%20a%20new%20charger&forList=Home&forParentName=Shopping%20List',
    )
  })

  test('add should return a URL with repeat', async () => {
    const url = twoDo.add({
      task: 'Title',
      repeat: 2,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&repeat=2')
  })

  test('paste should return a URL with text', async () => {
    const url = twoDo.paste({
      text: 'Task 1\nTask 2',
    })
    expect(url).toBe('twodo://x-callback-url/paste?text=Task%201%0ATask%202')
  })

  test('paste should return a URL with text and forList', async () => {
    const url = twoDo.paste({
      text: 'Buy milk',
      forList: 'Shopping',
    })
    expect(url).toBe('twodo://x-callback-url/paste?text=Buy%20milk&forList=Shopping')
  })

  test('paste should return a URL with text, inProject and forList', async () => {
    const url = twoDo.paste({
      text: 'Task item',
      inProject: 'My Project',
      forList: 'Work',
    })
    expect(url).toBe('twodo://x-callback-url/paste?text=Task%20item&inProject=My%20Project&forList=Work')
  })

  test('getTaskID should return a URL with task and forList', async () => {
    const url = twoDo.getTaskID({
      task: 'My Task',
      forList: 'Work',
    })
    expect(url).toBe('twodo://x-callback-url/getTaskID?task=My%20Task&forList=Work')
  })

  test('getTaskID should return a URL with saveInClipboard', async () => {
    const url = twoDo.getTaskID({
      task: 'My Task',
      forList: 'Work',
      saveInClipboard: 1,
    })
    expect(url).toBe('twodo://x-callback-url/getTaskID?task=My%20Task&forList=Work&saveInClipboard=1')
  })
})
