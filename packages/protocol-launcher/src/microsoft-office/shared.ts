export type OfficeScheme =
  | 'ms-word'
  | 'ms-powerpoint'
  | 'ms-excel'
  | 'ms-visio'
  | 'ms-access'
  | 'ms-project'
  | 'ms-publisher'
  | 'ms-spd'
  | 'ms-infopath'

export type OfficeTemplateScheme = Exclude<OfficeScheme, 'ms-spd' | 'ms-infopath'>

export interface OfficeDocumentPayload<Scheme extends OfficeScheme = OfficeScheme> {
  /**
   * Office URI scheme name registered by the target application.
   *
   * @example 'ms-word'
   */
  scheme: Scheme

  /**
   * URI location of the document to open.
   *
   * Microsoft documents document URIs as http or https based URIs.
   *
   * @example 'https://contoso.com/documents/report.docx'
   */
  uri: string
}

export interface OfficeAppDocumentPayload {
  /**
   * URI location of the document to open.
   *
   * Microsoft documents document URIs as http or https based URIs.
   *
   * @example 'https://contoso.com/documents/report.docx'
   */
  uri: string
}

export interface OfficeTemplatePayload<Scheme extends OfficeTemplateScheme = OfficeTemplateScheme> {
  /**
   * Office URI scheme name registered by the target application.
   *
   * SharePoint Designer and InfoPath do not support the new-from-template command
   * in Microsoft's Office URI Schemes document.
   *
   * @example 'ms-powerpoint'
   */
  scheme: Scheme

  /**
   * URI location of the template file on which the new file will be based.
   *
   * @example 'https://contoso.com/templates/status.potx'
   */
  templateUri: string

  /**
   * Optional URI location of the folder in which the new document should be created.
   *
   * Microsoft requires this URI to point to the same host name as the template
   * URI when it is supplied.
   *
   * @example 'https://contoso.com/presentations/'
   */
  saveLocation?: string
}

export interface OfficeAppTemplatePayload {
  /**
   * URI location of the template file on which the new file will be based.
   *
   * @example 'https://contoso.com/templates/status.potx'
   */
  templateUri: string

  /**
   * Optional URI location of the folder in which the new document should be created.
   *
   * Microsoft requires this URI to point to the same host name as the template
   * URI when it is supplied.
   *
   * @example 'https://contoso.com/presentations/'
   */
  saveLocation?: string
}

export interface OfficeAppLauncher {
  openDocument(payload: OfficeAppDocumentPayload): string
  openForEdit(payload: OfficeAppDocumentPayload): string
  openForView(payload: OfficeAppDocumentPayload): string
}

export interface OfficeTemplateAppLauncher extends OfficeAppLauncher {
  newFromTemplate(payload: OfficeAppTemplatePayload): string
}

export function officeDocumentUrl(scheme: OfficeScheme, command: 'ofe' | 'ofv', uri: string) {
  validateOfficeHttpUrl(scheme, uri, 'document URI')

  return `${scheme}:${command}|u|${uri}`
}

export function officeAbbreviatedUrl(scheme: OfficeScheme, uri: string) {
  validateOfficeHttpUrl(scheme, uri, 'document URI')

  return `${scheme}:${uri}`
}

export function officeTemplateUrl(scheme: OfficeTemplateScheme, templateUri: string, saveLocation?: string) {
  const templateUrl = validateOfficeHttpUrl(scheme, templateUri, 'template URI')

  if (saveLocation !== undefined) {
    const saveLocationUrl = validateOfficeHttpUrl(scheme, saveLocation, 'save location URI')

    if (saveLocationUrl.hostname !== templateUrl.hostname) {
      throw new Error('Microsoft Office save location URI must point to the same host name as the template URI.')
    }
  }

  return `${scheme}:nft|u|${templateUri}${saveLocation === undefined ? '' : `|s|${saveLocation}`}`
}

export function createOfficeApp(scheme: OfficeScheme): OfficeAppLauncher {
  return {
    openDocument: ({ uri }) => officeAbbreviatedUrl(scheme, uri),
    openForEdit: ({ uri }) => officeDocumentUrl(scheme, 'ofe', uri),
    openForView: ({ uri }) => officeDocumentUrl(scheme, 'ofv', uri),
  }
}

export function createOfficeTemplateApp(scheme: OfficeTemplateScheme): OfficeTemplateAppLauncher {
  return {
    ...createOfficeApp(scheme),
    newFromTemplate: ({ templateUri, saveLocation }) => officeTemplateUrl(scheme, templateUri, saveLocation),
  }
}

function validateOfficeHttpUrl(scheme: OfficeScheme, uri: string, label: string) {
  let url: URL

  try {
    url = new URL(uri)
  } catch {
    throw new Error(`Microsoft Office ${label} must be a valid URI.`)
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`Microsoft Office ${label} must use the http or https scheme.`)
  }

  const maxPathLength = scheme === 'ms-excel' ? 216 : 256
  if (url.pathname.length > maxPathLength) {
    throw new Error(`Microsoft Office ${label} path length must be ${maxPathLength} characters or fewer.`)
  }

  for (const segment of url.pathname.split('/')) {
    if (segment === '') {
      continue
    }

    let decodedSegment: string

    try {
      decodedSegment = decodeURIComponent(segment)
    } catch {
      throw new Error(`Microsoft Office ${label} must be a valid URI.`)
    }

    if (/[\\/:?<>|"*]/.test(decodedSegment)) {
      throw new Error('Microsoft Office URI path file names must not contain \\ / : ? < > | " or * characters.')
    }
  }

  return url
}
