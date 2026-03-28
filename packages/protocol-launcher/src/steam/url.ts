/**
 * Named URL page payload definition.
 */
type Url = {
  /**
   * Named page to open.
   *
   * @example 'Store'
   * @example 'CommunityHome'
   * @example 'SteamWorkshop'
   */
  page:
    | 'ChatBanListAdmin'
    | 'CommentNotifications'
    | 'CommunityFilePage'
    | 'CommunityFriendsThatPlay'
    | 'CommunityGroupSearch'
    | 'CommunityHome'
    | 'CommunityInventory'
    | 'CommunitySearch'
    | 'DownloadsSupportInfo'
    | 'EventAnnouncementPage'
    | 'FamilySharing'
    | 'GameHub'
    | 'GroupEventsPage'
    | 'GroupSteamIDPage'
    | 'GroupSteamIDAdmin'
    | 'LeaveGroupPage'
    | 'LegalInformation'
    | 'MyHelpRequests'
    | 'ParentalSetup'
    | 'PrivacyPolicy'
    | 'SSA'
    | 'SteamIDAchievementsPage'
    | 'SteamIDControlPage'
    | 'SteamIDEditPage'
    | 'SteamIDFriendsPage'
    | 'SteamIDLoginPage'
    | 'SteamIDMyProfile'
    | 'SteamIDPage'
    | 'SteamWorkshop'
    | 'SteamWorkshopPage'
    | 'SteamGreenlight'
    | 'Store'
    | 'StoreAccount'
    | 'StoreAppPage'
    | 'StoreDLCPage'
    | 'StoreCart'
    | 'Storefront'
    | 'StoreFrontPage'
    | 'SupportFrontPage'
  /**
   * Additional parameter for some pages (e.g., app ID).
   *
   * @example '730'
   */
  param?: string
}

/**
 * Opens a special, named web pages in Steam.
 *
 * @param payload URL payload.
 * @returns Steam URL page.
 * @example
 * url({ page: 'Store' })
 * // => 'steam://url/Store'
 * @example
 * url({ page: 'CommunityHome' })
 * // => 'steam://url/CommunityHome/'
 * @example
 * url({ page: 'SteamWorkshop' })
 * // => 'steam://url/SteamWorkshop'
 * @example
 * url({ page: 'StoreAppPage', param: '730' })
 * // => 'steam://url/StoreAppPage/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function url(payload: Url) {
  const { page, param } = payload
  if (param) {
    return `steam://url/${page}/${param}`
  }
  return `steam://url/${page}`
}
