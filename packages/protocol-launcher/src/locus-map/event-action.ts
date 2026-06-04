import { locusActionDocument, locusEventActionXml } from './shared'
import type { LocusMapEventActionPayload } from './types'

/**
 * Build a Locus Map event action XML document.
 *
 * @param payload Locus Map event action payload.
 * @returns Locus Map actions XML document containing one event action.
 * @example
 * eventAction({
 *   key: 'setMapVector',
 *   value: '/mapsVector/DownloadedMap.map',
 * })
 * // => '<?xml version="1.0" encoding="utf-8"?>\n<locusActions>\n  <event>\n    <key>setMapVector</key>\n    <value><![CDATA[/mapsVector/DownloadedMap.map]]></value>\n  </event>\n</locusActions>'
 * @link https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions
 */
export function eventAction(payload: LocusMapEventActionPayload) {
  return locusActionDocument(locusEventActionXml(payload))
}
