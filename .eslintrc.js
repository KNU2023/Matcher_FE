module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // 'latest' 대신 '2020' 사용
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // '18.2' 대신 'detect' 사용
    },
  },
  plugins: ['react', 'react-hooks'], // 'react-refresh' 플러그인 제거
  rules: {
    'react/prop-types': 'off', // 프로퍼티 타입 검사 규칙 비활성화
    'react/display-name': 'off', // 디스플레이 네임 검사 규칙 비활성화
  },
};
