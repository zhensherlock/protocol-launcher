import type {
  IRealProCustomChordChartPayload,
  IRealProCustomChordChartPlaylistPayload,
  IRealProKeySignature,
  IRealProSearchPayload,
} from './types'

const IREAL_PRO_CUSTOM_CHORD_CHART_SCHEME = 'irealbook://'
const IREAL_PRO_SEARCH_SCHEME = 'irealb://search?'
const FIELD_SEPARATOR = '='

export const IREAL_PRO_KEY_SIGNATURES = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
  'A-',
  'Bb-',
  'B-',
  'C-',
  'C#-',
  'D-',
  'Eb-',
  'E-',
  'F-',
  'F#-',
  'G-',
  'G#-',
] as const satisfies readonly IRealProKeySignature[]

const keySignatures = new Set<string>(IREAL_PRO_KEY_SIGNATURES)

export function iRealProSearchUrl(payload: IRealProSearchPayload) {
  return `${IREAL_PRO_SEARCH_SCHEME}${encodeURIComponent(payload.title)}`
}

export function iRealProCustomChordChartUrl(payload: IRealProCustomChordChartPayload) {
  return `${IREAL_PRO_CUSTOM_CHORD_CHART_SCHEME}${encodeIRealProPayload(customChordChartPayload(payload))}`
}

export function iRealProCustomChordChartPlaylistUrl(payload: IRealProCustomChordChartPlaylistPayload) {
  if (payload.songs.length === 0) {
    throw new Error('iReal Pro custom chord chart playlist requires at least one song.')
  }

  const body = payload.songs.map(song => customChordChartPayload(song)).join(FIELD_SEPARATOR)

  return `${IREAL_PRO_CUSTOM_CHORD_CHART_SCHEME}${encodeIRealProPayload(body)}`
}

function customChordChartPayload(payload: IRealProCustomChordChartPayload) {
  assertCustomChordChartPayload(payload)

  return [payload.title, payload.composer, payload.style, payload.key, 'n', payload.chordProgression].join(
    FIELD_SEPARATOR,
  )
}

function assertCustomChordChartPayload(payload: IRealProCustomChordChartPayload) {
  if (!keySignatures.has(payload.key)) {
    throw new Error('Unsupported iReal Pro key signature.')
  }

  const fields = [payload.title, payload.composer, payload.style, payload.key, payload.chordProgression]

  if (fields.some(field => field.includes(FIELD_SEPARATOR))) {
    throw new Error('iReal Pro custom chord chart fields cannot contain "=".')
  }
}

function encodeIRealProPayload(value: string) {
  return encodeURIComponent(value).replace(/%2F/g, '/')
}
