# Excalidraw React Integration

## Required Provider

If you see errors like 'Missing Provider from createIsolation', you must wrap your Excalidraw component with the Jotai Provider:

```jsx
import { Provider as JotaiProvider } from 'jotai';

function App() {
  return (
    <JotaiProvider>
      <ExcalidrawComponent />
    </JotaiProvider>
  );
}
```

See the Excalidraw and jotai documentation for more details.

# Excalidraw

**Excalidraw** is exported as a component to be directly embedded in your project.

## Installation

Use `npm` or `yarn` to install the package.

```bash
npm install react react-dom @jitsi/excalidraw
# or
yarn add react react-dom @jitsi/excalidraw
```

> **Note**: If you don't want to wait for the next stable release and try out the unreleased changes, use `@jitsi/excalidraw@next`.

#### Self-hosting fonts

By default, Excalidraw will try to download all the used fonts from the [CDN](https://esm.run/@jitsi/excalidraw/dist/prod).

For self-hosting purposes, you'll have to copy the content of the folder `node_modules/@jitsi/excalidraw/dist/prod/fonts` to the path where your assets should be served from (i.e. `public/` directory in your project). In that case, you should also set `window.EXCALIDRAW_ASSET_PATH` to the very same path, i.e. `/` in case it's in the root:

```js
<script>window.EXCALIDRAW_ASSET_PATH = "/";</script>
```

### Dimensions of Excalidraw

Excalidraw takes _100%_ of `width` and `height` of the containing block so make sure the container in which you render Excalidraw has non zero dimensions.

## Demo

Go to [CodeSandbox](https://codesandbox.io/p/sandbox/github/excalidraw/excalidraw/tree/master/examples/with-script-in-browser) example.

## Integration

Head over to the [docs](https://docs.excalidraw.com/docs/@jitsi/excalidraw/integration).

## API

Head over to the [docs](https://docs.excalidraw.com/docs/@jitsi/excalidraw/api).

## Contributing

Head over to the [docs](https://docs.excalidraw.com/docs/@jitsi/excalidraw/contributing).

## Troubleshooting: Invalid Hook Call

If you see errors like 'Invalid hook call. Hooks can only be called inside of the body of a function component', you likely have multiple React instances. To fix:

- Ensure react and react-dom are only in peerDependencies (not dependencies or devDependencies) in this package.
- Remove all node_modules and lock files in your monorepo and reinstall dependencies from the root.
- Use `yarn list react` or `npm ls react` to verify only one version is installed.
- See the React docs: https://reactjs.org/warnings/invalid-hook-call-warning.html

## Troubleshooting: Target container is not a DOM element

If you see this error, make sure the DOM node you are rendering into exists before calling ReactDOM.createRoot or ReactDOM.render.
