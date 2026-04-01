import { qs } from '@protocol-launcher/shared'

/**
 * Create document payload definition.
 */
type Create = {
  /**
   * The document body, can contain full Markdown text and calculations.
   */
  body?: string
  /**
   * The document title, will become the file name without extension.
   */
  title?: string
}

/**
 * Create a new document in Calca with the specified body and title.
 *
 * @param payload Create document payload.
 * @returns Calca create URL.
 * @example
 * create({ body: '2+2=>', title: 'Math' })
 * // => 'calca://x-callback-url/create?body=2%2B2%3D&title=Math'
 * @example
 * create({ title: 'Notes' })
 * // => 'calca://x-callback-url/create?title=Notes'
 * @example
 * create({})
 * // => 'calca://x-callback-url/create'
 * @link http://calca.io/x-callback-url/
 */
export function create(payload: Create = {}) {
  const { body, title } = payload
  const params = qs({
    ...(body ? { body } : {}),
    ...(title ? { title } : {}),
  })

  return `calca://x-callback-url/create${params}`
}
