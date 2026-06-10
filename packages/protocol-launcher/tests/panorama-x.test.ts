import { describe, expect, test } from 'vitest'
import { panoramaX } from '../src'

describe('panoramaX', () => {
  test('runProcedure should return the documented x-callback-url run path', () => {
    const url = panoramaX.runProcedure({
      database: 'database',
      procedure: 'procedure',
      label: 'xCallbackURLSuccess',
    })

    expect(url).toBe('panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess')
  })

  test('runProcedure should include callback query data shown in the official xcallbackurl docs', () => {
    const url = panoramaX.runProcedure({
      database: 'database',
      procedure: 'procedure',
      label: 'xCallbackURLSuccess',
      params: {
        buildnumber: 50353,
        apiVersion: 2,
      },
    })

    expect(url).toBe(
      'panoramax://x-callback-url/run/database/procedure/xCallbackURLSuccess?buildnumber=50353&apiVersion=2',
    )
  })

  test('runProcedure should percent-encode path segments independently', () => {
    const url = panoramaX.runProcedure({
      database: 'Sales/2026',
      procedure: 'Import Orders',
      label: 'Done Label',
    })

    expect(url).toBe('panoramax://x-callback-url/run/Sales%2F2026/Import%20Orders/Done%20Label')
  })

  test('openWizard should return the documented wizard path with encoded spaces', () => {
    const url = panoramaX.openWizard({ wizardName: 'wizard name' })

    expect(url).toBe('panoramax://x-callback-url/wizard/wizard%20name')
  })

  test('writePreference should return the documented writepreference URL', () => {
    const url = panoramaX.writePreference({ name: 'newwindowwidth', value: 800 })

    expect(url).toBe('panoramax://writepreference?newwindowwidth=800')
  })
})
