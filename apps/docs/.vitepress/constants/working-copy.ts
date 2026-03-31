export const openParams = {}

export const cloneParams = {
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
}

export const showParams = {
  remote: 'https://github.com/zhensherlock/watermark-js-plus.git',
}

export const openScreenParams = {
  repo: 'my project',
  path: 'README.md',
  mode: 'content',
}

export const checkoutParams = {
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
}

export const commitParams = {
  key: '123ABC',
  repo: 'my repo',
  path: '',
  limit: 999,
  message: 'fix',
}

export const pushParams = {
  key: '123ABC',
  repo: 'my repo',
}

export const pullParams = {
  key: '123ABC',
  repo: 'my repo',
}

export const fetchParams = {
  key: '123ABC',
  repo: 'my repo',
}

export const statusParams = {
  key: '123ABC',
  repo: 'my repo',
  unchanged: true,
}

export const logParams = {
  key: '123ABC',
  repo: 'my repo',
}

export const branchesParams = {
  key: '123ABC',
  repo: 'my repo',
}

export const mergeParams = {
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
}

export const deleteBranchParams = {
  key: '123ABC',
  repo: 'my repo',
  branch: 'develop',
}

export const initParams = {
  key: '123ABC',
  name: 'new repository',
}

export const reposParams = {
  key: '123ABC',
}

export const moveParams = {
  key: '123ABC',
  repo: 'my repo',
  source: 'from.txt',
  destination: 'to.txt',
}

export const readParams = {
  key: '123ABC',
  xSuccess: 'app://x-callback-url/read?text=',
  repo: 'my repo',
  path: 'README.md',
}

export const writeParams = {
  key: '123ABC',
  repo: 'my repo',
  path: 'README.md',
  text: 'hello there',
}

export const zipParams = {
  key: '123ABC',
  xSuccess: 'my-app://x-callback-url/read?path=/',
  repo: 'my repo',
}

export const importLogParams = {
  lines: 'first line\nsecond line',
}

export const sshCommandParams = {
  key: '123ABC',
  server: 'remote.server.net',
  cmd: 'run tests',
}

export const webdavParams = {
  key: '123ABC',
  cmd: 'start',
}

export const chainParams = {
  key: '123ABC',
  repo: 'my repo',
  commands: [{ command: 'commit', params: { message: 'fix' } }, { command: 'push' }],
}
