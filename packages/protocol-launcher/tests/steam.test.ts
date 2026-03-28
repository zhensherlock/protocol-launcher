import { describe, expect, test } from 'vitest'
import { steam } from '../src'

describe('steam', () => {
  test('open should return a URL', async () => {
    const url = steam.open()
    expect(url).toBe('steam://')
  })

  test('openUrl should return a URL with url', async () => {
    const url = steam.openUrl({
      url: 'https://store.steampowered.com/',
    })
    expect(url).toBe('steam://openurl/https://store.steampowered.com/')
  })

  test('store should return a URL without id', async () => {
    const url = steam.store()
    expect(url).toBe('steam://store')
  })

  test('store should return a URL with id', async () => {
    const url = steam.store({
      id: 8230,
    })
    expect(url).toBe('steam://store/8230')
  })

  test('store should return a URL with string id', async () => {
    const url = steam.store({
      id: '730',
    })
    expect(url).toBe('steam://store/730')
  })

  test('launch should return a URL with id', async () => {
    const url = steam.launch({
      id: 211,
    })
    expect(url).toBe('steam://run/211')
  })

  test('launch should return a URL with id and args', async () => {
    const url = steam.launch({
      id: 211,
      args: '-windowed',
    })
    expect(url).toBe('steam://run/211//-windowed/')
  })

  test('install should return a URL with id', async () => {
    const url = steam.install({
      id: 8230,
    })
    expect(url).toBe('steam://install/8230')
  })

  test('uninstall should return a URL with id', async () => {
    const url = steam.uninstall({
      id: 8230,
    })
    expect(url).toBe('steam://uninstall/8230')
  })

  test('validate should return a URL with id', async () => {
    const url = steam.validate({
      id: 8230,
    })
    expect(url).toBe('steam://validate/8230')
  })

  test('friends should return a URL without action', async () => {
    const url = steam.friends()
    expect(url).toBe('steam://friends/')
  })

  test('friends should return a URL with action', async () => {
    const url = steam.friends({
      action: 'status/online',
    })
    expect(url).toBe('steam://friends/status/online')
  })

  test('friends should return a URL with action and id', async () => {
    const url = steam.friends({
      action: 'add',
      id: '12345678',
    })
    expect(url).toBe('steam://friends/add/12345678')
  })

  test('friends should return a URL with message action', async () => {
    const url = steam.friends({
      action: 'message',
      id: '12345678',
    })
    expect(url).toBe('steam://friends/message/12345678')
  })

  test('settings should return a URL without page', async () => {
    const url = steam.settings()
    expect(url).toBe('steam://settings/')
  })

  test('settings should return a URL with page', async () => {
    const url = steam.settings({
      page: 'account',
    })
    expect(url).toBe('steam://settings/account')
  })

  test('settings should return a URL with downloads page', async () => {
    const url = steam.settings({
      page: 'downloads',
    })
    expect(url).toBe('steam://settings/downloads')
  })

  test('openComponent should return a URL with component', async () => {
    const url = steam.openComponent({
      component: 'bigpicture',
    })
    expect(url).toBe('steam://open/bigpicture')
  })

  test('openComponent should return a URL with console component', async () => {
    const url = steam.openComponent({
      component: 'console',
    })
    expect(url).toBe('steam://open/console')
  })

  test('openComponent should return a URL with downloads component', async () => {
    const url = steam.openComponent({
      component: 'downloads',
    })
    expect(url).toBe('steam://open/downloads')
  })

  test('openComponent should return a URL with friends component', async () => {
    const url = steam.openComponent({
      component: 'friends',
    })
    expect(url).toBe('steam://open/friends')
  })

  test('openComponent should return a URL with component and param', async () => {
    const url = steam.openComponent({
      component: 'screenshots',
      param: '730',
    })
    expect(url).toBe('steam://open/screenshots/730')
  })

  test('nav should return a URL with component', async () => {
    const url = steam.nav({
      component: 'console',
    })
    expect(url).toBe('steam://nav/console')
  })

  test('nav should return a URL with downloads component', async () => {
    const url = steam.nav({
      component: 'downloads',
    })
    expect(url).toBe('steam://nav/downloads')
  })

  test('nav should return a URL with games component', async () => {
    const url = steam.nav({
      component: 'games',
    })
    expect(url).toBe('steam://nav/games')
  })

  test('nav should return a URL with component and param', async () => {
    const url = steam.nav({
      component: 'games/details',
      param: '730',
    })
    expect(url).toBe('steam://nav/games/details/730')
  })

  test('connect should return a URL with ip', async () => {
    const url = steam.connect({
      ip: '192.0.2.1',
    })
    expect(url).toBe('steam://connect/192.0.2.1')
  })

  test('connect should return a URL with ip and port', async () => {
    const url = steam.connect({
      ip: '192.0.2.1',
      port: 27015,
    })
    expect(url).toBe('steam://connect/192.0.2.1:27015')
  })

  test('connect should return a URL with ip, port and password', async () => {
    const url = steam.connect({
      ip: '192.0.2.1',
      port: 27015,
      password: 'secret',
    })
    expect(url).toBe('steam://connect/192.0.2.1:27015/secret')
  })

  test('addNonSteamGame should return a URL', async () => {
    const url = steam.addNonSteamGame()
    expect(url).toBe('steam://AddNonSteamGame')
  })

  test('exit should return a URL', async () => {
    const url = steam.exit()
    expect(url).toBe('steam://exit')
  })

  test('appNews should return a URL with id', async () => {
    const url = steam.appNews({
      id: 730,
    })
    expect(url).toBe('steam://appnews/730')
  })

  test('gameProperties should return a URL with id', async () => {
    const url = steam.gameProperties({
      id: 730,
    })
    expect(url).toBe('steam://gameproperties/730')
  })

  test('controllerConfig should return a URL with id', async () => {
    const url = steam.controllerConfig({
      id: 730,
    })
    expect(url).toBe('steam://controllerconfig/730')
  })

  test('backup should return a URL without id', async () => {
    const url = steam.backup()
    expect(url).toBe('steam://backup')
  })

  test('backup should return a URL with id', async () => {
    const url = steam.backup({
      id: 730,
    })
    expect(url).toBe('steam://backup/730')
  })

  test('support should return a URL without params', async () => {
    const url = steam.support()
    expect(url).toBe('steam://support/')
  })

  test('support should return a URL with params', async () => {
    const url = steam.support({
      params: '730',
    })
    expect(url).toBe('steam://support/730')
  })

  test('url should return a URL with Store page', async () => {
    const url = steam.url({
      page: 'Store',
    })
    expect(url).toBe('steam://url/Store')
  })

  test('url should return a URL with CommunityHome page', async () => {
    const url = steam.url({
      page: 'CommunityHome',
    })
    expect(url).toBe('steam://url/CommunityHome')
  })

  test('url should return a URL with SteamWorkshop page', async () => {
    const url = steam.url({
      page: 'SteamWorkshop',
    })
    expect(url).toBe('steam://url/SteamWorkshop')
  })

  test('url should return a URL with StoreAppPage and param', async () => {
    const url = steam.url({
      page: 'StoreAppPage',
      param: '730',
    })
    expect(url).toBe('steam://url/StoreAppPage/730')
  })

  test('url should return a URL with StoreDLCPage and param', async () => {
    const url = steam.url({
      page: 'StoreDLCPage',
      param: '730',
    })
    expect(url).toBe('steam://url/StoreDLCPage/730')
  })
})
