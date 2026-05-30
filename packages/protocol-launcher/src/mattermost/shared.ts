export type MattermostLocation = {
  /**
   * Mattermost server URL value used in the official deep link format.
   */
  serverUrl: string

  /**
   * Mattermost team name.
   */
  teamName: string
}

type MattermostRawPathSegment = {
  value: string
  raw: true
}

export function mattermostUrl(
  location: MattermostLocation,
  pathSegments: Array<string | MattermostRawPathSegment> = [],
) {
  const { serverUrl, teamName } = location
  const path = [teamName, ...pathSegments].map(mattermostPathSegmentValue).join('/')

  return `mattermost://${serverUrl}/${path}`
}

export function mattermostPathSegment(value: string) {
  return encodeURIComponent(value)
}

export function rawMattermostPathSegment(value: string): MattermostRawPathSegment {
  return { value, raw: true }
}

function mattermostPathSegmentValue(value: string | MattermostRawPathSegment) {
  return isRawMattermostPathSegment(value) ? value.value : mattermostPathSegment(value)
}

function isRawMattermostPathSegment(value: string | MattermostRawPathSegment): value is MattermostRawPathSegment {
  return typeof value === 'object' && value !== null && value.raw === true
}
