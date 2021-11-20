/*
 * @Author: wangshan
 * @Date: 2021-11-20 23:42:16
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-20 23:42:16
 * @Description:
 */
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.s
