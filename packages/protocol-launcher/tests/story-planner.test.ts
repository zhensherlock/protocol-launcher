import { describe, expect, test } from 'vitest'
import { storyPlanner } from '../src'

describe('storyPlanner', () => {
  test('open should return a URL', async () => {
    const url = storyPlanner.open()
    expect(url).toBe('storyplanner://x-callback-url/')
  })

  test('add should return a URL with title', async () => {
    const url = storyPlanner.add({
      title: 'The Master Cat',
    })
    expect(url).toBe('storyplanner://x-callback-url/add?title=The%20Master%20Cat')
  })

  test('add should return a URL with title containing special characters', async () => {
    const url = storyPlanner.add({
      title: 'My Novel: A Story',
    })
    expect(url).toBe('storyplanner://x-callback-url/add?title=My%20Novel%3A%20A%20Story')
  })

  test('project should return a URL with title', async () => {
    const url = storyPlanner.project({
      title: 'The Master Cat',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=The%20Master%20Cat')
  })

  test('project should return a URL with id', async () => {
    const url = storyPlanner.project({
      id: 'abc123',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?id=abc123')
  })

  test('project should return a URL with title and tab characters', async () => {
    const url = storyPlanner.project({
      title: 'My Novel',
      tab: 'characters',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=My%20Novel&tab=characters')
  })

  test('project should return a URL with title and tab locations', async () => {
    const url = storyPlanner.project({
      title: 'My Novel',
      tab: 'locations',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=My%20Novel&tab=locations')
  })

  test('project should return a URL with title and tab scenes', async () => {
    const url = storyPlanner.project({
      title: 'My Novel',
      tab: 'scenes',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=My%20Novel&tab=scenes')
  })

  test('project should return a URL with title and tab plots', async () => {
    const url = storyPlanner.project({
      title: 'My Novel',
      tab: 'plots',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=My%20Novel&tab=plots')
  })

  test('project should return a URL with id and tab', async () => {
    const url = storyPlanner.project({
      id: 'xyz789',
      tab: 'scenes',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?id=xyz789&tab=scenes')
  })

  test('project should return a URL with title, id and tab (id takes precedence in API)', async () => {
    const url = storyPlanner.project({
      title: 'My Novel',
      id: 'xyz789',
      tab: 'plots',
    })
    expect(url).toBe('storyplanner://x-callback-url/project?title=My%20Novel&id=xyz789&tab=plots')
  })

  test('project should return a URL without parameters', async () => {
    const url = storyPlanner.project({})
    expect(url).toBe('storyplanner://x-callback-url/project')
  })
})
