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
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime nodemon @types/jest jest eslint
```

- Install the necessary dependencies for ts

```
npm install --save-dev @babel/preset-typescript @types/node typescript
```

-   Update the scripts of `package.json`

```
"build": "webpack",
"start": "nodemon index.js",
"type-check": "tsc --noEmit",
"test": "jest --watchAll --verbose --forceExit --silent",
"test:watch": "jest --watchAll --verbose --forceExit --silent"
```    

**3. Create the project structure:**

```
touch babel.config.js index.js
```

## Step 2: Configure Babel

Create or modify the babel.config.js file to include the @babel/preset-typescript preset.

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
```

## Step 3. Create `tsconfig.json`

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

Move your existing files into the `src` directory and update their extensions to `.ts` where appropriate.

## Step 5. Update Package Scripts

Update the `scripts` section of your `package.json` to include build and start commands using Babel and Node.

```
{
  "scripts": {
    "build": "babel src --extensions \".ts,.js\" --out-dir dist",
  }
}
```

## Step 6. Configure Jest for TypeScript

If you’re using Jest for testing, you need to configure it to handle TypeScript. Install the necessary dependencies:

```
npm install --save-dev ts-jest @types/jest
```

Create or update `jest.config.js` to use `ts-jest`.

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

## Step 7. Type-Checking with `tsc`

Since Babel does not perform type-checking, you should use the TypeScript compiler (`tsc`) for type-checking. Add a script in your `package.json` to run type-checking:

```
{
  "scripts": {
    "type-check": "tsc --noEmit"
  }
}
```

Run `npm run type-check` to perform type-checking.

## Step 8 creat `jest.config.js`

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

## Step 9. Sample Project Structure

```lua
my-typescript-project/
├── babel.config.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   └── otherFiles.ts
├── dist/
```

**Final Notes**
1.  **Compilation**: Babel will compile your TypeScript code to JavaScript, but you need to rely on TypeScript (`tsc`) for type-checking.
2.  **Type Definitions**: Ensure you have appropriate type definitions installed for Node.js and any other libraries you use.
3.  **Source Maps**: If you need source maps for debugging, configure Babel and TypeScript accordingly.
