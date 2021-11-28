/*
 * @Author: wangshan
 * @Date: 2021-11-28 16:57:18
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-28 22:59:24
 * @Description: 字符串匹配（模式匹配算法）
 */

export function index(fstr: string, sstr: string, pos: number) {
  //   debugger;
  let i = pos;
  let j = 1;
  let flen = fstr.length;
  let slen = sstr.length;

  while (i <= flen && j <= slen) {
    if (fstr[i - 1] === sstr[j - 1]) {
      i++;
      j++;
    } else {
      i = i - j + 2;
      j = 1;
    }
  }

  if (j > slen) {
    return i - slen;
  } else {
    return 0;
  }
}

// 算法二，查找指定位置之后的第一个匹配的子串.
/**
 *
 * @param {string} target 主串
 * @param {string} substr 子串
 * @param {number} pos 指定位置
 *
 * @returns i
 */

export function Index(target: string, substr: string, pos: number) {
  //   debugger;
  let tlen = target.length;
  let sublen = substr.length;
  let i = pos;
  if (pos > 0) {
    while (i <= tlen - sublen + 1) {
      // 这里循环条件的内表达式意思是，计算pos位置的范围，应当在满足字串长度时的查找范围
      let sub = target.substr(i - 1, sublen);

      if (sub === substr) {
        return i;
      } else {
        i++;
      }
    }
  }

  return -1;
}
