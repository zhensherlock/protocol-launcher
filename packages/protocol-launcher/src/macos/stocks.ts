interface Stocks {
  symbol?: string
}

/**
 * Open Stocks app.
 *
 * @param payload - Optional stock symbol.
 * @returns Stocks open URL.
 * @example
 * stocks()
 * // => 'stocks://'
 * @example
 * stocks({ symbol: 'GE' })
 * // => 'stocks://?symbol=GE'
 */
export function stocks(payload: Stocks = {}) {
  const { symbol = '' } = payload
  if (!symbol) {
    return 'stocks://'
  }
  return `stocks://?symbol=${symbol}`
}
