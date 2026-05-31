export const findParams = {
  inp: 'invoice',
} as const

export const findInLocationParams = {
  loc: '~',
  inp: 'invoice',
} as const

export const findWithTemplateParams = {
  tpl: 'LastWeek',
  inp: 'invoice',
} as const

export const findJsonParams = {
  jsondata: {
    specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
    title: 'Name contains report 2021',
    autoStart: true,
    sources: ['/'],
  },
} as const
