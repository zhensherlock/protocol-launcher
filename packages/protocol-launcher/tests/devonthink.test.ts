import { describe, expect, test } from 'vitest'
import { devonthink } from '../src'

describe('devonthink', () => {
  test('createFormattedNote should return a URL with source', async () => {
    const url = devonthink.createFormattedNote({
      title: 'New Note',
      source: '<p>Hello</p>',
    })
    expect(url).toBe('x-devonthink://createFormattedNote?title=New%20Note&source=%3Cp%3EHello%3C%2Fp%3E')
  })

  test('createHTML should return a URL with source', async () => {
    const url = devonthink.createHTML({
      title: 'Page',
      source: '<h1>Hello</h1>',
    })
    expect(url).toBe('x-devonthink://createHTML?title=Page&source=%3Ch1%3EHello%3C%2Fh1%3E')
  })

  test('createMarkdown should return a URL with text', async () => {
    const url = devonthink.createMarkdown({
      title: 'Readme',
      text: '# Hello',
    })
    expect(url).toBe('x-devonthink://createMarkdown?title=Readme&text=%23%20Hello')
  })

  test('createPDF should return a URL with width and paginated', async () => {
    const url = devonthink.createPDF({
      location: 'https://www.devontechnologies.com',
      width: 800,
      paginated: 1,
    })
    expect(url).toBe('x-devonthink://createPDF?location=https%3A%2F%2Fwww.devontechnologies.com&width=800&paginated=1')
  })

  test('createPDF should return a URL with numeric boolean parameters', async () => {
    const url = devonthink.createPDF({
      location: 'https://www.devontechnologies.com',
      paginated: 0,
      hide: 1,
    })
    expect(url).toBe('x-devonthink://createPDF?location=https%3A%2F%2Fwww.devontechnologies.com&hide=1&paginated=0')
  })

  test('createRTF should return the official example URL', async () => {
    const url = devonthink.createRTF({
      title: 'New bookmark',
      location: 'http://www.devontechnologies.com',
      noselector: 1,
    })
    expect(url).toBe(
      'x-devonthink://createRTF?title=New%20bookmark&location=http%3A%2F%2Fwww.devontechnologies.com&noselector=1',
    )
  })

  test('createRTF should return a URL with selection', async () => {
    const url = devonthink.createRTF({
      title: 'Selection',
      selection: 'Selected text',
    })
    expect(url).toBe('x-devonthink://createRTF?title=Selection&selection=Selected%20text')
  })

  test('createWebArchive should return a URL', async () => {
    const url = devonthink.createWebArchive({
      title: 'DEVONtechnologies',
      location: 'https://www.devontechnologies.com',
    })
    expect(url).toBe(
      'x-devonthink://createWebArchive?title=DEVONtechnologies&location=https%3A%2F%2Fwww.devontechnologies.com',
    )
  })

  test('createBookmark should return a URL', async () => {
    const url = devonthink.createBookmark({
      title: 'DEVONtechnologies',
      location: 'https://www.devontechnologies.com',
    })
    expect(url).toBe(
      'x-devonthink://createBookmark?title=DEVONtechnologies&location=https%3A%2F%2Fwww.devontechnologies.com',
    )
  })

  test('createGroup should return a URL', async () => {
    const url = devonthink.createGroup({
      title: 'Inbox',
      destination: 'F8E2A5A6-0000-0000-0000-000000000000',
    })
    expect(url).toBe('x-devonthink://createGroup?title=Inbox&destination=F8E2A5A6-0000-0000-0000-000000000000')
  })

  test('createText should return a URL with text', async () => {
    const url = devonthink.createText({
      title: 'Plain Note',
      text: 'Hello World',
    })
    expect(url).toBe('x-devonthink://createText?title=Plain%20Note&text=Hello%20World')
  })

  test('createText should return a URL with all common parameters', async () => {
    const url = devonthink.createText({
      title: 'Plain Note',
      comment: 'Comment',
      location: 'https://example.com',
      tags: 'Research,Web',
      destination: 'F8E2A5A6-0000-0000-0000-000000000000',
      hide: 1,
      noselector: 1,
      reader: 0,
      referrer: 'https://referrer.example.com',
      text: 'Hello',
    })
    expect(url).toBe(
      'x-devonthink://createText?title=Plain%20Note&comment=Comment&location=https%3A%2F%2Fexample.com&tags=Research%2CWeb&destination=F8E2A5A6-0000-0000-0000-000000000000&hide=1&noselector=1&reader=0&referrer=https%3A%2F%2Freferrer.example.com&text=Hello',
    )
  })

  test('clip should return a URL without parameters', async () => {
    const url = devonthink.clip()
    expect(url).toBe('x-devonthink://clip')
  })

  test('clip should return a URL with parameters', async () => {
    const url = devonthink.clip({
      title: 'Clip',
      location: 'https://www.devontechnologies.com',
    })
    expect(url).toBe('x-devonthink://clip?title=Clip&location=https%3A%2F%2Fwww.devontechnologies.com')
  })

  test('note should return a URL without parameters', async () => {
    const url = devonthink.note()
    expect(url).toBe('x-devonthink://note')
  })

  test('search should return a URL with query', async () => {
    const url = devonthink.search({
      query: 'invoice',
    })
    expect(url).toBe('x-devonthink://search?query=invoice')
  })

  test('itemLink should return a URL with reveal', async () => {
    const url = devonthink.itemLink({
      uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
      reveal: 1,
    })
    expect(url).toBe('x-devonthink-item://929D101B-35AC-474C-801C-D8818C48DB80?reveal=1')
  })

  test('itemLink should return a URL with page', async () => {
    const url = devonthink.itemLink({
      uuid: 'PDF-ID',
      page: 5,
    })
    expect(url).toBe('x-devonthink-item://PDF-ID?page=5')
  })

  test('itemLink should return a URL with search', async () => {
    const url = devonthink.itemLink({
      uuid: 'TEXT-FILE-ID',
      search: 'iPad Pro',
    })
    expect(url).toBe('x-devonthink-item://TEXT-FILE-ID?search=iPad%20Pro')
  })

  test('itemLink should return a URL with time', async () => {
    const url = devonthink.itemLink({
      uuid: 'MOVIE-ID',
      time: 43.5,
    })
    expect(url).toBe('x-devonthink-item://MOVIE-ID?time=43.5')
  })

  test('itemLink should return a URL with line', async () => {
    const url = devonthink.itemLink({
      uuid: '929D101B-35AC-474C-801C-D8818C48DB80',
      line: 125,
    })
    expect(url).toBe('x-devonthink-item://929D101B-35AC-474C-801C-D8818C48DB80?line=125')
  })
})
