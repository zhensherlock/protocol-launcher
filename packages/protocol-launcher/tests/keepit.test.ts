import { describe, expect, test } from 'vitest'
import { keepit } from '../src'

describe('keepit', () => {
  test('should expose only the documented Keep It URL helpers', () => {
    expect(Object.keys(keepit).sort()).toEqual(['add', 'append', 'openItem', 'openList'])
  })

  test('openItem should return an item link', () => {
    const url = keepit.openItem({
      item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
    })

    expect(url).toBe('keepit://link?item=C96F26E6-A566-457E-A448-5B0F527714DE')
  })

  test('openList should return a list link', () => {
    const url = keepit.openList({
      list: 'AllItems',
    })

    expect(url).toBe('keepit://link?list=AllItems')
  })

  test('add should return a web link URL with official example parameters', () => {
    const url = keepit.add({
      name: 'Apple Homepage',
      source: 'http://apple.com',
    })

    expect(url).toBe('keepit://x-callback-url/add?name=Apple%20Homepage&source=http%3A%2F%2Fapple.com')
  })

  test('add should return a tagged web link URL', () => {
    const url = keepit.add({
      name: 'Apple',
      source: 'http://apple.com',
      tags: 'tag 1,tag 2',
    })

    expect(url).toBe('keepit://x-callback-url/add?name=Apple&source=http%3A%2F%2Fapple.com&tags=tag%201,tag%202')
  })

  test('add should return a note URL with text and list', () => {
    const url = keepit.add({
      text: 'The quick brown fox',
      list: 'AllItems',
    })

    expect(url).toBe('keepit://x-callback-url/add?text=The%20quick%20brown%20fox&list=AllItems')
  })

  test('add should return a file URL with format and data', () => {
    const url = keepit.add({
      format: 'png',
      data: 'iVBORw0KGgoAAAANSUhEUgAAAgA=',
    })

    expect(url).toBe('keepit://x-callback-url/add?format=png&data=iVBORw0KGgoAAAANSUhEUgAAAgA%3D')
  })

  test('add should include all documented optional action parameters', () => {
    const url = keepit.add({
      text: 'Styled text',
      style: 'Heading',
      link: 'https://example.com/source',
      source: 'https://example.com',
      name: 'Example',
      format: 'rtf',
      label: 'LABEL-ID',
      list: 'LIST-ID',
      tags: 'research,keep it',
      comments: 'Imported from a launcher',
    })

    expect(url).toBe(
      'keepit://x-callback-url/add?text=Styled%20text&style=Heading&link=https%3A%2F%2Fexample.com%2Fsource&name=Example&source=https%3A%2F%2Fexample.com&format=rtf&label=LABEL-ID&list=LIST-ID&tags=research,keep%20it&comments=Imported%20from%20a%20launcher',
    )
  })

  test('add should include documented web link offline and minimal parameters', () => {
    const url = keepit.add({
      name: 'Apple',
      source: 'http://apple.com',
      offline: 1,
      minimal: '0',
    })

    expect(url).toBe('keepit://x-callback-url/add?name=Apple&source=http%3A%2F%2Fapple.com&offline=1&minimal=0')
  })

  test('add should include standard x-callback parameters', () => {
    const url = keepit.add({
      text: 'Callback note',
      xSource: 'Shortcuts',
      xSuccess: 'shortcuts://callback',
      xError: 'myapp://error',
      xCancel: 'myapp://cancel',
    })

    expect(url).toBe(
      'keepit://x-callback-url/add?text=Callback%20note&x-source=Shortcuts&x-success=shortcuts%3A%2F%2Fcallback&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel',
    )
  })

  test('append should return a text URL', () => {
    const url = keepit.append({
      text: 'The quick brown fox',
      item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
    })

    expect(url).toBe(
      'keepit://x-callback-url/append?text=The%20quick%20brown%20fox&item=C96F26E6-A566-457E-A448-5B0F527714DE',
    )
  })

  test('append should return an attachment URL', () => {
    const url = keepit.append({
      name: 'App Icon.png',
      item: '079B3A6A-18B4-41A6-858B-3F3DBA6F87F3',
      data: 'iVBORw0KGgoAAAANSUhEUgAAAHg=',
    })

    expect(url).toBe(
      'keepit://x-callback-url/append?name=App%20Icon.png&item=079B3A6A-18B4-41A6-858B-3F3DBA6F87F3&data=iVBORw0KGgoAAAANSUhEUgAAAHg%3D',
    )
  })

  test('append should include documented text options and callbacks', () => {
    const url = keepit.append({
      text: 'Linked heading',
      style: 'Title',
      link: 'https://example.com',
      item: 'C96F26E6-A566-457E-A448-5B0F527714DE',
      xSuccess: 'myapp://success',
    })

    expect(url).toBe(
      'keepit://x-callback-url/append?text=Linked%20heading&style=Title&link=https%3A%2F%2Fexample.com&item=C96F26E6-A566-457E-A448-5B0F527714DE&x-success=myapp%3A%2F%2Fsuccess',
    )
  })
})
