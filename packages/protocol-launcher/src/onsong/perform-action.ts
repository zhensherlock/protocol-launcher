import type { OnSongPerformActionPayload } from './shared'
import { onSongUrl } from './shared'

/**
 * Perform an OnSong action by action value.
 *
 * @param payload OnSong perform action payload.
 * @returns OnSong action URL.
 * @example
 * performAction({ action: 'ForwardPedalWasPressed' })
 * // => 'onsong://action/ForwardPedalWasPressed'
 * @example
 * performAction({ action: 'PositionWasAdjusted', amount: 0.5 })
 * // => 'onsong://action/PositionWasAdjusted?amount=0.5'
 * @link https://onsongapp.com/developers/actions/
 */
export function performAction(payload: OnSongPerformActionPayload) {
  const { action, amount, parameters } = payload

  if (amount !== undefined && (amount < 0 || amount > 1)) {
    throw new Error('OnSong action amount must be between 0 and 1.')
  }

  return onSongUrl(`action/${encodeURIComponent(action)}`, {
    ...(amount !== undefined ? { amount } : {}),
    ...parameters,
  })
}
