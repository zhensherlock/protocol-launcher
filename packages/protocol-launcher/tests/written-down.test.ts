import { describe, expect, test } from 'vitest'
import { writtenDown } from '../src'

describe('writtenDown', () => {
  test('create should return the official create URL without parameters', () => {
    const url = writtenDown.create()

    expect(url).toBe('writtendown://x-callback-url/create')
  })

  test('create should include documented optional parameters', () => {
    const url = writtenDown.create({
      text: "It's beautiful today",
      journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
      tags: 'thoughts,weather',
      latlng: '37.331686,-122.030656',
      date: '2017-12-19T16:39:57-08:00',
    })

    expect(url).toBe(
      'writtendown://x-callback-url/create?text=It%27s%20beautiful%20today&journalID=4739C5F8-AF19-49A3-B6BD-2561962C75CC&tags=thoughts,weather&latlng=37.331686,-122.030656&date=2017-12-19T16:39:57-08:00',
    )
  })

  test('create should match the official example URL shape', () => {
    const url = writtenDown.create({
      text: "It's beautiful today",
      tags: 'thoughts,weather',
      latlng: '37.331686,-122.030656',
    })

    expect(url).toBe(
      'writtendown://x-callback-url/create?text=It%27s%20beautiful%20today&tags=thoughts,weather&latlng=37.331686,-122.030656',
    )
  })

  test('openEntry should return the official open-entry URL', () => {
    const url = writtenDown.openEntry({
      id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
    })

    expect(url).toBe('writtendown://x-callback-url/open-entry?id=4739C5F8-AF19-49A3-B6BD-2561962C75CC')
  })

  test('editEntry should return the official edit-entry URL with id', () => {
    const url = writtenDown.editEntry({
      id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
    })

    expect(url).toBe('writtendown://x-callback-url/edit-entry?id=4739C5F8-AF19-49A3-B6BD-2561962C75CC')
  })

  test('editEntry should include documented optional parameters', () => {
    const url = writtenDown.editEntry({
      id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
      text: 'Another thought',
      mode: 'replace',
      tags: 'thoughts,feelings',
      tagMode: 'delete',
      latlng: 'delete',
      date: '2017-12-19T16:39:57-08:00',
    })

    expect(url).toBe(
      'writtendown://x-callback-url/edit-entry?id=4739C5F8-AF19-49A3-B6BD-2561962C75CC&text=Another%20thought&mode=replace&tags=thoughts,feelings&tagMode=delete&latlng=delete&date=2017-12-19T16:39:57-08:00',
    )
  })

  test('openJournal should return the official open-journal URL', () => {
    const url = writtenDown.openJournal({
      journalID: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
    })

    expect(url).toBe('writtendown://x-callback-url/open-journal?journalID=4739C5F8-AF19-49A3-B6BD-2561962C75CC')
  })
})
