export const playParams = {
  url: ['https://files.firecore.com/infuse/sample-5s-360p.mp4', 'https://files.firecore.com/infuse/mov_bbb.mp4'],
  filename: ['Inception-2010.mp4', 'Mad-Men-S01-E01.mp4'],
  sub: ['https://files.firecore.com/infuse/example.srt', 'https://files.firecore.com/infuse/example2.srt'],
}

export const saveParams = {
  url: ['https://files.firecore.com/infuse/sample-5s-360p.mp4', 'https://files.firecore.com/infuse/mov_bbb.mp4'],
  filename: ['Inception-2010.mp4', 'Mad-Men-S01-E01.mp4'],
  sub: ['https://files.firecore.com/infuse/example1.srt', 'https://files.firecore.com/infuse/example2.srt'],
  download: 0 as const,
}

export const openMovieParams = {
  tmdbId: 12345,
}

export const openSeriesParams = {
  tmdbId: 12345,
}

export const openSeasonParams = {
  tmdbId: 12345,
  seasonNumber: 1,
}

export const openEpisodeParams = {
  tmdbId: 12345,
  seasonNumber: 1,
  episodeNumber: 2,
}
