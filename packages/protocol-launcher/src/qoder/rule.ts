/**
 * Qoder rule definition.
 */
type CreateRule = {
  /**
   * Rule name.
   *
   * Must only contain letters, numbers, underscores, and hyphens.
   */
  name: string

  /**
   * Rule content.
   */
  text: string
}

/**
 * Create Qoder rule
 *
 * @param payload Qoder rule definition.
 * @returns Qoder rule URL.
 * @example
 * createRule({
 *   name: 'my_rule',
 *   text: 'You are a development expert.',
 * })
 * // => 'qoder://aicoding.aicoding-deeplink/rule?name=my_rule&text=You%20are%20a%20development%20expert.'
 */
export function createRule(payload: CreateRule) {
  const { name, text } = payload

  if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
    throw new Error('Rule name can only contain letters, numbers, underscores, and hyphens.')
  }

  return `qoder://aicoding.aicoding-deeplink/rule?name=${encodeURIComponent(name)}&text=${encodeURIComponent(text)}`
}
