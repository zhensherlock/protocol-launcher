import { qs } from '@protocol-launcher/shared'

export type MarkedPathValue = string

export type MarkedCallback = {
  /**
   * URL or bundle identifier to open after Marked performs the command.
   */
  'x-success'?: string
}

export type MarkedRaise = {
  /**
   * Raise affected window(s) above other applications after the command runs.
   */
  raise?: true | 'true'
}

export function markedUrl(
  command: string,
  params: Record<string, unknown> = {},
  payload: MarkedCallback & Partial<MarkedRaise> = {},
) {
  return `x-marked://${command}${markedQs({
    ...params,
    ...optionalParams(payload),
  })}`
}

export function markedPathUrl(
  command: string,
  path: MarkedPathValue,
  params: Record<string, unknown> = {},
  payload: MarkedCallback & Partial<MarkedRaise> = {},
) {
  const encodedPath = encodeMarkedPath(path)
  const commandPath = command ? `${command}/${encodedPath}` : encodedPath

  return `x-marked://${commandPath}${markedQs({
    ...params,
    ...optionalParams(payload),
  })}`
}

export function fileParam(value: string | undefined) {
  return value
}

function optionalParams(payload: MarkedCallback & Partial<MarkedRaise>) {
  return {
    ...(payload['x-success'] !== undefined ? { 'x-success': payload['x-success'] } : {}),
    ...(payload.raise !== undefined ? { raise: payload.raise } : {}),
  }
}

function markedQs(params: Record<string, unknown>) {
  return qs(params).replace(/%2F/g, '/').replace(/%2C/g, ',').replace(/%3A/g, ':')
}

function encodeMarkedPath(path: MarkedPathValue) {
  const segments = path.split('/')

  return segments.map(encodeMarkedSegment).join('/')
}

function encodeMarkedSegment(segment: string) {
  return encodeURIComponent(segment).replace(/%2C/g, ',').replace(/%3A/g, ':')
}
