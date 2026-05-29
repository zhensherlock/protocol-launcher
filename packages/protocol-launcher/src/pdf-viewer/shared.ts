import { qs } from '@protocol-launcher/shared'

export interface OpenFilePayload {
  /**
   * Local file path in PDF Viewer.
   */
  path: string
}

interface AddFileWithUrlPayload {
  /**
   * URL address to a file.
   */
  url: string

  data?: never

  filename?: never

  /**
   * Open newly added file.
   */
  open?: boolean
}

interface AddFileWithDataPayload {
  /**
   * Base64 representation of a file. The generated URL encodes this parameter.
   */
  data: string

  /**
   * File name with extension.
   */
  filename: string

  url?: never

  /**
   * Open newly added file.
   */
  open?: boolean
}

export type AddFilePayload = AddFileWithUrlPayload | AddFileWithDataPayload

export function pdfViewerUrl(action: string, params: Record<string, unknown>) {
  return `pdfviewer://x-callback-url/${action}${pdfViewerQs(params)}`
}

function pdfViewerQs(params: Record<string, unknown>) {
  return qs(params)
    .replace(/([?&]path=)([^&]*)/g, (_, prefix: string, value: string) => `${prefix}${value.replace(/%2F/g, '/')}`)
    .replace(
      /([?&]url=)([^&]*)/g,
      (_, prefix: string, value: string) => `${prefix}${value.replace(/%3A/g, ':').replace(/%2F/g, '/')}`,
    )
}
