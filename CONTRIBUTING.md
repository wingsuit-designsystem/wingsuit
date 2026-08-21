# Contributing

TO BE MADE — for now, this covers local setup only.

## Local setup

Use the Node version this repo pins. Anything else may fail `yarn install`: the
`engines` field allows `>=22.0.0`, but some dependencies exclude odd-numbered
(non-LTS) releases such as 23.x.

```bash
nvm install && nvm use   # reads .nvmrc (22.20.0, matching CI)
yarn install
```

### Cypress binary

`.yarnrc` sets `ignore-scripts true`, so package lifecycle scripts do not run
during install. Cypress ships no binary in its npm package — it downloads one
from a `postinstall` — so fetch it explicitly after installing:

```bash
yarn cypress install
```

This is idempotent and skips when the binary is already cached.

### Git hooks

Hooks live in `.githooks/` and are version-controlled. They are not installed by
any package, so enable them once per clone:

```bash
yarn hooks:install
```

That sets `core.hooksPath`. The `pre-commit` hook lints staged files under
`packages/`; run `yarn fix:js` to auto-fix, or commit with `--no-verify` to skip.

## Why install scripts are disabled

`ignore-scripts true` blocks the `preinstall`/`install`/`postinstall` hooks that
npm-ecosystem worms use to execute code at install time — and that malware also
uses to plant git hooks for persistence. The cost is that anything genuinely
relying on an install script (the Cypress binary, git hooks) becomes an explicit,
auditable step, as above. Please keep it that way rather than reintroducing a
lifecycle script.
