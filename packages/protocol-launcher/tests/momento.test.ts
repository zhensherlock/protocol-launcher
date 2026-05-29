import { describe, expect, test } from 'vitest'
import { momento } from '../src'

describe('momento', () => {
  test('open should return the official Momento launch URL', () => {
    const url = momento.open()

    expect(url).toBe('momento://')
  })

  test('open should support the official Momento 3 scheme', () => {
    const url = momento.open({
      scheme: 'momento-3',
    })

    expect(url).toBe('momento-3://')
  })

  test('newMoment should return the official Add Moment URL', () => {
    const url = momento.newMoment()

    expect(url).toBe('momento://new/')
  })

  test('newMoment should return the URL-encoded official text and repeated tag example URL', () => {
    const url = momento.newMoment({
      text: 'Just Arrived!',
      tag: ['Holiday', 'Summer'],
    })

    expect(url).toBe('momento://new/?text=Just%20Arrived!&tag=Holiday&tag=Summer')
  })

  test('newPhotos should return the official Add Photos URL', () => {
    const url = momento.newPhotos()

    expect(url).toBe('momento://new/photos')
  })

  test('newPeople should return the official Add People URL', () => {
    const url = momento.newPeople()

    expect(url).toBe('momento://new/people')
  })

  test('newPlaces should return the official Add Places URL', () => {
    const url = momento.newPlaces()

    expect(url).toBe('momento://new/places')
  })

  test('newPlaces should return the official places example URL', () => {
    const url = momento.newPlaces({
      text: 'Just Arrived!',
      tag: ['Holiday', 'Summer'],
    })

    expect(url).toBe('momento://new/places?text=Just%20Arrived!&tag=Holiday&tag=Summer')
  })

  test('newTags should return the official Add Tags URL', () => {
    const url = momento.newTags()

    expect(url).toBe('momento://new/tags')
  })

  test('newDate should return the official Add Moment and Change Date URL', () => {
    const url = momento.newDate()

    expect(url).toBe('momento://new/date')
  })

  test('newCamera should return the official Camera URL', () => {
    const url = momento.newCamera()

    expect(url).toBe('momento://new/camera')
  })

  test('newCamera should return the official front camera URL', () => {
    const url = momento.newCamera({
      front: true,
    })

    expect(url).toBe('momento://new/camera?front=true')
  })

  test('newCamera should return the URL-encoded official camera text and repeated tag example URL', () => {
    const url = momento.newCamera({
      text: 'Just Arrived!',
      tag: ['Holiday', 'Summer'],
    })

    expect(url).toBe('momento://new/camera?text=Just%20Arrived!&tag=Holiday&tag=Summer')
  })

  test('newDate should support the official Momento 3 scheme', () => {
    const url = momento.newDate({
      scheme: 'momento-3',
    })

    expect(url).toBe('momento-3://new/date')
  })
})
