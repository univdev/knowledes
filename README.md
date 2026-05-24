# Knowledes Documentation

This repository contains the GitHub Pages documentation site for Knowledes.
It is built with [Docusaurus](https://docusaurus.io/) 3.10.1.

## Installation

```bash
npm install
npm run hooks:install
```

## Local Development

```bash
npm run start
```

The development server runs at `http://localhost:3000/knowledes/`.

## Build

```bash
npm run ci
```

This typechecks the site and generates static content in the `build` directory.

## Writing Documentation

Start from `docs/intro.mdx`, then follow `docs/writing/project-structure.mdx`.
Project documentation should be organized by project name at the top level of `docs/`.
Each project should include an overview, architecture, major features, and decision records so people and AI agents can recover the context behind past choices.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.
Pushes to `main` build the Docusaurus site and deploy the `build` directory through GitHub Pages Actions.

The production URL is:

- `https://univdev.page/knowledes/`

## Branch Protection

Local hooks block commits and pushes directly on `main`/`master`.
After the first `main` branch exists on GitHub, apply the repository ruleset:

```bash
npm run protect:github
```

The ruleset requires pull requests for `main`, requires the `Build and Typecheck` check, blocks force pushes, and blocks branch deletion.
