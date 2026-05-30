import { describe, expect, test } from 'vitest'
import { mattermost } from '../src'

describe('mattermost', () => {
  test('openTeam should return a team deep link', () => {
    const url = mattermost.openTeam({
      serverUrl: 'your-Mattermost-server-URL',
      teamName: 'team-name',
    })

    expect(url).toBe('mattermost://your-Mattermost-server-URL/team-name')
  })

  test('openChannel should return a channel deep link', () => {
    const url = mattermost.openChannel({
      serverUrl: 'your-Mattermost-server-URL',
      teamName: 'team-name',
      channelName: 'channel-name',
    })

    expect(url).toBe('mattermost://your-Mattermost-server-URL/team-name/channels/channel-name')
  })

  test('openPost should return a channel message or thread deep link', () => {
    const url = mattermost.openPost({
      serverUrl: 'your-Mattermost-server-URL',
      teamName: 'team-name',
      postId: 'post-id',
    })

    expect(url).toBe('mattermost://your-Mattermost-server-URL/team-name/pl/post-id')
  })

  test('openDirectMessage should return a direct message deep link', () => {
    const url = mattermost.openDirectMessage({
      serverUrl: 'your-Mattermost-server-URL',
      teamName: 'team-name',
      userName: 'user-name',
    })

    expect(url).toBe('mattermost://your-Mattermost-server-URL/team-name/messages/@user-name')
  })
})
