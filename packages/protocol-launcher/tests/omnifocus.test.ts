import { describe, expect, test } from 'vitest'
import { omnifocus } from '../src'

describe('omnifocus', () => {
  test('open should return a URL', async () => {
    const url = omnifocus.open()
    expect(url).toBe('omnifocus://')
  })

  test('add should return a URL with name and note', async () => {
    const url = omnifocus.add({
      name: 'Pick up milk',
      note: 'You gotta',
    })
    expect(url).toBe('omnifocus:///add?name=Pick%20up%20milk&note=You%20gotta')
  })

  test('add should return a URL with task metadata', async () => {
    const url = omnifocus.add({
      name: 'Email team',
      context: 'Mac',
      due: 'jun 25 8am',
      estimate: '30m',
      flag: true,
      project: 'Launch',
      revealNewItem: true,
    })
    expect(url).toBe(
      'omnifocus:///add?name=Email%20team&context=Mac&due=jun%2025%208am&estimate=30m&flag=true&project=Launch&reveal-new-item=true',
    )
  })

  test('add should return attachment parameters', async () => {
    const url = omnifocus.add({
      name: 'File receipts',
      attachment: 'Zmlyc3Q=',
      attachmentName: ['first.txt', 'second.txt'],
    })
    expect(url).toBe(
      'omnifocus:///add?name=File%20receipts&attachment=Zmlyc3Q%3D&attachment-name=first.txt&attachment-name=second.txt',
    )
  })

  test('add should return an x-callback-url when callbacks are provided', async () => {
    const url = omnifocus.add({
      name: 'My shiny new task',
      autosave: true,
      xSuccess: 'source-app:///',
    })
    expect(url).toBe(
      'omnifocus://x-callback-url/add?name=My%20shiny%20new%20task&autosave=true&x-success=source-app%3A%2F%2F%2F',
    )
  })

  test('paste should return a URL with TaskPaper content and target', async () => {
    const url = omnifocus.paste({
      content: '- Pick up milk',
      target: 'inbox',
    })
    expect(url).toBe('omnifocus:///paste?content=-%20Pick%20up%20milk&target=inbox')
  })

  test('paste should return a URL with project TaskPaper and index', async () => {
    const url = omnifocus.paste({
      content: 'Project:\n\t- Task',
      target: 'projects',
      index: 0,
    })
    expect(url).toBe('omnifocus:///paste?content=Project%3A%0A%09-%20Task&target=projects&index=0')
  })

  test('built-in perspectives should return URLs', async () => {
    expect(omnifocus.openInbox()).toBe('omnifocus:///inbox')
    expect(omnifocus.openFlagged()).toBe('omnifocus:///flagged')
    expect(omnifocus.openProjects()).toBe('omnifocus:///projects')
    expect(omnifocus.openTags()).toBe('omnifocus:///tags')
    expect(omnifocus.openForecast()).toBe('omnifocus:///forecast')
    expect(omnifocus.openPast()).toBe('omnifocus:///past')
    expect(omnifocus.openToday()).toBe('omnifocus:///today')
    expect(omnifocus.openSoon()).toBe('omnifocus:///soon')
  })

  test('openPerspective should encode the perspective name', async () => {
    const url = omnifocus.openPerspective({
      name: 'Due Soon',
    })
    expect(url).toBe('omnifocus:///perspective/Due%20Soon')
  })

  test('openTask should encode the task id', async () => {
    const url = omnifocus.openTask({
      id: 'task/id',
    })
    expect(url).toBe('omnifocus:///task/task%2Fid')
  })
})
