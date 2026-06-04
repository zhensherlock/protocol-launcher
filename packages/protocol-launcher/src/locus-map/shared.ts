import type { LocusMapActionsPayload, LocusMapDownloadActionPayload, LocusMapEventActionPayload } from './types'

const URL_SCHEME_PATTERN = /^https:\/\/(.+)$/

export function locusActionsUrl(payload: LocusMapActionsPayload) {
  const match = payload.url.match(URL_SCHEME_PATTERN)

  if (!match) {
    throw new Error('Unsupported Locus Map actions URL format.')
  }

  const [, rest] = match

  return `locus-actions://https/${rest}`
}

export function locusActionDocument(actionXml: string) {
  return `<?xml version="1.0" encoding="utf-8"?>\n<locusActions>\n${indent(actionXml, 2)}\n</locusActions>`
}

export function locusDownloadActionXml(payload: LocusMapDownloadActionPayload) {
  const source = typeof payload.source === 'string' ? { url: payload.source } : payload.source
  const attributes = [
    source.size !== undefined ? `size="${escapeAttribute(String(source.size))}"` : '',
    source.date !== undefined ? `date="${escapeAttribute(source.date)}"` : '',
  ].filter(Boolean)
  const sourceAttributes = attributes.length ? ` ${attributes.join(' ')}` : ''
  const after = Array.isArray(payload.after) ? payload.after.join('|') : payload.after

  return [
    '<download>',
    `  <source${sourceAttributes}>`,
    `    <![CDATA[${cdata(source.url)}]]>`,
    '  </source>',
    `  <dest><![CDATA[${cdata(payload.dest)}]]></dest>`,
    `  <after>${after}</after>`,
    '</download>',
  ].join('\n')
}

export function locusEventActionXml(payload: LocusMapEventActionPayload) {
  return [
    '<event>',
    `  <key>${payload.key}</key>`,
    `  <value><![CDATA[${cdata(payload.value)}]]></value>`,
    '</event>',
  ].join('\n')
}

function indent(value: string, spaces: number) {
  const prefix = ' '.repeat(spaces)

  return value
    .split('\n')
    .map(line => `${prefix}${line}`)
    .join('\n')
}

function cdata(value: string) {
  if (value.includes(']]>')) {
    throw new Error('Locus Map action CDATA values cannot contain "]]>".')
  }

  return value
}

function escapeAttribute(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
