type LaunchBarParam = [key: string, value: unknown]

type LaunchBarUrlOptions = {
  /**
   * URL Commands examples use `+` for spaces, while Calculator examples use `%20`.
   */
  spaceEncoding?: 'plus' | 'percent'
}

export function launchbarUrl(command: string, params: LaunchBarParam[] = [], options: LaunchBarUrlOptions = {}) {
  const { spaceEncoding = 'plus' } = options
  const query = params
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      return `${key}=${encodeLaunchBarValue(value, spaceEncoding)}`
    })
    .join('&')

  return `x-launchbar:${command}${query ? `?${query}` : ''}`
}

function encodeLaunchBarValue(value: unknown, spaceEncoding: 'plus' | 'percent') {
  return encodeURIComponent(String(value))
    .replace(/%20/g, spaceEncoding === 'plus' ? '+' : '%20')
    .replace(/%2F/g, '/')
    .replace(/%2B/g, '+')
    .replace(/%2C/g, ',')
    .replace(/%40/g, '@')
    .replace(/%3D/g, '=')
    .replace(/%5E/g, '^')
    .replace(/%[0-9A-F]{2}/g, escape => escape.toLowerCase())
}
