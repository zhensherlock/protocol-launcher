import { describe, expect, test } from 'vitest'
import { workingCopy } from '../src'

describe('workingCopy', () => {
  describe('open', () => {
    test('should return working-copy:// URL', () => {
      const url = workingCopy.open()
      expect(url).toBe('working-copy://')
    })
  })

  describe('openScreen', () => {
    test('should return URL without parameters', () => {
      const url = workingCopy.openScreen({})
      expect(url).toBe('working-copy://open')
    })

    test('should return URL with repo', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
      })
      expect(url).toBe('working-copy://open?repo=my%20project')
    })

    test('should return URL with repo and path', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'README.md',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&path=README.md')
    })

    test('should return URL with repo, path and mode', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'README.md',
        mode: 'content',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&path=README.md&mode=content')
    })

    test('should return URL with remote URL repo', () => {
      const url = workingCopy.openScreen({
        repo: 'https://github.com/libgit2/libgit2',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://open?repo=https%3A%2F%2Fgithub.com%2Flibgit2%2Flibgit2&branch=develop')
    })

    test('should return URL with commit', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        commit: '23f387',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&commit=23f387')
    })

    test('should return URL with mode changes', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'file.txt',
        mode: 'changes',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&path=file.txt&mode=changes')
    })

    test('should return URL with mode status', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        mode: 'status',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&mode=status')
    })

    test('should return URL with mode preview', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'file.txt',
        mode: 'preview',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&path=file.txt&mode=preview')
    })

    test('should return URL with line', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'file.txt',
        line: 123,
      })
      expect(url).toBe('working-copy://open?repo=my%20project&path=file.txt&line=123')
    })

    test('should return URL with error message', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        error: 'red text',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&error=red%20text')
    })

    test('should return URL with info message', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        message: 'blue text',
      })
      expect(url).toBe('working-copy://open?repo=my%20project&message=blue%20text')
    })

    test('should return URL with all parameters', () => {
      const url = workingCopy.openScreen({
        repo: 'my project',
        path: 'README.md',
        commit: 'abc123',
        mode: 'content',
        line: 42,
        error: 'error msg',
        message: 'info msg',
      })
      expect(url).toBe(
        'working-copy://open?repo=my%20project&path=README.md&commit=abc123&mode=content&line=42&error=error%20msg&message=info%20msg',
      )
    })
  })

  describe('clone', () => {
    test('should return clone URL with remote', () => {
      const url = workingCopy.clone({
        remote: 'https://github.com/git/git.git',
      })
      expect(url).toBe('working-copy://clone?remote=https%3A%2F%2Fgithub.com%2Fgit%2Fgit.git')
    })

    test('should return clone URL with GitHub repo', () => {
      const url = workingCopy.clone({
        remote: 'https://github.com/libgit2/libgit2.git',
      })
      expect(url).toBe('working-copy://clone?remote=https%3A%2F%2Fgithub.com%2Flibgit2%2Flibgit2.git')
    })
  })

  describe('show', () => {
    test('should return show URL with remote', () => {
      const url = workingCopy.show({
        remote: 'https://github.com/git/git.git',
      })
      expect(url).toBe('working-copy://show?remote=https%3A%2F%2Fgithub.com%2Fgit%2Fgit.git')
    })

    test('should return show URL with different repo', () => {
      const url = workingCopy.show({
        remote: 'https://github.com/example/repo.git',
      })
      expect(url).toBe('working-copy://show?remote=https%3A%2F%2Fgithub.com%2Fexample%2Frepo.git')
    })
  })

  describe('importLog', () => {
    test('should return import-log URL with lines only', () => {
      const url = workingCopy.importLog({
        lines: 'first line\nsecond line',
      })
      expect(url).toBe('working-copy://import-log?lines=first%20line%0Asecond%20line')
    })

    test('should return import-log URL with repo', () => {
      const url = workingCopy.importLog({
        lines: 'Build failed',
        repo: 'my project',
      })
      expect(url).toBe('working-copy://import-log?lines=Build%20failed&repo=my%20project')
    })

    test('should return import-log URL with timestamp', () => {
      const url = workingCopy.importLog({
        lines: 'Log entry',
        timestamp: 1234567890,
      })
      expect(url).toBe('working-copy://import-log?lines=Log%20entry&timestamp=1234567890')
    })

    test('should return import-log URL with kind import', () => {
      const url = workingCopy.importLog({
        lines: 'Log entry',
        kind: 'import',
      })
      expect(url).toBe('working-copy://import-log?lines=Log%20entry&kind=import')
    })

    test('should return import-log URL with kind bitrise', () => {
      const url = workingCopy.importLog({
        lines: 'Build log',
        kind: 'bitrise',
      })
      expect(url).toBe('working-copy://import-log?lines=Build%20log&kind=bitrise')
    })

    test('should return import-log URL with kind circleci', () => {
      const url = workingCopy.importLog({
        lines: 'CI log',
        kind: 'circleci',
      })
      expect(url).toBe('working-copy://import-log?lines=CI%20log&kind=circleci')
    })

    test('should return import-log URL with kind jenkins', () => {
      const url = workingCopy.importLog({
        lines: 'Jenkins log',
        kind: 'jenkins',
      })
      expect(url).toBe('working-copy://import-log?lines=Jenkins%20log&kind=jenkins')
    })

    test('should return import-log URL with kind buddy', () => {
      const url = workingCopy.importLog({
        lines: 'Buddy log',
        kind: 'buddy',
      })
      expect(url).toBe('working-copy://import-log?lines=Buddy%20log&kind=buddy')
    })

    test('should return import-log URL with kind fetch', () => {
      const url = workingCopy.importLog({
        lines: 'Fetch log',
        kind: 'fetch',
      })
      expect(url).toBe('working-copy://import-log?lines=Fetch%20log&kind=fetch')
    })

    test('should return import-log URL with kind push', () => {
      const url = workingCopy.importLog({
        lines: 'Push log',
        kind: 'push',
      })
      expect(url).toBe('working-copy://import-log?lines=Push%20log&kind=push')
    })

    test('should return import-log URL with kind pull', () => {
      const url = workingCopy.importLog({
        lines: 'Pull log',
        kind: 'pull',
      })
      expect(url).toBe('working-copy://import-log?lines=Pull%20log&kind=pull')
    })

    test('should return import-log URL with kind clone', () => {
      const url = workingCopy.importLog({
        lines: 'Clone log',
        kind: 'clone',
      })
      expect(url).toBe('working-copy://import-log?lines=Clone%20log&kind=clone')
    })

    test('should return import-log URL with all parameters', () => {
      const url = workingCopy.importLog({
        lines: 'Build output',
        repo: 'my project',
        timestamp: 1234567890,
        kind: 'bitrise',
      })
      expect(url).toBe(
        'working-copy://import-log?lines=Build%20output&repo=my%20project&timestamp=1234567890&kind=bitrise',
      )
    })
  })

  describe('write', () => {
    test('should return write URL with required params', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'README.md',
        text: 'hello there',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=README.md&text=hello%20there',
      )
    })

    test('should return write URL with base64', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'image.png',
        base64: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=image.png&base64=iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk%2BM9QDwADhgGAWjR9awAAAABJRU5ErkJggg%3D%3D',
      )
    })

    test('should return write URL with mode safe', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        mode: 'safe',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&mode=safe',
      )
    })

    test('should return write URL with mode overwrite', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        mode: 'overwrite',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&mode=overwrite',
      )
    })

    test('should return write URL with mode append', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        mode: 'append',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&mode=append',
      )
    })

    test('should return write URL with mode prepend', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        mode: 'prepend',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&mode=prepend',
      )
    })

    test('should return write URL with filename and uti', () => {
      const url = workingCopy.write({
        key: '123ABC',
        text: 'hello there',
        filename: 'test.txt',
        uti: 'public.text',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&text=hello%20there&filename=test.txt&uti=public.text',
      )
    })

    test('should return write URL with clipboard', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        clipboard: true,
      })
      expect(url).toBe('working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&clipboard=1')
    })

    test('should return write URL with askcommit', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        askcommit: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&askcommit=1',
      )
    })

    test('should return write URL with all parameters', () => {
      const url = workingCopy.write({
        key: '123ABC',
        repo: 'my repo',
        path: 'file.txt',
        text: 'content',
        mode: 'append',
        filename: 'test.txt',
        uti: 'public.text',
        clipboard: true,
        askcommit: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=file.txt&text=content&mode=append&filename=test.txt&uti=public.text&clipboard=1&askcommit=1',
      )
    })
  })

  describe('read', () => {
    test('should return read URL with required params', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url/read?text=',
        repo: 'my repo',
        path: 'README.md',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Ftext%3D&repo=my%20repo&path=README.md',
      )
    })

    test('should return read URL without repo', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url/read?text=',
        path: 'README.md',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Ftext%3D&path=README.md',
      )
    })

    test('should return read URL with base64', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url/read?base64=',
        repo: 'my repo',
        path: 'image.png',
        base64: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Fbase64%3D&repo=my%20repo&path=image.png&base64=1',
      )
    })

    test('should return read URL with type url', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url',
        repo: 'my repo',
        path: 'file.txt',
        type: 'url',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url&repo=my%20repo&path=file.txt&type=url',
      )
    })

    test('should return read URL with uti', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url/read?text=',
        repo: 'my repo',
        uti: 'public.plain-text',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Ftext%3D&repo=my%20repo&uti=public.plain-text',
      )
    })

    test('should return read URL with clipboard', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url',
        repo: 'my repo',
        path: 'file.txt',
        clipboard: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url&repo=my%20repo&path=file.txt&clipboard=1',
      )
    })

    test('should return read URL with all parameters', () => {
      const url = workingCopy.read({
        key: '123ABC',
        xSuccess: 'app://x-callback-url/read?text=',
        repo: 'my repo',
        path: 'file.txt',
        type: 'url',
        base64: true,
        uti: 'public.item',
        clipboard: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Ftext%3D&repo=my%20repo&path=file.txt&type=url&base64=1&uti=public.item&clipboard=1',
      )
    })
  })

  describe('move', () => {
    test('should return move URL', () => {
      const url = workingCopy.move({
        key: '123ABC',
        repo: 'my repo',
        source: 'from.txt',
        destination: 'to.txt',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/move?key=123ABC&repo=my%20repo&source=from.txt&destination=to.txt',
      )
    })

    test('should return move URL with different paths', () => {
      const url = workingCopy.move({
        key: '123ABC',
        repo: 'my repo',
        source: 'src/old.ts',
        destination: 'src/new.ts',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/move?key=123ABC&repo=my%20repo&source=src%2Fold.ts&destination=src%2Fnew.ts',
      )
    })
  })

  describe('zip', () => {
    test('should return zip URL with required params', () => {
      const url = workingCopy.zip({
        key: '123ABC',
        xSuccess: 'my-app://x-callback-url/read?path=/',
        repo: 'my repo',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread%3Fpath%3D%2F&repo=my%20repo',
      )
    })

    test('should return zip URL with path', () => {
      const url = workingCopy.zip({
        key: '123ABC',
        xSuccess: 'my-app://x-callback-url/read',
        repo: 'my repo',
        path: 'src',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread&repo=my%20repo&path=src',
      )
    })

    test('should return zip URL with git', () => {
      const url = workingCopy.zip({
        key: '123ABC',
        xSuccess: 'my-app://x-callback-url/read',
        repo: 'my repo',
        path: 'src',
        git: true,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread&repo=my%20repo&path=src&git=1',
      )
    })

    test('should return zip URL without repo', () => {
      const url = workingCopy.zip({
        key: '123ABC',
        xSuccess: 'my-app://x-callback-url/read',
      })
      expect(url).toBe('working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread')
    })
  })

  describe('commit', () => {
    test('should return commit URL with required params', () => {
      const url = workingCopy.commit({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo')
    })

    test('should return commit URL with path empty', () => {
      const url = workingCopy.commit({
        key: '123ABC',
        repo: 'my repo',
        path: '',
      })
      expect(url).toBe('working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo&path=')
    })

    test('should return commit URL with message', () => {
      const url = workingCopy.commit({
        key: '123ABC',
        repo: 'my repo',
        message: 'fix bug',
      })
      expect(url).toBe('working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo&message=fix%20bug')
    })

    test('should return commit URL with limit', () => {
      const url = workingCopy.commit({
        key: '123ABC',
        repo: 'my repo',
        limit: 999,
      })
      expect(url).toBe('working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo&limit=999')
    })

    test('should return commit URL with all parameters', () => {
      const url = workingCopy.commit({
        key: '123ABC',
        repo: 'my repo',
        path: '',
        limit: 999,
        message: 'fix',
      })
      expect(url).toBe('working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo&path=&message=fix&limit=999')
    })
  })

  describe('status', () => {
    test('should return status URL with required params', () => {
      const url = workingCopy.status({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/status?key=123ABC&repo=my%20repo')
    })

    test('should return status URL with unchanged', () => {
      const url = workingCopy.status({
        key: '123ABC',
        repo: 'my repo',
        unchanged: true,
      })
      expect(url).toBe('working-copy://x-callback-url/status?key=123ABC&repo=my%20repo&unchanged=1')
    })

    test('should return status URL with depth', () => {
      const url = workingCopy.status({
        key: '123ABC',
        repo: 'my repo',
        depth: 1,
      })
      expect(url).toBe('working-copy://x-callback-url/status?key=123ABC&repo=my%20repo&depth=1')
    })

    test('should return status URL with path', () => {
      const url = workingCopy.status({
        key: '123ABC',
        repo: 'my repo',
        path: 'src',
      })
      expect(url).toBe('working-copy://x-callback-url/status?key=123ABC&repo=my%20repo&path=src')
    })

    test('should return status URL with all parameters', () => {
      const url = workingCopy.status({
        key: '123ABC',
        repo: 'my repo',
        path: 'src',
        unchanged: true,
        depth: 2,
      })
      expect(url).toBe('working-copy://x-callback-url/status?key=123ABC&repo=my%20repo&path=src&unchanged=1&depth=2')
    })
  })

  describe('push', () => {
    test('should return push URL with required params', () => {
      const url = workingCopy.push({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/push?key=123ABC&repo=my%20repo')
    })

    test('should return push URL with remote', () => {
      const url = workingCopy.push({
        key: '123ABC',
        repo: 'my repo',
        remote: 'heroku',
      })
      expect(url).toBe('working-copy://x-callback-url/push?key=123ABC&repo=my%20repo&remote=heroku')
    })

    test('should return push URL with wildcard repo', () => {
      const url = workingCopy.push({
        key: '123ABC',
        repo: '*',
      })
      expect(url).toBe('working-copy://x-callback-url/push?key=123ABC&repo=*')
    })

    test('should return push URL with all parameters', () => {
      const url = workingCopy.push({
        key: '123ABC',
        repo: 'my repo',
        remote: 'upstream',
      })
      expect(url).toBe('working-copy://x-callback-url/push?key=123ABC&repo=my%20repo&remote=upstream')
    })
  })

  describe('pull', () => {
    test('should return pull URL with required params', () => {
      const url = workingCopy.pull({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/pull?key=123ABC&repo=my%20repo')
    })

    test('should return pull URL with remote', () => {
      const url = workingCopy.pull({
        key: '123ABC',
        repo: 'my repo',
        remote: 'upstream',
      })
      expect(url).toBe('working-copy://x-callback-url/pull?key=123ABC&repo=my%20repo&remote=upstream')
    })

    test('should return pull URL with wildcard repo', () => {
      const url = workingCopy.pull({
        key: '123ABC',
        repo: '*',
      })
      expect(url).toBe('working-copy://x-callback-url/pull?key=123ABC&repo=*')
    })
  })

  describe('fetch', () => {
    test('should return fetch URL with required params', () => {
      const url = workingCopy.fetch({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/fetch?key=123ABC&repo=my%20repo')
    })

    test('should return fetch URL with remote', () => {
      const url = workingCopy.fetch({
        key: '123ABC',
        repo: 'my repo',
        remote: 'upstream',
      })
      expect(url).toBe('working-copy://x-callback-url/fetch?key=123ABC&repo=my%20repo&remote=upstream')
    })

    test('should return fetch URL with wildcard repo', () => {
      const url = workingCopy.fetch({
        key: '123ABC',
        repo: '*',
      })
      expect(url).toBe('working-copy://x-callback-url/fetch?key=123ABC&repo=*')
    })
  })

  describe('checkout', () => {
    test('should return checkout URL with required params', () => {
      const url = workingCopy.checkout({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=develop')
    })

    test('should return checkout URL with mode create', () => {
      const url = workingCopy.checkout({
        key: '123ABC',
        repo: 'my repo',
        branch: 'feature/new',
        mode: 'create',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=feature%2Fnew&mode=create',
      )
    })

    test('should return checkout URL with mode ensure', () => {
      const url = workingCopy.checkout({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
        mode: 'ensure',
      })
      expect(url).toBe('working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=develop&mode=ensure')
    })

    test('should return checkout URL with $current branch', () => {
      const url = workingCopy.checkout({
        key: '123ABC',
        repo: 'my repo',
        branch: '$current',
      })
      expect(url).toBe('working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=%24current')
    })
  })

  describe('deleteBranch', () => {
    test('should return delete URL with required params', () => {
      const url = workingCopy.deleteBranch({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=develop')
    })

    test('should return delete URL with mode force', () => {
      const url = workingCopy.deleteBranch({
        key: '123ABC',
        repo: 'my repo',
        branch: 'old-feature',
        mode: 'force',
      })
      expect(url).toBe('working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=old-feature&mode=force')
    })

    test('should return delete URL with mode refuse', () => {
      const url = workingCopy.deleteBranch({
        key: '123ABC',
        repo: 'my repo',
        branch: 'old-feature',
        mode: 'refuse',
      })
      expect(url).toBe('working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=old-feature&mode=refuse')
    })

    test('should return delete URL with mode prompt', () => {
      const url = workingCopy.deleteBranch({
        key: '123ABC',
        repo: 'my repo',
        branch: 'old-feature',
        mode: 'prompt',
      })
      expect(url).toBe('working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=old-feature&mode=prompt')
    })
  })

  describe('merge', () => {
    test('should return merge URL with required params', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&branch=develop')
    })

    test('should return merge URL without branch', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo')
    })

    test('should return merge URL with remote', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
        remote: 'upstream',
      })
      expect(url).toBe('working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&remote=upstream')
    })

    test('should return merge URL with create', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
        remote: 'upstream',
        create: true,
      })
      expect(url).toBe('working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&remote=upstream&create=1')
    })

    test('should return merge URL with resolve false', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
        resolve: false,
      })
      expect(url).toBe('working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&branch=develop&resolve=0')
    })

    test('should return merge URL with all parameters', () => {
      const url = workingCopy.merge({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
        remote: 'upstream',
        create: true,
        resolve: false,
      })
      expect(url).toBe(
        'working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&branch=develop&remote=upstream&create=1&resolve=0',
      )
    })
  })

  describe('webdav', () => {
    test('should return webdav URL with key only', () => {
      const url = workingCopy.webdav({
        key: '123ABC',
      })
      expect(url).toBe('working-copy://x-callback-url/webdav?key=123ABC')
    })

    test('should return webdav URL with cmd start', () => {
      const url = workingCopy.webdav({
        key: '123ABC',
        cmd: 'start',
      })
      expect(url).toBe('working-copy://x-callback-url/webdav?key=123ABC&cmd=start')
    })

    test('should return webdav URL with cmd stop', () => {
      const url = workingCopy.webdav({
        key: '123ABC',
        cmd: 'stop',
      })
      expect(url).toBe('working-copy://x-callback-url/webdav?key=123ABC&cmd=stop')
    })
  })

  describe('repos', () => {
    test('should return repos URL with key', () => {
      const url = workingCopy.repos({
        key: '123ABC',
      })
      expect(url).toBe('working-copy://x-callback-url/repos?key=123ABC')
    })
  })

  describe('log', () => {
    test('should return log URL with required params', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo')
    })

    test('should return log URL with limit', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
        limit: 20,
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&limit=20')
    })

    test('should return log URL with path', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
        path: 'src',
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&path=src')
    })

    test('should return log URL with path empty', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
        path: '',
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&path=')
    })

    test('should return log URL with branch', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&branch=develop')
    })

    test('should return log URL with all parameters', () => {
      const url = workingCopy.log({
        key: '123ABC',
        repo: 'my repo',
        limit: 50,
        path: 'src',
        branch: 'develop',
      })
      expect(url).toBe('working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&limit=50&path=src&branch=develop')
    })
  })

  describe('branches', () => {
    test('should return branches URL with required params', () => {
      const url = workingCopy.branches({
        key: '123ABC',
        repo: 'my repo',
      })
      expect(url).toBe('working-copy://x-callback-url/branches?key=123ABC&repo=my%20repo')
    })
  })

  describe('init', () => {
    test('should return init URL with required params', () => {
      const url = workingCopy.init({
        key: '123ABC',
        name: 'new repository',
      })
      expect(url).toBe('working-copy://x-callback-url/init?key=123ABC&name=new%20repository')
    })

    test('should return init URL with different name', () => {
      const url = workingCopy.init({
        key: '123ABC',
        name: 'my-project',
      })
      expect(url).toBe('working-copy://x-callback-url/init?key=123ABC&name=my-project')
    })
  })

  describe('sshCommand', () => {
    test('should return ssh-command URL with required params', () => {
      const url = workingCopy.sshCommand({
        key: '123ABC',
        server: 'remote.server.net',
        cmd: 'run tests',
      })
      expect(url).toBe('working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=run%20tests')
    })

    test('should return ssh-command URL with source', () => {
      const url = workingCopy.sshCommand({
        key: '123ABC',
        server: 'remote.server.net',
        cmd: 'deploy',
        source: 'subdir',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=deploy&source=subdir',
      )
    })

    test('should return ssh-command URL with remote', () => {
      const url = workingCopy.sshCommand({
        key: '123ABC',
        server: 'remote.server.net',
        cmd: 'deploy',
        remote: 'dir',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=deploy&remote=dir',
      )
    })

    test('should return ssh-command URL with all parameters', () => {
      const url = workingCopy.sshCommand({
        key: '123ABC',
        server: 'remote.server.net',
        cmd: 'deploy',
        source: 'subdir',
        remote: 'dir',
      })
      expect(url).toBe(
        'working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=deploy&source=subdir&remote=dir',
      )
    })
  })

  describe('chain', () => {
    test('should return chain URL with empty commands', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        commands: [],
      })
      expect(url).toBe('working-copy://x-callback-url/chain?key=123ABC')
    })

    test('should return chain URL with single command', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        commands: [{ command: 'commit', params: { message: 'fix' } }],
      })
      expect(url).toBe('working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&command=commit&message=fix')
    })

    test('should return chain URL with multiple commands', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        commands: [{ command: 'commit', params: { message: 'fix' } }, { command: 'push' }],
      })
      expect(url).toBe(
        'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&command=commit&message=fix&command=push',
      )
    })

    test('should return chain URL with wildcard repo', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: '*',
        commands: [{ command: 'pull' }, { command: 'push' }],
      })
      expect(url).toBe('working-copy://x-callback-url/chain?key=123ABC&repo=*&command=pull&command=push')
    })

    test('should return chain URL with x-success', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        xSuccess: 'app://callback',
        commands: [{ command: 'commit' }],
      })
      expect(url).toBe(
        'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&x-success=app%3A%2F%2Fcallback&command=commit',
      )
    })

    test('should return chain URL with x-error', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        xError: 'app://error',
        commands: [{ command: 'commit' }],
      })
      expect(url).toBe(
        'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&x-error=app%3A%2F%2Ferror&command=commit',
      )
    })

    test('should return chain URL with x-success and x-error', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        xSuccess: 'app://success',
        xError: 'app://error',
        commands: [{ command: 'commit' }],
      })
      expect(url).toBe(
        'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&x-success=app%3A%2F%2Fsuccess&x-error=app%3A%2F%2Ferror&command=commit',
      )
    })

    test('should return chain URL with command params', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        repo: 'my repo',
        commands: [
          { command: 'commit', params: { message: 'update', limit: 10 } },
          { command: 'push', params: { remote: 'origin' } },
        ],
      })
      expect(url).toBe(
        'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&command=commit&message=update&limit=10&command=push&remote=origin',
      )
    })

    test('should return chain URL without repo', () => {
      const url = workingCopy.chain({
        key: '123ABC',
        commands: [{ command: 'repos' }],
      })
      expect(url).toBe('working-copy://x-callback-url/chain?key=123ABC&command=repos')
    })
  })
})
