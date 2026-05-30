/**
 * BusyContacts URL parameter value.
 */
export type BusyContactsParameterValue = string | number

/**
 * BusyContacts contact lookup payload definition.
 */
export type BusyContactsContactPayload = {
  /**
   * Contact UID, X-ABUID, or email address.
   *
   * @example 'test@apple.com'
   * @example 'f90221ac-84a8-4f40-a699-5930b59a24d1'
   */
  identifier: string
}

/**
 * BusyContacts natural language contact creation payload definition.
 */
export type BusyContactsNewContactPayload = {
  /**
   * Natural language contact string. Include an address book hint with the
   * documented ` /Hint` suffix when needed.
   *
   * @example 'Bob Jones 555-1212'
   * @example 'Bob Jones 123 Main Street, Anytown USA /iCloud'
   */
  text: string
}

/**
 * BusyContacts Smart Filter payload definition.
 */
export type BusyContactsFilterPayload = {
  /**
   * Exact Smart Filter name.
   *
   * @example 'friends'
   */
  name: string
}

export function encodeBusyContactsParameter(value: BusyContactsParameterValue) {
  return encodeURI(String(value))
}

export function busyContactsPathUrl(action: 'show' | 'open' | 'new' | 'filter', value: BusyContactsParameterValue) {
  return `busycontacts://${action}/${encodeBusyContactsParameter(value)}`
}
