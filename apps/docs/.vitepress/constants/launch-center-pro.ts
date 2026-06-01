export const clipboardTextParams = {
  text: 'mytext',
}

export const clipboardPhotoParams = {
  attach: 'photo:last' as const,
}

export const speakParams = {
  text: 'Hello master!',
}

export const emailParams = {
  to: 'sample@contrast.co',
  subject: 'Last Photo',
  body: '',
  cc: '',
  bcc: '',
  attach: 'photo:last' as const,
}

export const messagingParams = {
  to: '555-555-5555',
  attach: 'photo:last' as const,
}

export const messagingDropboxParams = {
  to: '555-555-5555',
  body: '[prompt:Body]',
  attach: 'photo:dropbox' as const,
  path: 'reactions',
}

export const messagingGifParams = {
  attach: 'photo:gif' as const,
  'gif-search': 'excited',
}

export const dropboxAddPhotoParams = {
  attach: 'photo:frontcamera' as const,
  path: '/selfies/',
}

export const dropboxNewParams = {
  text: '[prompt-return:My Note]',
  path: '/Notes/',
  name: 'MyFile.markdown',
  overwrite: 'NO' as const,
}

export const dropboxAppendParams = {
  text: 'Next line',
  name: 'MyFile.markdown',
  linebreak: 'NO' as const,
}

export const dropboxPrependParams = {
  text: 'First line\nBody',
  name: 'note_[firstline].text',
  leavefirstline: 'NO' as const,
}

export const dropboxClipboardParams = {
  path: '/photos/',
  linkonly: 'yes' as const,
}

export const scheduleActionParams = {
  action: 179,
  in: '1h',
  repeat: 'specificdays' as const,
  days: 'm,tu,w,th,f',
}

export const scheduleUrlParams = {
  url: '[url:https://apple.com]',
  in: '10min',
}

export const shareSheetParams = {
  attach: 'photo:last' as const,
  text: '[prompt-fleksy:Notes]',
  url: '[clipboard]',
}
