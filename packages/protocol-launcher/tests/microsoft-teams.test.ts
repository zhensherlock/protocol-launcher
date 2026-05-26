import { describe, expect, test } from 'vitest'
import { microsoftTeams } from '../src'

describe('microsoftTeams', () => {
  test('openAppInstallDialog should return an app install dialog deep link', () => {
    const url = microsoftTeams.openAppInstallDialog({
      appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
      tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/app/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47',
    )
  })

  test('openAppTab should return an app tab deep link', () => {
    const url = microsoftTeams.openAppTab({
      appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
      entityId: 'tasklist123',
      webUrl: 'https://tasklist.example.com/123/456',
      label: 'Task 456',
      context: {
        subEntityId: 'task456',
        channelId: '19:cbe3683f25094106b826c9cada3afbe0@thread.skype',
      },
      openInMeeting: false,
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/entity/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx/tasklist123?webUrl=https%3A%2F%2Ftasklist.example.com%2F123%2F456&label=Task%20456&context=%7B%22subEntityId%22%3A%22task456%22%2C%22channelId%22%3A%2219%3Acbe3683f25094106b826c9cada3afbe0%40thread.skype%22%7D&openInMeeting=false',
    )
  })

  test('openAppChat should return an app chat deep link', () => {
    const url = microsoftTeams.openAppChat({
      appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
      tenantId: 'abcdef12-3456-7890-abcd-ef1234567890',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/entity/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx/conversations?tenantId=abcdef12-3456-7890-abcd-ef1234567890',
    )
  })

  test('openDialog should return a task URL dialog deep link', () => {
    const url = microsoftTeams.openDialog({
      appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
      url: 'https://example.com/task',
      height: 600,
      width: 800,
      title: 'Example Task',
      completionBotId: 'abcdef12-3456-7890-abcd-ef1234567890',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/task/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx?url=https%3A%2F%2Fexample.com%2Ftask&height=600&width=800&title=Example%20Task&completionBotId=abcdef12-3456-7890-abcd-ef1234567890',
    )
  })

  test('openDialog should return a task card dialog deep link', () => {
    const url = microsoftTeams.openDialog({
      appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
      card: '{"content":"example card content"}',
      height: 600,
      width: 800,
      title: 'Example Task',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/task/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx?card=%7B%22content%22%3A%22example%20card%20content%22%7D&height=600&width=800&title=Example%20Task',
    )
  })

  test('openNewChat should return a new chat deep link', () => {
    const url = microsoftTeams.openNewChat({
      users: ['joe@contoso.com', 'bob@contoso.com'],
      topicName: 'Prep For Meeting Tomorrow',
      message: 'Hi folks, kicking off a chat about our meeting tomorrow',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/chat/0/0?users=joe@contoso.com,bob@contoso.com&topicName=Prep%20For%20Meeting%20Tomorrow&message=Hi%20folks%2C%20kicking%20off%20a%20chat%20about%20our%20meeting%20tomorrow',
    )
  })

  test('openNewChat should support bot IDs prefixed with 28', () => {
    const url = microsoftTeams.openNewChat({
      users: ['28:47345678-2134-6534-9143-65146789012'],
      message: 'This message was triggered by a link!',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/chat/0/0?users=28:47345678-2134-6534-9143-65146789012&message=This%20message%20was%20triggered%20by%20a%20link!',
    )
  })

  test('openChat should return a chat conversation deep link', () => {
    const url = microsoftTeams.openChat({
      chatId: '19:c6d70e392a384916c3262b15406d763e@thread.v2',
    })

    expect(url).toBe('https://teams.microsoft.com/l/chat/19:c6d70e392a384916c3262b15406d763e@thread.v2/conversations')
  })

  test('openChannelConversation should return a channel conversation deep link', () => {
    const url = microsoftTeams.openChannelConversation({
      channelId: '19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2',
      messageId: '1648741500652',
      tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
      groupId: '3606f714-ec2e-41b3-9ad1-6afb331bd35d',
      parentMessageId: '1648741500652',
      teamName: 'Example Team',
      channelName: 'General',
      createdTime: '1648741500652',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/message/19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2/1648741500652?tenantId=0d9b645f-597b-41f0-a2a3-ef103fbd91bb&groupId=3606f714-ec2e-41b3-9ad1-6afb331bd35d&parentMessageId=1648741500652&teamName=Example%20Team&channelName=General&createdTime=1648741500652',
    )
  })

  test('openChatMessage should return a chat message deep link', () => {
    const url = microsoftTeams.openChatMessage({
      chatId: '19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces',
      messageId: '1563480968434',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/message/19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces/1563480968434?context=%7B%22contextType%22:%22chat%22%7D',
    )
  })

  test('openTeam should return a team deep link with an encoded channel ID', () => {
    const url = microsoftTeams.openTeam({
      channelId: '19:TWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41@thread.tacv2',
      groupId: '72602e12-78ac-474c-99d6-f619710353a9',
      tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/team/19%3ATWLPKo8lD4v8zDxyw4FnDYY-ovnBJG5CSjmrHUAoOz41%40thread.tacv2/conversations?groupId=72602e12-78ac-474c-99d6-f619710353a9&tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee',
    )
  })

  test('openChannel should return a standard channel deep link', () => {
    const url = microsoftTeams.openChannel({
      channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
      channelName: 'My example channel',
      groupId: '72602e12-78ac-474c-99d6-f619710353a9',
      tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/channel/19%3A9be3de4e70874c71a608dee9ba803ed3%40thread.tacv2/My%20example%20channel?groupId=72602e12-78ac-474c-99d6-f619710353a9&tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee',
    )
  })

  test('openChannel should return a shared channel deep link', () => {
    const url = microsoftTeams.openChannel({
      channelId: '19:9be3de4e70874c71a608dee9ba803ed3@thread.tacv2',
      channelName: 'My example channel',
      groupId: '72602e12-78ac-474c-99d6-f619710353a9',
      tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
      ngc: true,
      allowXTenantAccess: true,
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/channel/19%3A9be3de4e70874c71a608dee9ba803ed3%40thread.tacv2/My%20example%20channel?groupId=72602e12-78ac-474c-99d6-f619710353a9&tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&ngc=true&allowXTenantAccess=true',
    )
  })

  test('openFile should return a channel file deep link', () => {
    const url = microsoftTeams.openFile({
      fileId: '5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80',
      tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
      fileType: 'pptx',
      objectUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform/Shared Documents/deck.pptx',
      baseUrl: 'https://microsoft.sharepoint.com/teams/ActionPlatform',
      serviceName: 'teams',
      threadId: '19:f8fbfc4d89e24ef5b3b8692538cebeb7@thread.skype',
      groupId: 'ae063b79-5315-4ddb-ba70-27328ba6c31e',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/file/5E0154FC-F2B4-4DA5-8CDA-F096E72C0A80?tenantId=0d9b645f-597b-41f0-a2a3-ef103fbd91bb&fileType=pptx&objectUrl=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2FActionPlatform%2FShared%20Documents%2Fdeck.pptx&baseUrl=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2FActionPlatform&serviceName=teams&threadId=19:f8fbfc4d89e24ef5b3b8692538cebeb7@thread.skype&groupId=ae063b79-5315-4ddb-ba70-27328ba6c31e',
    )
  })

  test('openMeetingSchedulingDialog should return a scheduling dialog deep link', () => {
    const url = microsoftTeams.openMeetingSchedulingDialog({
      subject: 'test subject',
      attendees: ['joe@contoso.com', 'bob@contoso.com'],
      startTime: '2018-10-24T10:00:00-07:00',
      endTime: '2018-10-24T10:30:00-07:00',
      content: 'test:content',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/meeting/new?subject=test%20subject&startTime=2018-10-24T10%3A00%3A00-07%3A00&endTime=2018-10-24T10%3A30%3A00-07%3A00&content=test%3Acontent&attendees=joe@contoso.com,bob@contoso.com',
    )
  })

  test('startCall should return an audio-video call deep link', () => {
    const url = microsoftTeams.startCall({
      users: ['joe@contoso.com', '4:9876543210'],
      withVideo: true,
      source: 'demoApp',
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/call/0/0?users=joe@contoso.com,4:9876543210&withVideo=true&source=demoApp',
    )
  })

  test('shareToMeetingStage should return a web meeting-share deep link with double-encoded app context', () => {
    const url = microsoftTeams.shareToMeetingStage({
      deepLinkId: 'sampleid',
      fqdn: 'teams.microsoft.com',
      appContext: {
        appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
        appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
        useMeetNow: true,
      },
    })

    expect(url).toBe(
      'https://teams.microsoft.com/l/meeting-share?deeplinkId=sampleid&fqdn=teams.microsoft.com&lm=deeplink&appContext=%257B%2522appSharingUrl%2522%253A%2522https%253A%252F%252Fteams.microsoft.com%252Fextensibility-apps%252Fmeetingapis%252Fview%2522%252C%2522appId%2522%253A%25229cc80a93-1d41-4bcb-8170-4b9ec9e29fbb%2522%252C%2522useMeetNow%2522%253Atrue%257D',
    )
  })

  test('shareToMeetingStage should return a native meeting-share deep link', () => {
    const url = microsoftTeams.shareToMeetingStage({
      deepLinkId: 'sampleid',
      fqdn: 'teams.microsoft.com',
      protocol: 'msteams',
      appContext: {
        appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
        appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
        useMeetNow: false,
      },
    })

    expect(url).toBe(
      'msteams:/l/meeting-share?deeplinkId=sampleid&fqdn=teams.microsoft.com&lm=deeplink&appContext=%257B%2522appSharingUrl%2522%253A%2522https%253A%252F%252Fteams.microsoft.com%252Fextensibility-apps%252Fmeetingapis%252Fview%2522%252C%2522appId%2522%253A%25229cc80a93-1d41-4bcb-8170-4b9ec9e29fbb%2522%252C%2522useMeetNow%2522%253Afalse%257D',
    )
  })
})
