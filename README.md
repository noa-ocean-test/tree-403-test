# tree-403-test

Test repository for GitHub Actions workflows (CodeQL, CI, and related checks).

## Workflows

- `CodeQL` — static analysis
- `CI` — Node syntax check
- `Smoke` — checkout smoke test
- `Health` — repository layout check
- `Verify` — workflow file check
- `Status` — prints ref and commit SHA
- `Deploy` — staging, production, and canary environments
- `Build` — Node install and syntax checks

## Notes

Default branch is `main`. Last updated 2026-11-02T12:24.
Workflows run on push and pull requests to `main`.
See `.github/workflows` for all workflow definitions.
Includes `CODEOWNERS` for review ownership.
GitLab MCP config lives in `.cursor/mcp.json`.
Also used for GitLab CI jobs and deployments on `test-incremental`.
Bulk sync refresh round 4 (2026-10-29).
Content refresh 2026-11-02.
