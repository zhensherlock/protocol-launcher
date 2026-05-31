import { type ScreensSshPayload, screensUrl } from './shared'

/**
 * Connect to a computer through a secure Screens session using SSH.
 *
 * @param payload SSH-secured connection payload.
 * @returns Screens SSH URL.
 * @example
 * ssh({ host: 'server.example.com', username: 'john', sshKey: 'My Work Key' })
 * // => 'ssh://john@server.example.com?ssh-key=My%20Work%20Key'
 * @example
 * ssh({ host: '10.0.1.10', port: 22 })
 * // => 'ssh://10.0.1.10:22'
 * @link https://help.edovia.com/en/screens-5/features/url-schemes
 */
export function ssh(payload: ScreensSshPayload) {
  return screensUrl('ssh', { ...payload, target: payload.host }, payload)
}
