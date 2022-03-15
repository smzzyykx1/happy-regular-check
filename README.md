# happy-regular-check

一个自动生成正则校验的js包

# 背景
在开发项目时会遇到大量表单的场景，但我们仔细观察发现需求文档中的校验往往就是下列规则的组合，故开发该内容

# 项目说明文档
该包用来动态生成正则，以及判断输入内容是否符合正则校验规则。
主要使用 happyRegularCheck 方法
该方法有三个参数

第一个参数：数组：填入需要校验的规则
第一个参数数组中的内容
number:数字
capitalEnglish:大写英文
smallEnglish:小写英文
chinese:中文
symbolEnglish:英文符号
symbolChinese:中文符号
hyphen:连字符，中横线

第二个参数：校验的字符串内容，第三个参数为'result'时直接返回true和false结果

第三个参数：字符串：'regExp'：返回动态生成的正则  'result':配合第二个参数返回该字符串是否符合正则校验结果

## 引入

[Node.js](https://nodejs.org):

```bash
npm install happy-regular-check
```
```js
import { happyRegularCheck } from 'happy-regular-check';
```
## 使用

```js
// 校验是否输入是否符合中文和大小写英文
happyRegularCheck(['chinese','capitalEnglish','smallEnglish'],'你好') //true
```