import { encodeUrlPayload, qs } from '@protocol-launcher/shared'

/** Contents of a complete SKILL.md file, including its frontmatter. */
type InstallSkill = {
  content: string
}

/**
 * Open Zed's Create Skill form with a shared skill. The user reviews and saves it.
 *
 * @param payload Skill file contents.
 * @returns Zed skill share URL with UTF-8 base64url data, without padding.
 * @example
 * installSkill({ content: '# Hello' })
 * // => 'zed://skill?data=IyBIZWxsbw'
 * @link https://zed.dev/docs/ai/skills#sharing-skills
 */
export function installSkill(payload: InstallSkill) {
  const data = decodeURIComponent(encodeUrlPayload(payload.content, { useSafeEncoding: true }))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  return `zed://skill${qs({ data })}`
}
