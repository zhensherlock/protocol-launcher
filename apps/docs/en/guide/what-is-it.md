---
layout: doc
---

# What is Protocol Launcher?

**Protocol Launcher** is a TypeScript library designed to generate "Quick Launch" URLs (Deep Links) for various applications.

These URLs allow users to trigger specific actions in applications with a single click, such as installing plugins, configuring servers, or setting up API keys.

## Key Features

- **Type-Safe**: Strict TypeScript types validate payloads and prevent malformed links.
- **Multi-App Ready**: Extensible design to support many apps via URL schemes.
- **On-Demand / Tree-shakable**: Import only what you need; small bundle footprint.
- **Secure Encoding**: Encodes configs safely to avoid injection. Supports Unicode characters including Chinese.
- **Zero Runtime Dependencies**: Lightweight library with no external runtime dependencies.
- **ESM First**: Modern ES Modules, works in Node and bundlers.

## Supported Applications

Currently, we support the following applications:

- [Cherry Studio](../apps/cherry-studio.md)
- [Cursor](../apps/cursor.md)

More applications will be added in the future.
