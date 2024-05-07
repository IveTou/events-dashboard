# Events Dashboard - Project Description


## 🛠️ Installation

Clone this repo and execute `yarn`;

## 🏃 Running the app

```bash
yarn dev
```

## Architecture/Path Structure

### Layouts

Especial class directory with comprises in structural component(s) which orquestrate what and how to show elements in screen;


## Components

Building blocks or compositional components which are as mre agnostic as possible, to ease testing and code reuse. Tis components just expose its interfaces to out side and do not know about who is using that.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Notes

- Check semantics and ARIA
- Use API to fetch and post data
- Use State Management Tool if necessary
- Check DRY
- More tests
- Lint (run/dev and push time) for code quality and pattern compliance 
- List pagination and fetch pagination
- (OR) Virtualize list with _react-window_
- Config alias for paths
- More componentzation
