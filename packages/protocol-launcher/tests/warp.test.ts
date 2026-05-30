import { describe, expect, test } from 'vitest'
import { warp } from '../src'

describe('warp', () => {
  test('newWindow should return the official new window URL', () => {
    const url = warp.newWindow({
      path: 'path_to_folder',
    })

    expect(url).toBe('warp://action/new_window?path=path_to_folder')
  })

  test('newWindow should support the official Warp Preview scheme', () => {
    const url = warp.newWindow({
      path: 'path_to_folder',
      scheme: 'warppreview',
    })

    expect(url).toBe('warppreview://action/new_window?path=path_to_folder')
  })

  test('newTab should return the official new tab URL', () => {
    const url = warp.newTab({
      path: 'path_to_folder',
    })

    expect(url).toBe('warp://action/new_tab?path=path_to_folder')
  })

  test('launchConfiguration should return the official launch URL with path', () => {
    const url = warp.launchConfiguration({
      path: 'launch_configuration_path',
    })

    expect(url).toBe('warp://launch/launch_configuration_path')
  })

  test('tabConfig should return the official Tab Config URL with name', () => {
    const url = warp.tabConfig({
      name: 'my_tab',
    })

    expect(url).toBe('warp://tab_config/my_tab')
  })

  test('tabConfig should return the official Tab Config URL with new_window', () => {
    const url = warp.tabConfig({
      name: 'my_tab',
      newWindow: true,
    })

    expect(url).toBe('warp://tab_config/my_tab?new_window=true')
  })

  test('tabConfig should support the official .toml name example', () => {
    const url = warp.tabConfig({
      name: 'my_tab.toml',
    })

    expect(url).toBe('warp://tab_config/my_tab.toml')
  })

  test('tabConfig should omit new_window when false', () => {
    const url = warp.tabConfig({
      name: 'my_tab',
      newWindow: false,
    })

    expect(url).toBe('warp://tab_config/my_tab')
  })
})
