export const allInOneAreaParams = {
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
}

export const captureAreaActionParams = {
  action: 'annotate' as const,
}

export const captureAreaRegionParams = {
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
}

export const capturePreviousAreaParams = {
  action: 'copy' as const,
}

export const captureFullscreenParams = {
  action: 'save' as const,
}

export const captureWindowParams = {
  action: 'upload' as const,
}

export const selfTimerParams = {
  action: 'pin' as const,
}

export const scrollingCaptureParams = {
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  start: true,
  autoscroll: true,
}

export const pinParams = {
  filepath: '/Users/username/Desktop/my screenshot.png',
}

export const recordScreenParams = {
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
}

export const captureTextFileParams = {
  filepath: '/Users/username/Desktop/my screenshot.png',
}

export const captureTextAreaParams = {
  x: 100,
  y: 120,
  width: 200,
  height: 150,
  display: 1,
  linebreaks: true,
}

export const openAnnotateParams = {
  filepath: '/Users/username/Desktop/my screenshot.png',
}

export const addQuickAccessOverlayParams = {
  filepath: '/Users/username/Desktop/my screenshot.png',
}

export const openSettingsParams = {
  tab: 'recording' as const,
}
