import { describe, expect, test } from 'vitest'
import { moneywiz } from '../src'

describe('moneywiz', () => {
  test('expense should return a URL with required attributes', () => {
    const url = moneywiz.expense({ account: 'Wallet', amount: 5.99 })
    expect(url).toBe('moneywiz://expense?amount=5.99&account=Wallet')
  })

  test('expense should return a URL with documented optional attributes', () => {
    const url = moneywiz.expense({
      account: 'CreditCard',
      amount: '12.50',
      currency: 'EUR',
      payee: 'Coffee Shop',
      category: 'Dining Out/Restaurants',
      description: 'Morning coffee',
      memo: 'Latte',
      tags: 'work,receipt',
      date: '2026-05-27 08:30:00',
      save: false,
    })

    expect(url).toBe(
      'moneywiz://expense?amount=12.50&account=CreditCard&currency=EUR&payee=Coffee%20Shop&category=Dining%20Out/Restaurants&description=Morning%20coffee&memo=Latte&tags=work,receipt&date=2026-05-27%2008:30:00&save=false',
    )
  })

  test('income should return a URL with documented optional attributes', () => {
    const url = moneywiz.income({
      account: 'Checking',
      amount: 1200,
      currency: 'USD',
      payee: 'Acme Payroll',
      category: 'Salary',
      save: true,
    })

    expect(url).toBe(
      'moneywiz://income?amount=1200&account=Checking&currency=USD&payee=Acme%20Payroll&category=Salary&save=true',
    )
  })

  test('transfer should return a URL with required attributes', () => {
    const url = moneywiz.transfer({
      account: 'Checking',
      toAccount: 'Savings',
      amount: 250,
    })

    expect(url).toBe('moneywiz://transfer?account=Checking&toAccount=Savings&amount=250')
  })

  test('transfer should support save', () => {
    const url = moneywiz.transfer({
      account: 'Checking',
      toAccount: 'Savings',
      amount: '250.00',
      save: false,
    })

    expect(url).toBe('moneywiz://transfer?account=Checking&toAccount=Savings&amount=250.00&save=false')
  })

  test('updateHolding should return a URL with required attributes', () => {
    const url = moneywiz.updateHolding({
      symbol: 'AAPL',
      price: 189.98,
    })

    expect(url).toBe('moneywiz://updateholding?symbol=AAPL&price=189.98')
  })

  test('updateHolding should return a URL with documented optional attributes', () => {
    const url = moneywiz.updateHolding({
      symbol: 'AAPL',
      price: '189.98',
      date: '20260527',
      currency: 'USD',
    })

    expect(url).toBe('moneywiz://updateholding?symbol=AAPL&price=189.98&date=20260527&currency=USD')
  })
})
