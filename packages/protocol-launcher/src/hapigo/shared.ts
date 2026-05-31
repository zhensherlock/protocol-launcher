import { qs } from '@protocol-launcher/shared'

export type HapiGoExtensionId = 'APP' | 'FILE' | 'CLIPBOARD' | 'TRANSLATE'

export type HapiGoQueryPayload = {
  /**
   * Text sent to the selected HapiGo built-in extension.
   */
  query: string
}

export function hapigoOpenUrl(extensionID: HapiGoExtensionId, payload: HapiGoQueryPayload) {
  const { query } = payload

  return `hapigo://open${qs({
    extensionID,
    query,
  })}`
}
