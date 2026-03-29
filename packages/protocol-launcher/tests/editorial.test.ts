import { describe, expect, test } from 'vitest'
import { editorial } from '../src'

describe('editorial', () => {
  describe('back', () => {
    test('back should return editorial://back URL', async () => {
      const url = editorial.back()
      expect(url).toBe('editorial://back')
    })
  })

  describe('command', () => {
    test('command should return URL with command only', async () => {
      const url = editorial.command({
        command: 'My Workflow',
      })
      expect(url).toBe('editorial://?command=My%20Workflow')
    })

    test('command should return URL with command and input', async () => {
      const url = editorial.command({
        command: 'My Workflow',
        input: 'some input',
      })
      expect(url).toBe('editorial://?command=My%20Workflow&input=some%20input')
    })

    test('command should return URL with x-success', async () => {
      const url = editorial.command({
        command: 'My Workflow',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe('editorial://?command=My%20Workflow&x-success=myapp%3A%2F%2Fsuccess')
    })

    test('command should return URL with x-cancel', async () => {
      const url = editorial.command({
        command: 'My Workflow',
        xCancel: 'myapp://cancel',
      })
      expect(url).toBe('editorial://?command=My%20Workflow&x-cancel=myapp%3A%2F%2Fcancel')
    })

    test('command should return URL with x-error', async () => {
      const url = editorial.command({
        command: 'My Workflow',
        xError: 'myapp://error',
      })
      expect(url).toBe('editorial://?command=My%20Workflow&x-error=myapp%3A%2F%2Ferror')
    })

    test('command should return URL with all x-callback parameters', async () => {
      const url = editorial.command({
        command: 'My Workflow',
        input: 'test input',
        xSuccess: 'myapp://success',
        xCancel: 'myapp://cancel',
        xError: 'myapp://error',
      })
      expect(url).toBe(
        'editorial://?command=My%20Workflow&input=test%20input&x-success=myapp%3A%2F%2Fsuccess&x-cancel=myapp%3A%2F%2Fcancel&x-error=myapp%3A%2F%2Ferror',
      )
    })

    test('command should return URL without parameters', async () => {
      const url = editorial.command({})
      expect(url).toBe('editorial://')
    })
  })

  describe('newFile', () => {
    test('newFile should return URL with filename only', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
      })
      expect(url).toBe('editorial://new/newfile.txt')
    })

    test('newFile should return URL with filename and root', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        root: 'dropbox',
      })
      expect(url).toBe('editorial://new/newfile.txt?root=dropbox')
    })

    test('newFile should return URL with filename and root local', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        root: 'local',
      })
      expect(url).toBe('editorial://new/newfile.txt?root=local')
    })

    test('newFile should return URL with filename and selection', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        selection: '0-10',
      })
      expect(url).toBe('editorial://new/newfile.txt?selection=0-10')
    })

    test('newFile should return URL with filename and command', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        command: 'My Workflow',
      })
      expect(url).toBe('editorial://new/newfile.txt?command=My%20Workflow')
    })

    test('newFile should return URL with filename and input', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        input: 'some input',
      })
      expect(url).toBe('editorial://new/newfile.txt?input=some%20input')
    })

    test('newFile should return URL with all parameters', async () => {
      const url = editorial.newFile({
        filename: 'newfile.txt',
        root: 'dropbox',
        selection: '0-100',
        command: 'My Workflow',
        input: 'test input',
      })
      expect(url).toBe(
        'editorial://new/newfile.txt?root=dropbox&selection=0-100&command=My%20Workflow&input=test%20input',
      )
    })

    test('newFile should return URL without filename', async () => {
      const url = editorial.newFile({})
      expect(url).toBe('editorial://new')
    })

    test('newFile should return URL without filename but with command', async () => {
      const url = editorial.newFile({
        command: 'My Workflow',
      })
      expect(url).toBe('editorial://new?command=My%20Workflow')
    })
  })

  describe('open', () => {
    test('open should return URL with filename only', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
      })
      expect(url).toBe('editorial://open/myfile.txt')
    })

    test('open should return URL with filename and root', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        root: 'dropbox',
      })
      expect(url).toBe('editorial://open/myfile.txt?root=dropbox')
    })

    test('open should return URL with filename and root local', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        root: 'local',
      })
      expect(url).toBe('editorial://open/myfile.txt?root=local')
    })

    test('open should return URL with filename and selection', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        selection: '0-10',
      })
      expect(url).toBe('editorial://open/myfile.txt?selection=0-10')
    })

    test('open should return URL with filename and command', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        command: 'My Workflow',
      })
      expect(url).toBe('editorial://open/myfile.txt?command=My%20Workflow')
    })

    test('open should return URL with filename and input', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        input: 'some input',
      })
      expect(url).toBe('editorial://open/myfile.txt?input=some%20input')
    })

    test('open should return URL with all parameters', async () => {
      const url = editorial.open({
        filename: 'myfile.txt',
        root: 'dropbox',
        selection: '0-100',
        command: 'My Workflow',
        input: 'test input',
      })
      expect(url).toBe(
        'editorial://open/myfile.txt?root=dropbox&selection=0-100&command=My%20Workflow&input=test%20input',
      )
    })

    test('open should return URL without filename', async () => {
      const url = editorial.open({})
      expect(url).toBe('editorial://open')
    })

    test('open should return URL without filename but with command', async () => {
      const url = editorial.open({
        command: 'My Workflow',
      })
      expect(url).toBe('editorial://open?command=My%20Workflow')
    })
  })

  describe('openWeb', () => {
    test('openWeb should return editorial-http:// URL', async () => {
      const url = editorial.openWeb({
        url: 'http://apple.com',
      })
      expect(url).toBe('editorial-http://apple.com')
    })

    test('openWeb should return editorial-https:// URL', async () => {
      const url = editorial.openWeb({
        url: 'https://google.com',
      })
      expect(url).toBe('editorial-https://google.com')
    })

    test('openWeb should return editorial-https:// URL without protocol', async () => {
      const url = editorial.openWeb({
        url: 'example.com',
      })
      expect(url).toBe('editorial-https://example.com')
    })

    test('openWeb should return editorial-http:// URL with path', async () => {
      const url = editorial.openWeb({
        url: 'http://example.com/path/to/page',
      })
      expect(url).toBe('editorial-http://example.com/path/to/page')
    })

    test('openWeb should return editorial-https:// URL with path', async () => {
      const url = editorial.openWeb({
        url: 'https://example.com/path/to/page',
      })
      expect(url).toBe('editorial-https://example.com/path/to/page')
    })
  })
})
