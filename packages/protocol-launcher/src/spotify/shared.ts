import { qs } from '@protocol-launcher/shared'

const SPOTIFY_CONTENT_LINKING_URL = 'https://spotify.link/content_linking'

export function spotifyContentLink(params: Record<string, unknown>) {
  return `${SPOTIFY_CONTENT_LINKING_URL}${qs(params)}`
}

export function spotifyWebLink(url: string, utmCampaign?: string) {
  const spotifyUrl = new URL(url)

  if (spotifyUrl.protocol !== 'https:' || spotifyUrl.hostname !== 'open.spotify.com') {
    throw new Error('Unsupported Spotify web link format.')
  }

  if (utmCampaign) {
    spotifyUrl.searchParams.set('utm_campaign', utmCampaign)
  }

  return spotifyUrl.toString()
}
