import { describe, expect, test } from 'vitest'
import { bunch } from '../src'

describe('bunch', () => {
  test('open should return a URL for a Bunch name', () => {
    const url = bunch.open({ bunch: 'Comms' })
    expect(url).toBe('x-bunch://open?bunch=Comms')
  })

  test('open should support Bunch Beta scheme', () => {
    const url = bunch.open({ bunch: 'Comms', scheme: 'x-bunch-beta' })
    expect(url).toBe('x-bunch-beta://open?bunch=Comms')
  })

  test('open should support the documented shortcut URL', () => {
    const url = bunch.open({ bunch: 'Comms', syntax: 'shortcut' })
    expect(url).toBe('x-bunch://Comms')
  })

  test('open should support the documented path URL', () => {
    const url = bunch.open({ bunch: 'WorkBunch', syntax: 'path' })
    expect(url).toBe('x-bunch://open/WorkBunch')
  })

  test('open should support multiple Bunches as a comma-separated name', () => {
    const url = bunch.open({ bunch: 'Bunch 1,Bunch 2' })
    expect(url).toBe('x-bunch://open?bunch=Bunch%201%2CBunch%202')
  })

  test('open should support frontmatter values', () => {
    const url = bunch.open({ bunch: 'Default', variables: { launch: 'TextEdit' } })
    expect(url).toBe('x-bunch://open?bunch=Default&launch=TextEdit')
  })

  test('open should support x-callback-url format', () => {
    const url = bunch.open({ bunch: 'Comms', xCallback: true, 'x-source': 'com.googlecode.iterm2' })
    expect(url).toBe('x-bunch://x-callback-url/open?bunch=Comms&x-source=com.googlecode.iterm2')
  })

  test('open should support x-success and x-delay', () => {
    const url = bunch.open({ bunch: 'Comms', 'x-success': 'com.brettterpstra.marked2', 'x-delay': 15 })
    expect(url).toBe('x-bunch://open?bunch=Comms&x-success=com.brettterpstra.marked2&x-delay=15')
  })

  test('close should return a URL', () => {
    const url = bunch.close({ bunch: 'Comms' })
    expect(url).toBe('x-bunch://close?bunch=Comms')
  })

  test('close should support the documented path URL', () => {
    const url = bunch.close({ bunch: 'Comms', syntax: 'path' })
    expect(url).toBe('x-bunch://close/Comms')
  })

  test('toggle should return a URL', () => {
    const url = bunch.toggle({ bunch: 'Comms' })
    expect(url).toBe('x-bunch://toggle?bunch=Comms')
  })

  test('toggle should support the documented path URL', () => {
    const url = bunch.toggle({ bunch: 'Comms', syntax: 'path' })
    expect(url).toBe('x-bunch://toggle/Comms')
  })

  test('toggle path URL should keep the documented comma separator', () => {
    const url = bunch.toggle({ bunch: 'Bunch 1,Bunch 2', syntax: 'path' })
    expect(url).toBe('x-bunch://toggle/Bunch%201,Bunch%202')
  })

  test('toggle should support tagged Bunches', () => {
    const url = bunch.toggle({ tag: 'Tag1+Tag2' })
    expect(url).toBe('x-bunch://toggle?tag=Tag1%2BTag2')
  })

  test('edit should return a URL', () => {
    const url = bunch.edit({ bunch: 'Example' })
    expect(url).toBe('x-bunch://edit?bunch=Example')
  })

  test('edit should support the documented path URL', () => {
    const url = bunch.edit({ bunch: 'Example', syntax: 'path' })
    expect(url).toBe('x-bunch://edit/Example')
  })

  test('raw should return a URL with a file', () => {
    const url = bunch.raw({ file: '~/MiscBunch.bunch' })
    expect(url).toBe('x-bunch://raw?file=~%2FMiscBunch.bunch')
  })

  test('raw should return a URL with text', () => {
    const url = bunch.raw({ txt: '(dnd on)' })
    expect(url).toBe('x-bunch://raw?txt=(dnd%20on)')
  })

  test('raw should ignore txt when file is provided', () => {
    const url = bunch.raw({ file: '~/MiscBunch.bunch', txt: '(ignored)' } as Parameters<typeof bunch.raw>[0])
    expect(url).toBe('x-bunch://raw?file=~%2FMiscBunch.bunch')
  })

  test('refresh should return a URL', () => {
    const url = bunch.refresh()
    expect(url).toBe('x-bunch://refresh')
  })

  test('reveal should return a URL', () => {
    const url = bunch.reveal()
    expect(url).toBe('x-bunch://reveal')
  })

  test('setPref should return a URL with boolean preferences', () => {
    const url = bunch.setPref({ toggleBunches: 1, singleBunchMode: 'yes' })
    expect(url).toBe('x-bunch://setPref?toggleBunches=1&singleBunchMode=yes')
  })

  test('setPref should return a URL with configDir and debugLevel', () => {
    const url = bunch.setPref({ configDir: '~/Dropbox/Sync/Bunches', debugLevel: 4 })
    expect(url).toBe('x-bunch://setPref?configDir=~%2FDropbox%2FSync%2FBunches&debugLevel=4')
  })

  test('snippet should return a URL with a file and fragment', () => {
    const url = bunch.snippet({
      file: 'useful.snippets',
      fragment: 'Music',
      variables: { playlist: 'spotify:playlist:3cSpIL4Q0H3uqdBMbT6c9x' },
    })
    expect(url).toBe(
      'x-bunch://snippet?file=useful.snippets&fragment=Music&playlist=spotify%3Aplaylist%3A3cSpIL4Q0H3uqdBMbT6c9x',
    )
  })

  test('snippet should support the documented path URL', () => {
    const url = bunch.snippet({
      file: 'useful.snippets',
      fragment: 'Speak',
      syntax: 'path',
      variables: { var1: 'foo', var2: 'bar baz' },
    })
    expect(url).toBe('x-bunch://snippet/useful.snippets/Speak?var1=foo&var2=bar%20baz')
  })

  test('snippet path URL should percent-encode hash fragments in the file path', () => {
    const url = bunch.snippet({ file: 'SNIPPET#FRAGMENT', syntax: 'path' })
    expect(url).toBe('x-bunch://snippet/SNIPPET%23FRAGMENT')
  })

  test('prefs should return a URL', () => {
    const url = bunch.prefs()
    expect(url).toBe('x-bunch://prefs')
  })
})
