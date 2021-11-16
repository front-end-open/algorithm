/*
 * @Author: wangshan
 * @Date: 2021-10-11 23:44:30
 * @LastEditors: wangshan
 * @LastEditTime: 2021-10-12 00:26:03
 * @Description: node 类型模块
 */

// url 模块
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

// path模块
declare module "path" {
  export function nomalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string;
}

declare module "net";
