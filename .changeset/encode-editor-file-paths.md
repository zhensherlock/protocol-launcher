---
'@protocol-launcher/shared': minor
'protocol-launcher': patch
---

Percent-encode raw file and folder paths in editor launch URLs and format Windows drive paths. Export `encodePathSegments()` and `encodeEditorPath()` from `@protocol-launcher/shared`. Callers that pre-encoded paths should pass the original file system paths.
