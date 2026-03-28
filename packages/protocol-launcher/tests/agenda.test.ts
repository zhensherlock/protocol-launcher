import { describe, expect, test } from 'vitest'
import { agenda } from '../src'

describe('agenda', () => {
  test('onTheAgenda should return a URL', async () => {
    const url = agenda.onTheAgenda()
    expect(url).toBe('agenda://x-callback-url/on-the-agenda')
  })

  test('today should return a URL', async () => {
    const url = agenda.today()
    expect(url).toBe('agenda://x-callback-url/today')
  })

  test('openOverview should return a URL with title', async () => {
    const url = agenda.openOverview({
      title: 'This Week',
    })
    expect(url).toBe('agenda://x-callback-url/open-overview?title=This%20Week')
  })

  test('openOverview should return a URL with identifier', async () => {
    const url = agenda.openOverview({
      identifier: 'overview-123',
    })
    expect(url).toBe('agenda://x-callback-url/open-overview?identifier=overview-123')
  })

  test('openOverview should return a URL with separateWindow', async () => {
    const url = agenda.openOverview({
      title: 'This Week',
      separateWindow: true,
    })
    expect(url).toBe('agenda://x-callback-url/open-overview?title=This%20Week&separate-window=true')
  })

  test('openOverview should return a URL with separateWindow false', async () => {
    const url = agenda.openOverview({
      title: 'This Week',
      separateWindow: false,
    })
    expect(url).toBe('agenda://x-callback-url/open-overview?title=This%20Week&separate-window=false')
  })

  test('openOverview should return a URL without parameters', async () => {
    const url = agenda.openOverview({})
    expect(url).toBe('agenda://x-callback-url/open-overview')
  })

  test('openSearch should return a URL with query', async () => {
    const url = agenda.openSearch({
      query: '#Important',
    })
    expect(url).toBe('agenda://x-callback-url/open-search?query=%23Important')
  })

  test('openSearch should return a URL without query', async () => {
    const url = agenda.openSearch({})
    expect(url).toBe('agenda://x-callback-url/open-search')
  })

  test('openSearch should return a URL with separateWindow', async () => {
    const url = agenda.openSearch({
      query: 'meeting',
      separateWindow: true,
    })
    expect(url).toBe('agenda://x-callback-url/open-search?query=meeting&separate-window=true')
  })

  test('openSearch should return a URL with separateWindow false', async () => {
    const url = agenda.openSearch({
      query: 'meeting',
      separateWindow: false,
    })
    expect(url).toBe('agenda://x-callback-url/open-search?query=meeting&separate-window=false')
  })

  test('openProject should return a URL with title', async () => {
    const url = agenda.openProject({
      title: 'Welcome',
    })
    expect(url).toBe('agenda://x-callback-url/open-project?title=Welcome')
  })

  test('openProject should return a URL with identifier', async () => {
    const url = agenda.openProject({
      identifier: 'project-123',
    })
    expect(url).toBe('agenda://x-callback-url/open-project?identifier=project-123')
  })

  test('openProject should return a URL with projectTitle', async () => {
    const url = agenda.openProject({
      projectTitle: 'My Project',
    })
    expect(url).toBe('agenda://x-callback-url/open-project?project-title=My%20Project')
  })

  test('openProject should return a URL with separateWindow', async () => {
    const url = agenda.openProject({
      title: 'Welcome',
      separateWindow: true,
    })
    expect(url).toBe('agenda://x-callback-url/open-project?title=Welcome&separate-window=true')
  })

  test('openProject should return a URL with separateWindow false', async () => {
    const url = agenda.openProject({
      title: 'Welcome',
      separateWindow: false,
    })
    expect(url).toBe('agenda://x-callback-url/open-project?title=Welcome&separate-window=false')
  })

  test('openProject should return a URL without parameters', async () => {
    const url = agenda.openProject({})
    expect(url).toBe('agenda://x-callback-url/open-project')
  })

  test('openNote should return a URL with title', async () => {
    const url = agenda.openNote({
      title: 'Meeting With Peta',
    })
    expect(url).toBe('agenda://x-callback-url/open-note?title=Meeting%20With%20Peta')
  })

  test('openNote should return a URL with identifier', async () => {
    const url = agenda.openNote({
      identifier: 'note-123',
    })
    expect(url).toBe('agenda://x-callback-url/open-note?identifier=note-123')
  })

  test('openNote should return a URL with projectTitle', async () => {
    const url = agenda.openNote({
      title: 'Meeting',
      projectTitle: 'Work',
    })
    expect(url).toBe('agenda://x-callback-url/open-note?title=Meeting&project-title=Work')
  })

  test('openNote should return a URL without parameters', async () => {
    const url = agenda.openNote({})
    expect(url).toBe('agenda://x-callback-url/open-note')
  })

  test('openNote should return a URL with separateWindow false', async () => {
    const url = agenda.openNote({
      title: 'Meeting',
      separateWindow: false,
    })
    expect(url).toBe('agenda://x-callback-url/open-note?title=Meeting&separate-window=false')
  })

  test('getIdentifier should return a URL with projectTitle', async () => {
    const url = agenda.getIdentifier({
      projectTitle: 'Welcome',
    })
    expect(url).toBe('agenda://x-callback-url/get-identifier?project-title=Welcome')
  })

  test('getIdentifier should return a URL with projectTitle and title', async () => {
    const url = agenda.getIdentifier({
      projectTitle: 'Welcome',
      title: 'Things to Try',
    })
    expect(url).toBe('agenda://x-callback-url/get-identifier?project-title=Welcome&title=Things%20to%20Try')
  })

  test('getIdentifier should return a URL with title', async () => {
    const url = agenda.getIdentifier({
      title: 'Things to Try',
    })
    expect(url).toBe('agenda://x-callback-url/get-identifier?title=Things%20to%20Try')
  })

  test('getIdentifier should return a URL without parameters', async () => {
    const url = agenda.getIdentifier({})
    expect(url).toBe('agenda://x-callback-url/get-identifier')
  })

  test('getSelectedProject should return a URL', async () => {
    const url = agenda.getSelectedProject()
    expect(url).toBe('agenda://x-callback-url/get-selected-project')
  })

  test('getSelectedNote should return a URL', async () => {
    const url = agenda.getSelectedNote()
    expect(url).toBe('agenda://x-callback-url/get-selected-note')
  })

  test('getSelection should return a URL', async () => {
    const url = agenda.getSelection()
    expect(url).toBe('agenda://x-callback-url/get-selection')
  })

  test('createCategory should return a URL with title', async () => {
    const url = agenda.createCategory({
      title: 'New Category',
    })
    expect(url).toBe('agenda://x-callback-url/create-category?title=New%20Category')
  })

  test('createProject should return a URL with categoryTitle and title', async () => {
    const url = agenda.createProject({
      categoryTitle: 'Some Category',
      title: 'New Project',
    })
    expect(url).toBe('agenda://x-callback-url/create-project?category-title=Some%20Category&title=New%20Project')
  })

  test('createProject should return a URL with identifier and title', async () => {
    const url = agenda.createProject({
      identifier: 'category-123',
      title: 'New Project',
    })
    expect(url).toBe('agenda://x-callback-url/create-project?identifier=category-123&title=New%20Project')
  })

  test('createProject should return a URL with select and sortOrder', async () => {
    const url = agenda.createProject({
      title: 'New Project',
      select: true,
      sortOrder: 'oldest-first',
    })
    expect(url).toBe('agenda://x-callback-url/create-project?title=New%20Project&select=true&sort-order=oldest-first')
  })

  test('createProject should return a URL with select false', async () => {
    const url = agenda.createProject({
      title: 'New Project',
      select: false,
    })
    expect(url).toBe('agenda://x-callback-url/create-project?title=New%20Project&select=false')
  })

  test('createNote should return a URL with title and text', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
    })
    expect(url).toBe('agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World')
  })

  test('createNote should return a URL with projectTitle, onTheAgenda and date', async () => {
    const url = agenda.createNote({
      projectTitle: 'My Project',
      title: 'New Note',
      text: 'Hello World',
      onTheAgenda: true,
      date: '2018-03-12',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?project-title=My%20Project&title=New%20Note&text=Hello%20World&on-the-agenda=true&date=2018-03-12',
    )
  })

  test('createNote should return a URL with startDate and endDate', async () => {
    const url = agenda.createNote({
      projectTitle: 'Blogposts',
      title: 'New Post',
      text: 'Hello World',
      startDate: 'yesterday',
      endDate: 'tomorrow',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?project-title=Blogposts&title=New%20Post&text=Hello%20World&start-date=yesterday&end-date=tomorrow',
    )
  })

  test('createNote should return a URL with templateName and templateInput', async () => {
    const url = agenda.createNote({
      projectTitle: 'Reviews',
      title: 'Book Review',
      text: 'Content',
      templateName: 'Book Review',
      templateInput: 'blablabla',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?project-title=Reviews&title=Book%20Review&text=Content&template-name=Book%20Review&template-input=blablabla',
    )
  })

  test('createNote should return a URL with boolean false values', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
      onTheAgenda: false,
      collapsed: false,
      completed: false,
      pinned: false,
      footnote: false,
      select: false,
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World&on-the-agenda=false&collapsed=false&completed=false&pinned=false&footnote=false&select=false',
    )
  })

  test('createNote should return a URL with displayStyle and displaySize', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
      displayStyle: 'thumbnail',
      displaySize: 'small',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World&display-style=thumbnail&display-size=small',
    )
  })

  test('createNote should return a URL with date parameters', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
      date: '2018-03-12',
      startDate: 'yesterday',
      endDate: 'tomorrow',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World&date=2018-03-12&start-date=yesterday&end-date=tomorrow',
    )
  })

  test('createNote should return a URL with attachment and filename', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
      attachment: 'base64data',
      filename: 'image.png',
    })
    expect(url).toBe(
      'agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World&attachment=base64data&filename=image.png',
    )
  })

  test('createNote should return a URL with eventTitle', async () => {
    const url = agenda.createNote({
      title: 'New Note',
      text: 'Hello World',
      eventTitle: 'Meeting',
    })
    expect(url).toBe('agenda://x-callback-url/create-note?title=New%20Note&text=Hello%20World&event-title=Meeting')
  })

  test('createNote should return a URL with identifier', async () => {
    const url = agenda.createNote({
      identifier: 'project-123',
      title: 'New Note',
      text: 'Hello World',
    })
    expect(url).toBe('agenda://x-callback-url/create-note?identifier=project-123&title=New%20Note&text=Hello%20World')
  })

  test('appendToNote should return a URL with title and text', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
    })
    expect(url).toBe('agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text')
  })

  test('appendToNote should return a URL with identifier and text', async () => {
    const url = agenda.appendToNote({
      identifier: 'note-123',
      text: 'Additional content',
    })
    expect(url).toBe('agenda://x-callback-url/append-to-note?identifier=note-123&text=Additional%20content')
  })

  test('appendToNote should return a URL with projectTitle', async () => {
    const url = agenda.appendToNote({
      projectTitle: 'Work',
      title: 'Meeting Notes',
      text: 'Additional content',
    })
    expect(url).toBe(
      'agenda://x-callback-url/append-to-note?title=Meeting%20Notes&project-title=Work&text=Additional%20content',
    )
  })

  test('appendToNote should return a URL with boolean false values', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
      onTheAgenda: false,
      collapsed: false,
      completed: false,
      pinned: false,
      footnote: false,
      select: false,
    })
    expect(url).toBe(
      'agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text&on-the-agenda=false&collapsed=false&completed=false&pinned=false&footnote=false&select=false',
    )
  })

  test('appendToNote should return a URL with date parameters', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
      date: '2018-03-12',
      startDate: 'yesterday',
      endDate: 'tomorrow',
    })
    expect(url).toBe(
      'agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text&date=2018-03-12&start-date=yesterday&end-date=tomorrow',
    )
  })

  test('appendToNote should return a URL with attachment and filename', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
      attachment: 'base64data',
      filename: 'image.png',
    })
    expect(url).toBe(
      'agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text&attachment=base64data&filename=image.png',
    )
  })

  test('appendToNote should return a URL with eventTitle', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
      eventTitle: 'Meeting',
    })
    expect(url).toBe('agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text&event-title=Meeting')
  })

  test('appendToNote should return a URL with displayStyle and displaySize', async () => {
    const url = agenda.appendToNote({
      title: 'Some Note',
      text: 'More Text',
      displayStyle: 'thumbnail',
      displaySize: 'small',
    })
    expect(url).toBe(
      'agenda://x-callback-url/append-to-note?title=Some%20Note&text=More%20Text&display-style=thumbnail&display-size=small',
    )
  })

  test('replaceNote should return a URL with title and text', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
    })
    expect(url).toBe('agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text')
  })

  test('replaceNote should return a URL with identifier and text', async () => {
    const url = agenda.replaceNote({
      identifier: 'note-123',
      text: 'New content',
    })
    expect(url).toBe('agenda://x-callback-url/replace-note?identifier=note-123&text=New%20content')
  })

  test('replaceNote should return a URL with boolean false values', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
      onTheAgenda: false,
      collapsed: false,
      completed: false,
      pinned: false,
      footnote: false,
      select: false,
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text&on-the-agenda=false&collapsed=false&completed=false&pinned=false&footnote=false&select=false',
    )
  })

  test('replaceNote should return a URL with date parameters', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
      date: '2018-03-12',
      startDate: 'yesterday',
      endDate: 'tomorrow',
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text&date=2018-03-12&start-date=yesterday&end-date=tomorrow',
    )
  })

  test('replaceNote should return a URL with attachment and filename', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
      attachment: 'base64data',
      filename: 'image.png',
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text&attachment=base64data&filename=image.png',
    )
  })

  test('replaceNote should return a URL with eventTitle', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
      eventTitle: 'Meeting',
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text&event-title=Meeting',
    )
  })

  test('replaceNote should return a URL with displayStyle and displaySize', async () => {
    const url = agenda.replaceNote({
      title: 'Some Note',
      text: 'Replacement Text',
      displayStyle: 'thumbnail',
      displaySize: 'small',
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Some%20Note&text=Replacement%20Text&display-style=thumbnail&display-size=small',
    )
  })

  test('replaceNote should return a URL with identifier', async () => {
    const url = agenda.replaceNote({
      identifier: 'note-123',
      text: 'Replacement Text',
    })
    expect(url).toBe('agenda://x-callback-url/replace-note?identifier=note-123&text=Replacement%20Text')
  })

  test('replaceNote should return a URL with projectTitle', async () => {
    const url = agenda.replaceNote({
      projectTitle: 'Work',
      title: 'Meeting Notes',
      text: 'Replacement Text',
    })
    expect(url).toBe(
      'agenda://x-callback-url/replace-note?title=Meeting%20Notes&project-title=Work&text=Replacement%20Text',
    )
  })
})
