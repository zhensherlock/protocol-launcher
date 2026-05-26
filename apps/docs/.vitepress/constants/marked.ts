export const addStyleCssParams = {
  name: 'My new style',
  css: 'body { color: red; }',
}

export const addStyleFileParams = {
  file: '/Users/myuser/Custom Styles/Unicorn.css',
}

export const defaultsParams = {
  syntaxHighlight: 1,
  includeMathJax: 0,
}

export const defaultsNoRefreshParams = {
  syntaxHighlight: 1,
  refresh: 0 as const,
}

export const runJavaScriptParams = {
  js: 'Marked.file.refresh()',
}

export const runJavaScriptPathParams = {
  path: 'filename1/filename2',
  syntax: 'path' as const,
  js: 'Marked.file.refresh()',
}

export const helpParams = {
  page: 'Document_Statistics',
}

export const helpPathParams = {
  path: 'Keyword_Highlighting:editingkeywords',
  syntax: 'path' as const,
}

export const openParams = {
  file: '/Users/username/Desktop/report.md',
}

export const openPathParams = {
  path: '~/nvALT2.2',
  syntax: 'path' as const,
}

export const openDirectPathParams = {
  path: '/Users/username/Desktop/report.md',
  syntax: 'direct' as const,
}

export const openRaiseParams = {
  file: 'filename.md',
  raise: true as const,
}

export const previewParams = {
  text: 'Some text to preview\n',
}

export const refreshFileParams = {
  file: '/Users/username/Desktop/report.md',
}

export const refreshAllParams = {
  file: 'all',
}

export const refreshPathParams = {
  path: 'filename1/filename2',
  syntax: 'path' as const,
}

export const styleParams = {
  css: 'Github',
}

export const styleFileParams = {
  file: 'filename1,filename2',
  css: 'Github',
}

export const stylePathParams = {
  path: 'all',
  syntax: 'path' as const,
  css: 'Github',
}
