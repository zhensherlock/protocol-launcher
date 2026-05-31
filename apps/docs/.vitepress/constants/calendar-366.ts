export const addEventParams = {
  query: 'Meeting tomorrow 10am',
}

export const addTaskParams = {
  query: 'Call dentist',
}

export const showMonthParams = {
  view: 'month',
} as const

export const showOverdueTasksParams = {
  tasks: 1,
} as const

export const showDayParams = {
  view: 'day',
  date: 1717200000,
} as const
