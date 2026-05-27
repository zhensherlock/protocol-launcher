import { launchbarUrl } from './shared'

/**
 * Calculate payload definition.
 */
export type Calculate = {
  /**
   * Arithmetic expression to evaluate with LaunchBar's built-in Calculator.
   */
  expression: string

  /**
   * Optional argument placeholder value used by Search Templates.
   */
  argument?: string

  /**
   * Optional title format for the displayed result.
   */
  title?: string

  /**
   * Optional result format for the displayed result.
   */
  result?: string
}

/**
 * Send an arithmetic expression to LaunchBar's built-in Calculator.
 *
 * @param payload Calculate payload.
 * @returns LaunchBar calculate URL.
 * @example
 * calculate({ expression: '2*sin(pi/4)^2' })
 * // => 'x-launchbar:calculate?expression=2*sin(pi/4)^2'
 * @example
 * calculate({ expression: '(1+sqrt(5))/2', title: 'Golden Ratio' })
 * // => 'x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio'
 * @example
 * calculate({ expression: '(1+sqrt(5))/2', title: 'Golden Ratio', result: 'φ=@' })
 * // => 'x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio&result=%cf%86=@'
 * @example
 * calculate({ argument: '*', expression: '(@-32)/1.8', title: '@°F =', result: '@°C' })
 * // => 'x-launchbar:calculate?argument=*&expression=(@-32)/1.8&title=@%c2%b0F%20=&result=@%c2%b0C'
 * @example
 * calculate({ argument: '*', expression: '@*1.8+32', title: '@°C =', result: '@°F' })
 * // => 'x-launchbar:calculate?argument=*&expression=@*1.8+32&title=@%c2%b0C%20=&result=@%c2%b0F'
 * @link https://www.obdev.at/resources/launchbar/help/Calculator.html
 */
export function calculate(payload: Calculate) {
  return launchbarUrl(
    'calculate',
    [
      ['argument', payload.argument],
      ['expression', payload.expression],
      ['title', payload.title],
      ['result', payload.result],
    ],
    {
      spaceEncoding: 'percent',
    },
  )
}
