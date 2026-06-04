import { describe, expect, test } from 'vitest'
import { onsong } from '../src'

describe('onsong', () => {
  test('open should launch OnSong', () => {
    expect(onsong.open()).toBe('onsong://')
  })

  test('importUrl should replace the official http:// component with onsong://', () => {
    const url = onsong.importUrl({
      url: 'http://my.domain.com/files/go/here/Song%20Title.txt',
    })

    expect(url).toBe('onsong://my.domain.com/files/go/here/Song%20Title.txt')
  })

  test('importUrl should reject unsupported URL formats', () => {
    expect(() =>
      onsong.importUrl({
        url: 'https://my.domain.com/files/go/here/Song%20Title.txt',
      }),
    ).toThrow('OnSong importUrl requires an http:// URL to replace with onsong://.')

    expect(() =>
      onsong.importUrl({
        url: 'onsong://my.domain.com/files/go/here/Song%20Title.txt',
      }),
    ).toThrow('OnSong importUrl requires an http:// URL to replace with onsong://.')
  })

  test('importData should return the official ImportData URL shape', () => {
    const url = onsong.importData({
      filename: 'My Song Title.pdf',
      base64Data: 'BASE_64_ENCODED_DATA_HERE',
    })

    expect(url).toBe('onsong://ImportData/My%20Song%20Title.pdf?BASE_64_ENCODED_DATA_HERE')
  })

  test('openSong should match the official title example', () => {
    expect(onsong.openSong({ song: 'be-still' })).toBe('onsong://open/songs?song=be-still')
  })

  test('openSongs should support song identifiers, collections, sets, and navigation indexes', () => {
    expect(onsong.openSongs({ song: '85F0CE06-7414-4FFB-BFF0-14D3507A1AA7' })).toBe(
      'onsong://open/songs/?song=85F0CE06-7414-4FFB-BFF0-14D3507A1AA7',
    )
    expect(onsong.openSongs({ collection: 'all-songs' })).toBe('onsong://open/songs/?collection=all-songs')
    expect(onsong.openSongs({ collection: 'christmas-songs' })).toBe('onsong://open/songs/?collection=christmas-songs')
    expect(onsong.openSongs({ set: 'current-set' })).toBe('onsong://open/songs/?set=current-set')
    expect(onsong.openSongs({ index: 'first' })).toBe('onsong://open/songs?index=first')
    expect(onsong.openSongs({ index: 'last' })).toBe('onsong://open/songs?index=last')
    expect(onsong.openSongs({ index: 'next' })).toBe('onsong://open/songs?index=next')
    expect(onsong.openSongs({ index: 'previous' })).toBe('onsong://open/songs?index=previous')
    expect(onsong.openSongs({ index: 1 })).toBe('onsong://open/songs?index=1')
  })

  test('openSongs should serialize repeated song parameters and optional set/index values', () => {
    expect(
      onsong.openSongs({
        song: ['be-still', 'beautiful-life', 'changes'],
        index: 1,
      }),
    ).toBe('onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&index=1')

    expect(
      onsong.openSongs({
        song: ['be-still', 'beautiful-life', 'changes'],
        set: 'New Set',
      }),
    ).toBe('onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&set=New+Set')

    expect(
      onsong.openSongs({
        song: ['be-still', 'beautiful-life', 'changes'],
        set: 'current',
      }),
    ).toBe('onsong://open/songs/?song=be-still&song=beautiful-life&song=changes&set=current')

    expect(
      onsong.openSongs({
        song: '85F0CE06-7414-4FFB-BFF0-14D3507A1AA7',
        index: 3,
        set: '8DD5B78C-205A-4F6E-AD09-63711F372BD3',
      }),
    ).toBe(
      'onsong://open/songs/?song=85F0CE06-7414-4FFB-BFF0-14D3507A1AA7&index=3&set=8DD5B78C-205A-4F6E-AD09-63711F372BD3',
    )
  })

  test('openSongs should reject payloads missing official query values', () => {
    expect(() => onsong.openSongs({} as never)).toThrow(
      'OnSong openSongs requires at least one of song, collection, set, or index.',
    )
    expect(() => onsong.openSongs({ song: [] })).toThrow(
      'OnSong openSongs requires at least one of song, collection, set, or index.',
    )
    expect(() =>
      onsong.openSongs({
        collection: 'all-songs',
        index: 'next',
      } as never),
    ).toThrow('OnSong openSongs collection URLs cannot be combined with song, set, or index.')
    expect(() =>
      onsong.openSongs({
        set: 'current-set',
        index: 'next',
      } as never),
    ).toThrow('OnSong openSongs set navigation requires a song value.')
  })

  test('exportSongs should return the official export songs URL', () => {
    const url = onsong.exportSongs({
      collection: 'current',
      returnURL: 'http://mywebsite.com/receive?data=',
    })

    expect(url).toBe(
      'onsong://export/songs?collection=current&returnURL=http%3A%2F%2Fmywebsite%2Ecom%2Freceive%3Fdata%3D',
    )
  })

  test('exportSongs should reject payloads without a song, set, or collection', () => {
    expect(() =>
      onsong.exportSongs({
        returnURL: 'http://mywebsite.com/receive?data=',
      } as never),
    ).toThrow('OnSong exportSongs requires at least one of song, set, or collection.')
    expect(() =>
      onsong.exportSongs({
        collection: 'current',
        set: 'current-set',
        returnURL: 'http://mywebsite.com/receive?data=',
      } as never),
    ).toThrow('OnSong exportSongs requires exactly one of song, set, or collection.')
  })

  test('listActions should return the official action list URLs', () => {
    expect(onsong.listActions()).toBe('onsong://action/list')
    expect(
      onsong.listActions({
        returnURL: 'myapp://retrieve-actions/?data=',
      }),
    ).toBe('onsong://action/list?returnURL=myapp%3A%2F%2Fretrieve-actions%2F%3Fdata%3D')
  })

  test('performAction should return official momentary, variable, and parameterized action URLs', () => {
    expect(onsong.performAction({ action: 'ForwardPedalWasPressed' })).toBe('onsong://action/ForwardPedalWasPressed')
    expect(
      onsong.performAction({
        action: 'PositionWasAdjusted',
        amount: 0.5,
      }),
    ).toBe('onsong://action/PositionWasAdjusted?amount=0.5')
    expect(
      onsong.performAction({
        action: 'SongSectionWasPressed',
        parameters: {
          sectionID: 'Chorus',
        },
      }),
    ).toBe('onsong://action/SongSectionWasPressed?sectionID=Chorus')
  })

  test('performAction should reject variable action amounts outside the documented percentage range', () => {
    expect(() =>
      onsong.performAction({
        action: 'PositionWasAdjusted',
        amount: 1.1,
      }),
    ).toThrow('OnSong action amount must be between 0 and 1.')
  })
})
