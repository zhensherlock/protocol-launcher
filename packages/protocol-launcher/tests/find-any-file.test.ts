import { describe, expect, test } from 'vitest'
import { findAnyFile } from '../src'

describe('findAnyFile', () => {
  test('should expose only Find Any File documented helpers', () => {
    expect(Object.keys(findAnyFile).sort()).toEqual(['find', 'findInLocation', 'findJson', 'findWithTemplate'])
  })

  test('find should return the official basic find URL', () => {
    const url = findAnyFile.find({ inp: 'invoice' })

    expect(url).toBe('fafapp://find?inp=invoice')
  })

  test('find should encode special query characters', () => {
    const url = findAnyFile.find({ inp: 'text #5' })

    expect(url).toBe('fafapp://find?inp=text%20%235')
  })

  test('find should serialize numbered input and location fields', () => {
    const url = findAnyFile.find({
      inp: ['invoice', '2026'],
      loc: ['#1', '~/Desktop'],
    })

    expect(url).toBe('fafapp://find?inp1=invoice&inp2=2026&loc1=%231&loc2=~%2FDesktop')
  })

  test('findInLocation should require and serialize a location', () => {
    const url = findAnyFile.findInLocation({
      loc: '~',
      inp: 'invoice',
    })

    expect(url).toBe('fafapp://find?inp=invoice&loc=~')
  })

  test('findWithTemplate should serialize template and advanced parameters', () => {
    const url = findAnyFile.findWithTemplate({
      tpl: 'LastWeek',
      inp: 'invoice',
      win: 2,
      root: 1,
      run: 0,
    })

    expect(url).toBe('fafapp://find?inp=invoice&win=2&root=1&run=0&tpl=LastWeek')
  })

  test('find should serialize the documented bare norun parameter', () => {
    const url = findAnyFile.find({
      inp: 'invoice',
      norun: true,
    })

    expect(url).toBe('fafapp://find?inp=invoice&norun')
  })

  test('find should keep the documented find prefix when no parameters are provided', () => {
    const url = findAnyFile.find()

    expect(url).toBe('fafapp://find?')
  })

  test('findJson should encode JSON search data', () => {
    const url = findAnyFile.findJson({
      jsondata: {
        specs: [{ verb: 9, val: 'report 2021', subj: 0 }],
        title: 'Name contains report 2021',
        autoStart: true,
        sources: ['/'],
      },
    })

    expect(url).toBe(
      'fafapp://findjson/{"specs":[{"verb":9,"val":"report%202021","subj":0}],"title":"Name%20contains%20report%202021","autoStart":true,"sources":["%2F"]}',
    )
  })

  test('findJson should append the documented window mode', () => {
    const url = findAnyFile.findJson({
      jsondata: '{"specs":[],"autoStart":false}',
      wmode: 2,
    })

    expect(url).toBe('fafapp://findjson/{"specs":[],"autoStart":false}/2')
  })
})
