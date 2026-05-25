import { describe, expect, test } from 'vitest'
import { tower } from '../src'

describe('tower', () => {
  test('openRepo should return a URL with a remote repository URL', async () => {
    const url = tower.openRepo({
      remoteRepositoryUrl: 'git@example.beanstalkapp.com:/project.git',
    })

    expect(url).toBe('gittower://openRepo/git@example.beanstalkapp.com:/project.git')
  })
})
