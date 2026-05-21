import { describe, expect, test } from 'vitest'
import { goodtask } from '../src'

describe('goodtask', () => {
  test('open should return the GoodTask scheme URL', async () => {
    const url = goodtask.open()

    expect(url).toBe('goodtask3://')
  })

  test('openAdd should return the documented openadd URL', async () => {
    const url = goodtask.openAdd()

    expect(url).toBe('goodtask3://openadd')
  })

  test('openView should return a URL with title and view', async () => {
    const url = goodtask.openView({
      title: 'Today',
      view: 1,
    })

    expect(url).toBe('goodtask3://view?title=Today&view=1')
  })

  test('openView should return a URL with section row and view', async () => {
    const url = goodtask.openView({
      section: 2,
      row: 3,
      view: 11,
    })

    expect(url).toBe('goodtask3://view?section=2&row=3&view=11')
  })

  test('openView should return the documented Lists page URL', async () => {
    const url = goodtask.openView({
      section: 0,
    })

    expect(url).toBe('goodtask3://view?section=0')
  })

  test('openTask should return a URL with title', async () => {
    const url = goodtask.openTask({
      title: 'Buy milk',
    })

    expect(url).toBe('goodtask3://task?title=Buy%20milk')
  })

  test('openTask should return a URL with identifier', async () => {
    const url = goodtask.openTask({
      identifier: 'ITEM-IDENTIFIER',
    })

    expect(url).toBe('goodtask3://task?identifier=ITEM-IDENTIFIER')
  })

  test('smartAdd should return a URL with text', async () => {
    const url = goodtask.smartAdd({
      text: 'Buy milk tomorrow',
    })

    expect(url).toBe('goodtask3://smartadd?text=Buy%20milk%20tomorrow')
  })

  test('add should return the documented URL with title and list', async () => {
    const url = goodtask.add({
      title: 'Title',
      list: 'to',
    })

    expect(url).toBe('goodtask3://add?title=Title&list=to')
  })

  test('add should return the documented URL with dueAfter', async () => {
    const url = goodtask.add({
      title: 'Title',
      dueAfter: 10,
    })

    expect(url).toBe('goodtask3://add?title=Title&dueAfter=10')
  })

  test('add should return the documented URL with due time', async () => {
    const url = goodtask.add({
      title: 'Title',
      due: '18:00',
    })

    expect(url).toBe('goodtask3://add?title=Title&due=18%3A00')
  })

  test('add should return the documented URL with due date and alarm', async () => {
    const url = goodtask.add({
      title: 'Title',
      due: '2-20',
      alarm: 1,
    })

    expect(url).toBe('goodtask3://add?title=Title&due=2-20&alarm=1')
  })

  test('add should return the documented URL with priority', async () => {
    const url = goodtask.add({
      title: 'Title',
      priority: 2,
    })

    expect(url).toBe('goodtask3://add?title=Title&priority=2')
  })

  test('add should return the documented URL with start and due dates', async () => {
    const url = goodtask.add({
      title: 'ABCD',
      due: '5-10',
      start: '5-1',
    })

    expect(url).toBe('goodtask3://add?title=ABCD&due=5-10&start=5-1')
  })

  test('add should return the documented URL with location', async () => {
    const url = goodtask.add({
      title: 'ABCD',
      location: 'home',
    })

    expect(url).toBe('goodtask3://add?title=ABCD&location=home')
  })

  test('add should return the documented URL with subtasks separated by line breaks', async () => {
    const url = goodtask.add({
      title: 'ABCD',
      subtasks: 'one\ntwo\nthree',
    })

    expect(url).toBe('goodtask3://add?title=ABCD&subtasks=one%0Atwo%0Athree')
  })

  test('add should return the documented URL for multiple tasks', async () => {
    const url = goodtask.add({
      title: 'one\ntwo\nthree',
      multiple: 1,
    })

    expect(url).toBe('goodtask3://add?title=one%0Atwo%0Athree&multiple=1')
  })

  test('add should return an x-callback-url when xSuccess is provided', async () => {
    const url = goodtask.add({
      title: 'Title',
      list: 'To-do',
      due: '2026-05-21 18:00',
      dueAfter: 10,
      alarm: 1,
      priority: 2,
      url: 'https://example.com/task',
      notes: 'Bring receipts',
      xSuccess: 'launchpro:',
    })

    expect(url).toBe(
      'goodtask3://x-callback-url/add?title=Title&list=To-do&due=2026-05-21%2018%3A00&dueAfter=10&alarm=1&priority=2&url=https%3A%2F%2Fexample.com%2Ftask&notes=Bring%20receipts&x-success=launchpro%3A',
    )
  })

  test('add should include dueAfter when due is set and leave GoodTask to ignore it as documented', async () => {
    const url = goodtask.add({
      title: 'Title',
      due: '18:00',
      dueAfter: 10,
    })

    expect(url).toBe('goodtask3://add?title=Title&due=18%3A00&dueAfter=10')
  })
})
