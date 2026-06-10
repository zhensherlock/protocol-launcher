import { qs } from '@protocol-launcher/shared'

export interface PostmanLocalFlowPayload {
  /**
   * Absolute path to the local flow file. The generated URL encodes this value
   * as Postman's documentation requires.
   *
   * @example '/Users/username/GitHub/postman/flows/New flow.flow'
   */
  filePath: string
}

export function postmanLocalFlowUrl(payload: PostmanLocalFlowPayload) {
  return `postman://app/flows/open${qs({ filePath: payload.filePath })}`
}
