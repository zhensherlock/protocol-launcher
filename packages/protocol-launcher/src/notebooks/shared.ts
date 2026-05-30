/**
 * Notebooks document path payload definition.
 */
export type NotebooksDocumentPathPayload = {
  /**
   * Document path relative to the Notebooks root.
   */
  path: string
}

/**
 * Notebooks add note payload definition.
 */
export type NotebooksAddNotePayload = {
  /**
   * Plain text document body.
   */
  text: string

  /**
   * Optional document title.
   */
  title?: string

  /**
   * Optional parent book path.
   */
  parent?: string
}

/**
 * Notebooks search payload definition.
 */
export type NotebooksSearchPayload = {
  /**
   * Search term.
   */
  term: string

  /**
   * Optional book path used to restrict the search scope.
   */
  scope?: string
}

/**
 * Notebooks parent book payload definition.
 */
export type NotebooksParentPayload = {
  /**
   * Optional parent book path.
   */
  parent?: string
}

/**
 * Notebooks append payload definition.
 */
export type NotebooksAppendPayload = {
  /**
   * Plain text to append to the document.
   */
  text: string

  /**
   * Existing document path.
   */
  doc: string
}

/**
 * Notebooks grab payload definition.
 */
export type NotebooksGrabPayload = {
  /**
   * URL of the document to import.
   */
  url: string

  /**
   * Optional imported document title.
   */
  title?: string

  /**
   * Optional target book path.
   */
  parent?: string
}

/**
 * Notebooks book path payload definition.
 */
export type NotebooksBookPathPayload = {
  /**
   * Optional book path.
   */
  path?: string
}

type NotebooksAmpParams = Record<string, string | undefined>

export function encodeNotebooksPath(path: string) {
  return path.split('/').map(encodeURIComponent).join('/')
}

export function notebooksAmpParams(params: NotebooksAmpParams, pathKeys: string[] = []) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined) return []

      const encodedValue = pathKeys.includes(key) ? encodeNotebooksPath(value) : encodeURIComponent(value)

      return `${key}=${encodedValue}`
    })
    .join('&')

  return query ? `&${query}` : ''
}
