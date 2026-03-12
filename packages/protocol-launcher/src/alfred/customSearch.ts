/**
 * Custom search definition.
 */
type CustomSearch = {
  /**
   * Search title/label (e.g., "Search Github for '{query}'").
   */
  title: string

  /**
   * Search keyword/shortcut (e.g., 'gh').
   */
  keyword: string

  /**
   * Character encoding (e.g., 'utf8').
   * @default 'utf8'
   */
  encoding?: string

  /**
   * Space handling mode (e.g., 'nospace').
   * @default 'nospace'
   */
  spaceMode?: string

  /**
   * Search URL template with {query} placeholder (e.g., 'https://github.com/search?q={query}').
   */
  url: string
}

/**
 * Open Alfred Custom Search.
 *
 * @param payload Custom search definition.
 * @returns Alfred Custom Search URL.
 * @example
 * customSearch({
 *   title: "Search Github for '{query}'",
 *   keyword: 'gh',
 *   url: 'https://github.com/search?q={query}',
 * })
 * // => 'alfred://customsearch/Search%20Github%20for%20%27%7Bquery%7D%27/gh/utf8/nospace/https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3D%7Bquery%7D'
 */
export function customSearch(payload: CustomSearch) {
  const { title, keyword, encoding = 'utf8', spaceMode = 'nospace', url } = payload
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  return `alfred://customsearch/${encodedTitle} /${keyword}/${encoding}/${spaceMode}/${encodedUrl}`
}
