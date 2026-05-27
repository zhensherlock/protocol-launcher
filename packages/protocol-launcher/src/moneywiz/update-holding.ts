import { type MoneyWizDecimal, moneywizUrl } from './shared'

/**
 * Update holding payload definition.
 */
export type UpdateHolding = {
  /**
   * Symbol of the holding to update.
   */
  symbol: string

  /**
   * Price to set for the holding.
   */
  price: MoneyWizDecimal

  /**
   * Price date in `YYYYMMDD` format. MoneyWiz uses the current date when omitted.
   */
  date?: string

  /**
   * Currency of the account where the holding is located.
   */
  currency?: string
}

/**
 * Create a MoneyWiz holding price update URL.
 *
 * @param payload Update holding payload.
 * @returns MoneyWiz updateholding URL.
 * @example
 * updateHolding({ symbol: 'AAPL', price: 189.98, date: '20240527', currency: 'USD' })
 * // => 'moneywiz://updateholding?symbol=AAPL&price=189.98&date=20240527&currency=USD'
 * @link https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas
 */
export function updateHolding(payload: UpdateHolding) {
  const { symbol, price, date, currency } = payload

  return moneywizUrl('updateholding', {
    symbol,
    price,
    date,
    currency,
  })
}
