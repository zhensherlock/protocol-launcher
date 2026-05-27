import { type MoneyWizDecimal, moneywizUrl } from './shared'

/**
 * Transfer payload definition.
 */
export type Transfer = {
  /**
   * Originating account name without spaces.
   */
  account: string

  /**
   * Destination account name without spaces.
   */
  toAccount: string

  /**
   * Transfer amount. MoneyWiz expects a dot as the decimal separator.
   */
  amount: MoneyWizDecimal

  /**
   * Set to true for MoneyWiz to directly save the transfer.
   */
  save?: boolean
}

/**
 * Create a MoneyWiz transfer transaction URL.
 *
 * @param payload Transfer payload.
 * @returns MoneyWiz transfer URL.
 * @example
 * transfer({ account: 'Checking', toAccount: 'Savings', amount: 250, save: false })
 * // => 'moneywiz://transfer?account=Checking&toAccount=Savings&amount=250&save=false'
 * @link https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas
 */
export function transfer(payload: Transfer) {
  const { account, toAccount, amount, save } = payload

  return moneywizUrl('transfer', {
    account,
    toAccount,
    amount,
    save,
  })
}
