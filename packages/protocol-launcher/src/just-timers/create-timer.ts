import { justTimersActionUrl } from './shared'

type JustTimersDurationPayload =
  | {
      /**
       * Timer duration as a sentence, such as `2 minutes`.
       */
      duration: string

      seconds?: never
    }
  | {
      /**
       * Timer duration in seconds, as a number without words.
       */
      seconds: number

      duration?: never
    }

/**
 * Create timer command payload definition.
 */
export type JustTimersCreateTimerPayload = JustTimersDurationPayload & {
  /**
   * Timer name.
   */
  name: string

  /**
   * Create the timer paused instead of active.
   */
  active?: false
}

/**
 * Create a new timer in Just Timers.
 *
 * Just Timers requires a timer `name` and either a sentence-style `duration`
 * or a numeric `seconds` value. New timers are active by default; pass
 * `active: false` to create the timer paused.
 *
 * @param payload Just Timers create timer payload.
 * @returns Just Timers create timer URL.
 * @example
 * createTimer({ name: 'Tea', duration: '2 minutes' })
 * // => 'justtimers://x-callback-url/new/?name=Tea&duration=2%20minutes'
 * @example
 * createTimer({ name: 'Tea', seconds: 120, active: false })
 * // => 'justtimers://x-callback-url/new/?name=Tea&seconds=120&active=false'
 * @link https://justtimers.app/help/shortcuts/
 */
export function createTimer(payload: JustTimersCreateTimerPayload) {
  const { name, active } = payload
  const durationParams = 'duration' in payload ? { duration: payload.duration } : { seconds: payload.seconds }

  return justTimersActionUrl('new', {
    name,
    ...durationParams,
    ...(active === false ? { active } : {}),
  })
}
