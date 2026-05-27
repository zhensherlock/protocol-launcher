import { qs } from '@protocol-launcher/shared'

export type MoneyWizDecimal = number | `${number}`

export type MoneyWizTransaction = {
  /**
   * Account name without spaces.
   */
  account: string

  /**
   * Transaction amount. MoneyWiz expects a dot as the decimal separator.
   */
  amount: MoneyWizDecimal

  /**
   * Currency code, such as USD, GBP, or EUR.
   */
  currency?: string

  /**
   * Payee name. MoneyWiz creates the payee when it does not exist.
   */
  payee?: string

  /**
   * Category hierarchy, separated by slashes.
   */
  category?: string

  /**
   * Transaction description.
   */
  description?: string

  /**
   * Transaction memo.
   */
  memo?: string

  /**
   * One or more tags, separated by commas.
   */
  tags?: string

  /**
   * Transaction date in `yyyy-MM-dd HH:mm:ss` format.
   */
  date?: string

  /**
   * Set to true for MoneyWiz to directly save the transaction.
   */
  save?: boolean
}

export function moneywizTransactionUrl(operation: 'expense' | 'income', payload: MoneyWizTransaction) {
  const { account, amount, currency, payee, category, description, memo, tags, date, save } = payload

  return moneywizUrl(operation, {
    amount,
    account,
    currency,
    payee,
    category,
    description,
    memo,
    tags,
    date,
    save,
  })
}

export function moneywizUrl(operation: string, params: Record<string, unknown>) {
  return `moneywiz://${operation}${moneywizQs(params)}`
}

function moneywizQs(params: Record<string, unknown>) {
  return qs(params).replace(/%2F/g, '/').replace(/%2C/g, ',').replace(/%3A/g, ':')
}
