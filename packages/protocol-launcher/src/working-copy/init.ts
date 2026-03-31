import { qs } from '@protocol-launcher/shared'

/**
 * Init command payload definition.
 */
type Init = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name (required).
   * Must not be used by any other repository.
   */
  name: string
}

/**
 * Initialize a new empty repository.
 *
 * @param payload Init command payload.
 * @returns Working Copy x-callback-url/init URL.
 * @example
 * init({
 *   key: '123ABC',
 *   name: 'new repository',
 * })
 * // => 'working-copy://x-callback-url/init?key=123ABC&name=new%20repository'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function init(payload: Init) {
  const { key, name } = payload
  const params = qs({ key, name })

  return `working-copy://x-callback-url/init${params}`
}
