const formId = 'c55adab9-916d-46e9-98aa-7a2388a77b24'
const recordId = '11fb2a54-5158-4848-8695-c405c54525e4'

export const openParams = {
  formId,
} as const

export const newRecordParams = {
  formId,
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'My Awesome Building',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
} as const

export const editRecordParams = {
  recordId,
  status: 'incomplete',
  attributes: {
    sq_footage: 2300,
    name: 'SNI',
    number_of_floors: 3,
  },
  latitude: 28.038046,
  longitude: -81.952514,
} as const

export const openWebFormParams = {
  formId,
  mode: 'split',
} as const

export const openWebRecordParams = {
  recordId,
} as const

export const newRecordActionParams = {
  formId: '123-xyz',
} as const

export const editRecordActionParams = {
  recordId: 'xyz-123',
} as const
