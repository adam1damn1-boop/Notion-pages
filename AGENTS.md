# AGENTS.md

## GitHub upload workflow (safe mode)

Use the safe workflow by default: **feature branch -> push -> Pull Request**.

### Environment assumptions
- `GH_USER` contains the GitHub username.
- `GH_PAT` contains a GitHub Personal Access Token (classic) with repo access.

### Rules
1. Never print or expose `GH_PAT` in logs, messages, PR text, or commit messages.
2. Prefer pushing to a feature branch (for example `work` or `feature/<topic>`), not directly to `main`.
3. Create a Pull Request from the feature branch into `main` (or configured base branch).

### Recommended command sequence
```bash
# 1) Ensure remote is configured
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "https://github.com/${GH_USER}/Notion-pages.git"
fi

# 2) Work on feature branch
git checkout -B work

# 3) Commit changes
git add <files>
git commit -m "<message>"

# 4) Push using token-authenticated HTTPS URL
# (Do not echo token; avoid commands that print full URL)
git push -u "https://${GH_USER}:${GH_PAT}@github.com/${GH_USER}/Notion-pages.git" work

# 5) Restore clean origin URL without token
git remote set-url origin "https://github.com/${GH_USER}/Notion-pages.git"

# 6) Open PR (CLI example)
# gh pr create --base main --head work --title "<title>" --body "<body>"
```

### Notes
- If direct `git push origin <branch>` asks for username/password, use token-authenticated push URL above.
- After merge, delete feature branch to keep repository clean.
