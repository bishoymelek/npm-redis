module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    extends: ['standard', 'eslint:recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'space-before-function-paren': 'error',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'brace-style': ['error', 'stroustrup']
    }
};
