export const openGalleryQueryParams = {
  query: 'photos',
}

export const openShortcutParams = {
  name: 'Kaleidoscope Compare',
}

export const runShortcutParams = {
  name: 'Kaleidoscope Compare',
}

export const runShortcutWithTextInputParams = {
  name: '将文本转为音频',
  input: 'text' as const,
  text: '测试将文本转为音频',
}

export const runShortcutWithClipboardInputParams = {
  name: 'Add to Notes',
  input: 'clipboard' as const,
}

export const xCallbackRunShortcutParams = {
  name: '计算小费',
  input: 'text' as const,
  text: '24.99',
}

export const xCallbackRunShortcutWithCallbacksParams = {
  name: '计算小费',
  input: 'text' as const,
  text: '24.99',
  xSuccess: 'myapp://success',
  xCancel: 'myapp://cancel',
}
