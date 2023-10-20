# Vike + Tauri + React + Typescript

This template should help get you started developing desktop apps with React, Typescript, Vite, and Vike using Tauri.

## Features

- [Vite](http://vitejs.dev) with [React](http://react.dev) and [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io), along with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged)
- [Vike](https://vike.dev) and [vike-react](https://github.com/vikejs/vike-react) for SSG and routing
- [Tauri](https://tauri.app) to create a desktop app

## Usage

Use this repository as a template, or use [degit](https://github.com/Rich-Harris/degit) to clone with an empty git history:

```sh
pnpx degit ethanl21/tauri-react-vike-template#main my-app
```

Install the dependencies and prepare the commit hooks:

```sh
pnpm i
pnpm run prepare
```

Run a live demo with Hot Reload enabled:

```sh
pnpm run tauri dev
```

### Making it your own

- Replace the icons in `src-tauri/icons` with your own
- Replace the bundle identifier in `src-tauri/tauri.conf.json`
- Replace the product name in `src-tauri/tauri.conf.json`
- Change the `name` field in `package.json`

## Included Scripts

- `pnpm tauri` - run tauri commands
  - `pnpm tauri dev` - run a demo with hot reload
  - `pnpm tauri build` - build a distributable executable
- `pnpm lint` - run ESLint
