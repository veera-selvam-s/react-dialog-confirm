module.exports = {
  env: {
    'browser': true,
    'node': true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    'sourceType': 'module'
  },
  settings: {
    react:{
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/prop-types': 'off',
    'template-curly-spacing': 'off',
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    'arrow-body-style': [
      2,
      'as-needed'
    ],
    'lines-between-class-members': ['error', 'always'],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'ignore'
    }],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'arrow-spacing': 'error',
    'func-call-spacing': ['error', 'never'],
    'no-confusing-arrow': 'error',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-use-before-define': 1,
    'prefer-template': 2,
    'max-len': [2, { code: 120, tabWidth: 4, ignoreUrls: true, comments: 120, ignorePattern: 'import' }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-nested-ternary': 'error'
  }
}
