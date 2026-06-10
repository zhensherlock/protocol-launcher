import { ringCentralMobileUrl } from './shared'

export type OpenTask = {
  /**
   * RingCentral task ID.
   *
   * @example 'task-123'
   */
  taskId: string
}

/**
 * Open a specific task in the RingCentral mobile app.
 *
 * @param payload RingCentral task payload.
 * @returns RingCentral mobile task URI.
 * @example
 * openTask({ taskId: 'task-123' })
 * // => 'rcmobile://glip/task?id=task-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openTask(payload: OpenTask) {
  return ringCentralMobileUrl('glip/task', {
    id: payload.taskId,
  })
}
