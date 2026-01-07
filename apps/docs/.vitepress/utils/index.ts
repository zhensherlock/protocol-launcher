export function toJSObjectString(
  value: unknown,
  indent = 2,
  level = 0,
): string {
  const space = ' '.repeat(indent * level)
  const nextSpace = ' '.repeat(indent * (level + 1))

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'

    return `[\n${value
      .map(v => `${nextSpace}${toJSObjectString(v, indent, level + 1)},`)
      .join('\n')}\n${space}]`
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
    if (entries.length === 0) return '{}'

    return `{\n${entries
      .map(
        ([key, val]) =>
          `${nextSpace}${key}: ${toJSObjectString(val, indent, level + 1)},`,
      )
      .join('\n')}\n${space}}`
  }

  if (typeof value === 'string') {
    return `'${value.replace(/'/g, "\\'")}'`
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  if (value === null) {
    return 'null'
  }

  return 'undefined'
}
