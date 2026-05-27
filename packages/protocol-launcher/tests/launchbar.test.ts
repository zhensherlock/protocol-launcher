import { describe, expect, test } from 'vitest'
import { launchbar } from '../src'

describe('launchbar', () => {
  test('largeType should return a URL with a string', () => {
    const url = launchbar.largeType({ string: 'LaunchBar 4.3' })
    expect(url).toBe('x-launchbar:large-type?string=LaunchBar+4.3')
  })

  test('largeType should support a title', () => {
    const url = launchbar.largeType({ title: 'Large Type', string: 'Small Example' })
    expect(url).toBe('x-launchbar:large-type?title=Large+Type&string=Small+Example')
  })

  test('largeType should support a font name', () => {
    const url = launchbar.largeType({ fontName: 'Times-Bold', string: 'Hello World' })
    expect(url).toBe('x-launchbar:large-type?font-name=Times-Bold&string=Hello+World')
  })

  test('select should return a URL for a file', () => {
    const url = launchbar.select({ file: '/Applications' })
    expect(url).toBe('x-launchbar:select?file=/Applications')
  })

  test('select should return a URL for a URL with a name', () => {
    const url = launchbar.select({ url: 'www.obdev.at', name: 'Objective Development' })
    expect(url).toBe('x-launchbar:select?url=www.obdev.at&name=Objective+Development')
  })

  test('select should return a URL for a string', () => {
    const url = launchbar.select({ string: "Hello, I'm a text" })
    expect(url).toBe("x-launchbar:select?string=Hello,+I'm+a+text")
  })

  test('select should return a URL for an abbreviation', () => {
    const url = launchbar.select({ abbreviation: 'SAFARI' })
    expect(url).toBe('x-launchbar:select?abbreviation=SAFARI')
  })

  test('execute should return a URL with a single argument', () => {
    const url = launchbar.execute({ path: '/usr/local/bin/MyScript', argument: '*' })
    expect(url).toBe('x-launchbar:execute?path=/usr/local/bin/MyScript&argument=*')
  })

  test('execute should return a URL with an argument list', () => {
    const url = launchbar.execute({ path: '/usr/bin/open', arguments: '-a "*"' })
    expect(url).toBe('x-launchbar:execute?path=/usr/bin/open&arguments=-a+%22*%22')
  })

  test('calculate should return a URL with an expression', () => {
    const url = launchbar.calculate({ expression: '2*sin(pi/4)^2' })
    expect(url).toBe('x-launchbar:calculate?expression=2*sin(pi/4)^2')
  })

  test('calculate should support a title format', () => {
    const url = launchbar.calculate({ expression: '(1+sqrt(5))/2', title: 'Golden Ratio' })
    expect(url).toBe('x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio')
  })

  test('calculate should support title and result formats', () => {
    const url = launchbar.calculate({
      expression: '(1+sqrt(5))/2',
      title: 'Golden Ratio',
      result: 'φ=@',
    })
    expect(url).toBe('x-launchbar:calculate?expression=(1+sqrt(5))/2&title=Golden%20Ratio&result=%cf%86=@')
  })

  test('calculate should support a search template argument', () => {
    const url = launchbar.calculate({
      argument: '*',
      expression: '(@-32)/1.8',
      title: '@°F =',
      result: '@°C',
    })
    expect(url).toBe('x-launchbar:calculate?argument=*&expression=(@-32)/1.8&title=@%c2%b0F%20=&result=@%c2%b0C')
  })

  test('calculate should support the documented Celsius conversion template', () => {
    const url = launchbar.calculate({
      argument: '*',
      expression: '@*1.8+32',
      title: '@°C =',
      result: '@°F',
    })
    expect(url).toBe('x-launchbar:calculate?argument=*&expression=@*1.8+32&title=@%c2%b0C%20=&result=@%c2%b0F')
  })

  test('hide should return a URL', () => {
    const url = launchbar.hide()
    expect(url).toBe('x-launchbar:hide')
  })
})
