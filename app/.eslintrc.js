module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'prettier',
    'react',
    'autofix',
    'unicorn',
    'import',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // add rules
    semi: 'error',
    'no-var': 'error',
    indent: [
      'error',
      2,
      {SwitchCase: 1, ignoredNodes: ['ConditionalExpression']}
    ],
    "react/prop-types": 0,
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'autofix/no-debugger': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/no-null': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: {node: true},
      rules: {
        'simple-import-sort/imports': 'off',
        'import/order': ['error', {'newlines-between': 'always'}],
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      // Set React version
      pragma: 'React',
      version: 'detect',
    },
  },
};
