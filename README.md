# tree-403-test

Test repository for GitHub Actions workflows (CodeQL, CI, and related checks).

## Workflows

- `CodeQL` — static analysis
- `CI` — Node syntax check
- `Smoke` — checkout smoke test
- `Health` — repository layout check
- `Verify` — workflow file check
- `Status` — prints ref and commit SHA

## Notes

Default branch is `main`. Last updated 2026-10-28T15:51.
Workflows run on push and pull requests to `main`.
See `.github/workflows` for all workflow definitions.
Includes `CODEOWNERS` for review ownership.
GitLab MCP config lives in `.cursor/mcp.json`.
Also used for GitLab CI jobs and deployments on `test-incremental`.
