import { type MoneyWizTransaction, moneywizTransactionUrl } from './shared'

/**
 * Expense payload definition.
 */
export type Expense = MoneyWizTransaction

/**
 * Create a MoneyWiz expense transaction URL.
 *
 * @param payload Expense payload.
 * @returns MoneyWiz expense URL.
 * @example
 * expense({ account: 'Wallet', amount: 5.99, category: 'Other', save: false })
 * // => 'moneywiz://expense?amount=5.99&account=Wallet&category=Other&save=false'
 * @link https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas
 */
export function expense(payload: Expense) {
  return moneywizTransactionUrl('expense', payload)
}
