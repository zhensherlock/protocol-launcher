import { qs } from '@protocol-launcher/shared'

export type JustTimersTimerAction = 'delete' | 'pause' | 'reset' | 'restart' | 'resume'

export type JustTimersNamedTimerPayload = {
  /**
   * Timer name.
   */
  name: string

  all?: never
}

export type JustTimersAllTimersPayload = {
  /**
   * Control all timers using Just Timers' documented `/all` modifier.
   */
  all: true

  name?: never
}

export type JustTimersTimerTargetPayload = JustTimersNamedTimerPayload | JustTimersAllTimersPayload

export function justTimersActionUrl(action: string, params: Record<string, unknown> = {}) {
  return `justtimers://x-callback-url/${action}/${qs(params)}`
}

export function justTimersTimerActionUrl(action: JustTimersTimerAction, payload: JustTimersTimerTargetPayload) {
  if ('all' in payload && payload.all) {
    return `justtimers://x-callback-url/${action}/all`
  }

  return justTimersActionUrl(action, { name: payload.name })
}
