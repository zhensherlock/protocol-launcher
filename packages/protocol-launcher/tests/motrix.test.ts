import { describe, expect, test } from 'vitest'
import { motrix } from '../src'

describe('motrix', () => {
  test('open should return a URL', async () => {
    const url = motrix.open()
    expect(url).toBe('motrix://')
  })

  test('openTaskList should return a URL', async () => {
    const url = motrix.openTaskList()
    expect(url).toBe('motrix://task-list')
  })

  test('newTask should return a URL with uri', async () => {
    const url = motrix.newTask({
      uri: 'https://example.com/file.dmg',
    })
    expect(url).toBe('motrix://new-task?uri=https%3A%2F%2Fexample.com%2Ffile.dmg')
  })

  test('newTask should return a URL with uri and out', async () => {
    const url = motrix.newTask({
      uri: 'https://vscode.download.prss.microsoft.com/dbazure/download/stable/07ff9d6178ede9a1bd12ad3399074d726ebe6e43/VSCode-darwin-universal.dmg',
      out: 'sss',
    })
    expect(url).toBe(
      'motrix://new-task?uri=https%3A%2F%2Fvscode.download.prss.microsoft.com%2Fdbazure%2Fdownload%2Fstable%2F07ff9d6178ede9a1bd12ad3399074d726ebe6e43%2FVSCode-darwin-universal.dmg&out=sss',
    )
  })

  test('newBtTask should return a URL', async () => {
    const url = motrix.newBtTask()
    expect(url).toBe('motrix://new-bt-task')
  })

  test('pauseAllTask should return a URL', async () => {
    const url = motrix.pauseAllTask()
    expect(url).toBe('motrix://pause-all-task')
  })

  test('resumeAllTask should return a URL', async () => {
    const url = motrix.resumeAllTask()
    expect(url).toBe('motrix://resume-all-task')
  })

  test('about should return a URL', async () => {
    const url = motrix.about()
    expect(url).toBe('motrix://about')
  })

  test('preferences should return a URL', async () => {
    const url = motrix.preferences()
    expect(url).toBe('motrix://preferences')
  })
})
