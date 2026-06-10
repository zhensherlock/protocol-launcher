import { describe, expect, test } from 'vitest'
import { ringcentral } from '../src'

describe('ringcentral', () => {
  test('call should return the official RingCentral mobile call URI', () => {
    const url = ringcentral.call({
      phoneNumber: '15551234567',
    })

    expect(url).toBe('rcmobile://call?number=15551234567')
  })

  test('sms should return the official RingCentral mobile SMS URI', () => {
    const url = ringcentral.sms({
      phoneNumber: '15551234567',
    })

    expect(url).toBe('rcmobile://sms?number=15551234567')
  })

  test('mobile screen helpers should return the documented RingCentral mobile URIs', () => {
    expect(ringcentral.conference()).toBe('rcmobile://conference')
    expect(ringcentral.meeting()).toBe('rcmobile://meeting')
    expect(ringcentral.contacts()).toBe('rcmobile://contacts')
    expect(ringcentral.voicemail()).toBe('rcmobile://voicemail')
    expect(ringcentral.history()).toBe('rcmobile://history')
  })

  test('mobile Team Messaging helpers should return the documented glip URIs', () => {
    expect(ringcentral.openTeam({ teamId: 'team-123' })).toBe('rcmobile://glip/team?id=team-123')
    expect(ringcentral.openChat({ userId: 'user-123' })).toBe('rcmobile://glip/chat?id=user-123')
    expect(ringcentral.openPost({ postId: 'post-123' })).toBe('rcmobile://glip/post?id=post-123')
    expect(ringcentral.openFile({ fileId: 'file-123' })).toBe('rcmobile://glip/file?id=file-123')
    expect(ringcentral.openTask({ taskId: 'task-123' })).toBe('rcmobile://glip/task?id=task-123')
    expect(ringcentral.openEvent({ eventId: 'event-123' })).toBe('rcmobile://glip/event?id=event-123')
  })

  test('signIn should return the official RingCentral app sign-in URI', () => {
    expect(ringcentral.signIn()).toBe('rcapp://r/signin')
  })

  test('system URI helpers should return the official tel and sms URI forms', () => {
    expect(ringcentral.tel({ phoneNumber: '15551234567' })).toBe('tel:15551234567')
    expect(ringcentral.systemSms({ phoneNumber: '15551234567' })).toBe('sms:15551234567')
  })

  test('openWebTeamChat should return the official RingCentral web team chat link', () => {
    const url = ringcentral.openWebTeamChat({
      groupId: 'group-123',
    })

    expect(url).toBe('https://app.ringcentral.com/chat/r?groupid=group-123')
  })

  test('openWebInvitation should return the official RingCentral web invitation link', () => {
    const url = ringcentral.openWebInvitation({
      groupId: 'group-123',
      email: 'member@example.com',
    })

    expect(url).toBe(
      'https://app.ringcentral.com/invitation/r?inviter_group_id=group-123&inviter_email=member%40example.com',
    )
  })

  test('web app path helpers should return the documented RingCentral web links', () => {
    expect(ringcentral.openWebGroup({ groupId: 'group-123' })).toBe('https://app.ringcentral.com/group/group-123')
    expect(ringcentral.openWebMessageThread({ messageId: 'message-123' })).toBe(
      'https://app.ringcentral.com/message/message-123',
    )
    expect(ringcentral.openWebChat({ chatId: 'chat-123' })).toBe('https://app.ringcentral.com/chat/chat-123')
    expect(ringcentral.openWebTask({ taskId: 'task-123' })).toBe('https://app.ringcentral.com/tasks/task-123')
    expect(ringcentral.openWebFile({ fileId: 'file-123' })).toBe('https://app.ringcentral.com/files/file-123')
    expect(ringcentral.openWebEvent({ eventId: 'event-123' })).toBe('https://app.ringcentral.com/events/event-123')
  })

  test('openWebTeamMessage should return the official team message web link', () => {
    const url = ringcentral.openWebTeamMessage({
      teamId: 'team-123',
      messageId: 'message-123',
    })

    expect(url).toBe('https://app.ringcentral.com/message?teamId=team-123&messageId=message-123')
  })

  test('desktopCall should return the official RingCentral desktop call link', () => {
    const url = ringcentral.desktopCall({
      phoneNumber: '15551234567',
    })

    expect(url).toBe('/r/call?number=15551234567')
  })

  test('desktopDialer should omit optional values and support prefilled numbers', () => {
    expect(ringcentral.desktopDialer()).toBe('/r/dialer')
    expect(ringcentral.desktopDialer({ phoneNumber: '15551234567' })).toBe('/r/dialer?number=15551234567')
  })

  test('desktopSms should return the documented SMS composer links', () => {
    expect(ringcentral.desktopSms()).toBe('/r/sms?type=new')
    expect(ringcentral.desktopSms({ phoneNumber: '15551234567' })).toBe('/r/sms?type=new&number=15551234567')
    expect(ringcentral.desktopSms({ phoneNumber: '15551234567', content: 'Hello team' })).toBe(
      '/r/sms?type=new&number=15551234567&content=Hello%20team',
    )
  })

  test('desktopFax should return the official RingCentral fax composer link', () => {
    expect(ringcentral.desktopFax()).toBe('/r/fax?type=new')
  })

  test('joinVideo should return the official RingCentral Video meeting links', () => {
    expect(ringcentral.joinVideo({ meetingId: '123456789' })).toBe('https://v.ringcentral.com/join/123456789')
    expect(ringcentral.joinVideo({ meetingId: '123456789', password: 'pass code' })).toBe(
      'https://v.ringcentral.com/join/123456789?pw=pass%20code',
    )
  })
})
