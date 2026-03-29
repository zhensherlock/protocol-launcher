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
