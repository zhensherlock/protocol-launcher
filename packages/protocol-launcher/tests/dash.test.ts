import { describe, expect, test } from 'vitest'
import { dash } from '../src'

describe('dash', () => {
  test('should expose only the documented Dash URL scheme helpers', () => {
    expect(Object.keys(dash).sort()).toEqual([
      'installDocset',
      'pluginSearch',
      'search',
      'searchDocsets',
      'subscribeFeed',
    ])
  })

  test('search should return the documented Dash search URL', () => {
    const url = dash.search({ query: 'string' })

    expect(url).toBe('dash://?query=string')
  })

  test('search should percent-encode the query value', () => {
    const url = dash.search({ query: 'URL Scheme' })

    expect(url).toBe('dash://?query=URL%20Scheme')
  })

  test('searchDocsets should return the documented keyword search URL', () => {
    const url = dash.searchDocsets({ keyword: 'php', query: 'printf' })

    expect(url).toBe('dash://?query=php:printf')
  })

  test('searchDocsets should preserve the documented keyword separator while encoding values', () => {
    const url = dash.searchDocsets({ keyword: 'js doc', query: 'Array.prototype.map' })

    expect(url).toBe('dash://?query=js%20doc:Array.prototype.map')
  })

  test('pluginSearch should return the documented keys and query plugin URL', () => {
    const url = dash.pluginSearch({ keys: 'python,django', query: 'string' })

    expect(url).toBe('dash-plugin://keys=python,django&query=string')
  })

  test('pluginSearch should support the documented keys-only plugin URL', () => {
    const url = dash.pluginSearch({ keys: 'python,django' })

    expect(url).toBe('dash-plugin://keys=python,django')
  })

  test('pluginSearch should support the documented query-only plugin URL', () => {
    const url = dash.pluginSearch({ query: 'string' })

    expect(url).toBe('dash-plugin://query=string')
  })

  test('pluginSearch should percent-encode the plugin query', () => {
    const url = dash.pluginSearch({ keys: 'typescript', query: 'Array map' })

    expect(url).toBe('dash-plugin://keys=typescript&query=Array%20map')
  })

  test('pluginSearch should use the official comma-separated keys value', () => {
    const url = dash.pluginSearch({ keys: 'python,django', query: 'string' })

    expect(url).toBe('dash-plugin://keys=python,django&query=string')
  })

  test('subscribeFeed should return the documented Dash feed URL', () => {
    const url = dash.subscribeFeed({ url: 'http://kapeli.com/feeds/NodeJS.xml' })

    expect(url).toBe('dash-feed://http%3A%2F%2Fkapeli.com%2Ffeeds%2FNodeJS.xml')
  })

  test('installDocset should return the documented Dash docset install URL', () => {
    const url = dash.installDocset({
      repoName: 'Ruby Docsets',
      entryName: 'cheatset',
      version: '1.3.3',
    })

    expect(url).toBe('dash-install://repo_name=Ruby Docsets&entry_name=cheatset&version=1.3.3')
  })

  test('installDocset should omit the optional version value', () => {
    const url = dash.installDocset({
      repoName: 'Stack Overflow',
      entryName: 'AngularJS (Online)',
    })

    expect(url).toBe('dash-install://repo_name=Stack Overflow&entry_name=AngularJS (Online)')
  })
})
