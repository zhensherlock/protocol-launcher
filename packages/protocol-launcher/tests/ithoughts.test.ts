import { describe, expect, test } from 'vitest'
import { ithoughts } from '../src'

describe('ithoughts', () => {
  test('makeMap should return the documented base URL', () => {
    const url = ithoughts.makeMap()
    expect(url).toBe('ithoughts://x-callback-url/makeMap')
  })

  test('makeMap should return a URL with Markdown text, path, and style', () => {
    const url = ithoughts.makeMap({
      text: '# Project\n- Task',
      format: 'md',
      path: '/maps/Project.itmz',
      style: 'StyleName',
    })
    expect(url).toBe(
      'ithoughts://x-callback-url/makeMap?text=%23%20Project%0A-%20Task&format=md&path=%2Fmaps%2FProject.itmz&style=StyleName',
    )
  })

  test('makeMap should support clipboard text, note, and link parameters', () => {
    const url = ithoughts.makeMap({
      text: '[[clipboard]]',
      note: 'Source note',
      link: 'https://example.com',
    })
    expect(url).toBe(
      'ithoughts://x-callback-url/makeMap?text=%5B%5Bclipboard%5D%5D&note=Source%20note&link=https%3A%2F%2Fexample.com',
    )
  })

  test('amendMap should return a URL for an existing map path and target', () => {
    const url = ithoughts.amendMap({ path: '/tasks', target: 'newtasks' })
    expect(url).toBe('ithoughts://x-callback-url/amendMap?path=%2Ftasks&target=newtasks')
  })

  test('amendMap should return a URL with text, note, link, format, and edit', () => {
    const url = ithoughts.amendMap({
      text: 'New task',
      note: 'Details',
      link: 'https://example.com/task',
      format: 'text',
      path: '/tasks',
      target: 'Inbox',
      edit: 'YES',
    })
    expect(url).toBe(
      'ithoughts://x-callback-url/amendMap?text=New%20task&note=Details&link=https%3A%2F%2Fexample.com%2Ftask&format=text&path=%2Ftasks&target=Inbox&edit=YES',
    )
  })

  test('amendMap should support edit=NO', () => {
    const url = ithoughts.amendMap({ path: '/tasks', target: 'newtasks', edit: 'NO' })
    expect(url).toBe('ithoughts://x-callback-url/amendMap?path=%2Ftasks&target=newtasks&edit=NO')
  })
})
