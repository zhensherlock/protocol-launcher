import { type EncodeOptions, encodeUrlPayload } from '@protocol-launcher/shared'

type OfficialProviderId =
  | 'cherryin'
  | 'silicon'
  | 'aihubmix'
  | 'ocoolai'
  | 'deepseek'
  | 'ppio'
  | 'alayanew'
  | 'qiniu'
  | 'dmxapi'
  | 'burncloud'
  | 'tokenflux'
  | '302ai'
  | 'cephalon'
  | 'lanyun'
  | 'ph8'
  | 'openrouter'
  | 'ollama'
  | 'ovms'
  | 'new-api'
  | 'lmstudio'
  | 'anthropic'
  | 'openai'
  | 'azure-openai'
  | 'gemini'
  | 'vertexai'
  | 'github'
  | 'copilot'
  | 'zhipu'
  | 'yi'
  | 'moonshot'
  | 'baichuan'
  | 'dashscope'
  | 'stepfun'
  | 'doubao'
  | 'infini'
  | 'minimax'
  | 'groq'
  | 'together'
  | 'fireworks'
  | 'nvidia'
  | 'grok'
  | 'hyperbolic'
  | 'mistral'
  | 'jina'
  | 'perplexity'
  | 'modelscope'
  | 'xirang'
  | 'hunyuan'
  | 'tencent-cloud-ti'
  | 'baidu-cloud'
  | 'gpustack'
  | 'voyageai'
  | 'aws-bedrock'
  | 'poe'
  | 'aionly'
  | 'longcat'
  | 'huggingface'
  | 'sophnet'
  | 'gateway'
  | 'cerebras'
  | 'mimo'

type CustomProviderId = string & {}

type OfficialProviderType =
  | 'openai'
  | 'openai-response'
  | 'anthropic'
  | 'gemini'
  | 'azure-openai'
  | 'vertexai'
  | 'mistral'
  | 'aws-bedrock'
  | 'vertex-anthropic'
  | 'new-api'
  | 'gateway'
  | 'ollama'

type CustomProviderType = string & {}

/**
 * Provider definition.
 *
 * @link https://github.com/CherryHQ/cherry-studio/blob/main/src/renderer/src/types/provider.ts#L97
 */
export type Provider = {
  /**
   * Provider ID.
   *
   * Unique identifier for the provider.
   */
  id: OfficialProviderId | CustomProviderId

  /**
   * Provider base URL.
   *
   * Base URL for the provider's API.
   */
  baseUrl: string

  /**
   * Provider API key.
   *
   * API key used for authentication with the provider.
   */
  apiKey: string

  /**
   * Provider name.
   *
   * Optional human-readable name used for identification and display.
   */
  name?: string

  /**
   * Provider type.
   *
   * Optional type of the provider (e.g., 'openai', 'ollama').
   */
  type?: OfficialProviderType | CustomProviderType
}

/**
 * Install provider.
 *
 * @param payload Provider definition.
 * @param options Encoding options.
 * @returns Install provider URL.
 * @example
 * installProvider({
 *   id: 'new-api',
 *   baseUrl: 'https://open.cherryin.ai',
 *   apiKey: 'sk-xxxx',
 * })
 * @link https://github.com/CherryHQ/cherry-studio/blob/main/src/main/services/urlschema/handle-providers.ts
 */
export function installProvider(payload: Provider, options?: EncodeOptions) {
  const encodedPayload = encodeUrlPayload(payload, options)
  return `cherrystudio://providers/api-keys?v=1&data=${encodedPayload}`
}
