export const addSourceParams = {
  url: 'https://api.myvideosite.com',
} as const

export const addSourceRedirectParams = {
  domain: 'api.myvideosite.com',
} as const

export const openWebViewParams = {
  url: 'https://help.example.com',
} as const

export const searchParams = {
  q: 'funny cats',
} as const

export const openProfileParams = {
  uploader: 'yanks',
} as const

export const handoffSearchParams = {
  baseUrl: 'https://hottubapp.io',
  q: 'nature documentaries',
} as const

export const handoffProfileParams = {
  baseUrl: 'https://hottubapp.io',
  uploader: 'yanks',
} as const

export const handoffOpenParams = {
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
} as const

export const handoffFavoriteParams = {
  baseUrl: 'https://hottubapp.io',
  url: 'https://example.com/watch/12345',
} as const

export const playVideoParams = {
  video: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
} as const

export const playUrlParams = {
  url: 'https://www.youtube.com/watch?v=y0sF5xhGreA',
} as const

export const notificationParams = {
  type: 'success',
  title: 'Success',
  message: 'Video added to playlist!',
} as const

export const messageParams = {
  content: 'Configuration loaded: API v2.1, 15 channels active',
} as const
