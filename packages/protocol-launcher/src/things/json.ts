/**
 * JSON item type definition.
 */
type JsonItem = {
  type: 'to-do' | 'project' | 'heading' | 'area'
  attributes: {
    title?: string
    notes?: string
    when?: string
    deadline?: string
    tags?: string[]
    'checklist-items'?: string[]
    completed?: boolean
    canceled?: boolean
    'creation-date'?: string
    'completion-date'?: string
    'area-id'?: string
    area?: string
    'list-id'?: string
    list?: string
    'heading-id'?: string
    heading?: string
    items?: JsonItem[]
    [key: string]: unknown
  }
}

/**
 * JSON command payload definition.
 */
type Json = {
  /**
   * The Things URL scheme authorization token. Required when JSON data contains update operations.
   */
  authToken?: string

  /**
   * JSON array containing to-do and project objects.
   */
  data: JsonItem[]

  /**
   * Whether or not to navigate to and show the newly created to-do or project. Default: false.
   */
  reveal?: boolean
}

/**
 * Add items to Things using JSON data.
 *
 * @param payload JSON command payload.
 * @returns Things json URL.
 * @example
 * json({ data: [{ type: 'project', attributes: { title: 'Go Shopping', items: [{ type: 'to-do', attributes: { title: 'Bread' } }] } }] })
 * // => 'things:///json?data=%5B%7B%22type%22%3A%22project%22%2C%22attributes%22%3A%7B%22title%22%3A%22Go%20Shopping%22%2C%22items%22%3A%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Bread%22%7D%7D%5D%7D%7D%5D'
 * @example
 * json({ authToken: 'xxx', data: [{ type: 'to-do', attributes: { title: 'Milk' } }], reveal: true })
 * // => 'things:///json?auth-token=xxx&data=%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22Milk%22%7D%7D%5D&reveal=true'
 * @link https://culturedcode.com/things/support/articles/2803573/#json
 */
export function json(payload: Json) {
  const { authToken, data, reveal = false } = payload

  const params = new URLSearchParams({
    ...(authToken ? { 'auth-token': authToken } : {}),
    data: JSON.stringify(data),
    ...(reveal ? { reveal: 'true' } : {}),
  })

  return `things:///json?${params.toString()}`
}
