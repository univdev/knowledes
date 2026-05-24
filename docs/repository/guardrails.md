---
sidebar_position: 99
---

# Repository Guardrails

This repository is configured so normal work happens on feature branches and merges go through pull requests.

## Local hooks

Install the local hooks once per clone:

```bash
npm run hooks:install
```

The hooks block commits on `main`/`master` and block direct pushes to `main`/`master`.

## GitHub ruleset

After the first `main` branch exists on GitHub, apply the repository ruleset:

```bash
npm run protect:github
```

The ruleset requires pull requests for `main`, requires the `Build and Typecheck` check, blocks force pushes, and blocks branch deletion.

