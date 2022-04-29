//import * as internal from "stream";

export class User {
  public id: number;
  public name: string;
  public age: number;

  constructor(id: number, name: string, age: number = 0){
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
