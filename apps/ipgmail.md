---
url: /protocol-launcher/apps/ipgmail.md
---

# iPGMail

[iPGMail](https://ipgmail.com/) is an OpenPGP encryption tool for iOS and macOS. **Protocol Launcher** allows you to generate deep links to encrypt, decrypt, sign, and compose encrypted emails in iPGMail.

## Usage

There are two ways to use this library:

* On-Demand import from subpaths enables tree-shaking and keeps bundles small.
* Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

### Compose

Compose a new encrypted email directly in iPGMail.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}compose({
  text: 'This is a test...',
})
```

### Decrypt

Decrypt a PGP message and return the status to the caller.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrypt' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}decrypt({
  pgpmsg: 'clipboard',
  result: 'clipboard',
})
```

### Encrypt

Encrypt a block of plaintext and either save it to a file or return it to the requesting app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'encrypt' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}encrypt({
  datasource: 'clipboard',
  keyid: '47E3234C',
  result: 'clipboard',
})
```

### Sign

Sign a block of plaintext and either save it to a file or return it to the requesting app.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'sign' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}sign({
  datasource: 'clipboard',
  signkey: '47E3234C',
  result: 'clipboard',
})
```
