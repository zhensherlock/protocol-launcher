import { royalTsCliUrl } from './shared'

type RoyalTsConnectTarget =
  | {
      /**
       * Unique identifier of the connection to execute the action for.
       *
       * @example '3c74baad-8303-47cd-a2d5-7dc40975acdc'
       */
      id: string

      /**
       * Optional connection name. Royal TS allows ID and/or name.
       *
       * @example 'QNAP (SSH)'
       */
      name?: string
    }
  | {
      /**
       * Optional unique identifier of the connection to execute the action for.
       *
       * @example '3c74baad-8303-47cd-a2d5-7dc40975acdc'
       */
      id?: string

      /**
       * Connection name to execute the action for.
       *
       * @example 'QNAP (SSH)'
       */
      name: string
    }

/**
 * Royal TS `rtscli.exe action connect` URI payload.
 */
export type RoyalTsConnectPayload = RoyalTsConnectTarget & {
  /**
   * Unique identifier of an existing template which should be used to connect.
   *
   * @example '3c74baad-8303-47cd-a2d5-7dc40975acdc'
   */
  templateId?: string

  /**
   * Unique identifier of an existing credential which should be overridden to connect.
   *
   * @example '3c74baad-8303-47cd-a2d5-7dc40975acdc'
   */
  credentialId?: string

  /**
   * Name of an existing credential which should be overridden to connect.
   *
   * @example 'Shared Admin'
   */
  credentialName?: string

  /**
   * User name which should be overridden to connect.
   *
   * @example 'admin'
   */
  username?: string

  /**
   * Password which should be overridden to connect.
   *
   * @example 'password'
   */
  password?: string

  /**
   * One or more documented `--property` values.
   *
   * @example '"AutoRefresh":"True"'
   */
  property?: string | readonly string[]
}

/**
 * Build a Royal TS CLI action URI for `rtscli.exe action connect`.
 *
 * @param payload Royal TS action connect payload.
 * @returns Royal TS action connect URI.
 * @example
 * connect({ name: 'QNAP (SSH)' })
 * // => 'rtscli://local/action/connect?-n=QNAP+(SSH)'
 *
 * @link https://docs.royalapps.com/r2023/royalts/advanced/uri.html
 * @link https://docs.royalapps.com/r2023/royalts/advanced/cli.html
 */
export function connect(payload: RoyalTsConnectPayload) {
  return royalTsCliUrl({
    scope: 'action',
    command: 'connect',
    options: {
      '-i': payload.id,
      '-n': payload.name,
      '--template-id': payload.templateId,
      '--credential-id': payload.credentialId,
      '--credential-name': payload.credentialName,
      '-u': payload.username,
      '-p': payload.password,
      '--property': payload.property,
    },
  })
}
