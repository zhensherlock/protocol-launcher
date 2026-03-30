import { qs } from '@protocol-launcher/shared'

/**
 * Create item command payload definition.
 */
type CreateItem = {
  /**
   * Create an item with this text.
   */
  text?: string

  /**
   * Create an item with this URL.
   */
  url?: string

  /**
   * Create an item with this binary data, encoded as a base 64 string.
   */
  base64data?: string

  /**
   * A title to use for the item being created.
   */
  title?: string

  /**
   * A comma-separated list of labels that will be added to the item that is being created.
   */
  labels?: string

  /**
   * Text to add as a note for the item being created.
   */
  note?: string
}

/**
 * Create a new item in Gladys.
 *
 * @param payload Create item command payload.
 * @returns Gladys create item URL.
 * @example
 * createItem({ text: 'Hi There', title: 'Greeting', labels: 'Created Items,New Items', note: 'Some Notes' })
 * // => 'gladys://x-callback-url/create-item?text=Hi%20There&title=Greeting&labels=Created%20Items%2CNew%20Items&note=Some%20Notes'
 * @example
 * createItem({ url: 'http://bru.build', title: 'The Gladys Guy', labels: 'Developer,iOS,macOS,Embedded', note: 'Some Notes' })
 * // => 'gladys://x-callback-url/create-item?url=http%3A%2F%2Fbru.build&title=The%20Gladys%20Guy&labels=Developer%2CiOS%2CmacOS%2CEmbedded&note=Some%20Notes'
 * @example
 * createItem({ base64data: 'RXhhbXBsZSB0ZXh0IGZpbGUuCg==', title: 'Test.txt', labels: 'Text Files', note: 'Pretending I am a file' })
 * // => 'gladys://x-callback-url/create-item?base64data=RXhhbXBsZSB0ZXh0IGZpbGUuCg%3D%3D&title=Test.txt&labels=Text%20Files&note=Pretending%20I%20am%20a%20file'
 * @link http://www.bru.build/gladys-callback-scheme
 */
export function createItem(payload: CreateItem = {}) {
  const { text, url, base64data, title, labels, note } = payload
  const params = qs({
    ...(text ? { text } : {}),
    ...(url ? { url } : {}),
    ...(base64data ? { base64data } : {}),
    ...(title ? { title } : {}),
    ...(labels ? { labels } : {}),
    ...(note ? { note } : {}),
  })

  return `gladys://x-callback-url/create-item${params}`
}
