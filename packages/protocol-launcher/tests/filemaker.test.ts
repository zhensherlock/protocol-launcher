import { describe, expect, test } from 'vitest'
import { filemaker } from '../src'

describe('filemaker', () => {
  test('openFile should return a hosted file URL', () => {
    const url = filemaker.openFile({
      address: 'sales.example.com',
      filename: 'My Addresses.fmp12',
    })

    expect(url).toBe('fmp://sales.example.com/My%20Addresses.fmp12')
  })

  test('openFile should return a local Documents file URL', () => {
    const url = filemaker.openFile({
      address: '~',
      filename: 'Clients',
    })

    expect(url).toBe('fmp://~/Clients')
  })

  test('openFile should support a versioned scheme', () => {
    const url = filemaker.openFile({
      version: 22,
      address: 'sales.example.com',
      filename: 'My Addresses',
    })

    expect(url).toBe('fmp22://sales.example.com/My%20Addresses')
  })

  test('openFile should omit the address when not provided', () => {
    const url = filemaker.openFile({ filename: 'Clients' })

    expect(url).toBe('fmp://Clients')
  })

  test('runScript should return a local Documents file script URL', () => {
    const url = filemaker.runScript({
      address: '~',
      filename: 'Clients',
      script: 'ListClients',
    })

    expect(url).toBe('fmp://~/Clients?script=ListClients')
  })

  test('runScript should support param, option, and local variables', () => {
    const url = filemaker.runScript({
      address: 'sales.example.com',
      filename: 'Clients',
      script: 'ListClients',
      param: 'TopClients',
      option: 3,
      variables: [{ name: 'NumberToList', value: 10 }],
    })

    expect(url).toBe('fmp://sales.example.com/Clients?script=ListClients&param=TopClients&option=3&$NumberToList=10')
  })

  test('runScript should support an already open file', () => {
    const url = filemaker.runScript({
      address: '$',
      filename: 'Clients',
      script: 'ListClients',
    })

    expect(url).toBe('fmp://$/Clients?script=ListClients')
  })

  test('runScript should percent-encode script parameters', () => {
    const url = filemaker.runScript({
      address: 'sales.example.com',
      filename: 'Clients',
      script: 'ListClients',
      param: 'a/b',
    })

    expect(url).toBe('fmp://sales.example.com/Clients?script=ListClients&param=a%2Fb')
  })

  test('runScript should support a local variable repetition number', () => {
    const url = filemaker.runScript({
      address: 'sales.example.com',
      filename: 'Clients',
      script: 'ListClients',
      variables: [{ name: 'NumberToList', repetition: 2, value: 10 }],
    })

    expect(url).toBe('fmp://sales.example.com/Clients?script=ListClients&$NumberToList[2]=10')
  })

  test('runScript should support multiple local variables', () => {
    const url = filemaker.runScript({
      address: 'sales.example.com',
      filename: 'Clients',
      script: 'ListClients',
      variables: [
        { name: 'FirstName', value: 'Ada' },
        { name: 'LastName', value: 'Lovelace' },
      ],
    })

    expect(url).toBe('fmp://sales.example.com/Clients?script=ListClients&$FirstName=Ada&$LastName=Lovelace')
  })
})
