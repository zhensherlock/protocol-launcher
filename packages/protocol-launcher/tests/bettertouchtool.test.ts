import { describe, expect, test } from 'vitest'
import { betterTouchTool } from '../src'

const triggerUuid = '0E2F7963-E64C-403A-8591-C3725D4D9ADC'
const widgetUuid = 'CC46E199-B07D-4BF7-AC36-48AAE558540B'

describe('bettertouchtool', () => {
  test('triggerNamed should return a named trigger URL', () => {
    const url = betterTouchTool.triggerNamed({
      triggerName: 'TriggerName',
    })

    expect(url).toBe('btt://trigger_named/?trigger_name=TriggerName')
  })

  test('triggerNamed should include cancel_delayed and variables', () => {
    const url = betterTouchTool.triggerNamed({
      triggerName: 'TriggerName',
      cancelDelayed: 1,
      variables: {
        myVariable: 'someValue',
      },
    })

    expect(url).toBe('btt://trigger_named/?trigger_name=TriggerName&cancel_delayed=1&myVariable=someValue')
  })

  test('triggerNamed should include shared_secret', () => {
    const url = betterTouchTool.triggerNamed({
      triggerName: 'TriggerName',
      sharedSecret: 'YourSecret',
    })

    expect(url).toBe('btt://trigger_named/?trigger_name=TriggerName&shared_secret=YourSecret')
  })

  test('triggerNamedAsyncWithoutResponse should return an async named trigger URL', () => {
    const url = betterTouchTool.triggerNamedAsyncWithoutResponse({
      triggerName: 'TriggerName',
    })

    expect(url).toBe('btt://trigger_named_async_without_response/?trigger_name=TriggerName')
  })

  test('cancelDelayedNamedTriggerExecution should return a cancel URL', () => {
    const url = betterTouchTool.cancelDelayedNamedTriggerExecution({
      triggerName: 'TriggerName',
    })

    expect(url).toBe('btt://cancel_delayed_named_trigger_execution/?trigger_name=TriggerName')
  })

  test('executeAssignedActionsForTrigger should return an assigned actions URL', () => {
    const url = betterTouchTool.executeAssignedActionsForTrigger({
      uuid: 'C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07',
    })

    expect(url).toBe('btt://execute_assigned_actions_for_trigger/?uuid=C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07')
  })

  test('triggerAction should return a JSON action URL', () => {
    const url = betterTouchTool.triggerAction({
      json: {
        BTTPredefinedActionType: 153,
        BTTPredefinedActionName: 'Move Mouse To Position',
        BTTMoveMouseToPosition: '{100, 10}',
        BTTMoveMouseRelative: '6',
      },
    })

    expect(url).toBe(
      'btt://trigger_action/?json=%7B%22BTTPredefinedActionType%22%3A153%2C%22BTTPredefinedActionName%22%3A%22Move%20Mouse%20To%20Position%22%2C%22BTTMoveMouseToPosition%22%3A%22%7B100%2C%2010%7D%22%2C%22BTTMoveMouseRelative%22%3A%226%22%7D',
    )
  })

  test('refreshWidget should return a refresh widget URL', () => {
    const url = betterTouchTool.refreshWidget({
      uuid: 'C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07',
    })

    expect(url).toBe('btt://refresh_widget/?uuid=C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07')
  })

  test('updateTouchBarWidget should return a Touch Bar widget update URL', () => {
    const url = betterTouchTool.updateTouchBarWidget({
      uuid: widgetUuid,
      text: 'updatedText',
      iconPath: '/Users/andi/Desktop/test.png',
      backgroundColor: '200,200,100,255',
    })

    expect(url).toBe(
      'btt://update_touch_bar_widget/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText&icon_path=%2FUsers%2Fandi%2FDesktop%2Ftest.png&background_color=200%2C200%2C100%2C255',
    )
  })

  test('updateStreamDeckWidget should return a Stream Deck widget update URL', () => {
    const url = betterTouchTool.updateStreamDeckWidget({
      uuid: widgetUuid,
      text: 'updatedText',
      json: {
        BTTStreamDeckBackgroundColor: '200,200,100,255',
      },
    })

    expect(url).toBe(
      'btt://update_stream_deck_widget/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText&json=%7B%22BTTStreamDeckBackgroundColor%22%3A%22200%2C200%2C100%2C255%22%7D',
    )
  })

  test('updateMenubarItem should return a menu bar item update URL', () => {
    const url = betterTouchTool.updateMenubarItem({
      uuid: widgetUuid,
      text: 'updatedText',
      iconData: 'BASE64_ICON_DATA',
      backgroundColor: '200,200,100,255',
    })

    expect(url).toBe(
      'btt://update_menubar_item/?uuid=CC46E199-B07D-4BF7-AC36-48AAE558540B&text=updatedText&icon_data=BASE64_ICON_DATA&background_color=200%2C200%2C100%2C255',
    )
  })

  test('updateTrigger should return a trigger update URL', () => {
    const url = betterTouchTool.updateTrigger({
      uuid: triggerUuid,
      json: {
        BTTTouchBarButtonName: 'New Name2',
        BTTTriggerConfig: {
          BTTTouchBarItemIconHeight: 30,
        },
      },
    })

    expect(url).toBe(
      'btt://update_trigger/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC&json=%7B%22BTTTouchBarButtonName%22%3A%22New%20Name2%22%2C%22BTTTriggerConfig%22%3A%7B%22BTTTouchBarItemIconHeight%22%3A30%7D%7D',
    )
  })

  test('addNewTrigger should return a new trigger URL', () => {
    const url = betterTouchTool.addNewTrigger({
      json: {
        BTTTriggerClass: 'BTTTriggerTypeKeyboardShortcut',
        BTTPredefinedActionType: 5,
        BTTPredefinedActionName: 'Mission Control',
      },
      parentUuid: 'PARENT-UUID',
    })

    expect(url).toBe(
      'btt://add_new_trigger/?json=%7B%22BTTTriggerClass%22%3A%22BTTTriggerTypeKeyboardShortcut%22%2C%22BTTPredefinedActionType%22%3A5%2C%22BTTPredefinedActionName%22%3A%22Mission%20Control%22%7D&parent_uuid=PARENT-UUID',
    )
  })

  test('deleteTrigger should return a delete trigger URL', () => {
    const url = betterTouchTool.deleteTrigger({
      uuid: triggerUuid,
    })

    expect(url).toBe('btt://delete_trigger/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC')
  })

  test('revealElementInUi should return a reveal URL', () => {
    const url = betterTouchTool.revealElementInUi({
      uuid: triggerUuid,
    })

    expect(url).toBe('btt://reveal_element_in_ui/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC')
  })

  test('exportPreset should return a preset export URL', () => {
    const url = betterTouchTool.exportPreset({
      name: 'MyPreset',
      outputPath: '/Users/andi/Desktop/MyPreset.bttpreset',
      compress: 1,
      includeSettings: 1,
      comment: 'My comment',
      link: 'https://example.com',
      minimumVersion: '4.0',
    })

    expect(url).toBe(
      'btt://export_preset/?name=MyPreset&outputPath=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset&compress=1&includeSettings=1&comment=My%20comment&link=https%3A%2F%2Fexample.com&minimumVersion=4.0',
    )
  })

  test('importPreset should return a preset import URL', () => {
    const url = betterTouchTool.importPreset({
      path: '/Users/andi/Desktop/MyPreset.bttpreset',
    })

    expect(url).toBe('btt://import_preset/?path=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset')
  })

  test('importPreset should include replaceExisting', () => {
    const url = betterTouchTool.importPreset({
      path: '/Users/andi/Desktop/MyPreset.bttpreset',
      replaceExisting: 0,
    })

    expect(url).toBe('btt://import_preset/?path=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset&replaceExisting=0')
  })

  test('importPreset should allow the documented default replaceExisting value', () => {
    const url = betterTouchTool.importPreset({
      path: '/Users/andi/Desktop/MyPreset.bttpreset',
      replaceExisting: 1,
    })

    expect(url).toBe('btt://import_preset/?path=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset&replaceExisting=1')
  })

  test('runShortcut should return a shortcut URL', () => {
    const url = betterTouchTool.runShortcut({
      shortcutName: 'MyShortcut',
      input: 'someInput',
    })

    expect(url).toBe('btt://run_shortcut/?shortcut_name=MyShortcut&input=someInput')
  })

  test('runShortcutAsyncWithoutResponse should return an async shortcut URL', () => {
    const url = betterTouchTool.runShortcutAsyncWithoutResponse({
      shortcutName: 'MyShortcut',
      input: 'someInput',
    })

    expect(url).toBe('btt://run_shortcut_async_without_response/?shortcut_name=MyShortcut&input=someInput')
  })

  test('setPersistentStringVariable should return a persistent string variable URL', () => {
    const url = betterTouchTool.setPersistentStringVariable({
      variableName: 'test',
      to: '12345',
    })

    expect(url).toBe('btt://set_persistent_string_variable/?variableName=test&to=12345')
  })

  test('setStringVariable should return a runtime string variable URL', () => {
    const url = betterTouchTool.setStringVariable({
      variableName: 'test',
      to: '12345',
    })

    expect(url).toBe('btt://set_string_variable/?variableName=test&to=12345')
  })

  test('setPersistentNumberVariable should return a persistent number variable URL', () => {
    const url = betterTouchTool.setPersistentNumberVariable({
      variableName: 'test',
      to: 12345,
    })

    expect(url).toBe('btt://set_persistent_number_variable/?variableName=test&to=12345')
  })

  test('setNumberVariable should return a runtime number variable URL', () => {
    const url = betterTouchTool.setNumberVariable({
      variableName: 'test',
      to: 12345,
    })

    expect(url).toBe('btt://set_number_variable/?variableName=test&to=12345')
  })

  test('importViaUrl should return a URL import path', () => {
    const url = betterTouchTool.importViaUrl({
      url: 'https://example.com/mypreset.bttpreset',
    })

    expect(url).toBe('btt://importviaurl/https://example.com/mypreset.bttpreset')
  })

  test('importViaUrl should return the unzip URL import path', () => {
    const url = betterTouchTool.importViaUrl({
      url: 'https://example.com/mypreset.zip',
      unzip: true,
    })

    expect(url).toBe('btt://importviaurl/unzip/https://example.com/mypreset.zip')
  })

  test('jsonImport should return a JSON import path', () => {
    const url = betterTouchTool.jsonImport({
      encodedJson: 'BASE64_ENCODED_JSON_HERE',
    })

    expect(url).toBe('btt://jsonimport/BASE64_ENCODED_JSON_HERE')
  })

  test('jsonImport should return the uncompress JSON import path', () => {
    const url = betterTouchTool.jsonImport({
      encodedJson: 'BASE64_ENCODED_COMPRESSED_JSON_HERE',
      uncompress: true,
    })

    expect(url).toBe('btt://jsonimport/uncompress/BASE64_ENCODED_COMPRESSED_JSON_HERE')
  })
})
