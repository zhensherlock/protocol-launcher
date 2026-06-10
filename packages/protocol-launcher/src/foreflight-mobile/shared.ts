export function foreFlightMobileMapSearchUrl(q: string) {
  return `foreflightmobile://maps/search?q=${foreFlightMobileMapsSearchQuery(q)}`
}

function foreFlightMobileMapsSearchQuery(value: string) {
  return encodeURIComponent(value).replace(/%20/g, '+').replace(/%40/g, '@').replace(/%2F/g, '/')
}
