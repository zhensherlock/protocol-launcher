import { type DebitCreditTransaction, debitCreditTransactionUrl } from './shared'

/**
 * Expense payload definition.
 */
export type Expense = DebitCreditTransaction

/**
 * Create a Debit & Credit expense transaction URL.
 *
 * @param payload Expense payload.
 * @returns Debit & Credit expense x-callback-url.
 * @example
 * expense({ amount: '500.34', account: 'Amex', category: 'Computers', payee: 'Apple Store' })
 * // => 'dcapp://x-callback-url/expense?amount=500.34&account=Amex&category=Computers&payee=Apple%20Store'
 * @link https://debitandcredit.app/help/advanced-features-url-schemes.html
 */
export function expense(payload: Expense) {
  return debitCreditTransactionUrl('expense', payload)
}
