export const openPythonista3Params = {
  scheme: 'pythonista3' as const,
}

export const openPythonista2Params = {
  scheme: 'pythonista2' as const,
}

export const openScriptParams = {
  path: 'MyScript.py',
}

export const openICloudScriptParams = {
  path: 'MyScript.py',
  root: 'icloud' as const,
}

export const openICloudPathScriptParams = {
  path: 'iCloud/MyScript.py',
}

export const runScriptParams = {
  path: 'MyScript.py',
}

export const runICloudScriptParams = {
  path: 'MyScript.py',
  root: 'icloud' as const,
}

export const runScriptWithArgsParams = {
  path: 'MyScript',
  args: 'foo bar',
}

export const runScriptWithArgvParams = {
  path: 'MyScript',
  argv: ['foo', 'bar'],
}

export const runScriptWithVersionParams = {
  path: 'MyScript.py',
  version: 3 as const,
}

export const runScriptWithPyParams = {
  path: 'MyScript.py',
  py: 3 as const,
}

export const execParams = {
  code: 'print("Hello from Pythonista")',
}
