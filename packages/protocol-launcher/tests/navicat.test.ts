import { describe, expect, test } from 'vitest'
import { navicat } from '../src'

describe('navicat', () => {
  test('conn should return a URL with mysql protocol', async () => {
    const url = navicat.conn({
      protocol: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      name: 'My Database',
    })
    expect(url).toBe(
      'navicat://conn.mysql?Conn.Host=localhost&Conn.Port=3306&Conn.Username=root&Conn.Name=My%20Database',
    )
  })

  test('conn should return a URL with pgsql protocol', async () => {
    const url = navicat.conn({
      protocol: 'pgsql',
      host: '192.168.1.1',
      port: 5432,
      username: 'admin',
      name: 'Production DB',
    })
    expect(url).toBe(
      'navicat://conn.pgsql?Conn.Host=192.168.1.1&Conn.Port=5432&Conn.Username=admin&Conn.Name=Production%20DB',
    )
  })

  test('conn should return a URL with mongodb protocol', async () => {
    const url = navicat.conn({
      protocol: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'mongouser',
      name: 'MongoDB',
    })
    expect(url).toBe(
      'navicat://conn.mongodb?Conn.Host=localhost&Conn.Port=27017&Conn.Username=mongouser&Conn.Name=MongoDB',
    )
  })

  test('conn should return a URL with sqlite protocol', async () => {
    const url = navicat.conn({
      protocol: 'sqlite',
      host: '',
      port: 0,
      username: '',
      name: 'local.db',
    })
    expect(url).toBe('navicat://conn.sqlite?Conn.Host=&Conn.Port=0&Conn.Username=&Conn.Name=local.db')
  })

  test('conn should return a URL with all protocol types', async () => {
    const protocols = [
      'biworkspace',
      'mariadb',
      'modelworkspace',
      'mongodb',
      'mssql',
      'mysql',
      'ora',
      'pgsql',
      'redis',
      'sqlite',
    ] as const

    protocols.forEach(protocol => {
      const url = navicat.conn({
        protocol,
        host: 'localhost',
        port: 1234,
        username: 'user',
        name: 'test',
      })
      expect(url).toBe(
        `navicat://conn.${protocol}?Conn.Host=localhost&Conn.Port=1234&Conn.Username=user&Conn.Name=test`,
      )
    })
  })

  test('conn should support custom protocol string', async () => {
    const url = navicat.conn({
      protocol: 'customProtocol',
      host: 'localhost',
      port: 3306,
      username: 'root',
      name: 'Custom Connection',
    })
    expect(url).toBe(
      'navicat://conn.customProtocol?Conn.Host=localhost&Conn.Port=3306&Conn.Username=root&Conn.Name=Custom%20Connection',
    )
  })
})
