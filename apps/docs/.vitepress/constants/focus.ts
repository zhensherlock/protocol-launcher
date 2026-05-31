export const addTaskParams = {
  title: 'Read chapter 3',
}

export const addTaskWithEstimateParams = {
  title: 'Prepare Presentation',
  note: 'Referecene mail notes',
  sessionEstimate: 8,
  due: 'monday',
}

export const addTaskWithMinutesEstimateParams = {
  title: 'Study documentation',
  note: 'make notes',
  minutesEstimate: 120,
  due: 'tomorrow',
}

export const startTimerParams = {}

export const startTimerWithDurationParams = {
  type: 'focus',
  duration: 40,
} as const

export const pauseTimerParams = {}
