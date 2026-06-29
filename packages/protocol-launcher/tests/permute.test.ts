import { describe, expect, test } from 'vitest'
import { permute } from '../src'

describe('permute', () => {
  test('should expose only the documented Permute URL helpers', () => {
    expect(Object.keys(permute).sort()).toEqual(['convert', 'stitch'])
  })

  test('convert should return the documented conversion URL', () => {
    const url = permute.convert({
      filePath: '/Users/example/Downloads/file.mp4',
      preset: 'MP4',
      source: 'MyScript',
    })

    expect(url).toBe('permute:///Users/example/Downloads/file.mp4?action=convert&preset=MP4&source=MyScript')
  })

  test('convert should encode file paths and optional query parameters', () => {
    const url = permute.convert({
      filePath: '/Users/example/Downloads/source file #1.mp4',
      preset: 'Apple TV',
      callback: 'myapp://7452d66e-9260-43f0-97cb-d0467a1143a7',
      destination: '/Users/example/Movies/Converted',
      remove_original: true,
      custom_group: 'Batch 1',
      trim: '10:90',
      crop: '0;0;1280;720',
    })

    expect(url).toBe(
      'permute:///Users/example/Downloads/source%20file%20%231.mp4?action=convert&preset=Apple%20TV&callback=myapp%3A%2F%2F7452d66e-9260-43f0-97cb-d0467a1143a7&destination=%2FUsers%2Fexample%2FMovies%2FConverted&remove_original=true&custom_group=Batch%201&trim=10%3A90&crop=0%3B0%3B1280%3B720',
    )
  })

  test('stitch should return the documented stitching URL', () => {
    const url = permute.stitch({
      folderPath: '/Users/example/Downloads/',
      preset: 'MP4',
      source: 'MyScript',
      name: 'foo.mp4',
      files: ['File1.mp4', 'File2.mp4'],
    })

    expect(url).toBe(
      'permute:///Users/example/Downloads/?action=stitch&preset=MP4&source=MyScript&name=foo.mp4&file1=File1.mp4&file2=File2.mp4',
    )
  })

  test('stitch should encode file names and omit undefined optional values', () => {
    const url = permute.stitch({
      folderPath: '/Users/example/Downloads/Stitch Jobs/',
      preset: 'Apple TV',
      name: 'final cut.mp4',
      files: ['Part 1.mp4', 'Part #2.mp4'],
    })

    expect(url).toBe(
      'permute:///Users/example/Downloads/Stitch%20Jobs/?action=stitch&preset=Apple%20TV&name=final%20cut.mp4&file1=Part%201.mp4&file2=Part%20%232.mp4',
    )
  })
})
