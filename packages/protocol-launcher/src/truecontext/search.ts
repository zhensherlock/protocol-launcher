import {
  type TrueContextActionOptions,
  type TrueContextDatePeriod,
  type TrueContextDateSearchType,
  type TrueContextStateFilter,
  trueContextUrl,
} from './shared'

export type SearchPayload = TrueContextActionOptions & {
  /**
   * Form submission name search text.
   */
  searchText?: string
  /**
   * Form submission state filter.
   */
  stateFilter?: TrueContextStateFilter
  /**
   * Date search mode.
   */
  dateSearchType?: TrueContextDateSearchType
  /**
   * Date period used with `dateSearchType: 'DatePeriod'`.
   */
  datePeriod?: TrueContextDatePeriod
  /**
   * ISO 8601 start timestamp used with `dateSearchType: 'DateRange'`.
   */
  dateRangeStart?: string
  /**
   * ISO 8601 end timestamp used with `dateSearchType: 'DateRange'`.
   */
  dateRangeEnd?: string
}

/**
 * Open the TrueContext Mobile App Search list with documented search filters.
 *
 * @param payload TrueContext search payload.
 * @returns TrueContext search URL.
 * @example
 * search({
 *   stateFilter: 'AllIncomplete',
 *   dateSearchType: 'DatePeriod',
 *   datePeriod: 'ThisWeek',
 * })
 * // => 'truecontext://x-callback-url/search?stateFilter=AllIncomplete&dateSearchType=DatePeriod&datePeriod=ThisWeek'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm
 */
export function search(payload: SearchPayload = {}) {
  return trueContextUrl('search', payload)
}
