/**
 * @param {*} [dataType=[]] 参与校验provs的正则类型
 * @param {string} [value=''] 需要校验的参数
 * @return {*}
 */
const happyRegularCheck = (dataType = [],value = '',type = 'result' ) => {
    let matching = '^(';

    dataType.forEach((item, index) => {

      if (provs[item]) {
        matching = index === 0 ? `${matching}${provs[item]}` : `${matching}|${provs[item]}`;
      }
    });
    matching = `${matching}|[\r\n]){0,}$`;

    if (value && !new RegExp(matching, 'g').test(value)) {
      return false;
    }
    return true;

  }
// 需要匹配的规则类型
const provs = {
  number: '([0-9])',// 数字
  capitalEnglish: '([A-Z])',// 大写英文
  smallEnglish: '([a-z])',// 小写英文
  chinese: '([\u4e00-\u9fa5]|[\u9fa6-\u9fff]|[\u3400-\u4dbf]|[\u2f00-\u2fd5]|[\u2e80-\u2ef3]|[\uf900-\ufad9]|[\ue815-\ue86f]|[\ue400-\ue5e8]|[\ue600-\ue6cf]|[\u31c0-\u31e3]|[\u2ff0-\u2ffb]|[\u3105-\u312f]|[\u31a0-\u31ba])',// 中文https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php
  symbolEnglish: '([\u0020-\u002f]|[\u003a-\u003f]|\u0040|[\u005b-\u005f]|\u0060|[\u007b-\u007e])', // 英文符号
  // 中文符号
  symbolChinese: '([\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5])',
  hyphen: '([\-])', // 连字符，中横线
};

export {
  happyRegularCheck,
};
