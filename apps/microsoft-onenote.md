---
url: /protocol-launcher/apps/microsoft-onenote.md
---

# Microsoft OneNote

[Microsoft OneNote](https://www.onenote.com/) is a digital note-taking app from Microsoft. **Protocol Launcher** allows you to open official OneNote client URLs returned by Microsoft Graph.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

## Notes

Microsoft Graph exposes OneNote links on page and notebook resources. The `links` property contains `oneNoteClientUrl.href` and `oneNoteWebUrl.href`. Use `links.oneNoteClientUrl.href` for the native OneNote client URL and pass that known URL into `openClientUrl`. The helper validates the documented `onenote:` prefix and HTTPS target, then returns the URL unchanged.

Do not synthesize OneNote page or notebook URLs from IDs. Microsoft documents opening the client from the `oneNoteClientUrl` value returned by Graph.

For Android, Microsoft documents one extra step: GUID strings in `oneNoteClientUrl` must be surrounded with braces before starting the Intent. Use `openAndroidClientUrl` only for that documented Android client flow.

### Open Client URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openClientUrl' : 'microsoftOneNote' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOneNote.'}}openClientUrl({
  href: 'onenote:https://...',
})
```

### Open Android Client URL

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'openAndroidClientUrl' : 'microsoftOneNote' }} } from '{{ importPath }}'

const oneNoteClientUrl = response.links.oneNoteClientUrl.href
const url = {{currentMethod === 'On-Demand' ? '' : 'microsoftOneNote.'}}openAndroidClientUrl({ href: oneNoteClientUrl })
```

## Generated URLs

```ts
openClientUrl(clientUrlParams)
// => 'onenote:https://...'
```

## References

* [Open the OneNote client](https://learn.microsoft.com/en-us/graph/open-onenote-client)
