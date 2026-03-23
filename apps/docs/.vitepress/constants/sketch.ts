export const openFileParams = {
  path: '/Users/name/Documents/design.sketch',
}

export const openFileWithLayerParams = {
  path: '/Users/name/Documents/design.sketch',
  centerOnLayer: 'layer-123',
  zoom: 2,
}

export const addLibraryParams = {
  url: 'https://developer.apple.com/design/downloads/sketch.rss',
}

export const runPluginParams = {
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
}

export const runPluginWithQueryParams = {
  pluginId: 'com.example.sketch.messenger',
  commandId: 'message.show',
  query: { msg: 'Hello World' },
}
