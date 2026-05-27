export const emailContactParams = {
  identifier: 'someone@company.com',
}

export const callbackContactParams = {
  identifier: 'someone@company.com',
  xSuccess: 'myapp://back',
}

export const socialContactParams = {
  identifier: 'twitter:cloze',
}

export const webFullContactParams = {
  identifier: 'someone@company.com',
  full: true as const,
  back: 'http://www.evernote.com',
}

export const webPathContactParams = {
  identifier: 'someone@company.com',
  syntax: 'path' as const,
}
