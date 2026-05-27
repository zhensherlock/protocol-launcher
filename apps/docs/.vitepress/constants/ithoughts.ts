export const makeMapMarkdownParams = {
  text: '# Project\n- Collect ideas\n- Draft outline',
  note: 'Created from Markdown',
  link: 'https://www.toketaware.com/ithoughts-howto-x-callback-url',
  format: 'md' as const,
}

export const makeMapClipboardParams = {
  text: '[[clipboard]]',
  format: 'text' as const,
}

export const amendMapParams = {
  text: 'Follow up',
  path: '/tasks',
  target: 'newtasks',
  edit: 'YES' as const,
}
