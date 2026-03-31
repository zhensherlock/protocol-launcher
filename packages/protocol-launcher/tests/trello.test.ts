import { describe, expect, test } from 'vitest'
import { trello } from '../src'

describe('trello', () => {
  test('open should return a URL', async () => {
    const url = trello.open()
    expect(url).toBe('trello://')
  })

  test('showBoard should return a URL with id', async () => {
    const url = trello.showBoard({
      id: '526e7338ffa7dfb94d0084a6',
    })
    expect(url).toBe('trello://x-callback-url/showBoard?id=526e7338ffa7dfb94d0084a6')
  })

  test('showBoard should return a URL with shortlink', async () => {
    const url = trello.showBoard({
      shortlink: '81QRDHnt',
    })
    expect(url).toBe('trello://x-callback-url/showBoard?shortlink=81QRDHnt')
  })

  test('showBoard should return a URL with xSource', async () => {
    const url = trello.showBoard({
      id: '526e7338ffa7dfb94d0084a6',
      xSource: 'MyTestApp',
    })
    expect(url).toBe('trello://x-callback-url/showBoard?id=526e7338ffa7dfb94d0084a6&x-source=MyTestApp')
  })

  test('showCard should return a URL with id', async () => {
    const url = trello.showCard({
      id: '526e7338ffa7dfb94d0084a6',
    })
    expect(url).toBe('trello://x-callback-url/showCard?id=526e7338ffa7dfb94d0084a6')
  })

  test('showCard should return a URL with shortlink', async () => {
    const url = trello.showCard({
      shortlink: 'abc123',
    })
    expect(url).toBe('trello://x-callback-url/showCard?shortlink=abc123')
  })

  test('showCard should return a URL with xSource', async () => {
    const url = trello.showCard({
      id: '526e7338ffa7dfb94d0084a6',
      xSource: 'MyTestApp',
    })
    expect(url).toBe('trello://x-callback-url/showCard?id=526e7338ffa7dfb94d0084a6&x-source=MyTestApp')
  })

  test('createBoard should return a URL with name', async () => {
    const url = trello.createBoard({
      name: 'My New Board',
    })
    expect(url).toBe('trello://x-callback-url/createBoard?name=My%20New%20Board')
  })

  test('createBoard should return a URL with organization', async () => {
    const url = trello.createBoard({
      name: 'My New Board',
      organization: 'My Organization',
    })
    expect(url).toBe('trello://x-callback-url/createBoard?name=My%20New%20Board&organization=My%20Organization')
  })

  test('createBoard should return a URL with permission', async () => {
    const url = trello.createBoard({
      name: 'My New Board',
      permission: 'public',
    })
    expect(url).toBe('trello://x-callback-url/createBoard?name=My%20New%20Board&permission=public')
  })

  test('createBoard should return a URL with xSuccess and xError', async () => {
    const url = trello.createBoard({
      name: 'My New Board',
      xSuccess: 'myapp://success',
      xError: 'myapp://failure',
    })
    expect(url).toBe(
      'trello://x-callback-url/createBoard?name=My%20New%20Board&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ffailure',
    )
  })

  test('createBoard should return a URL with all parameters', async () => {
    const url = trello.createBoard({
      name: 'My New Board',
      organization: 'My Organization',
      permission: 'organization',
      xSuccess: 'myapp://success',
      xError: 'myapp://failure',
    })
    expect(url).toBe(
      'trello://x-callback-url/createBoard?name=My%20New%20Board&organization=My%20Organization&permission=organization&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ffailure',
    )
  })

  test('createCard should return a URL with shortlink and name', async () => {
    const url = trello.createCard({
      shortlink: '81QRDHnt',
      name: 'MyCardName',
    })
    expect(url).toBe('trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName')
  })

  test('createCard should return a URL with id and name', async () => {
    const url = trello.createCard({
      id: '526e7338ffa7dfb94d0084a6',
      name: 'MyCardName',
    })
    expect(url).toBe('trello://x-callback-url/createCard?id=526e7338ffa7dfb94d0084a6&name=MyCardName')
  })

  test('createCard should return a URL with description', async () => {
    const url = trello.createCard({
      shortlink: '81QRDHnt',
      name: 'MyCardName',
      description: 'MyCardDescription',
    })
    expect(url).toBe(
      'trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName&description=MyCardDescription',
    )
  })

  test('createCard should return a URL with listId', async () => {
    const url = trello.createCard({
      shortlink: '81QRDHnt',
      name: 'MyCardName',
      listId: 'list123',
    })
    expect(url).toBe('trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName&list-id=list123')
  })

  test('createCard should return a URL with usePasteboard', async () => {
    const url = trello.createCard({
      shortlink: '81QRDHnt',
      name: 'MyCardName',
      usePasteboard: true,
    })
    expect(url).toBe('trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName&use-pasteboard=true')
  })

  test('createCard should return a URL with xSuccess and xError', async () => {
    const url = trello.createCard({
      shortlink: '81QRDHnt',
      name: 'MyCardName',
      xSuccess: 'myapp://success',
      xError: 'myapp://failure',
    })
    expect(url).toBe(
      'trello://x-callback-url/createCard?shortlink=81QRDHnt&name=MyCardName&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ffailure',
    )
  })

  test('createCard should return a URL with all parameters', async () => {
    const url = trello.createCard({
      id: '526e7338ffa7dfb94d0084a6',
      name: 'MyCardName',
      description: 'MyCardDescription',
      listId: 'list123',
      usePasteboard: true,
      xSuccess: 'myapp://success',
      xError: 'myapp://failure',
    })
    expect(url).toBe(
      'trello://x-callback-url/createCard?id=526e7338ffa7dfb94d0084a6&name=MyCardName&description=MyCardDescription&list-id=list123&use-pasteboard=true&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ffailure',
    )
  })
})
