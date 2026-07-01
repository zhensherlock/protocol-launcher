import { describe, expect, test } from 'vitest'
import { alter } from '../src'

describe('alter', () => {
  test('should expose only the documented Alter callback helpers', () => {
    expect(Object.keys(alter).sort()).toEqual(['openCallbackUrl', 'runGeneratedAction'])
  })

  test('openCallbackUrl should pass through an Alter callback URL copied from Action Editor', () => {
    const url = alter.openCallbackUrl({ url: 'alter://action/business-strategist-gpt' })

    expect(url).toBe('alter://action/business-strategist-gpt')
  })

  test('runGeneratedAction should return the generated action URL without optional input', () => {
    const url = alter.runGeneratedAction({ url: 'alter://action/business-strategist-gpt' })

    expect(url).toBe('alter://action/business-strategist-gpt')
  })

  test('runGeneratedAction should add the official input query parameter', () => {
    const url = alter.runGeneratedAction({
      url: 'alter://action/ask-web',
      input: 'What is Alter MacOS',
    })

    expect(url).toBe('alter://action/ask-web?input=What+is+Alter+MacOS')
  })

  test('runGeneratedAction should match the documented Business strategist with input example', () => {
    const url = alter.runGeneratedAction({
      url: 'alter://action/business-strategist-gpt',
      input: 'Explain Red Ocean Strategy',
    })

    expect(url).toBe('alter://action/business-strategist-gpt?input=Explain+Red+Ocean+Strategy')
  })
})
