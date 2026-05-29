import { tableproUrl } from './shared'

export type SafeModeLevel = 'silent' | 'alert' | 'alertFull' | 'safeMode' | 'safeModeFull' | 'readOnly'
export type AIPolicy = 'useDefault' | 'alwaysAllow' | 'askEachTime' | 'never'
export type SSHAuthMethod = 'password' | 'privateKey' | 'agent' | 'keyboardInteractive'
export type SSLMode = 'disabled' | 'preferred' | 'required' | 'verify-ca' | 'verify-full'

export type TableProPluginFields = {
  [key: `af_${string}`]: string | number | undefined
}

export type ImportConnection = TableProPluginFields & {
  /**
   * Saved connection name.
   */
  name: string
  /**
   * Database server host.
   */
  host: string
  /**
   * Registered database type name. TablePro treats this case-insensitively.
   *
   * @example 'PostgreSQL'
   * @example 'Redis'
   */
  type: string
  /**
   * Server port.
   */
  port?: string | number
  /**
   * Database username.
   */
  username?: string
  /**
   * Default database name.
   */
  database?: string
  /**
   * Connection color in the sidebar.
   */
  color?: string
  /**
   * Tag to assign.
   */
  tagName?: string
  /**
   * Group to place the connection in.
   */
  groupName?: string
  /**
   * Safe Mode level.
   */
  safeModeLevel?: SafeModeLevel
  /**
   * AI access policy.
   */
  aiPolicy?: AIPolicy
  /**
   * Set to `1` to enable SSH tunneling.
   */
  ssh?: 1 | '1'
  /**
   * SSH server hostname.
   */
  sshHost?: string
  /**
   * SSH port.
   */
  sshPort?: string | number
  /**
   * SSH username.
   */
  sshUsername?: string
  /**
   * SSH authentication method.
   */
  sshAuthMethod?: SSHAuthMethod
  /**
   * Path to private key file.
   */
  sshPrivateKeyPath?: string
  /**
   * Set to `1` to read `~/.ssh/config`.
   */
  sshUseSSHConfig?: 1 | '1'
  /**
   * Custom SSH agent socket path.
   */
  sshAgentSocketPath?: string
  /**
   * JSON array of jump hosts.
   */
  sshJumpHosts?: string
  /**
   * TOTP mode for two-factor SSH auth.
   */
  sshTotpMode?: string
  /**
   * SSL mode.
   */
  sslMode?: SSLMode
  /**
   * CA certificate file path.
   */
  sslCaCertPath?: string
  /**
   * Client certificate file path.
   */
  sslClientCertPath?: string
  /**
   * Client key file path.
   */
  sslClientKeyPath?: string
}

/**
 * Import a TablePro connection from URL parameters.
 *
 * TablePro requires `name`, `host`, and `type`. Passwords are never accepted in the URL.
 *
 * @param payload TablePro connection import payload.
 * @returns TablePro import connection URL.
 * @example
 * importConnection({
 *   name: 'Staging',
 *   host: 'db.example.com',
 *   port: 5432,
 *   type: 'postgresql',
 *   username: 'admin',
 *   database: 'mydb',
 * })
 * // => 'tablepro://import?name=Staging&host=db.example.com&port=5432&type=postgresql&username=admin&database=mydb'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function importConnection(payload: ImportConnection) {
  const {
    name,
    host,
    port,
    type,
    username,
    database,
    color,
    tagName,
    groupName,
    safeModeLevel,
    aiPolicy,
    ssh,
    sshHost,
    sshPort,
    sshUsername,
    sshAuthMethod,
    sshPrivateKeyPath,
    sshUseSSHConfig,
    sshAgentSocketPath,
    sshJumpHosts,
    sshTotpMode,
    sslMode,
    sslCaCertPath,
    sslClientCertPath,
    sslClientKeyPath,
    ...pluginFields
  } = payload
  const prefixedPluginFields = Object.fromEntries(Object.entries(pluginFields).filter(([key]) => key.startsWith('af_')))

  return tableproUrl('import', {
    name,
    host,
    port,
    type,
    username,
    database,
    color,
    tagName,
    groupName,
    safeModeLevel,
    aiPolicy,
    ssh,
    sshHost,
    sshPort,
    sshUsername,
    sshAuthMethod,
    sshPrivateKeyPath,
    sshUseSSHConfig,
    sshAgentSocketPath,
    sshJumpHosts,
    sshTotpMode,
    sslMode,
    sslCaCertPath,
    sslClientCertPath,
    sslClientKeyPath,
    ...prefixedPluginFields,
  })
}
