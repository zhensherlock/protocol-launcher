import { describe, expect, test } from 'vitest'
import { timing } from '../src'

describe('timing', () => {
  test('should expose only the documented Timing URL scheme helpers', () => {
    expect(Object.keys(timing).sort()).toEqual([
      'createTimeEntry',
      'editTimeEntry',
      'selectProjects',
      'startTimer',
      'stopTimer',
    ])
  })

  describe('startTimer', () => {
    test('should return the documented start timer URL with all query parameters', () => {
      const url = timing.startTimer({
        title: 'Some title',
        notes: 'Some\nnotes',
        project: 'Work',
        estimatedDuration: 600,
        startDate: '2022-04-01T12:00:00Z',
        startImmediately: false,
        center: true,
      })

      expect(url).toBe(
        'timing2helper://startTimer?title=Some%20title&notes=Some%0Anotes&project=Work&estimatedDuration=600&startDate=2022-04-01T12:00:00Z&startImmediately=false&center=true',
      )
    })

    test('should omit optional start timer parameters', () => {
      const url = timing.startTimer()

      expect(url).toBe('timing2helper://startTimer')
    })
  })

  describe('stopTimer', () => {
    test('should return the documented stop timer URL with hideNotification', () => {
      const url = timing.stopTimer({ hideNotification: true })

      expect(url).toBe('timing2helper://stopTimer?hideNotification=true')
    })

    test('should omit optional stop timer parameters', () => {
      const url = timing.stopTimer()

      expect(url).toBe('timing2helper://stopTimer')
    })
  })

  describe('createTimeEntry', () => {
    test('should return the documented create time entry URL with query parameters', () => {
      const url = timing.createTimeEntry({
        title: 'Some title',
        notes: 'Some\nnotes',
        project: 'Work',
        startDate: '2022-04-01T12:00:00Z',
        endDate: '2022-04-01T12:30:00Z',
        createImmediately: false,
        center: true,
      })

      expect(url).toBe(
        'timing2helper://createTimeEntry?title=Some%20title&notes=Some%0Anotes&project=Work&startDate=2022-04-01T12:00:00Z&endDate=2022-04-01T12:30:00Z&createImmediately=false&center=true',
      )
    })

    test('should include the documented obtainFocus parameter when provided', () => {
      const url = timing.createTimeEntry({
        title: 'Review',
        startDate: '2022-04-01T12:00:00Z',
        endDate: '2022-04-01T12:30:00Z',
        obtainFocus: false,
      })

      expect(url).toBe(
        'timing2helper://createTimeEntry?title=Review&startDate=2022-04-01T12:00:00Z&endDate=2022-04-01T12:30:00Z&obtainFocus=false',
      )
    })

    test('should omit optional create time entry parameters', () => {
      const url = timing.createTimeEntry()

      expect(url).toBe('timing2helper://createTimeEntry')
    })
  })

  test('editTimeEntry should return the documented URL by ID', () => {
    const url = timing.editTimeEntry({ id: '1234' })

    expect(url).toBe('timing2helper://editTimeEntry/1234')
  })

  test('editTimeEntry should support the documented latest keyword', () => {
    const url = timing.editTimeEntry({ id: 'latest' })

    expect(url).toBe('timing2helper://editTimeEntry/latest')
  })

  describe('selectProjects', () => {
    test('should return the documented select projects URL with one project', () => {
      const url = timing.selectProjects({ projects: ['1234'] })

      expect(url).toBe('timing2://selectProjects/1234')
    })

    test('should return the documented select projects URL with multiple projects', () => {
      const url = timing.selectProjects({ projects: ['ProjectA', 'ProjectB'] })

      expect(url).toBe('timing2://selectProjects/ProjectA/ProjectB')
    })

    test('should select all activities when projects are omitted', () => {
      const url = timing.selectProjects()

      expect(url).toBe('timing2://selectProjects')
    })

    test('should encode project path segments', () => {
      const url = timing.selectProjects({ projects: ['Client Work'] })

      expect(url).toBe('timing2://selectProjects/Client%20Work')
    })
  })
})
