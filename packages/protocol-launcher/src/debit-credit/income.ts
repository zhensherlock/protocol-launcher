import { type DebitCreditTransaction, debitCreditTransactionUrl } from './shared'

/**
 * Income payload definition.
 */
export type Income = DebitCreditTransaction

/**
 * Create a Debit & Credit income transaction URL.
 *
 * @param payload Income payload.
 * @returns Debit & Credit income x-callback-url.
 * @example
 * income({ amount: '1200', account: 'Citibank', category: 'Salary', payee: 'Work' })
 * // => 'dcapp://x-callback-url/income?amount=1200&account=Citibank&category=Salary&payee=Work'
 * @link https://debitandcredit.app/help/advanced-features-url-schemes.html
 */
export function income(payload: Income) {
  return debitCreditTransactionUrl('income', payload)
}
