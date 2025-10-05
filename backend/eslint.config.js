import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Базовые рекомендуемые правила для JavaScript
  js.configs.recommended,

  // Рекомендуемые правила для TypeScript
  ...tseslint.configs.recommended,

  // Отключаем правила, которые конфликтуют с Prettier
  eslintConfigPrettier,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      // TypeScript правила
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
        },
      ],

      // Общие правила
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],

      // Node.js / Express правила
      'no-process-exit': 'error',
    },
  },

  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js'],
  },
])
