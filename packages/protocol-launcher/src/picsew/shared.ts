import { qs } from '@protocol-launcher/shared'

export type PicsewInputMode = 'paste' | 'latest' | 'recent'

export type PicsewOutputMode = 'copy' | 'save' | 'save_copy'

export type PicsewWatermark = 'single' | 'repeat'

export type PicsewBorderMode = 'inside' | 'outside' | 'all'

export type PicsewBorderWidth =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100

export type PicsewBorder = PicsewBorderMode | `${PicsewBorderMode}_${PicsewBorderWidth}`

export type PicsewYes = 'yes'

export type PicsewInput =
  | {
      /**
       * Get images from the clipboard.
       */
      in: 'paste'
      count?: never
    }
  | {
      /**
       * Get the most recent screenshots automatically detected by Picsew.
       */
      in: 'recent'
      count?: never
    }
  | {
      /**
       * Get the latest N images from the photo album.
       */
      in: 'latest'
      /**
       * Required by Picsew when `in=latest`.
       */
      count: number
    }

export type PicsewStitchPayload = PicsewInput & {
  /**
   * Specifies how to output the stitching result.
   */
  out: PicsewOutputMode
  /**
   * Add a single watermark to the result image or repeat the watermark for each image.
   */
  watermark?: PicsewWatermark
  /**
   * Add borders inside, outside, or both. Picsew also documents an optional `_0` to `_100` width suffix.
   */
  border?: PicsewBorder
  /**
   * Add a device mockup. Picsew documents the values separately as "Mockup Parameters".
   */
  mockup2?: string
  /**
   * Clear the status bar.
   */
  clean_status?: PicsewYes
  /**
   * Remove scrollbars.
   */
  remove_scrollbar?: PicsewYes
  /**
   * Delete original source images after stitching.
   */
  delete_source?: PicsewYes
}

export type PicsewAction = 'scroll' | 'vert' | 'hori'

export function picsewStitchUrl(action: PicsewAction, payload: PicsewStitchPayload) {
  const { in: input, count, out, clean_status, mockup2, remove_scrollbar, delete_source, watermark, border } = payload

  return `picsew://x-callback-url/${action}${qs({
    in: input,
    count,
    out,
    clean_status,
    mockup2,
    remove_scrollbar,
    delete_source,
    watermark,
    border,
  })}`
}
