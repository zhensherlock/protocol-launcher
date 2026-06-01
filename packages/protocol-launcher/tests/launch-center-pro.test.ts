import { describe, expect, test } from 'vitest'
import { launchCenterPro } from '../src'

describe('launchCenterPro', () => {
  test('open should return a URL', () => {
    const url = launchCenterPro.open()

    expect(url).toBe('launch://')
  })

  test('brightness should return a URL', () => {
    const url = launchCenterPro.brightness()

    expect(url).toBe('launch://brightness')
  })

  test('brightness should use x-callback-url when x-success is present', () => {
    const url = launchCenterPro.brightness({
      xSuccess: 'tweetbot:///',
    })

    expect(url).toBe('launch://x-callback-url/brightness?x-success=tweetbot%3A%2F%2F%2F')
  })

  test('clipboard should return the official text example URL', () => {
    const url = launchCenterPro.clipboard({
      text: 'mytext',
    })

    expect(url).toBe('launch://clipboard?text=mytext')
  })

  test('clipboard should return the official photo attachment example URL', () => {
    const url = launchCenterPro.clipboard({
      attach: 'photo:last',
    })

    expect(url).toBe('launch://clipboard?attach=photo%3Alast')
  })

  test('define should return a URL', () => {
    const url = launchCenterPro.define()

    expect(url).toBe('launch://define')
  })

  test('dropbox should return the official base URL', () => {
    const url = launchCenterPro.dropbox()

    expect(url).toBe('launch://dropbox')
  })

  test('dropboxAddPhoto should return the official front camera example URL', () => {
    const url = launchCenterPro.dropboxAddPhoto({
      attach: 'photo:frontcamera',
      path: '/selfies/',
    })

    expect(url).toBe('launch://dropbox/addphoto?attach=photo%3Afrontcamera&path=%2Fselfies%2F')
  })

  test('dropboxAddPhoto should return the official getlink example URL', () => {
    const url = launchCenterPro.dropboxAddPhoto({
      attach: 'photo:last',
      path: '/photos/',
      getlink: 'yes',
    })

    expect(url).toBe('launch://dropbox/addphoto?attach=photo%3Alast&path=%2Fphotos%2F&getlink=yes')
  })

  test('dropboxAddPhoto should preserve uppercase official yes value', () => {
    const url = launchCenterPro.dropboxAddPhoto({
      attach: 'photo:last',
      path: '/photos/',
      name: 'daily.jpg',
      getlink: 'YES',
    })

    expect(url).toBe('launch://dropbox/addphoto?attach=photo%3Alast&path=%2Fphotos%2F&name=daily.jpg&getlink=YES')
  })

  test('dropboxAddPhoto should use x-callback-url when x-success is present', () => {
    const url = launchCenterPro.dropboxAddPhoto({
      attach: 'photo:last',
      getlink: 'yes',
      xSuccess: 'tweetbot://',
    })

    expect(url).toBe(
      'launch://x-callback-url/dropbox/addphoto?attach=photo%3Alast&getlink=yes&x-success=tweetbot%3A%2F%2F',
    )
  })

  test('dropboxAddPhoto should return the official tweet callback example URL', () => {
    const url = launchCenterPro.dropboxAddPhoto({
      attach: 'photo:last',
      path: '/snaps/',
      getlink: 'yes',
      xSuccess: 'launch://tweet?text=[clipboard]',
    })

    expect(url).toBe(
      'launch://x-callback-url/dropbox/addphoto?attach=photo%3Alast&path=%2Fsnaps%2F&getlink=yes&x-success=launch%3A%2F%2Ftweet%3Ftext%3D%5Bclipboard%5D',
    )
  })

  test('dropboxNew should return the official prompt text example URL', () => {
    const url = launchCenterPro.dropboxNew({
      text: '[prompt-return:My Note]',
    })

    expect(url).toBe('launch://dropbox/new?text=%5Bprompt-return%3AMy%20Note%5D')
  })

  test('dropboxNew should include path, name, overwrite and getlink', () => {
    const url = launchCenterPro.dropboxNew({
      text: '[clipboard]',
      path: '/Notes/',
      name: 'MyFile.markdown',
      overwrite: 'NO',
      getlink: 'YES',
    })

    expect(url).toBe(
      'launch://dropbox/new?text=%5Bclipboard%5D&path=%2FNotes%2F&name=MyFile.markdown&overwrite=NO&getlink=YES',
    )
  })

  test('dropboxAppend should include linebreak', () => {
    const url = launchCenterPro.dropboxAppend({
      text: 'Next line',
      name: 'MyFile.markdown',
      linebreak: 'NO',
    })

    expect(url).toBe('launch://dropbox/append?text=Next%20line&name=MyFile.markdown&linebreak=NO')
  })

  test('dropboxPrepend should include leavefirstline', () => {
    const url = launchCenterPro.dropboxPrepend({
      text: 'First line\nBody',
      name: 'note_[firstline].text',
      leavefirstline: 'NO',
    })

    expect(url).toBe(
      'launch://dropbox/prepend?text=First%20line%0ABody&name=note_%5Bfirstline%5D.text&leavefirstline=NO',
    )
  })

  test('dropboxClipboard should return the official base URL', () => {
    const url = launchCenterPro.dropboxClipboard()

    expect(url).toBe('launch://dropbox/clipboard')
  })

  test('dropboxClipboard should return the official path and linkonly example URL', () => {
    const url = launchCenterPro.dropboxClipboard({
      path: '/photos/',
      linkonly: 'yes',
    })

    expect(url).toBe('launch://dropbox/clipboard?path=%2Fphotos%2F&linkonly=yes')
  })

  test('dropboxClipboard should use x-callback-url when x-success is present', () => {
    const url = launchCenterPro.dropboxClipboard({
      path: '/photos/myfunnycat.gif',
      xSuccess: 'drafts://x-callback-url/create',
    })

    expect(url).toBe(
      'launch://x-callback-url/dropbox/clipboard?path=%2Fphotos%2Fmyfunnycat.gif&x-success=drafts%3A%2F%2Fx-callback-url%2Fcreate',
    )
  })

  test('dropboxCopyDirectLink should return the official URL', () => {
    const url = launchCenterPro.dropboxCopyDirectLink()

    expect(url).toBe('launch://dropbox/copy/directlink')
  })

  test('email should return the official last photo example URL', () => {
    const url = launchCenterPro.email({
      to: 'sample@contrast.co',
      subject: 'Last Photo',
      body: '',
      cc: '',
      bcc: '',
      attach: 'photo:last',
    })

    expect(url).toBe('launch://email?to=sample%40contrast.co&subject=Last%20Photo&body=&cc=&bcc=&attach=photo%3Alast')
  })

  test('email should use x-callback-url when x-success is present', () => {
    const url = launchCenterPro.email({
      to: 'sample@contrast.co',
      subject: 'Last Photo',
      body: '',
      cc: '',
      bcc: '',
      attach: 'photo:last',
      xSuccess: 'launch://messaging?to=555-555-5555&attach=photo:last',
    })

    expect(url).toBe(
      'launch://x-callback-url/email?to=sample%40contrast.co&subject=Last%20Photo&body=&cc=&bcc=&attach=photo%3Alast&x-success=launch%3A%2F%2Fmessaging%3Fto%3D555-555-5555%26attach%3Dphoto%3Alast',
    )
  })

  test('messaging should return the official last photo example URL', () => {
    const url = launchCenterPro.messaging({
      to: '555-555-5555',
      attach: 'photo:last',
    })

    expect(url).toBe('launch://messaging?to=555-555-5555&attach=photo%3Alast')
  })

  test('messaging should return the official Dropbox attachment example URL', () => {
    const url = launchCenterPro.messaging({
      to: '555-555-5555',
      body: '[prompt:Body]',
      attach: 'photo:dropbox',
      path: 'reactions',
    })

    expect(url).toBe(
      'launch://messaging?to=555-555-5555&body=%5Bprompt%3ABody%5D&attach=photo%3Adropbox&path=reactions',
    )
  })

  test('messaging should return the official Dropbox text tag example URL', () => {
    const url = launchCenterPro.messaging({
      to: '555-555-5555',
      body: '[dropbox-text:messages]',
    })

    expect(url).toBe('launch://messaging?to=555-555-5555&body=%5Bdropbox-text%3Amessages%5D')
  })

  test('messaging should return the official Giphy attachment URL', () => {
    const url = launchCenterPro.messaging({
      attach: 'photo:gif',
    })

    expect(url).toBe('launch://messaging?attach=photo%3Agif')
  })

  test('messaging should return the official Giphy search URL', () => {
    const url = launchCenterPro.messaging({
      attach: 'photo:gif',
      'gif-search': 'excited',
    })

    expect(url).toBe('launch://messaging?attach=photo%3Agif&gif-search=excited')
  })

  test('messaging should return the official Giphy ID URL', () => {
    const url = launchCenterPro.messaging({
      attach: 'photo:gif',
      'gif-id': '5GoVLqeAOo6PK',
    })

    expect(url).toBe('launch://messaging?attach=photo%3Agif&gif-id=5GoVLqeAOo6PK')
  })

  test('qr should return the official URL', () => {
    const url = launchCenterPro.qr()

    expect(url).toBe('launch://qr')
  })

  test('schedule should return the official action schedule example URL', () => {
    const url = launchCenterPro.schedule({
      action: 179,
      in: '1h',
      repeat: 'specificdays',
      days: 'm,tu,w,th,f',
    })

    expect(url).toBe('launch://schedule?action=179&in=1h&repeat=specificdays&days=m%2Ctu%2Cw%2Cth%2Cf')
  })

  test('schedule should return the official URL schedule example URL', () => {
    const url = launchCenterPro.schedule({
      url: '[url:https://apple.com]',
      in: '10min',
    })

    expect(url).toBe('launch://schedule?url=%5Burl%3Ahttps%3A%2F%2Fapple.com%5D&in=10min')
  })

  test('shareSheet should return the official photo example URL', () => {
    const url = launchCenterPro.shareSheet({
      attach: 'photo',
    })

    expect(url).toBe('launch://sharesheet?attach=photo')
  })

  test('shareSheet should return the official combined example URL', () => {
    const url = launchCenterPro.shareSheet({
      attach: 'photo:last',
      text: '[prompt-fleksy:Notes]',
      url: '[clipboard]',
    })

    expect(url).toBe('launch://sharesheet?attach=photo%3Alast&text=%5Bprompt-fleksy%3ANotes%5D&url=%5Bclipboard%5D')
  })

  test('speak should return a URL with text', () => {
    const url = launchCenterPro.speak({
      text: 'Hello master!',
    })

    expect(url).toBe('launch://speak?text=Hello%20master!')
  })

  test('speak should use x-callback-url when x-success is present', () => {
    const url = launchCenterPro.speak({
      text: 'Hello master!',
      xSuccess: '[action:15]',
    })

    expect(url).toBe('launch://x-callback-url/speak?text=Hello%20master!&x-success=%5Baction%3A15%5D')
  })
})
