export const searchParams = {
  query: 'vacation',
}

export const showTodayParams = {
  id: 'today',
}

export const showProjectParams = {
  id: 'GJJVZHE7SNu7xcVuH2xDDh',
}

export const showByQueryParams = {
  query: 'vacation',
}

export const showByQueryWithFilterParams = {
  query: 'vacation',
  filter: 'errand',
}

export const addProjectParams = {
  title: 'Build treehouse',
  when: 'today',
}

export const addProjectWithAreaParams = {
  title: 'Plan Birthday Party',
  area: 'Family',
}

export const addProjectWithDeadlineParams = {
  title: 'Submit Tax',
  deadline: 'December 31',
  areaId: 'Lg8UqVPXo2SbJNiBpDBBQ',
}

export const updateProjectParams = {
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  when: 'tomorrow',
}

export const updateProjectWithAddTagsParams = {
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  addTags: 'Important',
}

export const updateProjectClearDeadlineParams = {
  id: 'Jvj7EW1fLoScPhaw2JomCT',
  authToken: 'xxx',
  deadline: '',
}

export const addTodoParams = {
  title: 'Book flights',
}

export const addTodoWithNotesParams = {
  title: 'Buy milk',
  notes: 'Low fat.',
  when: 'evening',
  tags: 'Errand',
}

export const addMultipleTodosParams = {
  titles: 'Milk\nBeer\nCheese',
  list: 'Shopping',
}

export const updateTodoParams = {
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  when: 'today',
}

export const updateTodoTitleParams = {
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  title: 'Buy bread',
}

export const updateTodoAppendNotesParams = {
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  appendNotes: 'Wholemeal bread',
}

export const updateTodoClearDeadlineParams = {
  id: 'SyJEz273ceSkabUbciM73A',
  authToken: 'xxx',
  deadline: '',
}

export const jsonProjectDataParams = {
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
}

export const jsonWithAuthTokenParams = {
  authToken: 'xxx',
  data: [
    {
      type: 'to-do',
      attributes: {
        title: 'Milk',
      },
    },
  ],
}
