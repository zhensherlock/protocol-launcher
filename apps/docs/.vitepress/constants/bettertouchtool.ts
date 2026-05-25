export const triggerNamedParams = {
  triggerName: 'Daily Review',
}

export const triggerNamedWithVariablesParams = {
  triggerName: 'Open Project',
  variables: {
    projectName: 'Protocol Launcher',
  },
}

export const triggerNamedCancelDelayedParams = {
  triggerName: 'Daily Review',
  cancelDelayed: 1 as const,
}

export const triggerNamedAsyncParams = {
  triggerName: 'Refresh Dashboard',
}

export const cancelDelayedNamedTriggerExecutionParams = {
  triggerName: 'Daily Review',
}

export const triggerUuidParams = {
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
}

export const widgetUuidParams = {
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
}

export const triggerActionParams = {
  json: {
    BTTPredefinedActionType: 153,
    BTTPredefinedActionName: 'Move Mouse To Position',
    BTTMoveMouseToPosition: '{100, 10}',
    BTTMoveMouseRelative: '6',
  },
}

export const updateTouchBarWidgetParams = {
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Build passed',
  iconPath: '/Users/andi/Desktop/status.png',
  backgroundColor: '200,200,100,255',
}

export const updateStreamDeckWidgetParams = {
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Deploy',
}

export const updateMenubarItemParams = {
  uuid: 'CC46E199-B07D-4BF7-AC36-48AAE558540B',
  text: 'Ready',
}

export const updateTriggerParams = {
  uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC',
  json: {
    BTTTouchBarButtonName: 'New Name2',
    BTTTriggerConfig: {
      BTTTouchBarItemIconHeight: 30,
    },
  },
}

export const addNewTriggerParams = {
  json: {
    BTTTriggerClass: 'BTTTriggerTypeKeyboardShortcut',
    BTTPredefinedActionType: 5,
    BTTPredefinedActionName: 'Mission Control',
    BTTAdditionalConfiguration: '1179658',
    BTTTriggerOnDown: 1,
    BTTEnabled: 1,
    BTTShortcutKeyCode: 2,
    BTTShortcutModifierKeys: 1179648,
    BTTOrder: 3,
  },
}

export const exportPresetParams = {
  name: 'Focus Mode',
  outputPath: '/Users/andi/Desktop/FocusMode.bttpreset',
  compress: 1 as const,
}

export const importPresetParams = {
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
}

export const importPresetKeepExistingParams = {
  path: '/Users/andi/Desktop/FocusMode.bttpreset',
  replaceExisting: 0 as const,
}

export const runShortcutParams = {
  shortcutName: 'Start Focus',
  input: 'Protocol Launcher',
}

export const runShortcutAsyncParams = {
  shortcutName: 'Log Break',
  input: '5 minutes',
}

export const setPersistentStringVariableParams = {
  variableName: 'currentProject',
  to: 'Protocol Launcher',
}

export const setStringVariableParams = {
  variableName: 'sessionState',
  to: 'reviewing',
}

export const setPersistentNumberVariableParams = {
  variableName: 'focusGoalMinutes',
  to: 45,
}

export const setNumberVariableParams = {
  variableName: 'currentPomodoro',
  to: 2,
}

export const importViaUrlParams = {
  url: 'https://example.com/btt-presets/focus-mode.bttpreset',
}

export const importViaUrlUnzipParams = {
  url: 'https://example.com/btt-presets/focus-mode.zip',
  unzip: true as const,
}

export const jsonImportParams = {
  encodedJson: 'BASE64_ENCODED_TRIGGER_JSON',
}

export const jsonImportUncompressParams = {
  encodedJson: 'BASE64_ENCODED_COMPRESSED_TRIGGER_JSON',
  uncompress: true as const,
}
