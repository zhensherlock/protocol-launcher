export interface OpenBotChatPayload {
  /**
   * Bot URI from the Viber Admin Panel or `get-account-info` response.
   *
   * @example 'examplebot'
   */
  chatURI: string

  /**
   * Optional context forwarded to the bot in the conversation started callback.
   *
   * @example 'checkout'
   */
  context?: string

  /**
   * Optional text shown in the input field when the bot chat opens.
   *
   * @example 'Hi there!'
   */
  text?: string
}

export interface OpenBotInfoPayload {
  /**
   * Bot URI from the Viber Admin Panel or `get-account-info` response.
   *
   * @example 'examplebot'
   */
  uri: string
}

export interface OpenBotQrScannerPayload {
  /**
   * Bot URI from the Viber Admin Panel or `get-account-info` response.
   *
   * @example 'examplebot'
   */
  chatURI: string
}

export type OpenChatExtensionPayload =
  | {
      service?: undefined
      search?: undefined
    }
  | {
      /**
       * Chat Extension service id/uri.
       *
       * @example 'example'
       */
      service: string

      /**
       * Search term to pass to the selected Chat Extension service.
       *
       * @example 'coffee'
       */
      search?: string
    }
