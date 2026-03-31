import { qs } from '@protocol-launcher/shared'

/**
 * Process document payload definition.
 */
type ProcessDocument = {
  /**
   * The input source for the document.
   *
   * @default 'camera'
   */
  input?: 'camera' | 'clipboard' | 'data'
  /**
   * Base64 encoded image data (must be URL encoded).
   */
  imageData?: string
  /**
   * Format of imageData, expressed as a file extension.
   *
   * @example 'jpeg'
   */
  imageFormat?: string
  /**
   * Base64 encoded PDF data (must be URL encoded).
   */
  pdfData?: string
  /**
   * The OCR to use to recognize text.
   *
   * - 'none': do not perform any text recognition
   * - 'en', 'fr', 'de', etc.: use on-device OCR by specifying the ISO 639-1 language code
   * - 'cloud': use Cloud OCR for print
   * - 'cloud-handwriting': use Cloud OCR for handwriting
   */
  ocr?:
    | 'none'
    | 'cloud'
    | 'cloud-handwriting'
    | 'ar'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sr-Latn'
    | 'sr'
    | 'sv'
    | 'tr'
    | 'uk'
    | 'zh-hans'
    | 'zh-hant'
  /**
   * Dimensions of the generated document when output is set to PDF.
   *
   * @default 'A4'
   */
  pageFormat?: 'A4' | 'A5' | 'LTR' | 'LGL' | 'CRD'
  /**
   * Image cleanup mode.
   *
   * @default 'color'
   */
  cleanupMode?: 'none' | 'black' | 'gray' | 'color'
  /**
   * Destination for the output.
   *
   * - 'url': send the output through the callback URL
   * - 'clipboard': write the output in the clipboard
   */
  destination?: 'url' | 'clipboard'
  /**
   * Parameter name for text output when destination is 'url'.
   *
   * @default 'text'
   */
  callbackTextParameter?: string
  /**
   * Parameter name for PDF output when destination is 'url'.
   *
   * @default 'pdfData'
   */
  callbackPDFParameter?: string
  /**
   * Parameter name for image output when destination is 'url'.
   *
   * @default 'imageData'
   */
  callbackImageParameter?: string
  /**
   * Kind of generated output. Multiple output options can be combined with +.
   *
   * @default 'text'
   */
  output?: 'text' | 'image' | 'PDF' | 'text+image' | 'text+PDF' | 'image+PDF' | 'text+image+PDF'
  /**
   * Create a persistent document in Prizmo.
   *
   * @default false
   */
  createDocument?: boolean
  /**
   * Automatically detect page borders and crop it.
   *
   * @default true
   */
  detectPage?: boolean
  /**
   * URL to be invoked when processing succeeds (must be URL encoded).
   */
  xSuccess?: string
  /**
   * URL to invoke when the user cancels the processing (must be URL encoded).
   */
  xCancel?: string
  /**
   * URL to invoke when an error occurs during processing (must be URL encoded).
   */
  xError?: string
}

/**
 * Process a document in Prizmo (OCR, PDF generation, image cleanup).
 *
 * @param payload Process document payload.
 * @returns Prizmo process document URL.
 * @example
 * processDocument({
 *   ocr: 'en',
 *   destination: 'clipboard',
 * })
 * // => 'prizmo://x-callback-url/processDocument?ocr=en&destination=clipboard'
 * @example
 * processDocument({
 *   ocr: 'en',
 *   destination: 'url',
 *   xSuccess: 'myapp://callback',
 * })
 * // => 'prizmo://x-callback-url/processDocument?ocr=en&destination=url&x-success=myapp%3A%2F%2Fcallback'
 * @link https://github.com/creaceed/PrizmoAPI
 */
export function processDocument(payload: ProcessDocument = {}) {
  const {
    input,
    imageData,
    imageFormat,
    pdfData,
    ocr,
    pageFormat,
    cleanupMode,
    destination,
    callbackTextParameter,
    callbackPDFParameter,
    callbackImageParameter,
    output,
    createDocument,
    detectPage,
    xSuccess,
    xCancel,
    xError,
  } = payload

  const params = qs({
    ...(input ? { input } : {}),
    ...(imageData ? { imageData } : {}),
    ...(imageFormat ? { imageFormat } : {}),
    ...(pdfData ? { pdfData } : {}),
    ...(ocr ? { ocr } : {}),
    ...(pageFormat ? { pageFormat } : {}),
    ...(cleanupMode ? { cleanupMode } : {}),
    ...(destination ? { destination } : {}),
    ...(callbackTextParameter ? { callbackTextParameter } : {}),
    ...(callbackPDFParameter ? { callbackPDFParameter } : {}),
    ...(callbackImageParameter ? { callbackImageParameter } : {}),
    ...(output ? { output } : {}),
    ...(createDocument !== undefined ? { createDocument: createDocument ? 'true' : 'false' } : {}),
    ...(detectPage !== undefined ? { detectPage: detectPage ? 'true' : 'false' } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xCancel ? { 'x-cancel': xCancel } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `prizmo://x-callback-url/processDocument${params}`
}
