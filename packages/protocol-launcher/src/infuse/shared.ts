import { qs } from '@protocol-launcher/shared'

type OneOrMore<T> = T | [T, ...T[]]

export interface InfuseCallbacks {
  /**
   * Callback URL invoked by Infuse after the action succeeds.
   */
  xSuccess?: string
  /**
   * Callback URL invoked by Infuse after the action fails.
   */
  xError?: string
}

export interface InfuseMediaPayload extends InfuseCallbacks {
  /**
   * One or more video URLs to send to Infuse.
   */
  url: OneOrMore<string>
  /**
   * Optional filename parameter value or values.
   */
  filename?: OneOrMore<string>
  /**
   * Optional subtitle URL parameter value or values.
   */
  sub?: OneOrMore<string>
}

type InfuseXCallbackAction = 'play' | 'save'
type InfuseLibraryKind = 'movie' | 'series'

interface InfuseMediaOptions {
  download?: 0 | 1
}

function toArray(value: OneOrMore<string> | undefined) {
  if (value === undefined) return []
  return Array.isArray(value) ? value : [value]
}

function queryPart(params: Record<string, unknown>) {
  return qs(params).slice(1)
}

export function infuseXCallbackUrl(
  action: InfuseXCallbackAction,
  payload: InfuseMediaPayload,
  options: InfuseMediaOptions = {},
) {
  const urls = toArray(payload.url)
  const filenames = toArray(payload.filename)
  const subtitles = toArray(payload.sub)
  const mediaParts = urls.flatMap((url, index) => [
    queryPart({ url }),
    queryPart({ filename: filenames[index] }),
    queryPart({ sub: subtitles[index] }),
  ])
  const actionParts = [
    ...mediaParts,
    queryPart({
      download: options.download,
      'x-success': payload.xSuccess,
      'x-error': payload.xError,
    }),
  ].filter(Boolean)

  return `infuse://x-callback-url/${action}?${actionParts.join('&')}`
}

export function infuseLibraryUrl(kind: InfuseLibraryKind, segments: number[]) {
  return `infuse://${kind}/${segments.join('-')}`
}
