/*
 * @Author: wangshan
 * @Date: 2021-11-21 00:01:26
 * @LastEditors: wangshan
 * @LastEditTime: 2021-11-21 00:01:27
 * @Description:
 */
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
    