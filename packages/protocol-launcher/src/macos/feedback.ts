interface Feedback {
  type?: 'new'
}

/**
 * Open Feedback Assistant app.
 *
 * @param payload - Optional feedback type.
 * @returns Feedback Assistant open URL.
 * @example
 * feedback()
 * // => 'applefeedback://'
 * @example
 * feedback({ type: 'new' })
 * // => 'applefeedback://new'
 */
export function feedback(payload: Feedback = {}) {
  const { type = '' } = payload
  return `applefeedback://${type}`
}
