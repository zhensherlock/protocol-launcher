import { locusActionDocument, locusDownloadActionXml } from './shared'
import type { LocusMapDownloadActionPayload } from './types'

/**
 * Build a Locus Map download action XML document.
 *
 * @param payload Locus Map download action payload.
 * @returns Locus Map actions XML document containing one download action.
 * @example
 * downloadAction({
 *   source: {
 *     url: 'https://example.com/maps/map.tar',
 *     size: 22075830,
 *   },
 *   dest: '/maps/map.tar',
 *   after: ['extract', 'deleteSource', 'refreshMap'],
 * })
 * // => '<?xml version="1.0" encoding="utf-8"?>\n<locusActions>\n  <download>\n    <source size="22075830">\n      <![CDATA[https://example.com/maps/map.tar]]>\n    </source>\n    <dest><![CDATA[/maps/map.tar]]></dest>\n    <after>extract|deleteSource|refreshMap</after>\n  </download>\n</locusActions>'
 * @link https://docs.locusmap.app/doku.php?id=manual%3Aadvanced%3Acustomization%3Aactions
 */
export function downloadAction(payload: LocusMapDownloadActionPayload) {
  return locusActionDocument(locusDownloadActionXml(payload))
}
