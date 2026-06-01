import { qs } from '@protocol-launcher/shared'

type LicenseParams = {
  key: string
  silent?: boolean
}

export function anydeskLicenseParams(params: LicenseParams) {
  const query = qs({ key: params.key })

  return params.silent ? `${query}&silent` : query
}
