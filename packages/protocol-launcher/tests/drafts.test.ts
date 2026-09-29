import { describe, expect, test } from 'vitest'
import { drafts } from '../src'

describe('drafts', () => {
  test('open should return a URL', async () => {
    const url = drafts.open()
    expect(url).toBe('drafts://')
  })

  test('create should return a URL with text', async () => {
    const url = drafts.create({
      text: 'Hello World',
    })
    expect(url).toBe('drafts:///create?text=Hello%20World')
  })

  test('create should return a URL with text and tags', async () => {
    const url = drafts.create({
      text: 'Hello World',
      tag: ['work', 'important'],
      flagged: true,
    })
    expect(url).toBe('drafts:///create?text=Hello%20World&tag=work&tag=important&flagged=true')
  })

  test('create should return a URL with all parameters', async () => {
    const url = drafts.create({
      text: 'Hello World',
      tag: 'work',
      folder: 'archive',
      flagged: true,
      action: 'MyAction',
      allowEmpty: false,
      retParam: 'input',
    })
    expect(url).toBe(
      'drafts:///create?text=Hello%20World&tag=work&folder=archive&flagged=true&action=MyAction&allowEmpty=false&retParam=input',
    )
  })

  test('open should return a URL with uuid', async () => {
    const url = drafts.open({
      uuid: 'UUID-TO-VALID-DRAFT',
    })
    expect(url).toBe('drafts:///open?uuid=UUID-TO-VALID-DRAFT')
  })

  test('open should return a URL with title', async () => {
    const url = drafts.open({
      title: 'MyDraft/Header Name',
    })
    expect(url).toBe('drafts:///open?title=MyDraft%2FHeader%20Name')
  })

  test('open should return a URL with all parameters', async () => {
    const url = drafts.open({
      uuid: 'xxx',
      marker: 'Header Name',
      action: 'MyAction',
      allowEmpty: false,
      allowCreate: true,
      showDraftList: false,
      showActionList: true,
      loadWorkspace: 'Default',
      loadActionGroup: 'MyGroup',
      loadActionBarGroup: 'MyBarGroup',
    })
    expect(url).toBe(
      'drafts:///open?uuid=xxx&marker=Header%20Name&action=MyAction&allowEmpty=false&allowCreate=true&showDraftList=false&showActionList=true&loadWorkspace=Default&loadActionGroup=MyGroup&loadActionBarGroup=MyBarGroup',
    )
  })

  test('get should return a URL with uuid', async () => {
    const url = drafts.get({
      uuid: 'UUID-TO-VALID-DRAFT',
    })
    expect(url).toBe('drafts:///get?uuid=UUID-TO-VALID-DRAFT')
  })

  test('get should return a URL with uuid and retParam', async () => {
    const url = drafts.get({
      uuid: 'UUID-TO-VALID-DRAFT',
      retParam: 'input',
    })
    expect(url).toBe('drafts:///get?uuid=UUID-TO-VALID-DRAFT&retParam=input')
  })

  test('getCurrentDraft should return a URL without parameters', async () => {
    const url = drafts.getCurrentDraft()
    expect(url).toBe('drafts:///getCurrentDraft')
  })

  test('getCurrentDraft should return a URL with x-success', async () => {
    const url = drafts.getCurrentDraft({
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('drafts:///getCurrentDraft?x-success=myapp%3A%2F%2Fcallback')
  })

  test('prepend should return a URL with uuid and text', async () => {
    const url = drafts.prepend({
      uuid: 'UUID-TO-VALID-DRAFT',
      text: 'TEXT-TO-ADD',
    })
    expect(url).toBe('drafts:///prepend?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-ADD')
  })

  test('prepend should return a URL with tag as string', async () => {
    const url = drafts.prepend({
      uuid: 'xxx',
      text: 'Prefix',
      tag: 'work',
    })
    expect(url).toBe('drafts:///prepend?uuid=xxx&text=Prefix&tag=work')
  })

  test('prepend should return a URL with tag as array', async () => {
    const url = drafts.prepend({
      uuid: 'xxx',
      text: 'Prefix',
      tag: ['work', 'important'],
    })
    expect(url).toBe('drafts:///prepend?uuid=xxx&text=Prefix&tag=work&tag=important')
  })

  test('prepend should return a URL with allowEmpty true', async () => {
    const url = drafts.prepend({
      uuid: 'xxx',
      text: 'Prefix',
      allowEmpty: true,
    })
    expect(url).toBe('drafts:///prepend?uuid=xxx&text=Prefix&allowEmpty=true')
  })

  test('prepend should return a URL with all parameters', async () => {
    const url = drafts.prepend({
      uuid: 'xxx',
      text: 'Prefix',
      action: 'MyAction',
      allowEmpty: false,
      tag: ['work', 'important'],
    })
    expect(url).toBe('drafts:///prepend?uuid=xxx&text=Prefix&action=MyAction&allowEmpty=false&tag=work&tag=important')
  })

  test('append should return a URL with uuid and text', async () => {
    const url = drafts.append({
      uuid: 'UUID-TO-VALID-DRAFT',
      text: 'TEXT-TO-ADD',
    })
    expect(url).toBe('drafts:///append?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-ADD')
  })

  test('append should return a URL with action', async () => {
    const url = drafts.append({
      uuid: 'xxx',
      text: 'Suffix',
      action: 'MyAction',
    })
    expect(url).toBe('drafts:///append?uuid=xxx&text=Suffix&action=MyAction')
  })

  test('append should return a URL with tag as string', async () => {
    const url = drafts.append({
      uuid: 'xxx',
      text: 'Suffix',
      tag: 'work',
    })
    expect(url).toBe('drafts:///append?uuid=xxx&text=Suffix&tag=work')
  })

  test('append should return a URL with tag as array', async () => {
    const url = drafts.append({
      uuid: 'xxx',
      text: 'Suffix',
      tag: ['work', 'important'],
    })
    expect(url).toBe('drafts:///append?uuid=xxx&text=Suffix&tag=work&tag=important')
  })

  test('append should return a URL with allowEmpty true', async () => {
    const url = drafts.append({
      uuid: 'xxx',
      text: 'Suffix',
      allowEmpty: true,
    })
    expect(url).toBe('drafts:///append?uuid=xxx&text=Suffix&allowEmpty=true')
  })

  test('append should return a URL with all parameters', async () => {
    const url = drafts.append({
      uuid: 'xxx',
      text: 'Suffix',
      action: 'MyAction',
      allowEmpty: false,
      tag: ['work', 'important'],
    })
    expect(url).toBe('drafts:///append?uuid=xxx&text=Suffix&action=MyAction&allowEmpty=false&tag=work&tag=important')
  })

  test('replaceRange should return a URL', async () => {
    const url = drafts.replaceRange({
      uuid: 'UUID-TO-VALID-DRAFT',
      text: 'TEXT-TO-INSERT',
      start: 0,
      length: 10,
    })
    expect(url).toBe('drafts:///replaceRange?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-INSERT&start=0&length=10')
  })

  test('search should return a URL with query', async () => {
    const url = drafts.search({
      query: 'QUERY-TEXT',
    })
    expect(url).toBe('drafts:///search?query=QUERY-TEXT')
  })

  test('search should return a URL with all parameters', async () => {
    const url = drafts.search({
      query: 'meeting',
      tag: 'work',
      folder: 'inbox',
    })
    expect(url).toBe('drafts:///search?query=meeting&tag=work&folder=inbox')
  })

  test('search should return a URL without parameters', async () => {
    const url = drafts.search()
    expect(url).toBe('drafts:///search')
  })

  test('quickSearch should return a URL with query', async () => {
    const url = drafts.quickSearch({
      query: 'QUERY-TEXT',
    })
    expect(url).toBe('drafts:///quickSearch?query=QUERY-TEXT')
  })

  test('quickSearch should return a URL without parameters', async () => {
    const url = drafts.quickSearch()
    expect(url).toBe('drafts:///quickSearch')
  })

  test('commandPalette should return a URL with query', async () => {
    const url = drafts.commandPalette({
      query: 'QUERY-TEXT',
    })
    expect(url).toBe('drafts:///commandPalette?query=QUERY-TEXT')
  })

  test('commandPalette should return a URL without parameters', async () => {
    const url = drafts.commandPalette()
    expect(url).toBe('drafts:///commandPalette')
  })

  test('actionSearch should return a URL with query', async () => {
    const url = drafts.actionSearch({
      query: 'QUERY-TEXT',
    })
    expect(url).toBe('drafts:///actionSearch?query=QUERY-TEXT')
  })

  test('actionSearch should return a URL without parameters', async () => {
    const url = drafts.actionSearch()
    expect(url).toBe('drafts:///actionSearch')
  })

  test('workspace should return a URL with name', async () => {
    const url = drafts.workspace({
      name: 'WORKSPACE-NAME',
    })
    expect(url).toBe('drafts:///workspace?name=WORKSPACE-NAME')
  })

  test('workspace should return a URL with Default', async () => {
    const url = drafts.workspace({
      name: 'Default',
    })
    expect(url).toBe('drafts:///workspace?name=Default')
  })

  test('loadActionGroup should return a URL with name', async () => {
    const url = drafts.loadActionGroup({
      name: 'GROUP-NAME',
    })
    expect(url).toBe('drafts:///loadActionGroup?name=GROUP-NAME')
  })

  test('loadActionBarGroup should return a URL with name', async () => {
    const url = drafts.loadActionBarGroup({
      name: 'GROUP-NAME',
    })
    expect(url).toBe('drafts:///loadActionBarGroup?name=GROUP-NAME')
  })

  test('runAction should return a URL with text and action', async () => {
    const url = drafts.runAction({
      text: 'TEXT',
      action: 'VALID-ACTION-NAME',
    })
    expect(url).toBe('drafts:///runAction?text=TEXT&action=VALID-ACTION-NAME')
  })

  test('runAction should return a URL with allowEmpty', async () => {
    const url = drafts.runAction({
      text: 'TEXT',
      allowEmpty: false,
    })
    expect(url).toBe('drafts:///runAction?text=TEXT&allowEmpty=false')
  })

  test('capture should return a URL with text', async () => {
    const url = drafts.capture({
      text: 'INITIAL-TEXT',
    })
    expect(url).toBe('drafts:///capture?text=INITIAL-TEXT')
  })

  test('capture should return a URL with text and tag', async () => {
    const url = drafts.capture({
      text: 'Note',
      tag: 'work,important',
    })
    expect(url).toBe('drafts:///capture?text=Note&tag=work%2Cimportant')
  })

  test('capture should return a URL without parameters', async () => {
    const url = drafts.capture()
    expect(url).toBe('drafts:///capture')
  })

  test('dictate should return a URL with x-success', async () => {
    const url = drafts.dictate({
      xSuccess: 'APP-URL',
    })
    expect(url).toBe('drafts:///dictate?x-success=APP-URL')
  })

  test('dictate should return a URL with all parameters', async () => {
    const url = drafts.dictate({
      locale: 'en-US',
      save: false,
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('drafts:///dictate?locale=en-US&save=false&x-success=myapp%3A%2F%2Fcallback')
  })

  test('dictate should return a URL without parameters', async () => {
    const url = drafts.dictate()
    expect(url).toBe('drafts:///dictate')
  })

  test('scanDocument should return a URL with x-success', async () => {
    const url = drafts.scanDocument({
      xSuccess: 'APP-URL',
    })
    expect(url).toBe('drafts:///scandocument?x-success=APP-URL')
  })

  test('scanDocument should return a URL with all parameters', async () => {
    const url = drafts.scanDocument({
      save: false,
      retParam: 'input',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('drafts:///scandocument?save=false&retParam=input&x-success=myapp%3A%2F%2Fcallback')
  })

  test('scanDocument should return a URL without parameters', async () => {
    const url = drafts.scanDocument()
    expect(url).toBe('drafts:///scandocument')
  })

  test('arrange should return a URL with text and x-success', async () => {
    const url = drafts.arrange({
      text: 'TEXT-TO-ARRANGE',
      xSuccess: 'APP-URL',
    })
    expect(url).toBe('drafts:///arrange?text=TEXT-TO-ARRANGE&x-success=APP-URL')
  })

  test('arrange should return a URL with all parameters', async () => {
    const url = drafts.arrange({
      text: 'unsorted list',
      retParam: 'input',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('drafts:///arrange?text=unsorted%20list&retParam=input&x-success=myapp%3A%2F%2Fcallback')
  })

  test('arrange should return a URL with only retParam', async () => {
    const url = drafts.arrange({
      text: 'unsorted list',
      retParam: 'input',
    })
    expect(url).toBe('drafts:///arrange?text=unsorted%20list&retParam=input')
  })

  test('arrange should return a URL with only x-success', async () => {
    const url = drafts.arrange({
      text: 'unsorted list',
      xSuccess: 'APP-URL',
    })
    expect(url).toBe('drafts:///arrange?text=unsorted%20list&x-success=APP-URL')
  })

  test('dictate should return a URL with retParam', async () => {
    const url = drafts.dictate({
      retParam: 'input',
    })
    expect(url).toBe('drafts:///dictate?retParam=input')
  })

  test('dictate should return a URL with save true', async () => {
    const url = drafts.dictate({
      save: true,
    })
    expect(url).toBe('drafts:///dictate?save=true')
  })

  test('dictate should return a URL with locale', async () => {
    const url = drafts.dictate({
      locale: 'en-US',
    })
    expect(url).toBe('drafts:///dictate?locale=en-US')
  })

  test('dictate should return a URL with all parameters', async () => {
    const url = drafts.dictate({
      locale: 'en-US',
      save: false,
      retParam: 'input',
      xSuccess: 'myapp://callback',
    })
    expect(url).toBe('drafts:///dictate?locale=en-US&save=false&retParam=input&x-success=myapp%3A%2F%2Fcallback')
  })
})

describe('documented URL updates', () => {
  test('chat opens the Chat Console', () => {
    expect(drafts.chat()).toBe('drafts:///chat')
  })

  test('chat encodes its mode and prompt', () => {
    expect(drafts.chat({ mode: 'claudeSonnet', prompt: 'Review & explain' })).toBe(
      'drafts:///chat?mode=claudeSonnet&prompt=Review%20%26%20explain',
    )
  })

  test('speak omits optional text when not supplied', () => {
    expect(drafts.speak()).toBe('drafts:///speak')
  })

  test('speak encodes explicit text', () => {
    expect(drafts.speak({ text: '你好, Drafts!' })).toBe('drafts:///speak?text=%E4%BD%A0%E5%A5%BD%2C%20Drafts!')
  })

  test('create preserves nested callback URLs', () => {
    expect(drafts.create({ text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///create?text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('open preserves nested callback URLs', () => {
    expect(drafts.open({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///open?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('get preserves nested callback URLs', () => {
    expect(drafts.get({ uuid: 'ID', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///get?uuid=ID&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('getCurrentDraft preserves nested callback URLs', () => {
    expect(drafts.getCurrentDraft({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///getCurrentDraft?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('append preserves nested callback URLs', () => {
    expect(drafts.append({ uuid: 'ID', text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///append?uuid=ID&text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('prepend preserves nested callback URLs', () => {
    expect(drafts.prepend({ uuid: 'ID', text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///prepend?uuid=ID&text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('replaceRange preserves nested callback URLs', () => {
    expect(drafts.replaceRange({ uuid: 'ID', text: 'N', start: 0, length: 1, xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///replaceRange?uuid=ID&text=N&start=0&length=1&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('runAction preserves nested callback URLs', () => {
    expect(drafts.runAction({ text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///runAction?text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('loadActionGroup preserves nested callback URLs', () => {
    expect(drafts.loadActionGroup({ name: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///loadActionGroup?name=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('loadActionBarGroup preserves nested callback URLs', () => {
    expect(drafts.loadActionBarGroup({ name: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///loadActionBarGroup?name=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('workspace preserves nested callback URLs', () => {
    expect(drafts.workspace({ name: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///workspace?name=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('search preserves nested callback URLs', () => {
    expect(drafts.search({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///search?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('quickSearch preserves nested callback URLs', () => {
    expect(drafts.quickSearch({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///quickSearch?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('actionSearch preserves nested callback URLs', () => {
    expect(drafts.actionSearch({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///actionSearch?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('commandPalette preserves nested callback URLs', () => {
    expect(drafts.commandPalette({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///commandPalette?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('capture preserves nested callback URLs', () => {
    expect(drafts.capture({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///capture?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('dictate preserves nested callback URLs', () => {
    expect(drafts.dictate({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///dictate?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('chat preserves nested callback URLs', () => {
    expect(drafts.chat({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///chat?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('speak preserves nested callback URLs', () => {
    expect(drafts.speak({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///speak?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('scanDocument preserves nested callback URLs', () => {
    expect(drafts.scanDocument({ xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///scandocument?x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
  test('arrange preserves nested callback URLs', () => {
    expect(drafts.arrange({ text: 'N', xSuccess: 'myapp://done?a=1&b=2' })).toBe(
      'drafts:///arrange?text=N&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2',
    )
  })
})
