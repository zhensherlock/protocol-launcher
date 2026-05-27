import { qs } from '@protocol-launcher/shared'

/**
 * FileMaker major version number used in the `fmpXX` URL scheme.
 */
export type FileMakerVersion = number

/**
 * FileMaker account credentials for opening a file.
 */
export type FileMakerCredentials = {
  /**
   * Account name.
   */
  account: string
  /**
   * Account password.
   */
  password: string
}

/**
 * FileMaker local variable passed to a script URL.
 */
export type FileMakerLocalVariable = {
  /**
   * Local variable name without the leading `$`.
   */
  name: string
  /**
   * Optional repetition number.
   */
  repetition?: number
  /**
   * Local variable value.
   */
  value: string | number
}

export type FileMakerFilePayload = {
  /**
   * FileMaker Pro filename. The filename extension is not required.
   */
  filename: string
  /**
   * DNS name or IP address of the host, `~` for the user's Documents folder, or `$` for an already open file.
   */
  address?: string
  /**
   * FileMaker major version number. Omit to use the last installed version via `fmp://`.
   */
  version?: FileMakerVersion
  /**
   * Optional account credentials for opening the file.
   */
  credentials?: FileMakerCredentials
}

export function buildFileMakerUrl(payload: FileMakerFilePayload, params: Record<string, unknown> = {}) {
  const { filename, address, version, credentials } = payload
  const scheme = version === undefined ? 'fmp' : `fmp${version}`
  const encodedFilename = encodeURIComponent(filename)
  const encodedCredentials = credentials
    ? `${encodeURIComponent(credentials.account)}:${encodeURIComponent(credentials.password)}@`
    : ''
  const location = address === undefined ? encodedFilename : `${encodedCredentials}${address}/${encodedFilename}`

  return `${scheme}://${location}${qs(params)}`
}

export function fileMakerVariableParams(variables: FileMakerLocalVariable[] | undefined) {
  if (!variables) return {}

  return Object.fromEntries(
    variables.map(({ name, repetition, value }) => [
      `$${name}${repetition === undefined ? '' : `[${repetition}]`}`,
      value,
    ]),
  )
}
