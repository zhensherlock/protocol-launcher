import { describe, expect, test } from 'vitest'
import { things } from '../src'

describe('things', () => {
  test('open should return a URL', async () => {
    const url = things.open()
    expect(url).toBe('things://')
  })

  test('search should return a URL with query', async () => {
    const url = things.search({
      query: 'vacation',
    })
    expect(url).toBe('things:///search?query=vacation')
  })

  test('search should return a URL without query', async () => {
    const url = things.search()
    expect(url).toBe('things:///search')
  })

  test('show should return a URL with id', async () => {
    const url = things.show({
      id: 'today',
    })
    expect(url).toBe('things:///show?id=today')
  })

  test('show should return a URL with project id', async () => {
    const url = things.show({
      id: 'GJJVZHE7SNu7xcVuH2xDDh',
    })
    expect(url).toBe('things:///show?id=GJJVZHE7SNu7xcVuH2xDDh')
  })

  test('show should return a URL with query', async () => {
    const url = things.show({
      query: 'vacation',
    })
    expect(url).toBe('things:///show?query=vacation')
  })

  test('show should return a URL with query and filter', async () => {
    const url = things.show({
      query: 'vacation',
      filter: 'errand',
    })
    expect(url).toBe('things:///show?query=vacation&filter=errand')
  })

  test('show should return a URL with id and filter (id takes precedence)', async () => {
    const url = things.show({
      id: 'today',
      filter: 'errand',
    })
    expect(url).toBe('things:///show?id=today&filter=errand')
  })

  test('addProject should return a URL with title and when', async () => {
    const url = things.addProject({
      title: 'Build treehouse',
      when: 'today',
    })
    expect(url).toBe('things:///add-project?title=Build%20treehouse&when=today')
  })

  test('addProject should return a URL with title and area', async () => {
    const url = things.addProject({
      title: 'Plan Birthday Party',
      area: 'Family',
    })
    expect(url).toBe('things:///add-project?title=Plan%20Birthday%20Party&area=Family')
  })

  test('addProject should return a URL with title, deadline and area-id', async () => {
    const url = things.addProject({
      title: 'Submit Tax',
      deadline: 'December 31',
      areaId: 'Lg8UqVPXo2SbJNiBpDBBQ',
    })
    expect(url).toBe('things:///add-project?title=Submit%20Tax&deadline=December%2031&area-id=Lg8UqVPXo2SbJNiBpDBBQ')
  })

  test('addProject should return a URL with title and tags', async () => {
    const url = things.addProject({
      title: 'Groceries',
      tags: 'shopping,home',
    })
    expect(url).toBe('things:///add-project?title=Groceries&tags=shopping%2Chome')
  })

  test('addProject should return a URL with title and to-dos', async () => {
    const url = things.addProject({
      title: 'Vacation',
      toDos: 'Book flight\nPack bags',
    })
    expect(url).toBe('things:///add-project?title=Vacation&to-dos=Book%20flight%0APack%20bags')
  })

  test('addProject should return a URL with completed', async () => {
    const url = things.addProject({
      title: 'Old project',
      completed: true,
    })
    expect(url).toBe('things:///add-project?title=Old%20project&completed=true')
  })

  test('addProject should return a URL with canceled', async () => {
    const url = things.addProject({
      title: 'Canceled project',
      canceled: true,
    })
    expect(url).toBe('things:///add-project?title=Canceled%20project&canceled=true')
  })

  test('addProject should return a URL with reveal', async () => {
    const url = things.addProject({
      title: 'New project',
      reveal: true,
    })
    expect(url).toBe('things:///add-project?title=New%20project&reveal=true')
  })

  test('addProject should return a URL with creation-date', async () => {
    const url = things.addProject({
      title: 'Historical project',
      creationDate: '2024-01-15T10:00:00Z',
    })
    expect(url).toBe('things:///add-project?title=Historical%20project&creation-date=2024-01-15T10%3A00%3A00Z')
  })

  test('addProject should return a URL with completion-date', async () => {
    const url = things.addProject({
      title: 'Finished project',
      completed: true,
      completionDate: '2024-06-30T18:00:00Z',
    })
    expect(url).toBe(
      'things:///add-project?title=Finished%20project&completed=true&completion-date=2024-06-30T18%3A00%3A00Z',
    )
  })

  test('addProject should return a URL with all parameters', async () => {
    const url = things.addProject({
      title: 'Complete project',
      notes: 'Project notes',
      when: 'today',
      deadline: '2024-12-31',
      tags: 'important,work',
      areaId: 'area123',
      toDos: 'Task 1\nTask 2',
      completed: false,
      canceled: false,
      reveal: true,
      creationDate: '2024-01-01T00:00:00Z',
      completionDate: '2024-12-31T23:59:59Z',
    })
    expect(url).toBe(
      'things:///add-project?title=Complete%20project&notes=Project%20notes&when=today&deadline=2024-12-31&tags=important%2Cwork&area-id=area123&to-dos=Task%201%0ATask%202&reveal=true&creation-date=2024-01-01T00%3A00%3A00Z&completion-date=2024-12-31T23%3A59%3A59Z',
    )
  })

  test('updateProject should return a URL with id, auth-token and when', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      when: 'tomorrow',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&when=tomorrow')
  })

  test('updateProject should return a URL with add-tags', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      addTags: 'Important',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&add-tags=Important')
  })

  test('updateProject should return a URL with prepend-notes', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      prependNotes: 'SFO to JFK.',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&prepend-notes=SFO%20to%20JFK.')
  })

  test('updateProject should return a URL with append-notes', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      appendNotes: 'Additional notes',
    })
    expect(url).toBe(
      'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&append-notes=Additional%20notes',
    )
  })

  test('updateProject should return a URL with empty deadline to clear', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      deadline: '',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx')
  })

  test('updateProject should return a URL with tags', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      tags: 'work,urgent',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&tags=work%2Curgent')
  })

  test('updateProject should return a URL with area-id', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      areaId: 'area123',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&area-id=area123')
  })

  test('updateProject should return a URL with area', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      area: 'Family',
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&area=Family')
  })

  test('updateProject should return a URL with completed', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      completed: true,
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&completed=true')
  })

  test('updateProject should return a URL with canceled', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      canceled: true,
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&canceled=true')
  })

  test('updateProject should return a URL with reveal', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      reveal: true,
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&reveal=true')
  })

  test('updateProject should return a URL with duplicate', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      duplicate: true,
    })
    expect(url).toBe('things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&duplicate=true')
  })

  test('updateProject should return a URL with creation-date', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      creationDate: '2024-01-15T10:00:00Z',
    })
    expect(url).toBe(
      'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&creation-date=2024-01-15T10%3A00%3A00Z',
    )
  })

  test('updateProject should return a URL with completion-date', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      completed: true,
      completionDate: '2024-06-30T18:00:00Z',
    })
    expect(url).toBe(
      'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&completed=true&completion-date=2024-06-30T18%3A00%3A00Z',
    )
  })

  test('updateProject should return a URL with all parameters', async () => {
    const url = things.updateProject({
      id: 'Jvj7EW1fLoScPhaw2JomCT',
      authToken: 'xxx',
      title: 'Updated project',
      notes: 'New notes',
      prependNotes: 'Prepend this',
      appendNotes: 'Append this',
      when: 'today',
      deadline: '2024-12-31',
      tags: 'work,urgent',
      addTags: 'important',
      areaId: 'area123',
      completed: false,
      canceled: false,
      reveal: true,
      duplicate: true,
      creationDate: '2024-01-01T00:00:00Z',
      completionDate: '2024-12-31T23:59:59Z',
    })
    expect(url).toBe(
      'things:///update-project?id=Jvj7EW1fLoScPhaw2JomCT&auth-token=xxx&title=Updated%20project&notes=New%20notes&prepend-notes=Prepend%20this&append-notes=Append%20this&when=today&deadline=2024-12-31&tags=work%2Curgent&add-tags=important&area-id=area123&reveal=true&duplicate=true&creation-date=2024-01-01T00%3A00%3A00Z&completion-date=2024-12-31T23%3A59%3A59Z',
    )
  })

  test('add should return a URL with title', async () => {
    const url = things.add({
      title: 'Book flights',
    })
    expect(url).toBe('things:///add?title=Book%20flights')
  })

  test('add should return a URL with title, notes, when and tags', async () => {
    const url = things.add({
      title: 'Buy milk',
      notes: 'Low fat.',
      when: 'evening',
      tags: 'Errand',
    })
    expect(url).toBe('things:///add?title=Buy%20milk&notes=Low%20fat.&when=evening&tags=Errand')
  })

  test('add should return a URL with titles and list', async () => {
    const url = things.add({
      titles: 'Milk\nBeer\nCheese',
      list: 'Shopping',
    })
    expect(url).toBe('things:///add?titles=Milk%0ABeer%0ACheese&list=Shopping')
  })

  test('add should return a URL with title, when and list-id', async () => {
    const url = things.add({
      title: 'Call doctor',
      when: 'next monday',
      listId: 'TryhwrjdiHEXfjgNtw81yt',
    })
    expect(url).toBe('things:///add?title=Call%20doctor&when=next%20monday&list-id=TryhwrjdiHEXfjgNtw81yt')
  })

  test('add should return a URL with title, when and time reminder', async () => {
    const url = things.add({
      title: 'Collect dry cleaning',
      when: 'evening@6pm',
    })
    expect(url).toBe('things:///add?title=Collect%20dry%20cleaning&when=evening%406pm')
  })

  test('add should return a URL with deadline', async () => {
    const url = things.add({
      title: 'Submit report',
      deadline: '2024-12-31',
    })
    expect(url).toBe('things:///add?title=Submit%20report&deadline=2024-12-31')
  })

  test('add should return a URL with checklist-items', async () => {
    const url = things.add({
      title: 'Groceries',
      checklistItems: 'Milk\nEggs\nBread',
    })
    expect(url).toBe('things:///add?title=Groceries&checklist-items=Milk%0AEggs%0ABread')
  })

  test('add should return a URL with use-clipboard', async () => {
    const url = things.add({
      useClipboard: 'replace-title',
    })
    expect(url).toBe('things:///add?use-clipboard=replace-title')
  })

  test('add should return a URL with heading', async () => {
    const url = things.add({
      title: 'Task',
      list: 'Project',
      heading: 'Phase 1',
    })
    expect(url).toBe('things:///add?title=Task&list=Project&heading=Phase%201')
  })

  test('add should return a URL with heading-id', async () => {
    const url = things.add({
      title: 'Task',
      listId: 'project123',
      headingId: 'heading456',
    })
    expect(url).toBe('things:///add?title=Task&list-id=project123&heading-id=heading456')
  })

  test('add should return a URL with completed', async () => {
    const url = things.add({
      title: 'Done task',
      completed: true,
    })
    expect(url).toBe('things:///add?title=Done%20task&completed=true')
  })

  test('add should return a URL with canceled', async () => {
    const url = things.add({
      title: 'Canceled task',
      canceled: true,
    })
    expect(url).toBe('things:///add?title=Canceled%20task&canceled=true')
  })

  test('add should return a URL with show-quick-entry', async () => {
    const url = things.add({
      title: 'Quick task',
      showQuickEntry: true,
    })
    expect(url).toBe('things:///add?title=Quick%20task&show-quick-entry=true')
  })

  test('add should return a URL with reveal', async () => {
    const url = things.add({
      title: 'Reveal task',
      reveal: true,
    })
    expect(url).toBe('things:///add?title=Reveal%20task&reveal=true')
  })

  test('add should return a URL with creation-date', async () => {
    const url = things.add({
      title: 'Historical task',
      creationDate: '2024-01-15T10:00:00Z',
    })
    expect(url).toBe('things:///add?title=Historical%20task&creation-date=2024-01-15T10%3A00%3A00Z')
  })

  test('add should return a URL with completion-date', async () => {
    const url = things.add({
      title: 'Finished task',
      completed: true,
      completionDate: '2024-06-30T18:00:00Z',
    })
    expect(url).toBe('things:///add?title=Finished%20task&completed=true&completion-date=2024-06-30T18%3A00%3A00Z')
  })

  test('add should return a URL with all parameters', async () => {
    const url = things.add({
      title: 'Complete task',
      notes: 'Task notes',
      when: 'today',
      deadline: '2024-12-31',
      tags: 'work,urgent',
      checklistItems: 'Step 1\nStep 2',
      useClipboard: 'replace-notes',
      listId: 'project123',
      headingId: 'heading456',
      completed: false,
      canceled: false,
      showQuickEntry: false,
      reveal: true,
      creationDate: '2024-01-01T00:00:00Z',
      completionDate: '2024-12-31T23:59:59Z',
    })
    expect(url).toBe(
      'things:///add?title=Complete%20task&notes=Task%20notes&when=today&deadline=2024-12-31&tags=work%2Curgent&checklist-items=Step%201%0AStep%202&use-clipboard=replace-notes&list-id=project123&heading-id=heading456&reveal=true&creation-date=2024-01-01T00%3A00%3A00Z&completion-date=2024-12-31T23%3A59%3A59Z',
    )
  })

  test('add should return a URL without parameters (inbox)', async () => {
    const url = things.add({})
    expect(url).toBe('things:///add')
  })

  test('update should return a URL with id, auth-token and when', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      when: 'today',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&when=today')
  })

  test('update should return a URL with title', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      title: 'Buy bread',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&title=Buy%20bread')
  })

  test('update should return a URL with append-notes', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      appendNotes: 'Wholemeal bread',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&append-notes=Wholemeal%20bread')
  })

  test('update should return a URL with prepend-notes', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      prependNotes: 'Note prefix',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&prepend-notes=Note%20prefix')
  })

  test('update should return a URL with append-checklist-items', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      appendChecklistItems: 'Cheese\nBread\nEggplant',
    })
    expect(url).toBe(
      'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&append-checklist-items=Cheese%0ABread%0AEggplant',
    )
  })

  test('update should return a URL with prepend-checklist-items', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      prependChecklistItems: 'First item',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&prepend-checklist-items=First%20item')
  })

  test('update should return a URL with empty deadline to clear', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      deadline: '',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx')
  })

  test('update should return a URL with tags', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      tags: 'work,urgent',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&tags=work%2Curgent')
  })

  test('update should return a URL with add-tags', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      addTags: 'important',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&add-tags=important')
  })

  test('update should return a URL with checklist-items', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      checklistItems: 'Item 1\nItem 2',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&checklist-items=Item%201%0AItem%202')
  })

  test('update should return a URL with list-id', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      listId: 'project123',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&list-id=project123')
  })

  test('update should return a URL with list', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      list: 'Shopping',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&list=Shopping')
  })

  test('update should return a URL with heading-id', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      headingId: 'heading456',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&heading-id=heading456')
  })

  test('update should return a URL with heading', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      heading: 'Phase 1',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&heading=Phase%201')
  })

  test('update should return a URL with completed', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      completed: true,
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&completed=true')
  })

  test('update should return a URL with canceled', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      canceled: true,
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&canceled=true')
  })

  test('update should return a URL with reveal', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      reveal: true,
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&reveal=true')
  })

  test('update should return a URL with duplicate', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      duplicate: true,
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&duplicate=true')
  })

  test('update should return a URL with creation-date', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      creationDate: '2024-01-15T10:00:00Z',
    })
    expect(url).toBe('things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&creation-date=2024-01-15T10%3A00%3A00Z')
  })

  test('update should return a URL with completion-date', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      completed: true,
      completionDate: '2024-06-30T18:00:00Z',
    })
    expect(url).toBe(
      'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&completed=true&completion-date=2024-06-30T18%3A00%3A00Z',
    )
  })

  test('update should return a URL with all parameters', async () => {
    const url = things.update({
      id: 'SyJEz273ceSkabUbciM73A',
      authToken: 'xxx',
      title: 'Updated task',
      notes: 'New notes',
      prependNotes: 'Prefix',
      appendNotes: 'Suffix',
      when: 'today',
      deadline: '2024-12-31',
      tags: 'work,urgent',
      addTags: 'important',
      checklistItems: 'Item 1\nItem 2',
      prependChecklistItems: 'First',
      appendChecklistItems: 'Last',
      listId: 'project123',
      headingId: 'heading456',
      completed: false,
      canceled: false,
      reveal: true,
      duplicate: true,
      creationDate: '2024-01-01T00:00:00Z',
      completionDate: '2024-12-31T23:59:59Z',
    })
    expect(url).toBe(
      'things:///update?id=SyJEz273ceSkabUbciM73A&auth-token=xxx&title=Updated%20task&notes=New%20notes&prepend-notes=Prefix&append-notes=Suffix&when=today&deadline=2024-12-31&tags=work%2Curgent&add-tags=important&checklist-items=Item%201%0AItem%202&prepend-checklist-items=First&append-checklist-items=Last&list-id=project123&heading-id=heading456&reveal=true&duplicate=true&creation-date=2024-01-01T00%3A00%3A00Z&completion-date=2024-12-31T23%3A59%3A59Z',
    )
  })

  test('json should return a URL with data', async () => {
    const url = things.json({
      data: [
        {
          type: 'project',
          attributes: {
            title: 'Go Shopping',
            items: [
              {
                type: 'to-do',
                attributes: {
                  title: 'Bread',
                },
              },
              {
                type: 'to-do',
                attributes: {
                  title: 'Milk',
                },
              },
            ],
          },
        },
      ],
    })
    expect(url).toBe(
      'things:///json?data=%5B%7B%22type%22%3A%22project%22%2C%22attributes%22%3A%7B%22title%22%3A%22Go%20Shopping%22%2C%22items%22%3A%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Bread%22%7D%7D%2C%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Milk%22%7D%7D%5D%7D%7D%5D',
    )
  })

  test('json should return a URL with auth-token', async () => {
    const url = things.json({
      authToken: 'xxx',
      data: [
        {
          type: 'to-do',
          attributes: {
            title: 'Milk',
          },
        },
      ],
    })
    expect(url).toBe(
      'things:///json?auth-token=xxx&data=%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Milk%22%7D%7D%5D',
    )
  })

  test('json should return a URL with reveal', async () => {
    const url = things.json({
      data: [
        {
          type: 'to-do',
          attributes: {
            title: 'Bread',
          },
        },
      ],
      reveal: true,
    })
    expect(url).toBe(
      'things:///json?data=%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Bread%22%7D%7D%5D&reveal=true',
    )
  })

  test('json should return a URL with auth-token and reveal', async () => {
    const url = things.json({
      authToken: 'xxx',
      data: [
        {
          type: 'to-do',
          attributes: {
            title: 'Milk',
          },
        },
      ],
      reveal: true,
    })
    expect(url).toBe(
      'things:///json?auth-token=xxx&data=%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Milk%22%7D%7D%5D&reveal=true',
    )
  })

  test('json should return a URL with complex data', async () => {
    const url = things.json({
      data: [
        {
          type: 'project',
          attributes: {
            title: 'Project',
            notes: 'Project notes',
            when: 'today',
            tags: ['work', 'urgent'],
            items: [
              {
                type: 'to-do',
                attributes: {
                  title: 'Task 1',
                  notes: 'Task notes',
                  when: 'today',
                  deadline: '2024-12-31',
                  tags: ['work'],
                  completed: false,
                },
              },
              {
                type: 'to-do',
                attributes: {
                  title: 'Task 2',
                },
              },
            ],
          },
        },
        {
          type: 'to-do',
          attributes: {
            title: 'Standalone task',
          },
        },
      ],
    })
    expect(url).toBe(
      'things:///json?data=%5B%7B%22type%22%3A%22project%22%2C%22attributes%22%3A%7B%22title%22%3A%22Project%22%2C%22notes%22%3A%22Project%20notes%22%2C%22when%22%3A%22today%22%2C%22tags%22%3A%5B%22work%22%2C%22urgent%22%5D%2C%22items%22%3A%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Task%201%22%2C%22notes%22%3A%22Task%20notes%22%2C%22when%22%3A%22today%22%2C%22deadline%22%3A%222024-12-31%22%2C%22tags%22%3A%5B%22work%22%5D%2C%22completed%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Task%202%22%7D%7D%5D%7D%7D%2C%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Standalone%20task%22%7D%7D%5D',
    )
  })
})
