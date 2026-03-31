export const processDocumentParams = {
  ocr: 'en',
  destination: 'clipboard' as const,
}

export const processDocumentWithCallbackParams = {
  ocr: 'en',
  destination: 'url' as const,
  xSuccess: 'myapp://callback',
}

export const readTextParams = {
  text: 'Hello World',
  voice: 'Ryan',
}
