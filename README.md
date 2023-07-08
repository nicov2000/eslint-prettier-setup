# **Setup linter + formatter (ESLint + Prettier)**

## **ESLint**

1. Install eslint: **npm install -D eslint**
2. Init ESLint (choose Standard guide): **npx eslint --init**
3. Install **ESLint from Microsoft** extension, to see errors in realtime
4. Create file **.eslintignore** to exclude automatically generated js/jsx/ts/tsx files (eg: dist)

### Usage

1. Lint errors: **npx eslint "file"**
2. Fix errors: **npx eslint "file" --fix**
3. You can change ESLint config in **.eslintrc.cjs**

---

## **Prettier**

1. Install Prettier: **npm install -D prettier**
2. Create file **.prettierrc** to setup as you like (https://prettier.io/docs/en/options.html)
3. Install **Prettier - Code Formatter** extension
4. Set Prettier as default formatter: **VSCode settings > Search for Default Formatter**
5. Create file **.prettierignore** to exclude automatically generated files (eg: node_modules, dist, package-lock.json)
6. (Recommended) Activate format on save: **settings > Search for Format on Save**

### Usage

1. Check files: **npx prettier --check .**
2. Format files: **npx prettier --write .**

---

## **Prioritize Prettier over ESLint to avoid conflicts**

1. Install eslint-config-prettier: **npm install -D eslint-config-prettier**
2. Add **eslint-config-prettier** to .eslintrc, inside "extends"

---

## **Add CLI commands (helps with Git automations)**

```json
"scripts": {
  "format": "prettier --write .",
  "lint": "eslint --fix . --ext .js,.jsx"
}
```
