import { describe, expect, test } from 'vitest'
import { cleanShotX } from '../src'

describe('cleanshot-x', () => {
  test('official examples should match CleanShot URL Scheme API exactly', () => {
    const officialExamples = [
      [cleanShotX.allInOne(), 'cleanshot://all-in-one'],
      [
        cleanShotX.allInOne({ x: 100, y: 120, width: 200, height: 150, display: 1 }),
        'cleanshot://all-in-one?x=100&y=120&width=200&height=150&display=1',
      ],
      [cleanShotX.captureArea(), 'cleanshot://capture-area'],
      [cleanShotX.captureArea({ action: 'annotate' }), 'cleanshot://capture-area?action=annotate'],
      [
        cleanShotX.captureArea({ x: 100, y: 120, width: 200, height: 150, display: 1 }),
        'cleanshot://capture-area?x=100&y=120&width=200&height=150&display=1',
      ],
      [cleanShotX.capturePreviousArea(), 'cleanshot://capture-previous-area'],
      [cleanShotX.captureFullscreen(), 'cleanshot://capture-fullscreen'],
      [cleanShotX.captureWindow(), 'cleanshot://capture-window'],
      [cleanShotX.selfTimer(), 'cleanshot://self-timer'],
      [cleanShotX.scrollingCapture(), 'cleanshot://scrolling-capture'],
      [
        cleanShotX.scrollingCapture({
          x: 100,
          y: 120,
          width: 200,
          height: 150,
          start: true,
          autoscroll: true,
        }),
        'cleanshot://scrolling-capture?x=100&y=120&width=200&height=150&start=true&autoscroll=true',
      ],
      [cleanShotX.pin(), 'cleanshot://pin'],
      [
        cleanShotX.pin({ filepath: '/Users/john/Desktop/my screenshot.png' }),
        'cleanshot://pin?filepath=/Users/john/Desktop/my%20screenshot.png',
      ],
      [cleanShotX.recordScreen(), 'cleanshot://record-screen'],
      [
        cleanShotX.recordScreen({ x: 100, y: 120, width: 200, height: 150, display: 1 }),
        'cleanshot://record-screen?x=100&y=120&width=200&height=150&display=1',
      ],
      [cleanShotX.captureText(), 'cleanshot://capture-text'],
      [
        cleanShotX.captureText({ filepath: '/Users/john/Desktop/my screenshot.png' }),
        'cleanshot://capture-text?filepath=/Users/john/Desktop/my%20screenshot.png',
      ],
      [
        cleanShotX.captureText({ x: 100, y: 120, width: 200, height: 150, display: 1 }),
        'cleanshot://capture-text?x=100&y=120&width=200&height=150&display=1',
      ],
      [cleanShotX.openAnnotate(), 'cleanshot://open-annotate'],
      [
        cleanShotX.openAnnotate({ filepath: '/Users/john/Desktop/my screenshot.png' }),
        'cleanshot://open-annotate?filepath=/Users/john/Desktop/my%20screenshot.png',
      ],
      [cleanShotX.openFromClipboard(), 'cleanshot://open-from-clipboard'],
      [cleanShotX.toggleDesktopIcons(), 'cleanshot://toggle-desktop-icons'],
      [cleanShotX.hideDesktopIcons(), 'cleanshot://hide-desktop-icons'],
      [cleanShotX.showDesktopIcons(), 'cleanshot://show-desktop-icons'],
      [
        cleanShotX.addQuickAccessOverlay({ filepath: '/Users/john/Desktop/my screenshot.png' }),
        'cleanshot://add-quick-access-overlay?filepath=/Users/john/Desktop/my%20screenshot.png',
      ],
      [cleanShotX.openHistory(), 'cleanshot://open-history'],
      [cleanShotX.restoreRecentlyClosed(), 'cleanshot://restore-recently-closed'],
      [cleanShotX.openSettings(), 'cleanshot://open-settings'],
      [cleanShotX.openSettings({ tab: 'recording' }), 'cleanshot://open-settings?tab=recording'],
    ]

    for (const [actual, expected] of officialExamples) {
      expect(actual).toBe(expected)
    }
  })

  test('allInOne should return a URL without parameters', () => {
    const url = cleanShotX.allInOne()
    expect(url).toBe('cleanshot://all-in-one')
  })

  test('allInOne should return a URL with area parameters', () => {
    const url = cleanShotX.allInOne({
      x: 100,
      y: 120,
      width: 200,
      height: 150,
      display: 1,
    })
    expect(url).toBe('cleanshot://all-in-one?x=100&y=120&width=200&height=150&display=1')
  })

  test('captureArea should return a URL without parameters', () => {
    const url = cleanShotX.captureArea()
    expect(url).toBe('cleanshot://capture-area')
  })

  test('captureArea should return a URL with action', () => {
    const url = cleanShotX.captureArea({ action: 'annotate' })
    expect(url).toBe('cleanshot://capture-area?action=annotate')
  })

  test('captureArea should preserve zero area coordinates', () => {
    const url = cleanShotX.captureArea({
      x: 0,
      y: 0,
      width: 200,
      height: 150,
      display: 1,
      action: 'copy',
    })
    expect(url).toBe('cleanshot://capture-area?x=0&y=0&width=200&height=150&display=1&action=copy')
  })

  test('capturePreviousArea should return a URL with action', () => {
    const url = cleanShotX.capturePreviousArea({ action: 'copy' })
    expect(url).toBe('cleanshot://capture-previous-area?action=copy')
  })

  test('captureFullscreen should return a URL with action', () => {
    const url = cleanShotX.captureFullscreen({ action: 'save' })
    expect(url).toBe('cleanshot://capture-fullscreen?action=save')
  })

  test('captureWindow should return a URL with action', () => {
    const url = cleanShotX.captureWindow({ action: 'upload' })
    expect(url).toBe('cleanshot://capture-window?action=upload')
  })

  test('selfTimer should return a URL with action', () => {
    const url = cleanShotX.selfTimer({ action: 'pin' })
    expect(url).toBe('cleanshot://self-timer?action=pin')
  })

  test('scrollingCapture should return a URL with area and boolean parameters', () => {
    const url = cleanShotX.scrollingCapture({
      x: 100,
      y: 120,
      width: 200,
      height: 150,
      start: true,
      autoscroll: false,
    })
    expect(url).toBe('cleanshot://scrolling-capture?x=100&y=120&width=200&height=150&start=true&autoscroll=false')
  })

  test('pin should return a URL without parameters', () => {
    const url = cleanShotX.pin()
    expect(url).toBe('cleanshot://pin')
  })

  test('pin should return a URL with filepath', () => {
    const url = cleanShotX.pin({ filepath: '/Users/username/Desktop/my screenshot.png' })
    expect(url).toBe('cleanshot://pin?filepath=/Users/username/Desktop/my%20screenshot.png')
  })

  test('recordScreen should return a URL with area parameters', () => {
    const url = cleanShotX.recordScreen({
      x: 100,
      y: 120,
      width: 200,
      height: 150,
      display: 1,
    })
    expect(url).toBe('cleanshot://record-screen?x=100&y=120&width=200&height=150&display=1')
  })

  test('captureText should return a URL without parameters', () => {
    const url = cleanShotX.captureText()
    expect(url).toBe('cleanshot://capture-text')
  })

  test('captureText should return a URL with filepath', () => {
    const url = cleanShotX.captureText({ filepath: '/Users/username/Desktop/my screenshot.png' })
    expect(url).toBe('cleanshot://capture-text?filepath=/Users/username/Desktop/my%20screenshot.png')
  })

  test('captureText should return a URL with area and linebreaks', () => {
    const url = cleanShotX.captureText({
      x: 100,
      y: 120,
      width: 200,
      height: 150,
      display: 1,
      linebreaks: true,
    })
    expect(url).toBe('cleanshot://capture-text?x=100&y=120&width=200&height=150&display=1&linebreaks=true')
  })

  test('openAnnotate should return a URL with filepath', () => {
    const url = cleanShotX.openAnnotate({ filepath: '/Users/username/Desktop/my screenshot.png' })
    expect(url).toBe('cleanshot://open-annotate?filepath=/Users/username/Desktop/my%20screenshot.png')
  })

  test('openFromClipboard should return a URL', () => {
    const url = cleanShotX.openFromClipboard()
    expect(url).toBe('cleanshot://open-from-clipboard')
  })

  test('toggleDesktopIcons should return a URL', () => {
    const url = cleanShotX.toggleDesktopIcons()
    expect(url).toBe('cleanshot://toggle-desktop-icons')
  })

  test('hideDesktopIcons should return a URL', () => {
    const url = cleanShotX.hideDesktopIcons()
    expect(url).toBe('cleanshot://hide-desktop-icons')
  })

  test('showDesktopIcons should return a URL', () => {
    const url = cleanShotX.showDesktopIcons()
    expect(url).toBe('cleanshot://show-desktop-icons')
  })

  test('addQuickAccessOverlay should return a URL with filepath', () => {
    const url = cleanShotX.addQuickAccessOverlay({ filepath: '/Users/username/Desktop/my screenshot.png' })
    expect(url).toBe('cleanshot://add-quick-access-overlay?filepath=/Users/username/Desktop/my%20screenshot.png')
  })

  test('openHistory should return a URL', () => {
    const url = cleanShotX.openHistory()
    expect(url).toBe('cleanshot://open-history')
  })

  test('restoreRecentlyClosed should return a URL', () => {
    const url = cleanShotX.restoreRecentlyClosed()
    expect(url).toBe('cleanshot://restore-recently-closed')
  })

  test('openSettings should return a URL without parameters', () => {
    const url = cleanShotX.openSettings()
    expect(url).toBe('cleanshot://open-settings')
  })

  test('openSettings should return a URL with tab', () => {
    const url = cleanShotX.openSettings({ tab: 'recording' })
    expect(url).toBe('cleanshot://open-settings?tab=recording')
  })
})
