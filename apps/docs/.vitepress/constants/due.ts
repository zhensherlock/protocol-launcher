export const addReminderParams = {
  title: 'Call John',
  duedate: 1333238400,
}

export const addRecurringReminderParams = {
  title: 'Pay rent',
  duedate: 1306954800,
  timezone: 'GMT',
  recurunit: 8,
  recurfromdate: 1306954800,
}

export const addReminderWithCallbackParams = {
  title: 'Call John',
  secslater: 3600,
  xSource: 'SuperCal',
  xSuccess: 'supercal://x-callback-url/returnAction',
}

export const searchReminderParams = {
  query: '#work',
  section: 'Reminders',
}

export const searchTimerParams = {
  query: '#HIIT',
  section: 'Timers',
}

export const searchParams = {}
