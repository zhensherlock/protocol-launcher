export const openAppInstallDialogParams = {
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
}

export const openAppTabParams = {
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  entityId: 'tasklist123',
  webUrl: 'https://tasklist.example.com/123/456',
  label: 'Task 456',
  context: {
    subEntityId: 'task456',
    channelId: '19:cbe3683f25094106b826c9cada3afbe0@thread.skype',
  },
  openInMeeting: false as const,
}

export const openAppChatParams = {
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  tenantId: 'abcdef12-3456-7890-abcd-ef1234567890',
}

export const openDialogParams = {
  appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
  url: 'https://example.com/task',
  height: 600,
  width: 800,
  title: 'Example Task',
  completionBotId: 'abcdef12-3456-7890-abcd-ef1234567890',
}

export const openNewChatParams = {
  users: ['joe@contoso.com', 'bob@contoso.com'],
  topicName: 'Prep For Meeting Tomorrow',
  message: 'Hi folks, kicking off a chat about our meeting tomorrow',
}

export const openChatParams = {
  chatId: '19:c6d70e392a384916c3262b15406d763e@thread.v2',
}

export const openChannelConversationParams = {
  channelId: '19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2',
  messageId: '1648741500652',
  tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
  groupId: '3606f714-ec2e-41b3-9ad1-6afb331bd35d',
  parentMessageId: '1648741500652',
  teamName: 'Example Team',
  channelName: 'General',
  createdTime: '1648741500652',
}

export const openChatMessageParams = {
  chatId: '19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces',
  messageId: '1563480968434',
}

export const openTeamParams = {
  channelId: '19:TWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41@thread.tacv2',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
}

export const openChannelParams = {
  channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
  channelName: 'My example channel',
  groupId: '72602e12-78ac-474c-99d6-f619710353a9',
  tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
}

export const openSharedChannelParams = {
  ...openChannelParams,
  ngc: true as const,
  allowXTenantAccess: true as const,
}

export const openFileParams = {
  fileId: '5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80',
  tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
  fileType: 'pptx',
  objectUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform/Shared Documents/deck.pptx',
  baseUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform',
  serviceName: 'teams',
  threadId: '19:f8fbfc4d89e24ef5b3b8692538cebeb7@thread.skype',
  groupId: 'ae063b79-5315-4ddb-ba70-27328ba6c31e',
}

export const openMeetingSchedulingDialogParams = {
  subject: 'test subject',
  attendees: ['joe@contoso.com', 'bob@contoso.com'],
  startTime: '2018-10-24T10:00:00-07:00',
  endTime: '2018-10-24T10:30:00-07:00',
  content: 'test:content',
}

export const startCallParams = {
  users: ['joe@contoso.com', '4:9876543210'],
  withVideo: true as const,
  source: 'demoApp',
}

export const shareToMeetingStageParams = {
  deepLinkId: 'sampleid',
  fqdn: 'teams.microsoft.com' as const,
  appContext: {
    appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
    appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
    useMeetNow: true,
  },
}
