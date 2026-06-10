import { describe, expect, test } from 'vitest'
import { arcgisQuickCapture } from '../src'

const itemID = 'aabda4a5e36d42c2bcf1c479fe01e5e3'
const buttonID = '0c59c9d9-9b51-46b3-bb81-21149e6fddb4'

describe('arcgisQuickCapture', () => {
  test('should expose only the documented QuickCapture URL helpers', () => {
    expect(Object.keys(arcgisQuickCapture).sort()).toEqual([
      'launchAppLink',
      'launchUrlScheme',
      'openPortal',
      'openProject',
      'populateUserInput',
      'pressButton',
    ])
  })

  test('launchUrlScheme should return the custom URL scheme without options', () => {
    const url = arcgisQuickCapture.launchUrlScheme()

    expect(url).toBe('arcgis-quickcapture://')
  })

  test('launchAppLink should return the QuickCapture app link without options', () => {
    const url = arcgisQuickCapture.launchAppLink()

    expect(url).toBe('https://quickcapture.arcgis.app')
  })

  test('launchAppLink should open a project with project user input values', () => {
    const url = arcgisQuickCapture.launchAppLink({
      itemID,
      userInputs: { '001': 'Alice' },
    })

    expect(url).toBe('https://quickcapture.arcgis.app/?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice')
  })

  test('openProject should return the documented project URL', () => {
    const url = arcgisQuickCapture.openProject({ itemID })

    expect(url).toBe('arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3')
  })

  test('openProject should support the documented center parameter', () => {
    const url = arcgisQuickCapture.openProject({
      itemID,
      center: '37.8199,-122.4783,20',
    })

    expect(url).toBe('arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&center=37.8199%2C-122.4783%2C20')
  })

  test('openPortal should include portal URL and external browser sign-in parameters', () => {
    const url = arcgisQuickCapture.openPortal({
      portalUrl: 'https://myorg.arcgis.com',
      externalBrowserSignIn: true,
    })

    expect(url).toBe('arcgis-quickcapture://?portalUrl=https%3A%2F%2Fmyorg.arcgis.com&externalBrowserSignIn=true')
  })

  test('pressButton should press the documented button GUID and populate fields', () => {
    const url = arcgisQuickCapture.pressButton({
      itemID,
      buttonID,
      fields: { diameter: '20' },
      callback: 'https://survey123.arcgis.app',
    })

    expect(url).toBe(
      'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&action=press%3A0c59c9d9-9b51-46b3-bb81-21149e6fddb4&field:diameter=20&callback=https%3A%2F%2Fsurvey123.arcgis.app',
    )
  })

  test('populateUserInput should serialize documented project user input values', () => {
    const url = arcgisQuickCapture.populateUserInput({
      itemID,
      userInputs: {
        '001': 'Alice',
        '002': 'Zone5',
      },
    })

    expect(url).toBe(
      'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice&userInput:002=Zone5',
    )
  })
})
