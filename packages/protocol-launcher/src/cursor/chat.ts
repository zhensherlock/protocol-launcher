type CreateChat = {
  prompt: string
}

export function createChat(payload: CreateChat) {
  return `cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(payload.prompt)}`
}
