import { panoramaXPath, panoramaXUrl } from './shared'

export type OpenWizardPayload = {
  /**
   * Wizard name in the documented `wizard/wizard name` path.
   */
  wizardName: string
}

/**
 * Open a Panorama X wizard through the documented x-callback-url wizard action.
 *
 * @param payload Wizard payload.
 * @returns Panorama X wizard URL.
 * @example
 * openWizard({ wizardName: 'wizard name' })
 * // => 'panoramax://x-callback-url/wizard/wizard%20name'
 * @link https://www.provue.com/panoramax/help/Release_10_2.html
 */
export function openWizard(payload: OpenWizardPayload) {
  const { wizardName } = payload

  return panoramaXUrl(`x-callback-url/wizard/${panoramaXPath([wizardName])}`)
}
