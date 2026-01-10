import { encodeUrlPayload } from '@protocol-launcher/shared'

type DownloadUrl = {
  url: string
}

export function downloadUrl(payload: DownloadUrl) {
  const { url } = payload
  const encodedPayload = encodeUrlPayload(`AA${url}ZZ`, { encodeForUrl: false })
  return `thunder://${encodedPayload}`
}
