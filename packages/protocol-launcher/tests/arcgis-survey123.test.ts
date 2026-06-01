import { describe, expect, test } from 'vitest'
import { arcgisSurvey123 } from '../src'

const itemID = '36ff9e8c13e042a58cfce4ad87f55d19'

describe('arcgisSurvey123', () => {
  test('should expose only the documented Survey123 URL helpers', () => {
    expect(Object.keys(arcgisSurvey123).sort()).toEqual([
      'launchConnect',
      'launchFieldApp',
      'launchFieldAppLink',
      'launchWebApp',
    ])
  })

  test('launchFieldApp should return the custom URL scheme without options', () => {
    const url = arcgisSurvey123.launchFieldApp()

    expect(url).toBe('arcgis-survey123://')
  })

  test('launchFieldApp should open a survey, populate a field, and set the center', () => {
    const url = arcgisSurvey123.launchFieldApp({
      itemID,
      fields: { surname: 'Klauser' },
      center: '37.8199,-122.4783,20',
    })

    expect(url).toBe(
      'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser&center=37.8199%2C-122.4783%2C20',
    )
  })

  test('launchFieldApp should support documented edit/view parameters', () => {
    const url = arcgisSurvey123.launchFieldApp({
      itemID,
      action: 'view',
      folder: 'inbox',
      callbacks: { close: 'https://example.com/done' },
      filter: 'Klauser',
      update: true,
      query: { globalId: '1d392670-33e2-456d-8435-7fad3abd8bb9' },
    })

    expect(url).toBe(
      'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&action=view&folder=inbox&callback:close=https%3A%2F%2Fexample.com%2Fdone&filter=Klauser&update=true&q:globalId=1d392670-33e2-456d-8435-7fad3abd8bb9',
    )
  })

  test('launchFieldApp should support the documented portal, download, and callback parameters', () => {
    const url = arcgisSurvey123.launchFieldApp({
      portalUrl: 'https://myorg.arcgis.com',
      itemID,
      download: false,
      action: 'collect',
      callback: 'https://quickcapture.arcgis.app',
    })

    expect(url).toBe(
      'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&portalUrl=https%3A%2F%2Fmyorg.arcgis.com&download=false&action=collect&callback=https%3A%2F%2Fquickcapture.arcgis.app',
    )
  })

  test('launchFieldAppLink should return the Survey123 app link', () => {
    const url = arcgisSurvey123.launchFieldAppLink({
      itemID,
      fields: { surname: 'Klauser' },
    })

    expect(url).toBe('https://survey123.arcgis.app?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser')
  })

  test('launchWebApp should return the share URL for a survey item', () => {
    const url = arcgisSurvey123.launchWebApp({ itemID })

    expect(url).toBe('https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19')
  })

  test('launchWebApp should use web app parameters after the item ID path', () => {
    const url = arcgisSurvey123.launchWebApp({
      itemID,
      fields: { surname: 'Klauser' },
      center: '37.8199,-122.4783',
    })

    expect(url).toBe(
      'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?field:surname=Klauser&center=37.8199%2C-122.4783',
    )
  })

  test('launchWebApp should support documented browser-only parameters', () => {
    const url = arcgisSurvey123.launchWebApp({
      itemID,
      hide: ['header', 'description', 'footer', 'theme'],
      mode: 'edit',
      globalId: '1d392670-33e2-456d-8435-7fad3abd8bb9',
      recalculate: ['field:question1', 'field:question2'],
      version: 'latest',
      width: '600px',
    })

    expect(url).toBe(
      'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?hide=header%2Cdescription%2Cfooter%2Ctheme&mode=edit&globalId=1d392670-33e2-456d-8435-7fad3abd8bb9&recalculate=field%3Aquestion1%2Cfield%3Aquestion2&version=latest&width=600px',
    )
  })

  test('launchWebApp should support the full documented web app parameter table', () => {
    const url = arcgisSurvey123.launchWebApp({
      itemID,
      signIn: 'show',
      isOrgSignIn: false,
      portalUrl: 'https://myorg.arcgis.com',
      open: 'web',
      locale: 'zh-cn',
      token: 'E60M4Gsc-h4Q8plqQ',
      autoReload: 3,
      autoRefresh: 3,
      encodeUrlParams: true,
      width: '0.5',
    })

    expect(url).toBe(
      'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?signIn=show&isOrgSignIn=false&portalUrl=https%3A%2F%2Fmyorg.arcgis.com&open=web&locale=zh-cn&token=E60M4Gsc-h4Q8plqQ&autoReload=3&autoRefresh=3&encodeUrlParams=true&width=0.5',
    )
  })

  test('launchConnect should return the Survey123 Connect URL scheme', () => {
    const url = arcgisSurvey123.launchConnect({
      portalUrl: 'https://www.arcgis.com',
      itemID,
    })

    expect(url).toBe(
      'arcgis-survey123connect://?portalUrl=https%3A%2F%2Fwww.arcgis.com&itemID=36ff9e8c13e042a58cfce4ad87f55d19',
    )
  })
})
