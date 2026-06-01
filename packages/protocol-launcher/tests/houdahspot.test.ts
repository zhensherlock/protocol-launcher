import { describe, expect, test } from 'vitest'
import { houdahspot } from '../src'

describe('houdahspot', () => {
  test('should expose only HoudahSpot documented helpers', () => {
    expect(Object.keys(houdahspot).sort()).toEqual(['search', 'searchAnyText', 'searchContent', 'searchName'])
  })

  test('search should return the official search URL with query', () => {
    const url = houdahspot.search({ q: 'Houdah Software' })

    expect(url).toBe('houdahspot4://search?q=Houdah%20Software')
  })

  test('search should encode advanced search strings', () => {
    const url = houdahspot.search({ q: 'name:*.txt' })

    expect(url).toBe('houdahspot4://search?q=name:*.txt')
  })

  test('search should repeat location parameters', () => {
    const url = houdahspot.search({
      q: 'invoice',
      location: ['~/Documents', '/Volumes/Archive'],
    })

    expect(url).toBe('houdahspot4://search?q=invoice&location=~/Documents&location=/Volumes/Archive')
  })

  test('search should serialize template paths and search attributes', () => {
    const url = houdahspot.search({
      q: 'Houdah Software',
      template:
        '~/Library/Application Support/com.houdah.HoudahSpot4/Templates/Sample Templates/Apple Mail Messages.hstemplate',
      s: 'name',
    })

    expect(url).toBe(
      'houdahspot4://search?q=Houdah%20Software&template=~/Library/Application%20Support/com.houdah.HoudahSpot4/Templates/Sample%20Templates/Apple%20Mail%20Messages.hstemplate&s=name',
    )
  })

  test('search should support the documented parameter aliases', () => {
    const url = houdahspot.search({
      query: 'mail',
      l: '~/Library/Mail',
      t: '~/Library/Application Support/com.houdah.HoudahSpot4/Templates/Sample Templates/Apple Mail Messages.hstemplate',
      search: 'content',
    })

    expect(url).toBe(
      'houdahspot4://search?query=mail&l=~/Library/Mail&t=~/Library/Application%20Support/com.houdah.HoudahSpot4/Templates/Sample%20Templates/Apple%20Mail%20Messages.hstemplate&search=content',
    )
  })

  test('search should keep the official search endpoint when no parameters are provided', () => {
    const url = houdahspot.search()

    expect(url).toBe('houdahspot4://search')
  })

  test('searchName should set the documented name search attribute', () => {
    const url = houdahspot.searchName({ q: 'invoice' })

    expect(url).toBe('houdahspot4://search?q=invoice&s=name')
  })

  test('searchContent should set the documented content search attribute', () => {
    const url = houdahspot.searchContent({ q: 'project plan' })

    expect(url).toBe('houdahspot4://search?q=project%20plan&s=content')
  })

  test('searchAnyText should set the documented anytext search attribute', () => {
    const url = houdahspot.searchAnyText({ q: 'tag:orange' })

    expect(url).toBe('houdahspot4://search?q=tag:orange&s=anytext')
  })
})
