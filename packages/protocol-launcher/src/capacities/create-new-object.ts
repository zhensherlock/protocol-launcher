import { type CapacitiesXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Create new object payload definition.
 */
type CreateNewObject = CapacitiesXCallback & {
  /**
   * If no spaceId is provided the current or last active space will be used.
   */
  spaceId?: string

  /**
   * Exact spelling of the singular name of the object type. If no type is provided a page will be created.
   */
  type?: string

  /**
   * Title of the object. Can be empty.
   */
  title?: string

  /**
   * The `name` query parameter shown in the official Capacities testing and createNewObject examples.
   */
  name?: string

  /**
   * Markdown content appended to the object's first blocks property, if available.
   */
  content?: string
}

/**
 * Open Capacities and create a new object.
 *
 * @param payload Create new object payload.
 * @returns Capacities createNewObject x-callback-url.
 * @example
 * createNewObject({ name: 'My new object' })
 * // => 'capacities://x-callback-url/createNewObject?name=My%20new%20object'
 * @example
 * createNewObject({ title: '', content: '# Hello' })
 * // => 'capacities://x-callback-url/createNewObject?title=&content=%23%20Hello'
 * @link https://docs.capacities.io/developer/x-callback-urls
 */
export function createNewObject(payload: CreateNewObject = {}) {
  const { spaceId, type, title, name, content } = payload

  return xCallbackUrl('createNewObject', {
    ...(spaceId !== undefined ? { spaceId } : {}),
    ...(type !== undefined ? { type } : {}),
    ...(title !== undefined ? { title } : {}),
    ...(name !== undefined ? { name } : {}),
    ...(content !== undefined ? { content } : {}),
    ...xCallbackParams(payload),
  })
}
