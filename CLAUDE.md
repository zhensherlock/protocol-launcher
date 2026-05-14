# CLAUDE.md - Protocol Launcher

Use `AGENTS.md` as the primary project instruction file.

When working in a subdirectory, also follow the nearest nested `AGENTS.md` before making changes.

## Claude-Specific Behavior

- Prefer small, reviewable changes.
- Before large refactors, summarize the impact and likely touched workspaces.
- After code changes, run the most relevant `pnpm`/Turbo checks from `AGENTS.md`.
- Keep shared repo guidance in `AGENTS.md`; keep this file as a lightweight Claude entrypoint.
