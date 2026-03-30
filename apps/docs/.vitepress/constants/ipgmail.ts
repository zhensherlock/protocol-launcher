export const composeParams = {
  text: 'This is a test...',
}

export const decryptParams = {
  pgpmsg: 'clipboard',
  result: 'clipboard' as const,
}

export const encryptParams = {
  datasource: 'clipboard' as const,
  keyid: '47E3234C',
  result: 'clipboard' as const,
}

export const signParams = {
  datasource: 'clipboard' as const,
  signkey: '47E3234C',
  result: 'clipboard' as const,
}
