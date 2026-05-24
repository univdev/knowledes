#!/usr/bin/env bash
set -euo pipefail

OWNER="${GITHUB_OWNER:-univdev}"
REPO="${GITHUB_REPO:-knowledes}"
RULESET_NAME="${RULESET_NAME:-Require pull requests for main}"
BRANCH_PATTERN="${PROTECTED_BRANCH_PATTERN:-refs/heads/main}"
REQUIRED_APPROVALS="${REQUIRED_APPROVALS:-0}"
REQUIRED_CHECK="${REQUIRED_CHECK:-Build and Typecheck}"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI is required: https://cli.github.com/" >&2
  exit 1
fi

payload="$(mktemp)"
trap 'rm -f "$payload"' EXIT

cat >"$payload" <<JSON
{
  "name": "$RULESET_NAME",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["$BRANCH_PATTERN"],
      "exclude": []
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": $REQUIRED_APPROVALS,
        "dismiss_stale_reviews_on_push": true,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": true,
        "allowed_merge_methods": ["merge", "squash", "rebase"]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": true,
        "required_status_checks": [
          {
            "context": "$REQUIRED_CHECK"
          }
        ]
      }
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "bypass_actors": []
}
JSON

ruleset_id="$(
  gh api "repos/$OWNER/$REPO/rulesets" \
    --jq ".[] | select(.name == \"$RULESET_NAME\") | .id" |
    head -n 1
)"

if [ -n "$ruleset_id" ]; then
  gh api --method PUT "repos/$OWNER/$REPO/rulesets/$ruleset_id" --input "$payload" >/dev/null
  echo "Updated repository ruleset '$RULESET_NAME' for $OWNER/$REPO."
else
  gh api --method POST "repos/$OWNER/$REPO/rulesets" --input "$payload" >/dev/null
  echo "Created repository ruleset '$RULESET_NAME' for $OWNER/$REPO."
fi
