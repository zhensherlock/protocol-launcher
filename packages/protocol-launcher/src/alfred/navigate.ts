/**
 * Navigate to preference path definition.
 */
type NavigateTo = {
  /**
   * Path to navigate to (e.g., 'workflows', 'workflows>resolvedependencies', 'features>snippets').
   */
  path: string
}

/**
 * Navigate to a specific section in Alfred Preferences.
 *
 * @param payload Navigate to definition.
 * @returns Alfred Preferences navigate URL.
 * @example
 * navigateTo({ path: 'advanced' })
 * // => 'alfredpreferences://navigateto/advanced'
 *
 * @example
 * navigateTo({ path: 'appearance' })
 * // => 'alfredpreferences://navigateto/appearance'
 *
 * @example
 * navigateTo({ path: 'workflows' })
 * // => 'alfredpreferences://navigateto/workflows'
 *
 * @example
 * navigateTo({ path: 'features' })
 * // => 'alfredpreferences://navigateto/features'
 *
 * @example
 * navigateTo({ path: 'general' })
 * // => 'alfredpreferences://navigateto/general'
 *
 * @example
 * navigateTo({ path: 'powerpack' })
 * // => 'alfredpreferences://navigateto/powerpack'
 *
 * @example
 * navigateTo({ path: 'usage' })
 * // => 'alfredpreferences://navigateto/usage'
 *
 * @example
 * navigateTo({ path: 'help' })
 * // => 'alfredpreferences://navigateto/help'
 *
 * @example
 * navigateTo({ path: 'update' })
 * // => 'alfredpreferences://navigateto/update'
 *
 * @example
 * navigateTo({ path: 'workflows>resolvedependencies' })
 * // => 'alfredpreferences://navigateto/workflows>resolvedependencies'
 * @link https://www.alfredapp.com/help/kb/dependencies/
 *
 * @example
 * navigateTo({ path: 'workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09' })
 * // => 'alfredpreferences://navigateto/workflows>workflow>user.workflow.81CBDAC6-527B-4B33-BA4E-F12563EBED09'
 *
 * @example
 * navigateTo({ path: 'features>snippets' })
 * // => 'alfredpreferences://navigateto/features>snippets'
 */
export function navigateTo(payload: NavigateTo) {
  const { path } = payload
  return `alfredpreferences://navigateto/${path}`
}
