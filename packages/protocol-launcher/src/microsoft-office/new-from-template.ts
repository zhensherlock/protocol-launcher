import type { OfficeTemplatePayload } from './shared'
import { officeTemplateUrl } from './shared'

/**
 * Create a new Office document from a template.
 *
 * Microsoft documents this command for Word, PowerPoint, Excel, Visio, Access,
 * Project, and Publisher schemes. When `saveLocation` is supplied, Microsoft
 * requires it to point to the same host name as the template URI.
 *
 * @param payload Office template payload.
 * @returns Office new-from-template URI.
 * @example
 * newFromTemplate({
 *   scheme: 'ms-powerpoint',
 *   templateUri: 'https://contoso.com/templates/status.potx',
 *   saveLocation: 'https://contoso.com/presentations/',
 * })
 * // => 'ms-powerpoint:nft|u|https://contoso.com/templates/status.potx|s|https://contoso.com/presentations/'
 *
 * @link https://learn.microsoft.com/en-us/office/client-developer/office-uri-schemes
 */
export function newFromTemplate(payload: OfficeTemplatePayload) {
  const { scheme, templateUri, saveLocation } = payload

  return officeTemplateUrl(scheme, templateUri, saveLocation)
}
