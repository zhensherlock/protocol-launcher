import { describe, expect, test } from 'vitest'
import { tablepro } from '../src'

const connectionId = '9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1'

describe('tablepro', () => {
  test('connect should return the official connection URL', () => {
    const url = tablepro.connect({ connectionId })

    expect(url).toBe('tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1')
  })

  test('openTable should return the official table URL for the current database', () => {
    const url = tablepro.openTable({
      connectionId,
      table: 'users',
    })

    expect(url).toBe('tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/table/users')
  })

  test('openTable should return the official table URL for a database', () => {
    const url = tablepro.openTable({
      connectionId,
      database: 'analytics',
      table: 'events',
    })

    expect(url).toBe('tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/database/analytics/table/events')
  })

  test('openTable should return the official table URL for a database and schema', () => {
    const url = tablepro.openTable({
      connectionId,
      database: 'app',
      schema: 'reporting',
      table: 'daily_events',
    })

    expect(url).toBe(
      'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/database/app/schema/reporting/table/daily_events',
    )
  })

  test('openTable should percent-encode path segment values', () => {
    const url = tablepro.openTable({
      connectionId,
      database: 'app',
      schema: 'reporting schema',
      table: 'daily events',
    })

    expect(url).toBe(
      'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/database/app/schema/reporting%20schema/table/daily%20events',
    )
  })

  test('openQuery should return the official query URL', () => {
    const url = tablepro.openQuery({
      connectionId,
      sql: 'SELECT * FROM users LIMIT 10',
    })

    expect(url).toBe(
      'tablepro://connect/9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1/query?sql=SELECT%20*%20FROM%20users%20LIMIT%2010',
    )
  })

  test('pair should return the official pairing URL with required parameters', () => {
    const url = tablepro.pair({
      client: 'Raycast on macbook-pro',
      challenge: 'abc-_123',
      redirect: 'raycast://extensions/ngoquocdat/tablepro/pair-callback',
    })

    expect(url).toBe(
      'tablepro://integrations/pair?client=Raycast%20on%20macbook-pro&challenge=abc-_123&redirect=raycast%3A%2F%2Fextensions%2Fngoquocdat%2Ftablepro%2Fpair-callback',
    )
  })

  test('pair should serialize optional scopes and connection IDs as CSV query values', () => {
    const url = tablepro.pair({
      client: 'Raycast on macbook-pro',
      challenge: 'abc-_123',
      redirect: 'raycast://extensions/ngoquocdat/tablepro/pair-callback',
      scopes: ['readOnly', 'readWrite'],
      connectionIds: [connectionId, '11111111-2222-3333-4444-555555555555'],
    })

    expect(url).toBe(
      'tablepro://integrations/pair?client=Raycast%20on%20macbook-pro&challenge=abc-_123&redirect=raycast%3A%2F%2Fextensions%2Fngoquocdat%2Ftablepro%2Fpair-callback&scopes=readOnly%2CreadWrite&connection-ids=9f1f0c3e-2e3d-4b14-9c3a-1d2f4ad1f6f1%2C11111111-2222-3333-4444-555555555555',
    )
  })

  test('startMCP should return the official MCP server start URL', () => {
    const url = tablepro.startMCP()

    expect(url).toBe('tablepro://integrations/start-mcp')
  })

  test('importConnection should return the official import URL', () => {
    const url = tablepro.importConnection({
      name: 'Staging',
      host: 'db.example.com',
      port: 5432,
      type: 'postgresql',
      username: 'admin',
      database: 'mydb',
    })

    expect(url).toBe(
      'tablepro://import?name=Staging&host=db.example.com&port=5432&type=postgresql&username=admin&database=mydb',
    )
  })

  test('importConnection should include documented SSH, SSL, and af_ plugin fields', () => {
    const url = tablepro.importConnection({
      name: 'Reporting',
      host: 'db.example.com',
      type: 'PostgreSQL',
      safeModeLevel: 'readOnly',
      aiPolicy: 'askEachTime',
      ssh: 1,
      sshHost: 'bastion.example.com',
      sshPort: 22,
      sshAuthMethod: 'privateKey',
      sshUseSSHConfig: 1,
      sshJumpHosts: '[{"host":"jump.example.com"}]',
      sslMode: 'verify-full',
      sslCaCertPath: '/Users/me/ca cert.pem',
      af_replicaSet: 'myrs',
    })

    expect(url).toBe(
      'tablepro://import?name=Reporting&host=db.example.com&type=PostgreSQL&safeModeLevel=readOnly&aiPolicy=askEachTime&ssh=1&sshHost=bastion.example.com&sshPort=22&sshAuthMethod=privateKey&sshUseSSHConfig=1&sshJumpHosts=%5B%7B%22host%22%3A%22jump.example.com%22%7D%5D&sslMode=verify-full&sslCaCertPath=%2FUsers%2Fme%2Fca%20cert.pem&af_replicaSet=myrs',
    )
  })
})
