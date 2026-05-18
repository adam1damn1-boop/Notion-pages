# AGENTS Instructions

## GitHub export workflow for this repository

Use direct delivery to `main` for this project:

`main branch → push`

### During export

1. Use environment variables `GH_USER` (GitHub username) and `GH_PAT` (Personal Access Token).
2. First check whether `origin` is configured; if not, configure `origin` to the correct repository.
3. Commit and push updates directly to `main`.

### Definitions

GH_USER = login user
GH_PAT = authorization token
repo owner = adam1damn1-boop
repo name  = Notion-pages
branch     = main

### Security requirements

- Never print or log the value of `GH_PAT`.
- Never include the token in messages, commits, or Pull Request descriptions.
