import { qs } from '@protocol-launcher/shared'

export type DebitCreditAmount = string

export type DebitCreditTransaction = {
  /**
   * Decimal number with a positive value. Use a dot as the decimal separator.
   */
  amount: DebitCreditAmount

  /**
   * Case-sensitive existing account name.
   */
  account: string

  /**
   * Transaction description.
   */
  description?: string

  /**
   * Case-sensitive existing transaction category name.
   */
  category?: string

  /**
   * Transaction payee.
   */
  payee?: string

  /**
   * Transaction tag.
   */
  tag?: string

  /**
   * Custom note to use for the transaction.
   */
  notes?: string
}

export function debitCreditTransactionUrl(action: 'expense' | 'income', payload: DebitCreditTransaction) {
  const { amount, account, description, category, payee, tag, notes } = payload

  return debitCreditXCallbackUrl(action, {
    amount,
    account,
    description,
    category,
    payee,
    tag,
    notes,
  })
}

export function debitCreditXCallbackUrl(action: string, params: Record<string, unknown>) {
  return `dcapp://x-callback-url/${action}${qs(params)}`
}
