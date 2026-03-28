export const showListParams = {
  name: 'Work',
}

export const searchParams = {
  text: 'John',
}

export const searchOverdueParams = {
  text: 'type:overdue',
}

export const addNewTaskParams = {
  ignoreDefaults: 1 as 0 | 1,
}

export const addTaskParams = {
  task: 'Dinner at 8pm',
  due: '1',
}

export const addTaskWithPriorityParams = {
  task: 'Important task',
  priority: 3 as 0 | 1 | 2 | 3,
}

export const addTaskWithTagsParams = {
  task: 'Monthly subscription',
  tags: 'bill,payment',
}

export const addTaskWithProjectParams = {
  task: 'Buy a new charger',
  forParentName: 'Shopping List',
  forList: 'Home',
}

export const pasteParams = {
  text: 'Task 1\nTask 2\nTask 3',
  forList: 'Shopping',
}

export const getTaskIDParams = {
  task: 'My Task',
  forList: 'Work',
  saveInClipboard: 1 as 0 | 1,
}
