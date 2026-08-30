# Contributing to PromptVeil

Thank you for your interest in contributing to **PromptVeil** — a dual-defense system against Direct and Indirect Prompt Injections.

---

## 🌳 Branching Strategy

We follow a **hierarchical branching model** to keep development organized and production stable.

```
main (Production — protected, PR-only merges)
 └── dev (Integration & testing)
      ├── frontend (React + Tailwind UI work)
      ├── backend (Node.js + Express APIs + MongoDB)
      └── extension (Chrome Extension MV3)
           └── feature/* (Temporary task branches)
```

### Branch Roles

| Branch | Purpose | Merges Into |
|---|---|---|
| `main` | Production releases. Protected — no direct commits. | — |
| `dev` | Integration branch for testing combined features. | `main` (via PR) |
| `frontend` | React.js, Tailwind CSS, pages, UI components. | `dev` (via PR) |
| `backend` | Express APIs, MongoDB schemas, detection engine. | `dev` (via PR) |
| `extension` | Chrome Extension MV3, content scripts, hooks. | `dev` (via PR) |
| `feature/*` | Isolated work on specific tasks. | Parent branch (via PR) |

---

## 🔀 Workflow: How to Contribute

### 1. Pick a Branch

Start from the appropriate workstream branch:

```bash
# For UI/frontend work
git checkout frontend
git pull origin frontend

# For API/backend work
git checkout backend
git pull origin backend

# For Chrome extension work
git checkout extension
git pull origin extension
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/<descriptive-name>

# Examples:
git checkout -b feature/unified-scanner
git checkout -b feature/auth-jwt
git checkout -b feature/tri-layer-heuristics
git checkout -b feature/chatgpt-hook
```

### 3. Make Changes & Commit

Follow **Conventional Commits**:

```bash
git add .
git commit -m "feat: add unified scanner page with real-time analysis"
```

### 4. Push & Open a Pull Request

```bash
git push -u origin feature/<your-branch-name>
```

Then open a PR on GitHub targeting the **parent branch** (not `main`).

### 5. Merge Flow

```
feature/* → frontend / backend / extension → dev → main
```

After PR approval, the feature branch is **merged and deleted**.

---

## 📝 Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear, machine-readable history.

| Prefix | Use Case | Example |
|---|---|---|
| `feat:` | New feature or API endpoint | `feat: add JWT authentication middleware` |
| `fix:` | Bug fix or patch | `fix: resolve token expiration edge case` |
| `style:` | UI/CSS changes, design tokens | `style: update scanner page gradient colors` |
| `docs:` | Documentation updates | `docs: add API endpoint reference` |
| `refactor:` | Code restructuring (no behavior change) | `refactor: extract validation logic into utils` |
| `chore:` | Build, tooling, dependencies | `chore: update vite to v6` |
| `test:` | Adding or updating tests | `test: add unit tests for heuristics engine` |

### Commit Message Format

```
<type>(<optional-scope>): <short description>

[optional body with more detail]
[optional footer with references]
```

**Example:**
```
feat(scanner): add tri-layer heuristic detection

- Added keyword matching layer
- Added pattern analysis layer  
- Added semantic similarity layer

Closes #42
```

---

## 🚀 PR Flow & Review Process

1. **Create PR** targeting the correct parent branch.
2. **Title** follows conventional commit format: `feat(scanner): add real-time analysis`.
3. **Description** includes:
   - What changed and why
   - Screenshots for UI changes
   - Testing steps
4. **Review** — At least 1 approval required before merge.
5. **Merge** — Use **Squash and Merge** for feature branches.
6. **Cleanup** — Delete the feature branch after merge.

---

## 🏗️ Tech Stack Reference

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS, Vite |
| Backend | Node.js, Express.js, MongoDB |
| Extension | Chrome Extension Manifest V3 |
| Auth | JWT + bcrypt |
| Detection | Tri-layer heuristic engine |

---

## ⚙️ Local Development Setup

```bash
# Clone the repo
git clone https://github.com/the-ankitkumar/PromptVeil.git
cd PromptVeil

# Switch to dev branch
git checkout dev

# Frontend
cd frontend
npm install
npm run dev

# Backend (when available)
cd ../backend
npm install
npm run dev
```

---

## 🛡️ Branch Protection Rules (Maintainers)

For the `main` branch on GitHub:
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ❌ Disable direct pushes
- ❌ Disable force pushes

---

## 📋 Quick Reference

```bash
# See all branches
git branch -a

# Switch branches
git checkout <branch-name>

# Create feature branch
git checkout -b feature/<name>

# Sync with remote
git pull origin <branch-name>

# Push changes
git push -u origin <branch-name>
```

---

_Happy Building! 🚀_
