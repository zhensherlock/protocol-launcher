export const extensionCommandParams = {
  authorOrOwner: 'linear',
  extensionName: 'linear',
  commandName: 'create-issue-for-myself',
  arguments: {
    title: 'Triage new issues',
  },
}

export const extensionCommandWithOptionsParams = {
  authorOrOwner: 'raycast',
  extensionName: 'calendar',
  commandName: 'my-schedule',
  launchType: 'background' as const,
  context: {
    source: 'protocol-launcher',
  },
  fallbackText: 'My Schedule',
}

export const customWindowManagementCommandParams = {
  name: 'MyCommand',
  position: 'center',
  absoluteWidth: '500.0',
  relativeHeight: 0.5,
  absoluteXOffset: '0.0',
  absoluteYOffset: '0.0',
}

export const temporaryWindowManagementCommandParams = {
  position: 'top-left',
  relativeWidth: '0.5',
  relativeHeight: '0.5',
  relativeXOffset: '0.1',
  relativeYOffset: '0.2',
}
