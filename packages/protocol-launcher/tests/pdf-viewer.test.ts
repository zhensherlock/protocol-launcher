import { describe, expect, test } from 'vitest'
import { pdfViewer } from '../src'

describe('pdfViewer', () => {
  test('openFile should return a URL with path', () => {
    const url = pdfViewer.openFile({
      path: '/Quick Start.pdf',
    })

    expect(url).toBe('pdfviewer://x-callback-url/open-file?path=/Quick%20Start.pdf')
  })

  test('addFile should return a URL with file URL', () => {
    const url = pdfViewer.addFile({
      url: 'https://pspdfkit.com/downloads/case-study-box.pdf',
    })

    expect(url).toBe('pdfviewer://x-callback-url/add-file?url=https://pspdfkit.com/downloads/case-study-box.pdf')
  })

  test('addFile should return a URL with open flag and file URL', () => {
    const url = pdfViewer.addFile({
      open: true,
      url: 'https://pspdfkit.com/downloads/case-study-box.pdf',
    })

    expect(url).toBe(
      'pdfviewer://x-callback-url/add-file?open=true&url=https://pspdfkit.com/downloads/case-study-box.pdf',
    )
  })

  test('addFile should return a URL with open flag, filename, and encoded data', () => {
    const url = pdfViewer.addFile({
      open: false,
      filename: 'Document.pdf',
      data: 'JVBERi0xLjMKJcTl8uXrp/Og0MTGCg==',
    })

    expect(url).toBe(
      'pdfviewer://x-callback-url/add-file?open=false&filename=Document.pdf&data=JVBERi0xLjMKJcTl8uXrp%2FOg0MTGCg%3D%3D',
    )
  })
})
