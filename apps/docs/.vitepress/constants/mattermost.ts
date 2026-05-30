export const openTeamParams = {
  serverUrl: 'your-Mattermost-server-URL',
  teamName: 'team-name',
}

export const openChannelParams = {
  ...openTeamParams,
  channelName: 'channel-name',
}

export const openPostParams = {
  ...openTeamParams,
  postId: 'post-id',
}

export const openDirectMessageParams = {
  ...openTeamParams,
  userName: 'user-name',
}
