# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A tiny sandbox repo for practicing the GitHub pull request workflow (branch, commit, push, open a PR). It is not a real application — keep additions small and self-contained.

## Commands

Run the test suite (plain Node scripts, no test runner or package.json):

```bash
node test/sum.test.js
```

There is no build step, linter, or package manager configured.

## Architecture

- `src/sum.js` exports a single `sum(a, b)` function via CommonJS (`module.exports`).
- `test/sum.test.js` is a standalone script (not a framework-based test file): it uses Node's built-in `assert` module and calls `assert.strictEqual` directly, exiting non-zero on failure via the thrown `AssertionError`.
- Each new module under `src/` should get a matching `test/<name>.test.js` following this same assert-script pattern.
