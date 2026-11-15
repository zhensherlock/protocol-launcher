import { describe, expect, test } from 'vitest'
import {
  antigravity,
  codeBuddy,
  codeBuddyChina,
  cursor,
  kiro,
  lingma,
  pearai,
  qoder,
  trae,
  traeChina,
  vscode,
  vscodeInsiders,
  vscodium,
  windsurf,
  zed,
} from '../src'

describe.each([
  ['antigravity', antigravity],
  ['codebuddy', codeBuddy],
  ['codebuddycn', codeBuddyChina],
  ['cursor', cursor],
  ['kiro', kiro],
  ['lingma', lingma],
  ['pearai', pearai],
  ['qoder', qoder],
  ['trae', trae],
  ['trae-cn', traeChina],
  ['vscodium', vscodium],
  ['vscode', vscode],
  ['vscode-insiders', vscodeInsiders],
  ['windsurf', windsurf],
  ['zed', zed],
] as const)('%s local paths', (scheme, editor) => {
  test('encodes special characters in file and folder paths', () => {
    const path = '/my projects/C#/what? 100%20'
    const encoded = '/my%20projects/C%23/what%3F%20100%2520'

    expect(editor.openFile({ path: path + '.md', line: 3, column: 4 })).toBe(`${scheme}://file${encoded}.md:3:4`)
    expect(editor.openFolder({ path })).toBe(`${scheme}://file${encoded}`)
  })

  test.each(['C:\\My Project\\a#1', 'C:/My Project/a#1', '/C:/My Project/a#1'])(
    'formats Windows drive path %s',
    path => {
      const encoded = '/C:/My%20Project/a%231'

      expect(editor.openFile({ path: path + '.txt', line: 3, column: 4 })).toBe(`${scheme}://file${encoded}.txt:3:4`)
      expect(editor.openFolder({ path })).toBe(`${scheme}://file${encoded}`)
    },
  )
})

test('VS Code appends the new-window query after the path and position', () => {
  expect(vscode.openFile({ path: '/code/C#/Program.cs', line: 3, column: 4, openInNewWindow: true })).toBe(
    'vscode://file/code/C%23/Program.cs:3:4?windowId=_blank',
  )
  expect(vscode.openFolder({ path: '/code/C#', openInNewWindow: true })).toBe('vscode://file/code/C%23?windowId=_blank')
})

test('VS Code preserves a literal backslash in a POSIX filename', () => {
  expect(vscode.openFile({ path: '/code/a\\b.txt' })).toBe('vscode://file/code/a%5Cb.txt')
})
