export const snipParams = {
  func: 'start',
}

export const recordParams = {
  func: 'start_area',
}

export const ocrParams = {
  func: 'start',
}

export const ruleParams = {
  func: 'start',
}

export const prefParams = {
  page: 'shortcuts',
}

export const callbackRecordParams = {
  func: 'startArea',
  xSuccess: 'myapp://recorded',
  xError: 'myapp://error',
} as const
