# Building a Node.js project with Babel

## Step 1: Set Up Your Project

1. **Initialize Git pository and Node.js project:**

- `node-project`
```sh
mkdir my-node-project
cd my-node-project
npm init
```

- `Git pository`
```sh
git init
git branch -M main
npx gitignore node
```

**2. Install the necessary dependencies:**

- Install the necessary dependencies for js


```
npm install --save-dev @babel/core @babel/cli @babel/plugin-transform-runtime @babel/preset-env @babel/runtime nodemon @types/jest jest eslint
```

- Install the necessary dependencies for ts

```
npm install --save-dev @babel/preset-typescript @types/node typescript
```

-   Update the scripts of `package.json`

```
"build": "babel src --extensions \".ts,.js\" --out-dir dist",
"start": "nodemon index.js",
"type-check": "tsc --noEmit",
"test": "jest --watchAll --verbose --forceExit --silent",
"test:watch": "jest --watchAll --verbose --forceExit --silent"
```    

## Step 2: Create and configure Babel

Create or modify the babel.config.js file to include the @babel/preset-typescript preset.

- Create the `babel.config.js` file manually:

```
touch babel.config.js
```

- make sure the babel.config.js file to include the @babel/preset-typescript preset.

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
```

## Step 3. Create `tsconfig.json`

- Create the `tsconfig.json` file manually:

```
touch tsconfig.json
```

This file is used by the TypeScript compiler to understand the TypeScript-specific options, even though Babel will handle the actual compilation.

```ts
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## Step 4. Set Up Project Structure

Create a `src` directory for your TypeScript source files and a `dist` directory for the compiled JavaScript files.

```sh
mkdir src dist
```
Sample Project Structure

```lua
my-typescript-project/
├── babel.config.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   └── otherFiles.ts
├── codegrade_mvp.test.ts
├── dist/
```

Move your existing files into the `src` directory and update their extensions to `.ts` where appropriate.


## Step 5. Configure Jest for TypeScript

If you’re using Jest for testing, you need to configure it to handle TypeScript. Install the necessary dependencies:

```
npm install --save-dev ts-jest
```

Create or update `jest.config.js` to use `ts-jest`.

```
touch jest.config.js
```

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
```

## Step 6. Type-Checking with `tsc`

Run `npm run type-check` to perform type-checking.

## Creat `codegrade_mvp.test.ts`





**Final Notes**
1.  **Compilation**: Babel will compile your TypeScript code to JavaScript, but you need to rely on TypeScript (`tsc`) for type-checking.
2.  **Type Definitions**: Ensure you have appropriate type definitions installed for Node.js and any other libraries you use.
3.  **Source Maps**: If you need source maps for debugging, configure Babel and TypeScript accordingly.
