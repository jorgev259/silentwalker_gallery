module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'next/core-web-vitals'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'react'
  ],
  rules: {
    '@next/next/no-img-element': 'off'
  }
}
