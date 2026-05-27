import { type MoneyWizTransaction, moneywizTransactionUrl } from './shared'

/**
 * Income payload definition.
 */
export type Income = MoneyWizTransaction

/**
 * Create a MoneyWiz income transaction URL.
 *
 * @param payload Income payload.
 * @returns MoneyWiz income URL.
 * @example
 * income({ account: 'Checking', amount: 1200, payee: 'Acme Payroll', category: 'Salary' })
 * // => 'moneywiz://income?amount=1200&account=Checking&payee=Acme%20Payroll&category=Salary'
 * @link https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas
 */
export function income(payload: Income) {
  return moneywizTransactionUrl('income', payload)
}
