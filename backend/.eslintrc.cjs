module.exports = {
  root: true,
  env: { node: true, es2022: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:n/recommended',
    'plugin:import/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'script' },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-console': 'off',
    'n/no-missing-require': 'off',
    'import/no-unresolved': 'off'
  },
  ignorePatterns: ['node_modules/', 'coverage/']
};
