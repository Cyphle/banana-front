# React + TypeScript + Vite

## TODO
- test exemple of query `export const renderQueryHook` (cf `useFetchAssetsOfAssetType`)
- test example of react query mutation `renderMutateHook` (cf `useCreateExternalIdentifier`)
- use context (user context for example and test it `renderContextHook` (cf `userContext` or `clientContext`)
- 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

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

# Used libraries
- https://reactrouter.com/en/main/start/tutorial#loading-data
- https://vitejs.dev/guide/env-and-mode.html
- https://tailwindcss.com/docs/customizing-colors
- https://testing-library.com/docs/react-testing-library/intro/
- https://tanstack.com/query/v3/docs/framework/react/overview (Soon)

## Mock server
Based on Fastify