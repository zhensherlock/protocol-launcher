/**
 * Airmail compose payload definition.
 */
export type AirmailComposePayload = {
  /**
   * Subject field value.
   */
  subject?: string
  /**
   * From field value.
   */
  from?: string
  /**
   * To field value.
   */
  to?: string
  /**
   * Cc field value.
   */
  cc?: string
  /**
   * Bcc field value.
   */
  bcc?: string
  /**
   * Plain text body field value.
   */
  plainBody?: string
  /**
   * HTML body field value.
   */
  htmlBody?: string
}

/**
 * Airmail x-callback-url send payload definition.
 */
export type AirmailSendPayload = {
  /**
   * From field value.
   */
  from?: string
  /**
   * Subject field value.
   */
  subject?: string
  /**
   * To field value.
   */
  to?: string
  /**
   * Plain text body field value.
   */
  plainBody?: string
  /**
   * x-callback-url source app name.
   */
  xSource?: string
  /**
   * x-callback-url success callback.
   */
  xSuccess?: string
  /**
   * x-callback-url error callback.
   */
  xError?: string
  /**
   * x-callback-url cancel callback.
   */
  xCancel?: string
}
