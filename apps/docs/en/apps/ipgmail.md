---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { compose, decrypt, encrypt, sign } from 'protocol-launcher/ipgmail';
import { SelectInstallationMethod } from '../../.vitepress/components';
import { composeParams, decryptParams, encryptParams, signParams } from '../../.vitepress/constants/ipgmail';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? 'protocol-launcher/ipgmail' : 'protocol-launcher');
</script>

# iPGMail

[iPGMail](https://ipgmail.com/) is an OpenPGP encryption tool for iOS and macOS. **Protocol Launcher** allows you to generate deep links to encrypt, decrypt, sign, and compose encrypted emails in iPGMail.

## Usage

There are two ways to use this library:

- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Compose

Compose a new encrypted email directly in iPGMail.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'compose' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}compose({
  text: 'This is a test...',
})
```

<div class="flex justify-center">
  <VPLink :href="compose(composeParams)" target="_self">
    Compose in iPGMail
  </VPLink>
</div>

### Decrypt

Decrypt a PGP message and return the status to the caller.

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'decrypt' : 'ipgmail' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'ipgmail.'}}decrypt({
  pgpmsg: 'clipboard',
  result: 'clipboard',
})
```

<div class="flex justify-center">
  <VPLink :href="decrypt(decryptParams)" target="_self">
    Decrypt in iPGMail
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="encrypt(encryptParams)" target="_self">
    Encrypt in iPGMail
  </VPLink>
</div>

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

<div class="flex justify-center">
  <VPLink :href="sign(signParams)" target="_self">
    Sign in iPGMail
  </VPLink>
</div>
