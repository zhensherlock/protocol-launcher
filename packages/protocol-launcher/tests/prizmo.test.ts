import { describe, expect, test } from 'vitest'
import { prizmo } from '../src'

describe('prizmo', () => {
  describe('processDocument', () => {
    test('should return a URL with default parameters', () => {
      const url = prizmo.processDocument()
      expect(url).toBe('prizmo://x-callback-url/processDocument')
    })

    test('should return a URL with ocr language', () => {
      const url = prizmo.processDocument({
        ocr: 'en',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?ocr=en')
    })

    test('should return a URL with destination=clipboard', () => {
      const url = prizmo.processDocument({
        ocr: 'en',
        destination: 'clipboard',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?ocr=en&destination=clipboard')
    })

    test('should return a URL with destination=url and x-success callback', () => {
      const url = prizmo.processDocument({
        ocr: 'en',
        destination: 'url',
        xSuccess: 'myapp://callback',
      })
      expect(url).toBe(
        'prizmo://x-callback-url/processDocument?ocr=en&destination=url&x-success=myapp%3A%2F%2Fcallback',
      )
    })

    test('should return a URL with x-cancel and x-error callbacks', () => {
      const url = prizmo.processDocument({
        ocr: 'en',
        xCancel: 'myapp://cancel',
        xError: 'myapp://error',
      })
      expect(url).toBe(
        'prizmo://x-callback-url/processDocument?ocr=en&x-cancel=myapp%3A%2F%2Fcancel&x-error=myapp%3A%2F%2Ferror',
      )
    })

    test('should return a URL with combined output (text+PDF)', () => {
      const url = prizmo.processDocument({
        output: 'text+PDF',
        destination: 'clipboard',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?destination=clipboard&output=text%2BPDF')
    })

    test('should return a URL with imageData (Base64 encoded)', () => {
      const url = prizmo.processDocument({
        imageData: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        ocr: 'en',
      })
      expect(url).toBe(
        'prizmo://x-callback-url/processDocument?imageData=iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk%2BM9QDwADhgGAWjR9awAAAABJRU5ErkJggg%3D%3D&ocr=en',
      )
    })

    test('should return a URL with pdfData (Base64 encoded)', () => {
      const url = prizmo.processDocument({
        pdfData: 'JVBERi0xLjQKJeLjz9MK',
        ocr: 'en',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?pdfData=JVBERi0xLjQKJeLjz9MK&ocr=en')
    })

    test('should return a URL with imageFormat', () => {
      const url = prizmo.processDocument({
        imageData: 'base64data',
        imageFormat: 'jpeg',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?imageData=base64data&imageFormat=jpeg')
    })

    test('should return a URL with pageFormat', () => {
      const url = prizmo.processDocument({
        output: 'PDF',
        pageFormat: 'A5',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?pageFormat=A5&output=PDF')
    })

    test('should return a URL with cleanupMode', () => {
      const url = prizmo.processDocument({
        cleanupMode: 'black',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?cleanupMode=black')
    })

    test('should return a URL with callback parameters', () => {
      const url = prizmo.processDocument({
        destination: 'url',
        callbackTextParameter: 'myText',
        callbackPDFParameter: 'myPdf',
        callbackImageParameter: 'myImage',
      })
      expect(url).toBe(
        'prizmo://x-callback-url/processDocument?destination=url&callbackTextParameter=myText&callbackPDFParameter=myPdf&callbackImageParameter=myImage',
      )
    })

    test('should return a URL with createDocument=true', () => {
      const url = prizmo.processDocument({
        createDocument: true,
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?createDocument=true')
    })

    test('should return a URL with createDocument=false', () => {
      const url = prizmo.processDocument({
        createDocument: false,
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?createDocument=false')
    })

    test('should return a URL with detectPage=false', () => {
      const url = prizmo.processDocument({
        detectPage: false,
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?detectPage=false')
    })

    test('should return a URL with input=clipboard', () => {
      const url = prizmo.processDocument({
        input: 'clipboard',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?input=clipboard')
    })

    test('should return a URL with input=data', () => {
      const url = prizmo.processDocument({
        input: 'data',
        imageData: 'base64data',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?input=data&imageData=base64data')
    })

    test('should return a URL with cloud OCR', () => {
      const url = prizmo.processDocument({
        ocr: 'cloud',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?ocr=cloud')
    })

    test('should return a URL with cloud-handwriting OCR', () => {
      const url = prizmo.processDocument({
        ocr: 'cloud-handwriting',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?ocr=cloud-handwriting')
    })

    test('should return a URL with Chinese OCR (zh-hans)', () => {
      const url = prizmo.processDocument({
        ocr: 'zh-hans',
      })
      expect(url).toBe('prizmo://x-callback-url/processDocument?ocr=zh-hans')
    })

    test('should return a URL with all parameters', () => {
      const url = prizmo.processDocument({
        input: 'clipboard',
        ocr: 'en',
        pageFormat: 'A4',
        cleanupMode: 'color',
        destination: 'url',
        callbackTextParameter: 'text',
        callbackPDFParameter: 'pdf',
        callbackImageParameter: 'image',
        output: 'text+PDF',
        createDocument: true,
        detectPage: true,
        xSuccess: 'myapp://success',
        xCancel: 'myapp://cancel',
        xError: 'myapp://error',
      })
      expect(url).toBe(
        'prizmo://x-callback-url/processDocument?input=clipboard&ocr=en&pageFormat=A4&cleanupMode=color&destination=url&callbackTextParameter=text&callbackPDFParameter=pdf&callbackImageParameter=image&output=text%2BPDF&createDocument=true&detectPage=true&x-success=myapp%3A%2F%2Fsuccess&x-cancel=myapp%3A%2F%2Fcancel&x-error=myapp%3A%2F%2Ferror',
      )
    })
  })

  describe('readText', () => {
    test('should return a URL with default parameters', () => {
      const url = prizmo.readText()
      expect(url).toBe('prizmo://x-callback-url/readText')
    })

    test('should return a URL with text', () => {
      const url = prizmo.readText({
        text: 'Hello World',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?text=Hello%20World')
    })

    test('should return a URL with voice', () => {
      const url = prizmo.readText({
        voice: 'Ryan',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?voice=Ryan')
    })

    test('should return a URL with voice and text', () => {
      const url = prizmo.readText({
        voice: 'Ryan',
        text: 'Hello World',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?text=Hello%20World&voice=Ryan')
    })

    test('should return a URL with language', () => {
      const url = prizmo.readText({
        language: 'fr-FR',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?language=fr-FR')
    })

    test('should return a URL with voice and language', () => {
      const url = prizmo.readText({
        voice: 'Daniel',
        language: 'en-GB',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?voice=Daniel&language=en-GB')
    })

    test('should return a URL with all parameters', () => {
      const url = prizmo.readText({
        text: 'Hello World',
        voice: 'Ryan',
        language: 'en-US',
      })
      expect(url).toBe('prizmo://x-callback-url/readText?text=Hello%20World&voice=Ryan&language=en-US')
    })
  })
})
