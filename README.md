# Rollup POC

This is a little `express.js` project to look into
[Rollup](https://rollupjs.org/introduction/).

This proof of concept runs these steps when building:
- compiling Typescript
- locate dependencies from `node_modules`
- CommonJS to ES-Modules
- JSON to ES-Modules
- Transcompile with Babel

The output (in `dist/`) contains three files:
- self-contained CommonJS
- self-contained CommonJS minified with terser
- self-contained ES-Module

## Get started

```bash
# install dependencies
yarn install
# build the self-contained output
yarn build
# run e.g. the minified version
node dist/index.min.js
# build/run non-root docker image
docker build -t rollup-poc .
docker run -p 5000:5000 -e PORT=5000 rollup-poc:latest
```
