export const searchParams = {
  title: 'Song Title',
} as const

export const customChordChartParams = {
  title: 'Song Title',
  composer: 'LastName FirstName',
  style: 'Style',
  key: 'Ab',
  chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
} as const

export const customChordChartPlaylistParams = {
  songs: [
    {
      ...customChordChartParams,
      title: 'Song 1',
    },
    {
      ...customChordChartParams,
      title: 'Song 2',
    },
    {
      ...customChordChartParams,
      title: 'Song 3',
    },
  ],
} as const
