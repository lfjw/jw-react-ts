module.exports = {
  "parser": "@typescript-eslint/parser", // 解析器  语法树
  "plugins": ["@typescript-eslint"], // 插件
  "rules": { // 规则自定义
    "no-var": "error", // 不能有var变量
    "no-extra-semi": "error", // 不能有分号
    "@typescript-eslint/indent": ["error", 2] // 缩进空格2个，不能是4个
  },
  "parserOptions": { // 编译选项
    "ecmaVersion": 6,
    "sourceType": "module", // source 类型
    "ecmaFeatures": {
      "modules": true // 模块化的写法
    }
  }
}