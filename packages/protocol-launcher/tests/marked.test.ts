import { describe, expect, test } from 'vitest'
import { marked } from '../src'

describe('marked', () => {
  test('addStyle should return a URL with CSS text', () => {
    const url = marked.addStyle({ name: 'My new style', css: 'body { color: red; }' })
    expect(url).toBe('x-marked://addstyle?name=My%20new%20style&css=body%20%7B%20color:%20red%3B%20%7D')
  })

  test('addStyle should return a URL with a CSS file', () => {
    const url = marked.addStyle({ file: '/Users/myuser/Custom Styles/Unicorn.css' })
    expect(url).toBe('x-marked://addstyle?file=/Users/myuser/Custom%20Styles/Unicorn.css')
  })

  test('defaults should return a URL with settings', () => {
    const url = marked.defaults({ syntaxHighlight: 1, includeMathJax: 0 })
    expect(url).toBe('x-marked://defaults?syntaxHighlight=1&includeMathJax=0')
  })

  test('defaults should support refresh=0', () => {
    const url = marked.defaults({ syntaxHighlight: 1, refresh: 0 })
    expect(url).toBe('x-marked://defaults?syntaxHighlight=1&refresh=0')
  })

  test('runJavaScript should return a URL for the frontmost window', () => {
    const url = marked.runJavaScript({ js: 'Marked.file.refresh()' })
    expect(url).toBe('x-marked://do?js=Marked.file.refresh()')
  })

  test('runJavaScript should support path parameters', () => {
    const url = marked.runJavaScript({
      path: 'filename1/filename2',
      syntax: 'path',
      js: 'Marked.file.refresh()',
    })
    expect(url).toBe('x-marked://do/filename1/filename2?js=Marked.file.refresh()')
  })

  test('runJavaScript should support file query parameters', () => {
    const url = marked.runJavaScript({
      file: 'filename1,filename2',
      js: 'Marked.file.refresh()',
    })
    expect(url).toBe('x-marked://do?file=filename1,filename2&js=Marked.file.refresh()')
  })

  test('help should return a URL with a page', () => {
    const url = marked.help({ page: 'Document_Statistics' })
    expect(url).toBe('x-marked://help?page=Document_Statistics')
  })

  test('help should support path-only targets', () => {
    const url = marked.help({ path: 'Keyword_Highlighting:editingkeywords', syntax: 'path' })
    expect(url).toBe('x-marked://help/Keyword_Highlighting:editingkeywords')
  })

  test('open should return a URL with a document file', () => {
    const url = marked.open({ file: '/Users/username/Desktop/report.md' })
    expect(url).toBe('x-marked://open?file=/Users/username/Desktop/report.md')
  })

  test('open should return a URL without a file', () => {
    const url = marked.open()
    expect(url).toBe('x-marked://open')
  })

  test('open should support the documented path syntax', () => {
    const url = marked.open({ path: '~/nvALT2.2', syntax: 'path' })
    expect(url).toBe('x-marked://open/~/nvALT2.2')
  })

  test('open should support direct document paths', () => {
    const url = marked.open({ path: '/Users/username/Desktop/report.md', syntax: 'direct' })
    expect(url).toBe('x-marked:///Users/username/Desktop/report.md')
  })

  test('open should support x-success and raise', () => {
    const url = marked.open({ file: 'filename.md', 'x-success': 'ithoughts:', raise: true })
    expect(url).toBe('x-marked://open?file=filename.md&x-success=ithoughts:&raise=true')
  })

  test('paste should return a URL', () => {
    const url = marked.paste()
    expect(url).toBe('x-marked://paste')
  })

  test('preview should return a URL with text', () => {
    const url = marked.preview({ text: 'Some text to preview\n' })
    expect(url).toBe('x-marked://preview?text=Some%20text%20to%20preview%0A')
  })

  test('refresh should return a URL without a file', () => {
    const url = marked.refresh()
    expect(url).toBe('x-marked://refresh')
  })

  test('refresh should support a file query parameter', () => {
    const url = marked.refresh({ file: '/Users/username/Desktop/report.md' })
    expect(url).toBe('x-marked://refresh?file=/Users/username/Desktop/report.md')
  })

  test('refresh should support file=all', () => {
    const url = marked.refresh({ file: 'all' })
    expect(url).toBe('x-marked://refresh?file=all')
  })

  test('refresh should support path parameters', () => {
    const url = marked.refresh({ path: 'filename1/filename2', syntax: 'path' })
    expect(url).toBe('x-marked://refresh/filename1/filename2')
  })

  test('style should return a URL with a CSS style', () => {
    const url = marked.style({ css: 'Github' })
    expect(url).toBe('x-marked://style?css=Github')
  })

  test('style should support a file query parameter', () => {
    const url = marked.style({ file: 'filename1,filename2', css: 'Github' })
    expect(url).toBe('x-marked://style?file=filename1,filename2&css=Github')
  })

  test('style should support path parameters', () => {
    const url = marked.style({ path: 'all', syntax: 'path', css: 'Github' })
    expect(url).toBe('x-marked://style/all?css=Github')
  })
})
