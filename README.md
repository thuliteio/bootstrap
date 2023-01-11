# Bootstrap

Bootstrap plugin for Hyas.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/bootstrap?style=flat-square)](https://www.npmjs.com/package/@hyas/bootstrap) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/h-enk/hyas-bootstrap/codeql.yml?style=flat-square)](https://github.com/h-enk/hyas-bootstrap/actions/workflows/codeql.yml)

## Installation

```bash
npm i @hyas/bootstrap -D
```

## Setup

Add to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/bootstrap/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/bootstrap/layouts"
  target = "layouts"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

## Usage

See the Hyas docs: [Quick Start](https://gethyas.com/docs/prologue/quick-start/)
