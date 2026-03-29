import { qs } from '@protocol-launcher/shared'

/**
 * Open action payload definition.
 */
type Open = {
  /**
   * The UUID identifier for a draft.
   */
  uuid?: string
  /**
   * The title of the draft to open. Can include marker with format 'Title/Marker-Label'.
   */
  title?: string
  /**
   * The name of a navigation marker in the draft to navigate to after opening.
   */
  marker?: string
  /**
   * Name of an action in the action list. If provided, this action will be run on the specified draft.
   */
  action?: string
  /**
   * If an action parameter is provided, adding `allowEmpty=false` to the URL will prevent that action from running if the text is empty.
   */
  allowEmpty?: boolean
  /**
   * Using in conjunction with the `title` parameter, if `allowCreate` is passed and is "true", and no draft matching the title value is found, the user will be prompted asking if they wish to create the draft with that title.
   */
  allowCreate?: boolean
  /**
   * Set visibility of draft list.
   */
  showDraftList?: boolean
  /**
   * Set visibility of action list.
   */
  showActionList?: boolean
  /**
   * Name of workspace to apply.
   */
  loadWorkspace?: string
  /**
   * Name of action group to load in action list.
   */
  loadActionGroup?: string
  /**
   * Name of action group to load in action bar.
   */
  loadActionBarGroup?: string
}

/**
 * Open an existing draft based on the UUID argument.
 *
 * @param payload Open action payload.
 * @returns Drafts open URL.
 * @example
 * open()
 * // => 'drafts://'
 * @example
 * open({ uuid: 'UUID-TO-VALID-DRAFT' })
 * // => 'drafts:///open?uuid=UUID-TO-VALID-DRAFT'
 * @example
 * open({ title: 'MyDraft/Header Name' })
 * // => 'drafts:///open?title=MyDraft%2FHeader%20Name'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function open(payload: Open = {}) {
  const {
    uuid,
    title,
    marker,
    action,
    allowEmpty,
    allowCreate,
    showDraftList,
    showActionList,
    loadWorkspace,
    loadActionGroup,
    loadActionBarGroup,
  } = payload

  // If no parameters, return base URL to just open the app
  if (
    !uuid &&
    !title &&
    !marker &&
    !action &&
    allowEmpty === undefined &&
    allowCreate === undefined &&
    showDraftList === undefined &&
    showActionList === undefined &&
    !loadWorkspace &&
    !loadActionGroup &&
    !loadActionBarGroup
  ) {
    return 'drafts://'
  }

  const params = qs({
    ...(uuid ? { uuid } : {}),
    ...(title ? { title } : {}),
    ...(marker ? { marker } : {}),
    ...(action ? { action } : {}),
    ...(allowEmpty !== undefined ? { allowEmpty } : {}),
    ...(allowCreate !== undefined ? { allowCreate } : {}),
    ...(showDraftList !== undefined ? { showDraftList } : {}),
    ...(showActionList !== undefined ? { showActionList } : {}),
    ...(loadWorkspace ? { loadWorkspace } : {}),
    ...(loadActionGroup ? { loadActionGroup } : {}),
    ...(loadActionBarGroup ? { loadActionBarGroup } : {}),
  })

  return `drafts:///open${params}`
}
