module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^@testing/',
          'module',
          '/^src/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.test.*'],
        moduleDirectory: ['node_modules', 'src/*'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
