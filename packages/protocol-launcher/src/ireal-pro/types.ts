/**
 * iReal Pro search payload definition.
 */
export interface IRealProSearchPayload {
  /**
   * Song title or search query to pass after `irealb://search?`.
   *
   * @example 'Song Title'
   */
  title: string
}

/**
 * Key signatures documented by the iReal Pro custom chord chart protocol.
 */
export type IRealProKeySignature =
  | 'C'
  | 'Db'
  | 'D'
  | 'Eb'
  | 'E'
  | 'F'
  | 'Gb'
  | 'G'
  | 'Ab'
  | 'A'
  | 'Bb'
  | 'B'
  | 'A-'
  | 'Bb-'
  | 'B-'
  | 'C-'
  | 'C#-'
  | 'D-'
  | 'Eb-'
  | 'E-'
  | 'F-'
  | 'F#-'
  | 'G-'
  | 'G#-'

/**
 * iReal Pro custom chord chart payload definition.
 */
export interface IRealProCustomChordChartPayload {
  /**
   * Song title.
   *
   * @example 'Song Title'
   */
  title: string

  /**
   * Composer name. iReal Pro documents LastName FirstName order for sorting.
   *
   * @example 'LastName FirstName'
   */
  composer: string

  /**
   * Short style description used for sorting in iReal Pro.
   *
   * @example 'Style'
   */
  style: string

  /**
   * Key signature.
   *
   * @example 'Ab'
   */
  key: IRealProKeySignature

  /**
   * Main chord progression string in iReal Pro custom chord chart notation.
   *
   * @example 'T44*A{C^7 |A-7 |D-9 |G7#5 }'
   */
  chordProgression: string
}

/**
 * iReal Pro custom chord chart playlist payload definition.
 */
export interface IRealProCustomChordChartPlaylistPayload {
  /**
   * Custom chord chart songs to append into one `irealbook://` URL.
   */
  songs: readonly IRealProCustomChordChartPayload[]
}
