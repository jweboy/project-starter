/*
 * @Author: jweboy
 * @Date: 2019-12-03 16:18:35
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-04 10:43:27
 */
/**
 * @name react代码规则模板
 * @description 规则数值含义
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 `modules` 以外的所有 `ECMAScript 6` 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）
    node: true, // `Node.js` 全局变量和 `Node.js` 作用域
  },
  extends: [
    'eslint:recommended',
    'airbnb-base', // `airbnb` 基准规则
    'plugin:react/recommended', // `eslint-plugin-react` 插件
    'prettier',
  ],
  parser: 'babel-eslint', // 解析器
  parserOptions: {
    sourceType: 'module', // `ECMAScript` 模块
    ecmaFeatures: {
      experimentalObjectRestSpread: true, // 对象剩余参数解构
      jsx: true, // 启用 `jsx`，用于 `react`
    },
  },
  plugins: [ // 第三方插件
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'], // 遵循 `.prettirc.js` 相关规则
    'no-console': 1,
    /**
     * @description react 部分规则
     */
    "react/display-name": [1, { // 指定组件的 `displayName`
      ignoreTranspilerName: false, // `true` 忽略编译器设置的组件名称
    }],
    "react/forbid-prop-types": [1, { // 给组件传入不相关的 `props`
        forbid: ["any"],
      },
    ],
    "react/jsx-boolean-value": 2, // `true` 值简写 <A show />
    "react/jsx-closing-bracket-location": [2, 'line-aligned'], // 组件多个 `props` 格式缩进
    "react/jsx-closing-tag-location": 2, // 关闭标签位置与开始标签平齐或者同行
    "react/jsx-curly-newline": {
      multiline: 'consistent', // 多行强制两个花括号内都直接有一个换行符
      singleline: 'consistent', // 单行没有换行符
    },
    "react/jsx-curly-spacing": 2, // 对象`props` 空格缩进 => name={ test}
    "react/jsx-equals-spacing": [2, "always"], // `props` 等号之间没有空格
    "react/jsx-indent-props": [2, 'tab'], // 组件前两个空格缩进
    "react/jsx-key": 2, // 渲染列表必须带 `key`
    "react/jsx-max-props-per-line": [2, { // 单行行最多的 `props` 数量
      when: 'multiline',
    }],
    "react/jsx-no-bind": [1, {  // 不用 `bind` 绑定事件
      ignoreDOMComponents: true, // 原生 `DOM` 不做限制
      allowArrowFunctions: true, // 允许少量的箭头函数
    }],
    "react/jsx-no-duplicate-props": 2, // 不允许 `props` 属性重复定义 => <Hello name="John" name="John" />
    "react/jsx-no-undef": 2, // 未定义就使用的组件变量
    "react/jsx-props-no-multi-spaces": 2, // 多个 `props` 之间只有一个空格
    "react/jsx-one-expression-per-line": 2, // 单行只有一个表达式
    "react/jsx-pascal-case": 2, // 组件名大驼峰规范 => 错误范例: <TEST_COMPONENT />
    "react/jsx-sort-props": [2, {
      callbacksLast: true, // `callback` 放最后面
      shorthandFirst: true, // 简写 `props` 放最前面
    }],
    "react/jsx-tag-spacing": 2, // 封闭括号相关的空格
    "react/jsx-uses-react": 1, // 引入 `react` 包之后却没有使用它(声明组件)
    "react/jsx-uses-vars": 1, // 组件变量声明之后但是未使用
    "react/jsx-wrap-multilines": 2, // `DOM` 块最好用括号以表达清晰
    "react/no-danger": 2, // 不允许 `dangerouslySetInnerHTML` 这个 `props`
    "react/no-multi-comp": 1, // 每个 `jsx` 文件只能声明一个组件
    "react/no-unknown-property": 2, // 未知的 `DOM` 属性
    "react/no-array-index-key": 2, // 数组的 `key` 不能用 `index`
    "react/no-children-prop": 2,  // 不能将 `children` 作为 `props`
  }
};
