export type AlterCallbackUrl = `alter://${string}`

export type AlterActionCallbackUrl = `alter://action/${string}`

export function appendAlterInput(url: AlterActionCallbackUrl, input: string) {
  const parsed = new URL(url)
  parsed.searchParams.set('input', input)

  return parsed.toString() as AlterActionCallbackUrl
}
