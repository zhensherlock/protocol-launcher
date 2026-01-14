type CreateChat = {
  prompt: string
  openInNewWindow?: boolean
}

export function createChat(payload: CreateChat) {
  const { prompt, openInNewWindow = false } = payload
  return `cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(prompt)}${openInNewWindow ? '&windowId=_blank' : ''}`
}
