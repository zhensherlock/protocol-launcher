import { describe, expect, test } from 'vitest'
import { bear } from '../src'

describe('bear', () => {
  test('open should return a URL', async () => {
    const url = bear.open()
    expect(url).toBe('bear://')
  })

  test('openNote should return a URL with id', async () => {
    const url = bear.openNote({
      id: 'SFNote2Intro0',
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=SFNote2Intro0')
  })

  test('openNote should return a URL with id and header', async () => {
    const url = bear.openNote({
      id: 'SFNote2Intro0',
      header: 'Secondary Title',
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=SFNote2Intro0&header=Secondary%20Title')
  })

  test('openNote should return a URL with title', async () => {
    const url = bear.openNote({
      title: 'My Note',
    })
    expect(url).toBe('bear://x-callback-url/open-note?title=My%20Note')
  })

  test('openNote should return a URL with exclude_trashed', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      excludeTrashed: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&exclude_trashed=yes')
  })

  test('openNote should return a URL with new_window', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      newWindow: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&new_window=yes')
  })

  test('openNote should return a URL with float', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      float: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&float=yes')
  })

  test('openNote should return a URL with show_window', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&show_window=no')
  })

  test('openNote should return a URL with open_note', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      openNote: false,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&open_note=no')
  })

  test('openNote should return a URL with selected', async () => {
    const url = bear.openNote({
      selected: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?selected=yes')
  })

  test('openNote should return a URL with pin', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      pin: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&pin=yes')
  })

  test('openNote should return a URL with edit', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      edit: true,
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&edit=yes')
  })

  test('openNote should return a URL with search', async () => {
    const url = bear.openNote({
      id: '7E4B681B',
      search: 'find text',
    })
    expect(url).toBe('bear://x-callback-url/open-note?id=7E4B681B&search=find%20text')
  })

  test('create should return a URL with title and text', async () => {
    const url = bear.create({
      title: 'My Note Title',
      text: 'First line',
    })
    expect(url).toBe('bear://x-callback-url/create?title=My%20Note%20Title&text=First%20line')
  })

  test('create should return a URL with title, text and tags', async () => {
    const url = bear.create({
      title: 'Shopping',
      text: 'Milk',
      tags: 'home,groceries',
    })
    expect(url).toBe('bear://x-callback-url/create?title=Shopping&text=Milk&tags=home%2Cgroceries')
  })

  test('create should return a URL with clipboard', async () => {
    const url = bear.create({
      clipboard: true,
    })
    expect(url).toBe('bear://x-callback-url/create?clipboard=yes')
  })

  test('create should return a URL with file and filename', async () => {
    const url = bear.create({
      file: 'base64data',
      filename: 'document.pdf',
    })
    expect(url).toBe('bear://x-callback-url/create?file=base64data&filename=document.pdf')
  })

  test('create should return a URL with pin', async () => {
    const url = bear.create({
      title: 'Pinned Note',
      pin: true,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Pinned%20Note&pin=yes')
  })

  test('create should return a URL with edit', async () => {
    const url = bear.create({
      title: 'Editable Note',
      edit: true,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Editable%20Note&edit=yes')
  })

  test('create should return a URL with timestamp', async () => {
    const url = bear.create({
      title: 'Timestamped Note',
      timestamp: true,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Timestamped%20Note&timestamp=yes')
  })

  test('create should return a URL with type and url', async () => {
    const url = bear.create({
      title: 'HTML Note',
      text: '<p>HTML content</p>',
      type: 'html',
      url: 'https://example.com',
    })
    expect(url).toBe(
      'bear://x-callback-url/create?title=HTML%20Note&text=%3Cp%3EHTML%20content%3C%2Fp%3E&type=html&url=https%3A%2F%2Fexample.com',
    )
  })

  test('addText should return a URL with text, id and mode', async () => {
    const url = bear.addText({
      text: 'new line',
      id: '4EDAF0D1',
      mode: 'append',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=new%20line&mode=append')
  })

  test('addText should return a URL with text and title', async () => {
    const url = bear.addText({
      text: 'added text',
      title: 'My Note',
    })
    expect(url).toBe('bear://x-callback-url/add-text?title=My%20Note&text=added%20text')
  })

  test('addText should return a URL with selected', async () => {
    const url = bear.addText({
      text: 'selected note text',
      selected: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?selected=yes&text=selected%20note%20text')
  })

  test('addText should return a URL with clipboard', async () => {
    const url = bear.addText({
      clipboard: true,
      id: '4EDAF0D1',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&clipboard=yes')
  })

  test('addText should return a URL with header', async () => {
    const url = bear.addText({
      text: 'header text',
      id: '4EDAF0D1',
      header: 'Section 1',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=header%20text&header=Section%201')
  })

  test('addText should return a URL with mode prepend', async () => {
    const url = bear.addText({
      text: 'prefix',
      id: '4EDAF0D1',
      mode: 'prepend',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=prefix&mode=prepend')
  })

  test('addText should return a URL with new_line', async () => {
    const url = bear.addText({
      text: 'new line text',
      id: '4EDAF0D1',
      mode: 'append',
      newLine: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=new%20line%20text&mode=append&new_line=yes')
  })

  test('addText should return a URL with tags', async () => {
    const url = bear.addText({
      text: 'tagged text',
      id: '4EDAF0D1',
      tags: 'work,important',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=tagged%20text&tags=work%2Cimportant')
  })

  test('addText should return a URL with exclude_trashed', async () => {
    const url = bear.addText({
      text: 'text',
      id: '4EDAF0D1',
      excludeTrashed: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=text&exclude_trashed=yes')
  })

  test('addText should return a URL with edit', async () => {
    const url = bear.addText({
      text: 'text',
      id: '4EDAF0D1',
      edit: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=text&edit=yes')
  })

  test('addText should return a URL with timestamp', async () => {
    const url = bear.addText({
      text: 'timestamped text',
      id: '4EDAF0D1',
      timestamp: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=timestamped%20text&timestamp=yes')
  })

  test('addFile should return a URL with filename, id, mode and file', async () => {
    const url = bear.addFile({
      filename: 'test.gif',
      id: '4EDAF0D1',
      mode: 'append',
      file: 'R0lGODlhAQABAIAAAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    })
    expect(url).toBe(
      'bear://x-callback-url/add-file?id=4EDAF0D1&file=R0lGODlhAQABAIAAAP%2F%2F%2FwAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw%3D%3D&filename=test.gif&mode=append',
    )
  })

  test('addFile should return a URL with title', async () => {
    const url = bear.addFile({
      filename: 'doc.pdf',
      title: 'My Note',
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?title=My%20Note&file=base64data&filename=doc.pdf')
  })

  test('addFile should return a URL with selected', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      selected: true,
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?selected=yes&file=base64data&filename=file.txt')
  })

  test('addFile should return a URL with header', async () => {
    const url = bear.addFile({
      filename: 'image.png',
      id: '4EDAF0D1',
      header: 'Images Section',
      file: 'base64data',
    })
    expect(url).toBe(
      'bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&header=Images%20Section&filename=image.png',
    )
  })

  test('addFile should return a URL with mode prepend', async () => {
    const url = bear.addFile({
      filename: 'file.pdf',
      id: '4EDAF0D1',
      mode: 'prepend',
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.pdf&mode=prepend')
  })

  test('addFile should return a URL with edit', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      edit: true,
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&edit=yes')
  })

  test('tags should return a URL with token', async () => {
    const url = bear.tags({
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/tags?token=123456-123456-123456')
  })

  test('openTag should return a URL with name', async () => {
    const url = bear.openTag({
      name: 'work',
    })
    expect(url).toBe('bear://x-callback-url/open-tag?name=work')
  })

  test('openTag should return a URL with hierarchical tag', async () => {
    const url = bear.openTag({
      name: 'todo/work',
    })
    expect(url).toBe('bear://x-callback-url/open-tag?name=todo%2Fwork')
  })

  test('openTag should return a URL with multiple tags', async () => {
    const url = bear.openTag({
      name: 'work,important',
    })
    expect(url).toBe('bear://x-callback-url/open-tag?name=work%2Cimportant')
  })

  test('openTag should return a URL with token', async () => {
    const url = bear.openTag({
      name: 'work',
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/open-tag?name=work&token=123456-123456-123456')
  })

  test('renameTag should return a URL with name and new_name', async () => {
    const url = bear.renameTag({
      name: 'todo',
      newName: 'done',
    })
    expect(url).toBe('bear://x-callback-url/rename-tag?name=todo&new_name=done')
  })

  test('renameTag should return a URL with show_window', async () => {
    const url = bear.renameTag({
      name: 'old',
      newName: 'new',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/rename-tag?name=old&new_name=new&show_window=no')
  })

  test('deleteTag should return a URL with name', async () => {
    const url = bear.deleteTag({
      name: 'todo',
    })
    expect(url).toBe('bear://x-callback-url/delete-tag?name=todo')
  })

  test('deleteTag should return a URL with show_window', async () => {
    const url = bear.deleteTag({
      name: 'old',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/delete-tag?name=old&show_window=no')
  })

  test('trash should return a URL with id', async () => {
    const url = bear.trash({
      id: '7E4B681B',
    })
    expect(url).toBe('bear://x-callback-url/trash?id=7E4B681B')
  })

  test('trash should return a URL with search', async () => {
    const url = bear.trash({
      search: 'old',
    })
    expect(url).toBe('bear://x-callback-url/trash?search=old')
  })

  test('trash should return a URL with id (id takes precedence over search)', async () => {
    const url = bear.trash({
      id: '7E4B681B',
      search: 'ignored',
    })
    expect(url).toBe('bear://x-callback-url/trash?id=7E4B681B')
  })

  test('trash should return a URL with show_window', async () => {
    const url = bear.trash({
      id: '7E4B681B',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/trash?id=7E4B681B&show_window=no')
  })

  test('archive should return a URL with id', async () => {
    const url = bear.archive({
      id: '7E4B681B',
    })
    expect(url).toBe('bear://x-callback-url/archive?id=7E4B681B')
  })

  test('archive should return a URL with search', async () => {
    const url = bear.archive({
      search: 'projects',
    })
    expect(url).toBe('bear://x-callback-url/archive?search=projects')
  })

  test('archive should return a URL with id (id takes precedence over search)', async () => {
    const url = bear.archive({
      id: '7E4B681B',
      search: 'ignored',
    })
    expect(url).toBe('bear://x-callback-url/archive?id=7E4B681B')
  })

  test('archive should return a URL with show_window', async () => {
    const url = bear.archive({
      id: '7E4B681B',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/archive?id=7E4B681B&show_window=no')
  })

  test('untagged should return a URL with search', async () => {
    const url = bear.untagged({
      search: 'home',
    })
    expect(url).toBe('bear://x-callback-url/untagged?search=home')
  })

  test('untagged should return a URL with show_window', async () => {
    const url = bear.untagged({
      search: 'home',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/untagged?search=home&show_window=no')
  })

  test('untagged should return a URL with token', async () => {
    const url = bear.untagged({
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/untagged?token=123456-123456-123456')
  })

  test('todo should return a URL with search', async () => {
    const url = bear.todo({
      search: 'home',
    })
    expect(url).toBe('bear://x-callback-url/todo?search=home')
  })

  test('todo should return a URL with show_window', async () => {
    const url = bear.todo({
      search: 'home',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/todo?search=home&show_window=no')
  })

  test('todo should return a URL with token', async () => {
    const url = bear.todo({
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/todo?token=123456-123456-123456')
  })

  test('today should return a URL with search', async () => {
    const url = bear.today({
      search: 'family',
    })
    expect(url).toBe('bear://x-callback-url/today?search=family')
  })

  test('today should return a URL with show_window', async () => {
    const url = bear.today({
      search: 'family',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/today?search=family&show_window=no')
  })

  test('today should return a URL with token', async () => {
    const url = bear.today({
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/today?token=123456-123456-123456')
  })

  test('locked should return a URL with search', async () => {
    const url = bear.locked({
      search: 'data',
    })
    expect(url).toBe('bear://x-callback-url/locked?search=data')
  })

  test('locked should return a URL with show_window', async () => {
    const url = bear.locked({
      search: 'data',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/locked?search=data&show_window=no')
  })

  test('search should return a URL with term', async () => {
    const url = bear.search({
      term: 'nemo',
    })
    expect(url).toBe('bear://x-callback-url/search?term=nemo')
  })

  test('search should return a URL with term and tag', async () => {
    const url = bear.search({
      term: 'nemo',
      tag: 'movies',
    })
    expect(url).toBe('bear://x-callback-url/search?term=nemo&tag=movies')
  })

  test('search should return a URL with show_window', async () => {
    const url = bear.search({
      term: 'query',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/search?term=query&show_window=no')
  })

  test('search should return a URL with token', async () => {
    const url = bear.search({
      term: 'query',
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/search?term=query&token=123456-123456-123456')
  })

  test('grabUrl should return a URL with url', async () => {
    const url = bear.grabUrl({
      url: 'https://bear.app',
    })
    expect(url).toBe('bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app')
  })

  test('grabUrl should return a URL with url and tags', async () => {
    const url = bear.grabUrl({
      url: 'https://bear.app',
      tags: 'web,article',
    })
    expect(url).toBe('bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app&tags=web%2Carticle')
  })

  test('grabUrl should return a URL with url and pin', async () => {
    const url = bear.grabUrl({
      url: 'https://bear.app',
      pin: true,
    })
    expect(url).toBe('bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app&pin=yes')
  })

  test('grabUrl should return a URL with url and wait', async () => {
    const url = bear.grabUrl({
      url: 'https://bear.app',
      wait: false,
    })
    expect(url).toBe('bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app&wait=no')
  })

  test('grabUrl should return a URL with all parameters', async () => {
    const url = bear.grabUrl({
      url: 'https://example.com/article',
      tags: 'reading,web',
      pin: true,
      wait: false,
    })
    expect(url).toBe(
      'bear://x-callback-url/grab-url?url=https%3A%2F%2Fexample.com%2Farticle&tags=reading%2Cweb&pin=yes&wait=no',
    )
  })

  test('create should return a URL with open_note=no', async () => {
    const url = bear.create({
      title: 'Test',
      openNote: false,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Test&open_note=no')
  })

  test('create should return a URL with show_window=no', async () => {
    const url = bear.create({
      title: 'Test',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Test&show_window=no')
  })

  test('create should return a URL with new_window', async () => {
    const url = bear.create({
      title: 'Test',
      newWindow: true,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Test&new_window=yes')
  })

  test('create should return a URL with float', async () => {
    const url = bear.create({
      title: 'Test',
      float: true,
    })
    expect(url).toBe('bear://x-callback-url/create?title=Test&float=yes')
  })

  test('addText should return a URL with open_note=no', async () => {
    const url = bear.addText({
      text: 'test',
      id: '4EDAF0D1',
      openNote: false,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=test&open_note=no')
  })

  test('addText should return a URL with show_window=no', async () => {
    const url = bear.addText({
      text: 'test',
      id: '4EDAF0D1',
      showWindow: false,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=test&show_window=no')
  })

  test('addText should return a URL with new_window', async () => {
    const url = bear.addText({
      text: 'test',
      id: '4EDAF0D1',
      newWindow: true,
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=test&new_window=yes')
  })

  test('addText should return a URL with mode replace_all', async () => {
    const url = bear.addText({
      text: 'test',
      id: '4EDAF0D1',
      mode: 'replace_all',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=test&mode=replace_all')
  })

  test('addText should return a URL with mode replace', async () => {
    const url = bear.addText({
      text: 'test',
      id: '4EDAF0D1',
      mode: 'replace',
    })
    expect(url).toBe('bear://x-callback-url/add-text?id=4EDAF0D1&text=test&mode=replace')
  })

  test('addFile should return a URL with show_window=no', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      showWindow: false,
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&show_window=no')
  })

  test('addFile should return a URL with open_note=no', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      openNote: false,
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&open_note=no')
  })

  test('addFile should return a URL with new_window', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      newWindow: true,
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&new_window=yes')
  })

  test('addFile should return a URL with mode replace_all', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      mode: 'replace_all',
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&mode=replace_all')
  })

  test('addFile should return a URL with mode replace', async () => {
    const url = bear.addFile({
      filename: 'file.txt',
      id: '4EDAF0D1',
      mode: 'replace',
      file: 'base64data',
    })
    expect(url).toBe('bear://x-callback-url/add-file?id=4EDAF0D1&file=base64data&filename=file.txt&mode=replace')
  })

  test('renameTag should return a URL with show_window=yes (default)', async () => {
    const url = bear.renameTag({
      name: 'old',
      newName: 'new',
    })
    expect(url).toBe('bear://x-callback-url/rename-tag?name=old&new_name=new')
  })

  test('deleteTag should return a URL with show_window=yes (default)', async () => {
    const url = bear.deleteTag({
      name: 'todo',
    })
    expect(url).toBe('bear://x-callback-url/delete-tag?name=todo')
  })

  test('locked should return a URL without show_window when true', async () => {
    const url = bear.locked({
      search: 'data',
    })
    expect(url).toBe('bear://x-callback-url/locked?search=data')
  })

  test('search should return a URL without show_window when true', async () => {
    const url = bear.search({
      term: 'query',
    })
    expect(url).toBe('bear://x-callback-url/search?term=query')
  })

  test('tags should return a URL with only token', async () => {
    const url = bear.tags({
      token: '123456-123456-123456',
    })
    expect(url).toBe('bear://x-callback-url/tags?token=123456-123456-123456')
  })

  test('grabUrl should return a URL with wait=yes', async () => {
    const url = bear.grabUrl({
      url: 'https://bear.app',
      wait: true,
    })
    expect(url).toBe('bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app')
  })

  test('locked should return a URL with show_window=yes (default)', async () => {
    const url = bear.locked({
      search: 'data',
    })
    expect(url).toBe('bear://x-callback-url/locked?search=data')
  })

  test('search should return a URL with show_window=yes (default)', async () => {
    const url = bear.search({
      term: 'query',
    })
    expect(url).toBe('bear://x-callback-url/search?term=query')
  })

  test('search should return a URL without term', async () => {
    const url = bear.search({})
    expect(url).toBe('bear://x-callback-url/search')
  })

  test('locked should return a URL without search', async () => {
    const url = bear.locked({})
    expect(url).toBe('bear://x-callback-url/locked')
  })
})
