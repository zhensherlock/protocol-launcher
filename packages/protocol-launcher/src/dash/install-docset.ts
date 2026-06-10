import { type DashInstallDocsetPayload, dashInstallUrl } from './shared'

export type InstallDocsetPayload = DashInstallDocsetPayload

/**
 * Install a Dash docset from a documented Dash downloads repo entry.
 *
 * @param payload Dash docset install payload.
 * @returns Dash docset install URL.
 * @example
 * installDocset({ repoName: 'Ruby Docsets', entryName: 'cheatset', version: '1.3.3' })
 * // => 'dash-install://repo_name=Ruby Docsets&entry_name=cheatset&version=1.3.3'
 * @link https://kapeli.com/dash_install
 */
export function installDocset(payload: InstallDocsetPayload) {
  return dashInstallUrl(payload)
}
