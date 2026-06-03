import { describe, expect, test } from 'vitest'
import { fulcrum } from '../src'

const formId = 'c55adab9-916d-46e9-98aa-7a2388a77b24'
const recordId = '11fb2a54-5158-4848-8695-c405c54525e4'

describe('fulcrum', () => {
  test('should expose only the documented Fulcrum URL helpers', () => {
    expect(Object.keys(fulcrum).sort()).toEqual([
      'createWebRecord',
      'editRecord',
      'editRecordAction',
      'editWebRecord',
      'newRecord',
      'newRecordAction',
      'open',
      'openWebForm',
      'openWebRecord',
    ])
  })

  test('open should return the Fulcrum mobile open URL', () => {
    const url = fulcrum.open()

    expect(url).toBe('fulcrumapp://open')
  })

  test('open should support the documented form_id parameter', () => {
    const url = fulcrum.open({ formId })

    expect(url).toBe('fulcrumapp://open?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24')
  })

  test('newRecord should return the official minimal example URL', () => {
    const url = fulcrum.newRecord({
      formId,
      attributes: {
        number_of_floors: 3,
        sq_footage: 2300,
      },
    })

    expect(url).toBe(
      'fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&number_of_floors=3&sq_footage=2300',
    )
  })

  test('newRecord should support the documented status, location, and attribute parameters', () => {
    const url = fulcrum.newRecord({
      formId,
      status: 'incomplete',
      attributes: {
        sq_footage: 2300,
        name: 'My Awesome Building',
        number_of_floors: 3,
      },
      latitude: 28.038046,
      longitude: -81.952514,
    })

    expect(url).toBe(
      'fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&status=incomplete&sq_footage=2300&name=My%20Awesome%20Building&number_of_floors=3&latitude=28.038046&longitude=-81.952514',
    )
  })

  test('newRecord should support the documented project_id parameter', () => {
    const url = fulcrum.newRecord({
      formId,
      projectId: 'project-123',
    })

    expect(url).toBe('fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&project_id=project-123')
  })

  test('editRecord should return the official example URL', () => {
    const url = fulcrum.editRecord({
      recordId,
      status: 'incomplete',
      attributes: {
        sq_footage: 2300,
        name: 'SNI',
        number_of_floors: 3,
      },
      latitude: 28.038046,
      longitude: -81.952514,
    })

    expect(url).toBe(
      'fulcrumapp://edit-record?record_id=11fb2a54-5158-4848-8695-c405c54525e4&status=incomplete&sq_footage=2300&name=SNI&number_of_floors=3&latitude=28.038046&longitude=-81.952514',
    )
  })

  test('openWebForm should return the Fulcrum web dash URL', () => {
    const url = fulcrum.openWebForm({ formId })

    expect(url).toBe('https://web.fulcrumapp.com/dash/c55adab9-916d-46e9-98aa-7a2388a77b24')
  })

  test('openWebForm should support the documented mode parameter', () => {
    const url = fulcrum.openWebForm({ formId, mode: 'split' })

    expect(url).toBe('https://web.fulcrumapp.com/dash/c55adab9-916d-46e9-98aa-7a2388a77b24?mode=split')
  })

  test('createWebRecord should return the Fulcrum web new record URL', () => {
    const url = fulcrum.createWebRecord()

    expect(url).toBe('https://web.fulcrumapp.com/records/new')
  })

  test('openWebRecord should return the Fulcrum web record URL', () => {
    const url = fulcrum.openWebRecord({ recordId })

    expect(url).toBe('https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4')
  })

  test('editWebRecord should return the Fulcrum web edit record URL', () => {
    const url = fulcrum.editWebRecord({ recordId })

    expect(url).toBe('https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4?mode=edit')
  })

  test('newRecordAction should return the documented web action redirect URL', () => {
    const url = fulcrum.newRecordAction({ formId: '123-xyz' })

    expect(url).toBe('https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz')
  })

  test('editRecordAction should return the documented web action redirect URL', () => {
    const url = fulcrum.editRecordAction({ recordId: 'xyz-123' })

    expect(url).toBe('https://web.fulcrumapp.com/action/#edit-record?record_id=xyz-123')
  })
})
