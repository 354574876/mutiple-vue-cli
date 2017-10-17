// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "comma-dangle": ["error", "never"],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 文件末尾强制换行
    "eol-last": 0,
    // 要求或禁止使用分号而不是 ASI
    'semi': [0, 'never'],
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 禁止使用三目运算符
    'no-ternary':0,
    // 一行结束后面不要有空格
    "no-trailing-spaces": 1,
    // 不能用多余的空格
    "no-multi-spaces": 1,
    //tab 占位
    'indent': [0,4],
    //引号类型 `` "" ''
    "quotes": [0, "single"],
    //对象字面量中的属性名是否强制双引号
    "quote-props":[0, "always"],
    // 比较用 === 或 !==
    "eqeqeq": 0,
    'one-var': 0
  }
}
