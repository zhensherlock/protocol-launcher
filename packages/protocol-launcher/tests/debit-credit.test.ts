import { describe, expect, test } from 'vitest'
import { debitCredit } from '../src'

describe('debitCredit', () => {
  test('expense should return the official URL with required attributes', () => {
    const url = debitCredit.expense({
      amount: '500.34',
      account: 'Amex',
    })

    expect(url).toBe('dcapp://x-callback-url/expense?amount=500.34&account=Amex')
  })

  test('expense should return the official example URL', () => {
    const url = debitCredit.expense({
      amount: '500.34',
      account: 'Amex',
      category: 'Computers',
      payee: 'Apple Store',
    })

    expect(url).toBe('dcapp://x-callback-url/expense?amount=500.34&account=Amex&category=Computers&payee=Apple%20Store')
  })

  test('expense should return the official URL with documented optional attributes', () => {
    const url = debitCredit.expense({
      amount: '500.34',
      account: 'Amex',
      description: 'MacBook Pro',
      category: 'Computers',
      payee: 'Apple Store',
      tag: 'Work',
      notes: 'Paid with business card',
    })

    expect(url).toBe(
      'dcapp://x-callback-url/expense?amount=500.34&account=Amex&description=MacBook%20Pro&category=Computers&payee=Apple%20Store&tag=Work&notes=Paid%20with%20business%20card',
    )
  })

  test('income should return the official URL with required attributes', () => {
    const url = debitCredit.income({
      amount: '1200',
      account: 'Citibank',
    })

    expect(url).toBe('dcapp://x-callback-url/income?amount=1200&account=Citibank')
  })

  test('income should return the official example URL', () => {
    const url = debitCredit.income({
      amount: '1200',
      account: 'Citibank',
      category: 'Salary',
      payee: 'Work',
    })

    expect(url).toBe('dcapp://x-callback-url/income?amount=1200&account=Citibank&category=Salary&payee=Work')
  })

  test('income should return the official URL with documented optional attributes', () => {
    const url = debitCredit.income({
      amount: '1200',
      account: 'Citibank',
      description: 'May salary',
      category: 'Salary',
      payee: 'Work',
      tag: 'Payroll',
      notes: 'Monthly income',
    })

    expect(url).toBe(
      'dcapp://x-callback-url/income?amount=1200&account=Citibank&description=May%20salary&category=Salary&payee=Work&tag=Payroll&notes=Monthly%20income',
    )
  })

  test('transfer should return the official URL with required attributes', () => {
    const url = debitCredit.transfer({
      amount: '2000',
      source_account: 'Citibank',
      destination_account: 'Amex',
    })

    expect(url).toBe('dcapp://x-callback-url/transfer?amount=2000&source_account=Citibank&destination_account=Amex')
  })

  test('transfer should return the official URL with documented optional attributes', () => {
    const url = debitCredit.transfer({
      amount: '2000',
      source_account: 'Citibank',
      destination_account: 'Amex',
      description: 'Monthly payoff',
      notes: 'Credit card payment',
    })

    expect(url).toBe(
      'dcapp://x-callback-url/transfer?amount=2000&source_account=Citibank&destination_account=Amex&description=Monthly%20payoff&notes=Credit%20card%20payment',
    )
  })
})
