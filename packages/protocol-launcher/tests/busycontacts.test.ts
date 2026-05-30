import { describe, expect, test } from 'vitest'
import { busycontacts } from '../src'

describe('busycontacts', () => {
  describe('contact lookup URLs', () => {
    test('show should match the official contact email example URL', () => {
      const url = busycontacts.show({
        identifier: 'test@apple.com',
      })

      expect(url).toBe('busycontacts://show/test@apple.com')
    })

    test('show should return the official contact UID URL', () => {
      const url = busycontacts.show({
        identifier: 'f90221ac-84a8-4f40-a699-5930b59a24d1',
      })

      expect(url).toBe('busycontacts://show/f90221ac-84a8-4f40-a699-5930b59a24d1')
    })

    test('openContact should open the contact in a floating window', () => {
      const url = busycontacts.openContact({
        identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson',
      })

      expect(url).toBe('busycontacts://open/B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson')
    })
  })

  describe('creation and utility URLs', () => {
    test('newContact should return the official natural language contact URL', () => {
      const url = busycontacts.newContact({
        text: 'Bob Jones 555-1212',
      })

      expect(url).toBe('busycontacts://new/Bob%20Jones%20555-1212')
    })

    test('newContact should match the official address book hint example URL', () => {
      const url = busycontacts.newContact({
        text: 'Bob Jones 123 Main Street, Anytown USA /iCloud',
      })

      expect(url).toBe('busycontacts://new/Bob%20Jones%20123%20Main%20Street,%20Anytown%20USA%20/iCloud')
    })

    test('selectFilter should select a Smart Filter by name', () => {
      expect(busycontacts.selectFilter({ name: 'friends' })).toBe('busycontacts://filter/friends')
      expect(busycontacts.selectFilter({ name: 'Team Contacts' })).toBe('busycontacts://filter/Team%20Contacts')
    })

    test('backup should return the official backup URL', () => {
      expect(busycontacts.backup()).toBe('busycontacts://backup')
    })
  })
})
