import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebTask = {
  /**
   * RingCentral task ID.
   *
   * @example 'task-123'
   */
  taskId: string
}

/**
 * Open a task in Team Messaging in the RingCentral web app.
 *
 * @param payload RingCentral web task payload.
 * @returns RingCentral web task deep link.
 * @example
 * openWebTask({ taskId: 'task-123' })
 * // => 'https://app.ringcentral.com/tasks/task-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebTask(payload: OpenWebTask) {
  return ringCentralAppUrl(ringCentralPath('tasks', payload.taskId))
}
