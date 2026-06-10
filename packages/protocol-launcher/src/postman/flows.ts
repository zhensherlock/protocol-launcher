import { type PostmanLocalFlowPayload, postmanLocalFlowUrl } from './shared'

export type OpenLocalFlowPayload = PostmanLocalFlowPayload

/**
 * Open a local Postman Flow file using Postman's documented Native Git deep link.
 *
 * @param payload Local flow payload.
 * @returns Postman local flow deep link.
 * @example
 * openLocalFlow({
 *   filePath: '/Users/username/GitHub/postman/flows/New flow.flow',
 * })
 * // => 'postman://app/flows/open?filePath=%2FUsers%2Fusername%2FGitHub%2Fpostman%2Fflows%2FNew%20flow.flow'
 * @link https://learning.postman.com/docs/postman-flows/get-started/flows-native-git
 */
export function openLocalFlow(payload: OpenLocalFlowPayload) {
  return postmanLocalFlowUrl(payload)
}
