import { describe, expect, test } from 'vitest'
import { noteplan } from '../src'

describe('noteplan', () => {
  test('openNote should return a URL with noteDate', async () => {
    const url = noteplan.openNote({
      noteDate: 'today',
    })
    expect(url).toBe('noteplan://x-callback-url/openNote?noteDate=today')
  })

  test('openNote should return a URL with noteTitle heading encoded', async () => {
    const url = noteplan.openNote({
      noteTitle: 'Fleeting Notes#Second Brain',
    })
    expect(url).toBe('noteplan://x-callback-url/openNote?noteTitle=Fleeting%20Notes%23Second%20Brain')
  })

  test('openNote should return a URL with synced line suffix encoded', async () => {
    const url = noteplan.openNote({
      noteTitle: 'Fleeting Notes^pxgobp',
    })
    expect(url).toBe('noteplan://x-callback-url/openNote?noteTitle=Fleeting%20Notes%5Epxgobp')
  })

  test('openNote should return a URL with filename and Mac options', async () => {
    const url = noteplan.openNote({
      filename: 'folder/note.txt',
      heading: 'Ideas',
      subWindow: 'yes',
      splitView: 'yes',
      reuseSplitView: 'yes',
      useExistingSubWindow: 'no',
      highlightStart: 10,
      highlightLength: 5,
    })
    expect(url).toBe(
      'noteplan://x-callback-url/openNote?filename=folder%2Fnote.txt&heading=Ideas&subWindow=yes&splitView=yes&reuseSplitView=yes&useExistingSubWindow=no&highlightStart=10&highlightLength=5',
    )
  })

  test('openNote should return a URL with timeframe', async () => {
    const url = noteplan.openNote({
      noteDate: '2022-W32',
      timeframe: 'week',
    })
    expect(url).toBe('noteplan://x-callback-url/openNote?noteDate=2022-W32&timeframe=week')
  })

  test('openView should return a URL with name and folder', async () => {
    const url = noteplan.openView({
      name: 'Project Tasks',
      folder: '10 - Projects',
    })
    expect(url).toBe('noteplan://x-callback-url/openView?name=Project%20Tasks&folder=10%20-%20Projects')
  })

  test('addText should return a URL for calendar note', async () => {
    const url = noteplan.addText({
      noteDate: 'today',
      text: '* Hello World',
      mode: 'append',
      openNote: 'yes',
    })
    expect(url).toBe('noteplan://x-callback-url/addText?noteDate=today&text=*%20Hello%20World&mode=append&openNote=yes')
  })

  test('addText should return a URL for regular note', async () => {
    const url = noteplan.addText({
      noteTitle: 'Test Note',
      text: '* Hello World',
      mode: 'prepend',
    })
    expect(url).toBe('noteplan://x-callback-url/addText?noteTitle=Test%20Note&text=*%20Hello%20World&mode=prepend')
  })

  test('addText should return a URL with fileName and Mac options', async () => {
    const url = noteplan.addText({
      fileName: 'Projects/Note.txt',
      text: 'Hello',
      openNote: 'yes',
      subWindow: 'no',
      splitView: 'yes',
      useExistingSubWindow: 'yes',
    })
    expect(url).toBe(
      'noteplan://x-callback-url/addText?fileName=Projects%2FNote.txt&text=Hello&openNote=yes&subWindow=no&splitView=yes&useExistingSubWindow=yes',
    )
  })

  test('addNote should return a URL with noteTitle', async () => {
    const url = noteplan.addNote({
      noteTitle: 'New Note',
      openNote: 'yes',
    })
    expect(url).toBe('noteplan://x-callback-url/addNote?noteTitle=New%20Note&openNote=yes')
  })

  test('addNote should return a URL with text, folder, and highlight selection', async () => {
    const url = noteplan.addNote({
      text: 'Hello World',
      folder: 'Projects',
      splitView: 'yes',
      highlightStart: 9999,
      highlightLength: 0,
    })
    expect(url).toBe(
      'noteplan://x-callback-url/addNote?text=Hello%20World&folder=Projects&splitView=yes&highlightStart=9999&highlightLength=0',
    )
  })

  test('deleteNote should return a URL with noteTitle', async () => {
    const url = noteplan.deleteNote({
      noteTitle: 'New Note',
    })
    expect(url).toBe('noteplan://x-callback-url/deleteNote?noteTitle=New%20Note')
  })

  test('deleteNote should return a URL with noteDate', async () => {
    const url = noteplan.deleteNote({
      noteDate: 'tomorrow',
    })
    expect(url).toBe('noteplan://x-callback-url/deleteNote?noteDate=tomorrow')
  })

  test('selectTag should return a URL with tag name', async () => {
    const url = noteplan.selectTag({
      name: '#noteplan',
    })
    expect(url).toBe('noteplan://x-callback-url/selectTag?name=%23noteplan')
  })

  test('selectTag should return a URL with empty name', async () => {
    const url = noteplan.selectTag({
      name: '',
    })
    expect(url).toBe('noteplan://x-callback-url/selectTag?name=')
  })

  test('search should return a URL with text', async () => {
    const url = noteplan.search({
      text: 'noteplan',
    })
    expect(url).toBe('noteplan://x-callback-url/search?text=noteplan')
  })

  test('search should return a URL with empty text', async () => {
    const url = noteplan.search({
      text: '',
    })
    expect(url).toBe('noteplan://x-callback-url/search?text=')
  })

  test('search should return a URL with filter', async () => {
    const url = noteplan.search({
      filter: 'Upcoming',
    })
    expect(url).toBe('noteplan://x-callback-url/search?filter=Upcoming')
  })

  test('runPlugin should return a URL with pluginName and command', async () => {
    const url = noteplan.runPlugin({
      pluginName: ' Note Statistics',
      command: 'nc',
    })
    expect(url).toBe('noteplan://x-callback-url/runPlugin?pluginName=%20Note%20Statistics&command=nc')
  })

  test('runPlugin should return a URL with pluginID and arguments', async () => {
    const url = noteplan.runPlugin({
      pluginID: 'example.Plugin',
      command: 'run',
      arg1: 'second',
      arg0: 'first',
    })
    expect(url).toBe('noteplan://x-callback-url/runPlugin?pluginID=example.Plugin&command=run&arg0=first&arg1=second')
  })

  test('installPlugin should return a URL with pluginID', async () => {
    const url = noteplan.installPlugin({
      pluginID: 'dwertheimer.Favorites',
    })
    expect(url).toBe('noteplan://x-callback-url/installPlugin?pluginID=dwertheimer.Favorites')
  })

  test('toggleSidebar should return a URL without parameters', async () => {
    const url = noteplan.toggleSidebar()
    expect(url).toBe('noteplan://x-callback-url/toggleSidebar')
  })

  test('toggleSidebar should return a URL with forceOpen', async () => {
    const url = noteplan.toggleSidebar({
      forceOpen: 'yes',
    })
    expect(url).toBe('noteplan://x-callback-url/toggleSidebar?forceOpen=yes')
  })

  test('toggleSidebar should return a URL with forceCollapse and animated', async () => {
    const url = noteplan.toggleSidebar({
      forceCollapse: 'yes',
      animated: 'no',
    })
    expect(url).toBe('noteplan://x-callback-url/toggleSidebar?forceCollapse=yes&animated=no')
  })

  test('noteInfo should return a URL with x-success', async () => {
    const url = noteplan.noteInfo({
      xSuccess: 'sourceapp://x-callback-url',
    })
    expect(url).toBe('noteplan://x-callback-url/noteInfo/?x-success=sourceapp%3A%2F%2Fx-callback-url')
  })

  test('actions should support x-success', async () => {
    const url = noteplan.addText({
      noteDate: 'today',
      text: 'Hello',
      xSuccess: 'sourceapp://x-callback-url',
    })
    expect(url).toBe(
      'noteplan://x-callback-url/addText?noteDate=today&text=Hello&x-success=sourceapp%3A%2F%2Fx-callback-url',
    )
  })
})
