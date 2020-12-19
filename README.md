## 代码检查

### 执行命令校验

根据 .eslintrc 规则来对代码进行校验

```package.json
{
  "lint": "eslint src --ext .tsx", // 检查代码
  "lint:fix": "eslint src --ext .tsx --fix" // 自动修复
}
```

### 结合 IDE 在开发时进行校验

创建.vscode

```json
{
  "eslint.validate": [
    // 校验的语言
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    // 保存的时候执行的动作
    "source.fixAll.eslint": true // 修复源代码所有错误
  }
}
```
