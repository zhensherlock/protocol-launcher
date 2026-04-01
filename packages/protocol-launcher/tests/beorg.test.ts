import { describe, expect, test } from 'vitest'
import { beorg } from '../src'

describe('beorg', () => {
  test('open should return a URL', async () => {
    const url = beorg.open()
    expect(url).toBe('beorg://')
  })

  test('showAgenda should return a URL', async () => {
    const url = beorg.showAgenda()
    expect(url).toBe('beorg://x-callback-url/agenda')
  })

  test('showTasks should return a URL without search', async () => {
    const url = beorg.showTasks({})
    expect(url).toBe('beorg://x-callback-url/tasks')
  })

  test('showTasks should return a URL with search', async () => {
    const url = beorg.showTasks({
      search: 't bookmark',
    })
    expect(url).toBe('beorg://x-callback-url/tasks?search=t%20bookmark')
  })

  test('viewFile should return a URL with file', async () => {
    const url = beorg.viewFile({
      file: 'shopping',
    })
    expect(url).toBe('beorg://x-callback-url/file?file=shopping')
  })

  test('viewFile should return a URL with file name containing spaces', async () => {
    const url = beorg.viewFile({
      file: 'my journal',
    })
    expect(url).toBe('beorg://x-callback-url/file?file=my%20journal')
  })

  test('capture should return a URL without parameters', async () => {
    const url = beorg.capture({})
    expect(url).toBe('beorg://x-callback-url/capture')
  })

  test('capture should return a URL with title', async () => {
    const url = beorg.capture({
      title: 'Shopping List',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Shopping%20List')
  })

  test('capture should return a URL with title and notes', async () => {
    const url = beorg.capture({
      title: 'New task',
      notes: 'Buy eggs',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=New%20task&notes=Buy%20eggs')
  })

  test('capture should return a URL with scheduled date', async () => {
    const url = beorg.capture({
      title: 'Meeting',
      scheduled: '2018-09-18',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Meeting&scheduled=2018-09-18')
  })

  test('capture should return a URL with deadline date', async () => {
    const url = beorg.capture({
      title: 'Submit report',
      deadline: '2018-09-18',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Submit%20report&deadline=2018-09-18')
  })

  test('capture should return a URL with file', async () => {
    const url = beorg.capture({
      title: 'Journal entry',
      file: 'journal',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Journal%20entry&file=journal')
  })

  test('capture should return a URL with template', async () => {
    const url = beorg.capture({
      title: 'Daily review',
      template: 'Daily Review',
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Daily%20review&template=Daily%20Review')
  })

  test('capture should return a URL with edit true', async () => {
    const url = beorg.capture({
      title: 'Task',
      edit: true,
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Task&edit=true')
  })

  test('capture should return a URL with edit false', async () => {
    const url = beorg.capture({
      title: 'Task',
      edit: false,
    })
    expect(url).toBe('beorg://x-callback-url/capture?title=Task&edit=false')
  })

  test('capture should return a URL with all parameters', async () => {
    const url = beorg.capture({
      title: 'New task',
      notes: 'Buy eggs',
      scheduled: '2017-10-03',
      deadline: '2017-10-10',
      file: 'shopping',
      template: 'Shopping Template',
      edit: true,
    })
    expect(url).toBe(
      'beorg://x-callback-url/capture?title=New%20task&notes=Buy%20eggs&scheduled=2017-10-03&deadline=2017-10-10&file=shopping&template=Shopping%20Template&edit=true',
    )
  })

  test('search should return a URL with search', async () => {
    const url = beorg.search({
      search: 't bookmark',
    })
    expect(url).toBe('beorg://x-callback-url/search?search=t%20bookmark')
  })

  test('search should return a URL with search and xSuccess', async () => {
    const url = beorg.search({
      search: 't bookmark',
      xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults',
    })
    expect(url).toBe(
      'beorg://x-callback-url/search?search=t%20bookmark&x-success=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DProcessResults',
    )
  })

  test('search should return a URL with search and xCancel', async () => {
    const url = beorg.search({
      search: 't bookmark',
      xCancel: 'shortcuts://x-callback-url/run-shortcut?name=HandleCancel',
    })
    expect(url).toBe(
      'beorg://x-callback-url/search?search=t%20bookmark&x-cancel=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DHandleCancel',
    )
  })

  test('search should return a URL with search, xSuccess and xCancel', async () => {
    const url = beorg.search({
      search: 't bookmark',
      xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=ProcessResults',
      xCancel: 'shortcuts://x-callback-url/run-shortcut?name=HandleCancel',
    })
    expect(url).toBe(
      'beorg://x-callback-url/search?search=t%20bookmark&x-success=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DProcessResults&x-cancel=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DHandleCancel',
    )
  })

  test('search should return a URL with complex search query', async () => {
    const url = beorg.search({
      search: 's todo t important',
    })
    expect(url).toBe('beorg://x-callback-url/search?search=s%20todo%20t%20important')
  })
})
