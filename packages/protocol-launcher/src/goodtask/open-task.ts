import { goodTaskUrl } from './shared'

/**
 * OpenTask action payload definition.
 */
type OpenTask =
  | {
      /**
       * Title of the task to open, case insensitive.
       */
      title: string

      identifier?: never
    }
  | {
      /**
       * Identifier of the item.
       */
      identifier: string

      title?: never
    }

/**
 * Open a GoodTask task by title or identifier.
 *
 * @param payload OpenTask action payload.
 * @returns GoodTask task URL.
 * @example
 * openTask({ title: 'Buy milk' })
 * // => 'goodtask3://task?title=Buy%20milk'
 * @example
 * openTask({ identifier: 'ITEM-IDENTIFIER' })
 * // => 'goodtask3://task?identifier=ITEM-IDENTIFIER'
 * @link https://goodtaskapp.com/url-scheme/
 */
export function openTask(payload: OpenTask) {
  const { title, identifier } = payload

  return goodTaskUrl('task', {
    ...(title ? { title } : {}),
    ...(identifier ? { identifier } : {}),
  })
}
