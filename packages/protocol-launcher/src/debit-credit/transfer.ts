import { type DebitCreditAmount, debitCreditXCallbackUrl } from './shared'

/**
 * Transfer payload definition.
 */
export type Transfer = {
  /**
   * Decimal number with a positive value. Use a dot as the decimal separator.
   */
  amount: DebitCreditAmount

  /**
   * Case-sensitive existing source account name.
   */
  source_account: string

  /**
   * Case-sensitive existing destination account name.
   */
  destination_account: string

  /**
   * Transaction description.
   */
  description?: string

  /**
   * Custom note to use for the transaction.
   */
  notes?: string
}

/**
 * Create a Debit & Credit transfer transaction URL.
 *
 * @param payload Transfer payload.
 * @returns Debit & Credit transfer x-callback-url.
 * @example
 * transfer({ amount: '2000', source_account: 'Citibank', destination_account: 'Amex' })
 * // => 'dcapp://x-callback-url/transfer?amount=2000&source_account=Citibank&destination_account=Amex'
 * @link https://debitandcredit.app/help/advanced-features-url-schemes.html
 */
export function transfer(payload: Transfer) {
  const { amount, source_account, destination_account, description, notes } = payload

  return debitCreditXCallbackUrl('transfer', {
    amount,
    source_account,
    destination_account,
    description,
    notes,
  })
}
