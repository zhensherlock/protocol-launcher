import { describe, expect, test } from 'vitest'
import { textwell } from '../src'

describe('textwell', () => {
  test('should export only the URL methods documented on the official Textwell page', () => {
    expect(Object.keys(textwell).sort()).toEqual([
      'add',
      'executeAction',
      'importAction',
      'insert',
      'open',
      'pasteAdd',
      'pasteInsert',
      'pasteReplace',
      'pasteReplaceRange',
      'replace',
      'replaceRange',
    ])
  })

  test('open should return the documented open URL', () => {
    const url = textwell.open()

    expect(url).toBe('textwell://')
  })

  test('replace should return the documented replace URL', () => {
    const url = textwell.replace({ text: 'Hello, Textwell.' })

    expect(url).toBe('textwell:///replace?text=Hello%2C%20Textwell.')
  })

  test('insert should return the documented insert URL', () => {
    const url = textwell.insert({ text: 'Inserted text' })

    expect(url).toBe('textwell:///insert?text=Inserted%20text')
  })

  test('add should return the documented add URL', () => {
    const url = textwell.add({ text: 'New ending' })

    expect(url).toBe('textwell:///add?text=New%20ending')
  })

  test('replaceRange should preserve the documented parameter names and order', () => {
    const url = textwell.replaceRange({
      replacingLoc: 7,
      replacingLen: 5,
      text: 'Textwell',
      selectingLoc: 0,
      selectingLen: 16,
    })

    expect(url).toBe(
      'textwell:///replaceRange?replacingLoc=7&replacingLen=5&text=Textwell&selectingLoc=0&selectingLen=16',
    )
  })

  test('pasteReplace should return the documented pasteReplace URL without parameters', () => {
    const url = textwell.pasteReplace()

    expect(url).toBe('textwell:///pasteReplace?')
  })

  test('pasteInsert should include documented pasting options', () => {
    const url = textwell.pasteInsert({
      prefix: '> ',
      suffix: '\n',
    })

    expect(url).toBe('textwell:///pasteInsert?prefix=%3E%20&suffix=%0A')
  })

  test('pasteAdd should return the documented pasteAdd URL without parameters', () => {
    const url = textwell.pasteAdd()

    expect(url).toBe('textwell:///pasteAdd?')
  })

  test('pasteReplaceRange should return the documented pasteReplaceRange URL', () => {
    const url = textwell.pasteReplaceRange({
      replacingLoc: 7,
      replacingLen: 5,
      selectingLoc: 0,
      selectingLen: 16,
    })

    expect(url).toBe('textwell:///pasteReplaceRange?replacingLoc=7&replacingLen=5&selectingLoc=0&selectingLen=16')
  })

  test('executeAction should return the documented executeAction URL', () => {
    const url = textwell.executeAction({ title: 'Format Markdown' })

    expect(url).toBe('textwell:///executeAction?title=Format%20Markdown')
  })

  test('importAction should include only documented importAction parameters', () => {
    const url = textwell.importAction({
      title: 'Hello',
      source: 'editor.setText("Hello")',
      iconTitle: 'star',
      desc: 'Create hello text',
      platform: 0,
      confirming: 1,
    })

    expect(url).toBe(
      'textwell:///importAction?title=Hello&source=editor.setText(%22Hello%22)&iconTitle=star&desc=Create%20hello%20text&platform=0&confirming=1',
    )
  })

  test('methods should support the documented x-success and extendXSuccess options', () => {
    const url = textwell.replace({
      text: 'Hello',
      xSuccess: 'shortcuts://callback',
      extendXSuccess: true,
    })

    expect(url).toBe('textwell:///replace?text=Hello&x-success=shortcuts%3A%2F%2Fcallback&extendXSuccess=true')
  })
})
