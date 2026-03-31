import { describe, expect, test } from 'vitest'
import { textastic } from '../src'

describe('textastic', () => {
  test('open should return a URL', () => {
    const url = textastic.open()
    expect(url).toBe('textastic://')
  })

  test('newFile should return a URL with name and text', () => {
    const url = textastic.newFile({
      name: 'foo.txt',
      text: 'bar',
    })
    expect(url).toBe('textastic://x-callback-url/new?name=foo.txt&text=bar')
  })

  test('newFile should return a URL with location, path, name and snippet', () => {
    const url = textastic.newFile({
      location: 'iCloud',
      path: 'test',
      name: 'foo.txt',
      snippet: 'foo $0 bar',
    })
    expect(url).toBe('textastic://x-callback-url/new?location=iCloud&path=test&name=foo.txt&snippet=foo%20%240%20bar')
  })

  test('newFile should return a URL with externalUUID', () => {
    const url = textastic.newFile({
      location: 'external',
      externalUUID: '62E8D362-7DFA-413C-874E-20C1D98B17C0',
      path: 'test',
      name: 'test.txt',
    })
    expect(url).toBe(
      'textastic://x-callback-url/new?location=external&path=test&name=test.txt&externalUUID=62E8D362-7DFA-413C-874E-20C1D98B17C0',
    )
  })

  test('newFile should return a URL with empty payload', () => {
    const url = textastic.newFile({})
    expect(url).toBe('textastic://x-callback-url/new')
  })

  test('openFile should return a URL with path and name', () => {
    const url = textastic.openFile({
      path: 'example.com',
      name: 'index.html',
    })
    expect(url).toBe('textastic://x-callback-url/open?path=example.com&name=index.html')
  })

  test('openFile should return a URL with location and name', () => {
    const url = textastic.openFile({
      location: 'iCloud',
      name: 'test.txt',
    })
    expect(url).toBe('textastic://x-callback-url/open?location=iCloud&name=test.txt')
  })

  test('openFile should return a URL with externalUUID', () => {
    const url = textastic.openFile({
      location: 'external',
      externalUUID: '62E8D362-7DFA-413C-874E-20C1D98B17C0',
      name: 'file.txt',
    })
    expect(url).toBe(
      'textastic://x-callback-url/open?location=external&name=file.txt&externalUUID=62E8D362-7DFA-413C-874E-20C1D98B17C0',
    )
  })

  test('openFile should return a URL with fullPath and suggestedExternalFolderPath', () => {
    const url = textastic.openFile({
      location: 'fullPath',
      path: '/Users/test/file.txt',
      name: 'file.txt',
      suggestedExternalFolderPath: '/Users/test',
    })
    expect(url).toBe(
      'textastic://x-callback-url/open?location=fullPath&path=%2FUsers%2Ftest%2Ffile.txt&name=file.txt&suggestedExternalFolderPath=%2FUsers%2Ftest',
    )
  })

  test('append should return a URL with location and name', () => {
    const url = textastic.append({
      location: 'iCloud',
      name: 'clipboard.txt',
    })
    expect(url).toBe('textastic://x-callback-url/append?location=iCloud&name=clipboard.txt')
  })

  test('append should return a URL with name and text', () => {
    const url = textastic.append({
      name: 'log.txt',
      text: 'new line',
    })
    expect(url).toBe('textastic://x-callback-url/append?name=log.txt&text=new%20line')
  })

  test('append should return a URL with externalUUID', () => {
    const url = textastic.append({
      location: 'external',
      externalUUID: '62E8D362-7DFA-413C-874E-20C1D98B17C0',
      name: 'file.txt',
      text: 'content',
    })
    expect(url).toBe(
      'textastic://x-callback-url/append?location=external&name=file.txt&externalUUID=62E8D362-7DFA-413C-874E-20C1D98B17C0&text=content',
    )
  })

  test('append should return a URL with path', () => {
    const url = textastic.append({
      path: 'test',
      name: 'file.txt',
      text: 'content',
    })
    expect(url).toBe('textastic://x-callback-url/append?path=test&name=file.txt&text=content')
  })

  test('append should return a URL with snippet', () => {
    const url = textastic.append({
      name: 'file.txt',
      snippet: 'foo $0 bar',
    })
    expect(url).toBe('textastic://x-callback-url/append?name=file.txt&snippet=foo%20%240%20bar')
  })

  test('replace should return a URL with location, name and text', () => {
    const url = textastic.replace({
      location: 'iCloud',
      name: 'scratchpad.txt',
      text: 'foo',
    })
    expect(url).toBe('textastic://x-callback-url/replace?location=iCloud&name=scratchpad.txt&text=foo')
  })

  test('replace should return a URL with name and text', () => {
    const url = textastic.replace({
      name: 'config.json',
      text: '{}',
    })
    expect(url).toBe('textastic://x-callback-url/replace?name=config.json&text=%7B%7D')
  })

  test('replace should return a URL with externalUUID', () => {
    const url = textastic.replace({
      location: 'external',
      externalUUID: '62E8D362-7DFA-413C-874E-20C1D98B17C0',
      name: 'file.txt',
      text: 'new content',
    })
    expect(url).toBe(
      'textastic://x-callback-url/replace?location=external&name=file.txt&externalUUID=62E8D362-7DFA-413C-874E-20C1D98B17C0&text=new%20content',
    )
  })

  test('replace should return a URL with path', () => {
    const url = textastic.replace({
      path: 'test',
      name: 'file.txt',
      text: 'content',
    })
    expect(url).toBe('textastic://x-callback-url/replace?path=test&name=file.txt&text=content')
  })

  test('replace should return a URL with snippet', () => {
    const url = textastic.replace({
      name: 'file.txt',
      snippet: 'foo $0 bar',
    })
    expect(url).toBe('textastic://x-callback-url/replace?name=file.txt&snippet=foo%20%240%20bar')
  })

  test('reloadCustomizations should return a URL', () => {
    const url = textastic.reloadCustomizations()
    expect(url).toBe('textastic://x-callback-url/reloadCustomizations')
  })
})
