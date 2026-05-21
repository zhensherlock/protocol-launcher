import { qs } from '@protocol-launcher/shared'

export type GoodTaskView = 1 | 2 | 3 | 4 | 11 | 12 | 13 | 14
export type GoodTaskSwitch = 0 | 1
export type GoodTaskPriority = 0 | 1 | 2 | 3

export function goodTaskUrl(action: string, params: Record<string, unknown> = {}, xCallback = false) {
  return `goodtask3://${xCallback ? 'x-callback-url/' : ''}${action}${qs(params)}`
}
