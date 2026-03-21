import { describe, expect, test } from 'vitest'
import { pika } from '../src'

describe('pika', () => {
  describe('pickForeground', () => {
    test('should return default hex URL without payload', async () => {
      const url = pika.pickForeground()
      expect(url).toBe('pika://pick/foreground/hex')
    })

    test('should return URL with hex type', async () => {
      const url = pika.pickForeground({ type: 'hex' })
      expect(url).toBe('pika://pick/foreground/hex')
    })

    test('should return URL with rgb type', async () => {
      const url = pika.pickForeground({ type: 'rgb' })
      expect(url).toBe('pika://pick/foreground/rgb')
    })

    test('should return URL with hsb type', async () => {
      const url = pika.pickForeground({ type: 'hsb' })
      expect(url).toBe('pika://pick/foreground/hsb')
    })
  })

  describe('pickBackground', () => {
    test('should return default hex URL without payload', async () => {
      const url = pika.pickBackground()
      expect(url).toBe('pika://pick/background/hex')
    })

    test('should return URL with hex type', async () => {
      const url = pika.pickBackground({ type: 'hex' })
      expect(url).toBe('pika://pick/background/hex')
    })

    test('should return URL with rgb type', async () => {
      const url = pika.pickBackground({ type: 'rgb' })
      expect(url).toBe('pika://pick/background/rgb')
    })

    test('should return URL with hsl type', async () => {
      const url = pika.pickBackground({ type: 'hsl' })
      expect(url).toBe('pika://pick/background/hsl')
    })
  })

  describe('systemForeground', () => {
    test('should return system foreground URL', async () => {
      const url = pika.systemForeground()
      expect(url).toBe('pika://system/foreground')
    })
  })

  describe('systemBackground', () => {
    test('should return system background URL', async () => {
      const url = pika.systemBackground()
      expect(url).toBe('pika://system/background')
    })
  })

  describe('copyForeground', () => {
    test('should return copy foreground URL', async () => {
      const url = pika.copyForeground()
      expect(url).toBe('pika://copy/foreground')
    })
  })

  describe('copyBackground', () => {
    test('should return copy background URL', async () => {
      const url = pika.copyBackground()
      expect(url).toBe('pika://copy/background')
    })
  })

  describe('copyText', () => {
    test('should return copy text URL', async () => {
      const url = pika.copyText()
      expect(url).toBe('pika://copy/text')
    })
  })

  describe('copyJson', () => {
    test('should return copy JSON URL', async () => {
      const url = pika.copyJson()
      expect(url).toBe('pika://copy/json')
    })
  })

  describe('formatHex', () => {
    test('should return format hex URL', async () => {
      const url = pika.formatHex()
      expect(url).toBe('pika://format/hex')
    })
  })

  describe('formatRgb', () => {
    test('should return format rgb URL', async () => {
      const url = pika.formatRgb()
      expect(url).toBe('pika://format/rgb')
    })
  })

  describe('formatHsb', () => {
    test('should return format hsb URL', async () => {
      const url = pika.formatHsb()
      expect(url).toBe('pika://format/hsb')
    })
  })

  describe('formatHsl', () => {
    test('should return format hsl URL', async () => {
      const url = pika.formatHsl()
      expect(url).toBe('pika://format/hsl')
    })
  })

  describe('formatLab', () => {
    test('should return format lab URL', async () => {
      const url = pika.formatLab()
      expect(url).toBe('pika://format/lab')
    })
  })

  describe('formatOpenGL', () => {
    test('should return format opengl URL', async () => {
      const url = pika.formatOpenGL()
      expect(url).toBe('pika://format/opengl')
    })
  })

  describe('formatOklch', () => {
    test('should return format oklch URL', async () => {
      const url = pika.formatOklch()
      expect(url).toBe('pika://format/oklch')
    })
  })

  describe('swap', () => {
    test('should return swap URL', async () => {
      const url = pika.swap()
      expect(url).toBe('pika://swap')
    })
  })

  describe('undo', () => {
    test('should return undo URL', async () => {
      const url = pika.undo()
      expect(url).toBe('pika://undo')
    })
  })

  describe('redo', () => {
    test('should return redo URL', async () => {
      const url = pika.redo()
      expect(url).toBe('pika://redo')
    })
  })

  describe('setForeground', () => {
    test('should return set foreground URL with hex', async () => {
      const url = pika.setForeground({ hex: 'fbbf24' })
      expect(url).toBe('pika://set/foreground/fbbf24')
    })

    test('should return set foreground URL with different hex', async () => {
      const url = pika.setForeground({ hex: 'e74661' })
      expect(url).toBe('pika://set/foreground/e74661')
    })

    test('should return set foreground URL with full hex', async () => {
      const url = pika.setForeground({ hex: 'ff5733' })
      expect(url).toBe('pika://set/foreground/ff5733')
    })
  })

  describe('setBackground', () => {
    test('should return set background URL with hex', async () => {
      const url = pika.setBackground({ hex: 'fbbf24' })
      expect(url).toBe('pika://set/background/fbbf24')
    })

    test('should return set background URL with different hex', async () => {
      const url = pika.setBackground({ hex: 'e74661' })
      expect(url).toBe('pika://set/background/e74661')
    })

    test('should return set background URL with full hex', async () => {
      const url = pika.setBackground({ hex: '33ff57' })
      expect(url).toBe('pika://set/background/33ff57')
    })
  })

  describe('showHistory', () => {
    test('should return show history URL', async () => {
      const url = pika.showHistory()
      expect(url).toBe('pika://history/show')
    })
  })

  describe('hideHistory', () => {
    test('should return hide history URL', async () => {
      const url = pika.hideHistory()
      expect(url).toBe('pika://history/hide')
    })
  })

  describe('toggleHistory', () => {
    test('should return toggle history URL', async () => {
      const url = pika.toggleHistory()
      expect(url).toBe('pika://history/toggle')
    })
  })

  describe('about', () => {
    test('should return about window URL', async () => {
      const url = pika.about()
      expect(url).toBe('pika://window/about')
    })
  })

  describe('help', () => {
    test('should return help window URL', async () => {
      const url = pika.help()
      expect(url).toBe('pika://window/help')
    })
  })

  describe('preferences', () => {
    test('should return preferences window URL', async () => {
      const url = pika.preferences()
      expect(url).toBe('pika://window/preferences')
    })
  })

  describe('resize', () => {
    test('should return resize URL with width and height', async () => {
      const url = pika.resize({ width: 480, height: 300 })
      expect(url).toBe('pika://window/resize/480/300')
    })

    test('should return resize URL with different dimensions', async () => {
      const url = pika.resize({ width: 800, height: 600 })
      expect(url).toBe('pika://window/resize/800/600')
    })

    test('should return resize URL with small dimensions', async () => {
      const url = pika.resize({ width: 320, height: 240 })
      expect(url).toBe('pika://window/resize/320/240')
    })
  })

  describe('light', () => {
    test('should return light appearance URL', async () => {
      const url = pika.light()
      expect(url).toBe('pika://appearance/light')
    })
  })

  describe('dark', () => {
    test('should return dark appearance URL', async () => {
      const url = pika.dark()
      expect(url).toBe('pika://appearance/dark')
    })
  })

  describe('system', () => {
    test('should return system appearance URL', async () => {
      const url = pika.system()
      expect(url).toBe('pika://appearance/system')
    })
  })
})
