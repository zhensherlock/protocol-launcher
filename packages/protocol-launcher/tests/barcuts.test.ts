import { describe, expect, test } from 'vitest'
import { barcuts } from '../src'

describe('barcuts', () => {
  test('workflows should return the documented active workflows endpoint', () => {
    const url = barcuts.workflows()

    expect(url).toBe('barcuts://workflows')
  })

  test('workflows should include documented callback parameters', () => {
    const url = barcuts.workflows({
      xSuccess: 'my-app://success',
      xError: 'my-app://failure',
    })

    expect(url).toBe('barcuts://workflows?x-success=my-app%3A%2F%2Fsuccess&x-error=my-app%3A%2F%2Ffailure')
  })

  test('runWorkflowById should return the documented run-workflow id URL', () => {
    const url = barcuts.runWorkflowById({
      id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
    })

    expect(url).toBe('barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428')
  })

  test('runWorkflowById should include documented text input', () => {
    const url = barcuts.runWorkflowById({
      id: '17620440-E9E8-4B5C-9C7A-9B60C24DD428',
      input: 'My input text!',
    })

    expect(url).toBe('barcuts://run-workflow?id=17620440-E9E8-4B5C-9C7A-9B60C24DD428&input=My%20input%20text%21')
  })

  test('runWorkflowByTitle should return the documented run-workflow title URL', () => {
    const url = barcuts.runWorkflowByTitle({
      title: 'Sub menu ≫ Workflow 3',
    })

    expect(url).toBe('barcuts://run-workflow?title=Sub%20menu%20%E2%89%AB%20Workflow%203')
  })

  test('runWorkflowByTitle should include documented text input', () => {
    const url = barcuts.runWorkflowByTitle({
      title: 'Workflow 1',
      input: 'My input text!',
    })

    expect(url).toBe('barcuts://run-workflow?title=Workflow%201&input=My%20input%20text%21')
  })
})
