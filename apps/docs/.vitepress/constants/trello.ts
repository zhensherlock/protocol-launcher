export const createBoardParams = {
  name: 'My New Board',
  organization: 'My Organization',
  permission: 'private' as const,
  xSuccess: 'myapp://success',
  xError: 'myapp://failure',
}

export const createCardParams = {
  shortlink: '81QRDHnt',
  name: 'MyCardName',
  description: 'MyCardDescription',
  listId: '526e7338ffa7dfb94d0084a7',
}

export const showBoardParams = {
  shortlink: '81QRDHnt',
  xSource: 'MyTestApp',
}

export const showCardParams = {
  id: '526e7338ffa7dfb94d0084a6',
  xSource: 'MyTestApp',
}
