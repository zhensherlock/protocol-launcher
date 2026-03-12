import { describe, expect, test } from 'vitest'
import { alfred } from '../src'

describe('alfred', () => {
  test('open should return a URL', async () => {
    const url = alfred.open()
    expect(url).toBe('alfred://')
  })

  test('openPreferences should return Alfred Preferences URL', async () => {
    const url = alfred.openPreferences()
    expect(url).toBe('alfredpreferences://')
  })

  test('navigateTo should return URL with path', async () => {
    const url = alfred.navigateTo({ path: 'workflows' })
    expect(url).toBe('alfredpreferences://navigateto/workflows')
  })

  test('navigateTo should return URL with workflows>resolvedependencies', async () => {
    const url = alfred.navigateTo({ path: 'workflows>resolvedependencies' })
    expect(url).toBe('alfredpreferences://navigateto/workflows>resolvedependencies')
  })

  test('navigateTo should return URL with workflow ID', async () => {
    const url = alfred.navigateTo({
      path: 'workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09',
    })
    expect(url).toBe(
      'alfredpreferences://navigateto/workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09',
    )
  })

  test('navigateTo should navigate to features>snippets', async () => {
    const url = alfred.navigateTo({ path: 'features>snippets' })
    expect(url).toBe('alfredpreferences://navigateto/features>snippets')
  })

  test('gallery should return workflow URL', async () => {
    const url = alfred.gallery({ author: 'alanhe', workflow: 'about-mac' })
    expect(url).toBe('alfred://gallery/workflow/alanhe/about-mac/')
  })

  test('gallery should return 1password workflow URL', async () => {
    const url = alfred.gallery({ author: 'alfredapp', workflow: '1password' })
    expect(url).toBe('alfred://gallery/workflow/alfredapp/1password/')
  })

  test('customSearch should return encoded URL', async () => {
    const url = alfred.customSearch({
      title: "Search Github for '{query}'",
      keyword: 'gh',
      url: 'https://github.com/search?q={query}',
    })
    expect(url).toBe(
      "alfred://customsearch/Search%20Github%20for%20'%7Bquery%7D' /gh/utf8/nospace/https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3D%7Bquery%7D",
    )
  })

  test('customSearch should handle custom encoding and spaceMode', async () => {
    const url = alfred.customSearch({
      title: 'Search',
      keyword: 's',
      encoding: 'utf8',
      spaceMode: 'plus',
      url: 'https://example.com?q={query}',
    })
    expect(url).toBe('alfred://customsearch/Search /s/utf8/plus/https%3A%2F%2Fexample.com%3Fq%3D%7Bquery%7D')
  })
})
