import { qs } from '@protocol-launcher/shared'

type CreateRecord = {
  /** Task ID. */
  task: string
  /** Start and end timestamps in ISO 8601 format. */
  start: string
  end: string
  notes?: string
}

/**
 * Create a time record. Tim has deprecated create links; prefer its Shortcuts or AppleScript actions.
 *
 * @param payload Task, timestamps and optional notes.
 * @returns Tim create record URL.
 * @example
 * createRecord({ task: 'TASK_ID', start: '2024-11-01T18:00:00Z', end: '2024-11-01T20:00:00Z' })
 * // => 'tim://create?type=record&task=TASK_ID&start=2024-11-01T18%3A00%3A00Z&end=2024-11-01T20%3A00%3A00Z'
 * @link https://tim.neat.software/help
 */
export function createRecord(payload: CreateRecord) {
  const { task, start, end, notes } = payload
  return `tim://create${qs({ type: 'record', task, start, end, notes })}`
}
