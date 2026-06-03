import { qs } from '@protocol-launcher/shared'

export type FulcrumParameterValue = string | number

export type FulcrumRecordAttributes = Record<string, FulcrumParameterValue | null | undefined>

export type FulcrumOpen = {
  /**
   * The form ID to open when Fulcrum launches.
   */
  formId?: string
}

export type FulcrumRecordLocation = {
  /**
   * The latitude of the record.
   */
  latitude?: number

  /**
   * The longitude of the record.
   */
  longitude?: number
}

export type FulcrumNewRecord = FulcrumRecordLocation & {
  /**
   * The form ID to activate and use for the new record.
   */
  formId: string

  /**
   * The project ID of the new record.
   */
  projectId?: string

  /**
   * The status of the new record.
   */
  status?: string

  /**
   * Field data-name/value pairs to set on the new record.
   */
  attributes?: FulcrumRecordAttributes
}

export type FulcrumEditRecord = FulcrumRecordLocation & {
  /**
   * The record ID to edit.
   */
  recordId: string

  /**
   * The project ID of the record.
   */
  projectId?: string

  /**
   * The status of the record.
   */
  status?: string

  /**
   * Field data-name/value pairs to set on the record.
   */
  attributes?: FulcrumRecordAttributes
}

export type FulcrumWebFormMode = 'map' | 'split' | 'table'

export type FulcrumOpenWebForm = {
  /**
   * The form ID to open in the Fulcrum web app.
   */
  formId: string

  /**
   * The view mode for the form records.
   */
  mode?: FulcrumWebFormMode
}

export type FulcrumWebRecord = {
  /**
   * The record ID to open in the Fulcrum web app.
   */
  recordId: string
}

export type FulcrumNewRecordAction = {
  /**
   * The form ID used by Fulcrum's documented new-record web action redirect.
   */
  formId: string
}

export type FulcrumEditRecordAction = {
  /**
   * The record ID used by Fulcrum's documented edit-record web action redirect.
   */
  recordId: string
}

export type FulcrumMobileAction = 'open' | 'new-record' | 'edit-record'

export type FulcrumWebAction = 'new-record' | 'edit-record'

export function fulcrumMobileUrl(action: FulcrumMobileAction, params: Record<string, unknown> = {}) {
  return `fulcrumapp://${action}${qs(params)}`
}

export function fulcrumWebUrl(path: string, params: Record<string, unknown> = {}) {
  return `https://web.fulcrumapp.com/${path}${qs(params)}`
}

export function fulcrumWebActionUrl(action: FulcrumWebAction, params: Record<string, unknown>) {
  return `https://web.fulcrumapp.com/action/#${action}${qs(params)}`
}

export function fulcrumPathSegment(value: string) {
  return encodeURIComponent(value)
}

export function newRecordParams(payload: FulcrumNewRecord) {
  const { formId, projectId, status, attributes, latitude, longitude } = payload

  return {
    form_id: formId,
    project_id: projectId,
    status,
    ...attributes,
    latitude,
    longitude,
  }
}

export function editRecordParams(payload: FulcrumEditRecord) {
  const { recordId, projectId, status, attributes, latitude, longitude } = payload

  return {
    record_id: recordId,
    project_id: projectId,
    status,
    ...attributes,
    latitude,
    longitude,
  }
}

export function newRecordActionParams(payload: FulcrumNewRecordAction) {
  return { form_id: payload.formId }
}

export function editRecordActionParams(payload: FulcrumEditRecordAction) {
  return { record_id: payload.recordId }
}
