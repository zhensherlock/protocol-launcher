export const createNoteParams = {
  title: 'Meeting Notes',
  text: 'Discussion about project roadmap',
  projectTitle: 'Work',
  onTheAgenda: true,
  date: '2024-01-15',
}

export const createProjectParams = {
  title: 'New Project',
  categoryTitle: 'Work',
  select: true,
  sortOrder: 'newest-first' as const,
}

export const createCategoryParams = {
  title: 'New Category',
}

export const openNoteParams = {
  title: 'Meeting With Peta',
  projectTitle: 'Work',
}

export const openProjectParams = {
  title: 'Work Project',
}

export const openOverviewParams = {
  title: 'This Week',
}

export const appendToNoteParams = {
  title: 'Some Note',
  text: 'More Text',
  onTheAgenda: true,
}

export const replaceNoteParams = {
  title: 'Some Note',
  text: 'New Content',
}
