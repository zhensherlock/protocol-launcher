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
    expect(url).toBe('twodo://x-callback-url/addNewTask?ignoredefaults=1')
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
    expect(url).toBe('twodo://x-callback-url/add?task=Title&due=0&duetime=18%3A00')
  })

  test('add should return a URL with project and list', async () => {
    const url = twoDo.add({
      task: 'Buy a new charger',
      forParentName: 'Shopping List',
      forList: 'Home',
    })
    expect(url).toBe(
      'twodo://x-callback-url/add?task=Buy%20a%20new%20charger&forlist=Home&forparentname=Shopping%20List',
    )
  })

  test('add should return a URL with repeat', async () => {
    const url = twoDo.add({
      task: 'Title',
      repeat: 2,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&repeat=2')
  })

  test('add should return a URL with type', async () => {
    const url = twoDo.add({
      task: 'Title',
      type: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&type=1')
  })

  test('add should return a URL with starred', async () => {
    const url = twoDo.add({
      task: 'Title',
      starred: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&starred=1')
  })

  test('add should return a URL with locations', async () => {
    const url = twoDo.add({
      task: 'Title',
      locations: 'Home,Office',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&locations=Home%2COffice')
  })

  test('add should return a URL with start', async () => {
    const url = twoDo.add({
      task: 'Title',
      start: '2024-01-01 09:00',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&start=2024-01-01%2009%3A00')
  })

  test('add should return a URL with action', async () => {
    const url = twoDo.add({
      task: 'Title',
      action: 'call:123456789',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&action=call%3A123456789')
  })

  test('add should return a URL with picture', async () => {
    const url = twoDo.add({
      task: 'Title',
      picture: 'lastphoto',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&picture=lastphoto')
  })

  test('add should return a URL with audio', async () => {
    const url = twoDo.add({
      task: 'Title',
      audio: 'base64encodedaudio',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&audio=base64encodedaudio')
  })

  test('add should return a URL with ignoreDefaults', async () => {
    const url = twoDo.add({
      task: 'Title',
      ignoreDefaults: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&ignoredefaults=1')
  })

  test('add should return a URL with saveInClipboard', async () => {
    const url = twoDo.add({
      task: 'Title',
      saveInClipboard: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&saveinclipboard=1')
  })

  test('add should return a URL with useQuickEntry', async () => {
    const url = twoDo.add({
      task: 'Title',
      useQuickEntry: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&usequickentry=1')
  })

  test('add should return a URL with edit', async () => {
    const url = twoDo.add({
      task: 'Title',
      edit: 1,
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&edit=1')
  })

  test('add should return a URL with subtasks', async () => {
    const url = twoDo.add({
      task: 'Title',
      subtasks: 'Subtask 1\nSubtask 2',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&subtasks=Subtask%201%0ASubtask%202')
  })

  test('add should return a URL with note', async () => {
    const url = twoDo.add({
      task: 'Title',
      note: 'This is a note',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&note=This%20is%20a%20note')
  })

  test('add should return a URL with forParentTask', async () => {
    const url = twoDo.add({
      task: 'Title',
      forParentTask: 'unique-task-id-123',
    })
    expect(url).toBe('twodo://x-callback-url/add?task=Title&forparenttask=unique-task-id-123')
  })

  test('add should return a URL with all parameters', async () => {
    const url = twoDo.add({
      task: 'Complete task',
      type: 0,
      forList: 'Work',
      forParentName: 'Project A',
      forParentTask: 'parent-id',
      note: 'Important note',
      subtasks: 'Sub 1\nSub 2',
      priority: 2,
      starred: 1,
      tags: 'urgent,work',
      locations: 'Office',
      due: '2024-12-31',
      dueTime: '17:00',
      start: '2024-01-01 09:00',
      repeat: 2,
      action: 'mail:test@example.com',
      picture: 'lastphoto',
      audio: 'base64audio',
      ignoreDefaults: 1,
      saveInClipboard: 1,
      useQuickEntry: 1,
      edit: 1,
    })
    expect(url).toBe(
      'twodo://x-callback-url/add?task=Complete%20task&type=0&forlist=Work&forparentname=Project%20A&forparenttask=parent-id&note=Important%20note&subtasks=Sub%201%0ASub%202&priority=2&starred=1&tags=urgent%2Cwork&locations=Office&due=2024-12-31&duetime=17%3A00&start=2024-01-01%2009%3A00&repeat=2&action=mail%3Atest%40example.com&picture=lastphoto&audio=base64audio&ignoredefaults=1&saveinclipboard=1&usequickentry=1&edit=1',
    )
  })

  test('add should return a URL with empty payload', async () => {
    const url = twoDo.add({})
    expect(url).toBe('twodo://x-callback-url/add')
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
    expect(url).toBe('twodo://x-callback-url/paste?text=Buy%20milk&forlist=Shopping')
  })

  test('paste should return a URL with text, inProject and forList', async () => {
    const url = twoDo.paste({
      text: 'Task item',
      inProject: 'My Project',
      forList: 'Work',
    })
    expect(url).toBe('twodo://x-callback-url/paste?text=Task%20item&inproject=My%20Project&forlist=Work')
  })

  test('getTaskID should return a URL with task and forList', async () => {
    const url = twoDo.getTaskID({
      task: 'My Task',
      forList: 'Work',
    })
    expect(url).toBe('twodo://x-callback-url/getTaskID?task=My%20Task&forlist=Work')
  })

  test('getTaskID should return a URL with saveInClipboard', async () => {
    const url = twoDo.getTaskID({
      task: 'My Task',
      forList: 'Work',
      saveInClipboard: 1,
    })
    expect(url).toBe('twodo://x-callback-url/getTaskID?task=My%20Task&forlist=Work&saveinclipboard=1')
  })
})

describe('documented URL updates', () => {
  test('showTask uses a task UID', () => {
    expect(twoDo.showTask({ uid: 'task-123' })).toBe('twodo://x-callback-url/showtask?uid=task-123')
  })

  test('completeTasks accepts comma-separated UIDs', () => {
    expect(twoDo.completeTasks({ uids: 'one,two' })).toBe('twodo://x-callback-url/completetasks?uids=one%2Ctwo')
  })

  test('completeTasks joins UID arrays once', () => {
    expect(twoDo.completeTasks({ uids: ['one', 'two'] })).toBe('twodo://x-callback-url/completetasks?uids=one%2Ctwo')
  })

  test('launch preserves nested callback URLs', () => {
    expect(twoDo.launch({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/launch?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showAll preserves nested callback URLs', () => {
    expect(twoDo.showAll({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showAll?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showToday preserves nested callback URLs', () => {
    expect(twoDo.showToday({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showToday?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showStarred preserves nested callback URLs', () => {
    expect(twoDo.showStarred({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showStarred?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showScheduled preserves nested callback URLs', () => {
    expect(twoDo.showScheduled({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showScheduled?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('addNewTask preserves nested callback URLs', () => {
    expect(twoDo.addNewTask({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/addNewTask?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showList preserves nested callback URLs', () => {
    expect(twoDo.showList({ name: 'Work', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showList?name=Work&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('search preserves nested callback URLs', () => {
    expect(twoDo.search({ text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/search?text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('getTaskID preserves nested callback URLs', () => {
    expect(twoDo.getTaskID({ task: 'T', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/getTaskID?task=T&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('showTask preserves nested callback URLs', () => {
    expect(twoDo.showTask({ uid: 'ID', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/showtask?uid=ID&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('completeTasks preserves nested callback URLs', () => {
    expect(twoDo.completeTasks({ uids: 'ID', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'twodo://x-callback-url/completetasks?uids=ID&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })

  test('launch can open with no callback or with all callback fields', () => {
    expect(twoDo.launch()).toBe('twodo://x-callback-url/launch')
    expect(
      twoDo.launch({ xSuccess: 'myapp://done', xError: 'myapp://error', xCancel: 'myapp://cancel', xSource: 'My App' }),
    ).toBe(
      'twodo://x-callback-url/launch?x-success=myapp%3A%2F%2Fdone&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel&x-source=My%20App',
    )
  })
})
