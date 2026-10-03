# Additional URL Scheme App Candidates

> Research date: 2026-05-26

This document is a second-pass candidate list for apps that may be worth adding
to `protocol-launcher`. These candidates are intentionally separate from
`URL_SCHEME_APP_CANDIDATES.md`.

The bar for inclusion is strict: every accepted candidate below has an official
or vendor-controlled documentation page that was accessible during this pass and
explicitly documents a URL scheme, x-callback-url endpoint, or app deep-link
format.

## Exclusion Rules

- Do not include apps already present under `packages/protocol-launcher/src`.
- Do not include apps already listed in `URL_SCHEME_APP_CANDIDATES.md`.
- Do not include third-party URL-scheme indexes, forum guesses, App Store review
  snippets, or extracted `Info.plist` values as primary evidence.
- Do not include an app if the official documentation page cannot be opened.

## Strong Candidates

| App | Official scheme / deep link | Good initial helpers | Why it fits | Official docs |
| --- | --- | --- | --- | --- |
| Pythonista | `pythonista://`, `pythonista2://`, `pythonista3://` | `open()`, `openScript()`, `runScript()`, `exec()` | iOS automation and coding app. The docs define script paths, run/edit actions, inline code execution, command-line arguments, root selection, and Python version selection. | [The Pythonista URL Scheme](https://omz-software.com/pythonista/docs/ios/urlscheme.html) |
| Bunch | `x-bunch://`, `x-bunch-beta://` | `open()`, `close()`, `toggle()`, `raw()`, `snippet()`, `refresh()`, `reveal()`, `prefs()` | macOS workspace automation app. URL methods are concrete and map cleanly to typed helpers. | [The Bunch URL Handler](https://bunchapp.co/docs/integration/url-handler/) |
| Marked / Marked 2 | `x-marked://` | `open()`, `refresh()`, `preview()`, `paste()`, `style()`, `addStyle()`, `help()` | Markdown preview workflow app. The URL handler has a broad but well documented command set for opening files, previewing text, refreshing windows, and changing styles. | [Marked URL Handler](https://marked2app.com/help/URL_Handler.html) |
| iThoughts | `ithoughts://x-callback-url/makeMap`, `ithoughts://x-callback-url/amendMap` | `makeMap()`, `amendMap()` | Mind-mapping app with official x-callback-url documentation. Useful complement to writing, notes, and task apps. | [iThoughts x-callback-url](https://www.toketaware.com/ithoughts-howto-x-callback-url) |
| AnkiMobile | `anki://`, `anki://x-callback-url/addnote`, `anki://x-callback-url/infoForAdding`, `anki://x-callback-url/search`, `anki://x-callback-url/sync` | `open()`, `addNote()`, `infoForAdding()`, `search()`, `sync()` | Flashcard and spaced-repetition app. The documented add-note endpoint has required and optional fields that are very suitable for TypeScript payload types. | [AnkiMobile URL Schemes](https://docs.ankimobile.net/url-schemes.html) |
| LaunchBar | `x-launchbar:` | `largeType()`, `select()`, `calculate()`, `hide()` | macOS launcher/automation utility. Official docs describe URL commands for large text display, item selection, calculator input, hiding LaunchBar, and limited command execution. | [LaunchBar URL Commands](https://www.obdev.at/resources/launchbar/help/URLCommands.html) |
| MoneyWiz | `moneywiz://expense`, `moneywiz://income`, `moneywiz://transfer`, `moneywiz://updateholding` | `expense()`, `income()`, `transfer()`, `updateHolding()` | Personal finance app. The docs define operation types and required/optional attributes for transaction templates. | [MoneyWiz URL Schemas](https://help.wiz.money/en/articles/4525440-automate-transaction-management-with-url-schemas) |
| Claris FileMaker | `fmp://`, `fmpXX://` | `openFile()`, `runScript()` | Database/custom-app platform. Official docs define URL format for opening local or hosted files and running scripts with parameters and local variables. | [Opening FileMaker Pro files using a URL](https://help.claris.com/en/pro-help/content/opening-files-url.html) |

## Niche Candidate

| App | Official scheme / deep link | Good initial helpers | Why it may still be useful | Official docs |
| --- | --- | --- | --- | --- |
| Cloze | `cloze://x-callback-url/contact/<identifier>`, `cloze://contact/<identifier>` | `openContact()` | CRM/contact-management app. The documented surface is narrow, but contact links by email, phone, domain, social handle, or third-party ID are practical. | [Cloze URL Scheme and x-callback URLs](https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls) |

## Suggested Implementation Priority

1. `anki-mobile`
2. `pythonista`
3. `bunch`
4. `marked`
5. `moneywiz`
6. `launchbar`
7. `filemaker`
8. `ithoughts`
9. `cloze`

## Implementation Notes

- Use `qs()` from `@protocol-launcher/shared` for query-string based URLs.
- Keep helpers narrowly scoped around documented examples first; add broader
  coverage only after exact URL tests are in place.
- Consider `fmpXX://` in FileMaker as a versioned-scheme option rather than a
  separate app namespace.
- LaunchBar's scheme is documented as `x-launchbar:` and examples do not always
  use the `//` form; tests should match the official examples.
- For AnkiMobile fields, model dynamic `fld<FieldName>` keys carefully. A
  typed helper may need a generic or a `Record<string, string>` for note fields.
- Avoid credentials in FileMaker examples and tests, even though the official URL
  format allows `account:password@`.

## Looked At But Not Accepted

These were considered during this pass but were not added because I could not
find a sufficiently clear, accessible, official URL-scheme reference page:

| App | Reason |
| --- | --- |
| Zotero | Common `zotero://` links exist in community usage, but I did not find an official accessible URL-scheme reference page. |
| MindNode | Search results surfaced historical or non-primary references, but not a current official URL-scheme reference page. |
| PDF Expert | I found official help pages, but not an official URL-scheme reference page. |
| Moom | I found official help pages, but not an official URL-scheme reference page. |
| Hazel | I found official help pages, but not an official URL-scheme reference page. |
| VLC for iOS | Search results pointed to VideoLAN references, but the relevant wiki/documentation page was not reliably accessible during this pass. |
| MarsEdit | I found official product/help pages, but not a clear official URL-scheme reference page. |
