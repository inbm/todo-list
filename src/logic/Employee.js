export default class Employee {
    constructor(firstName, familyName) {
      this._firstName = firstName;
      this._familyName = familyName;
    }
  
    getFullName() {
      return `${this._firstName} ${this._familyName}`;
    }
  }
  
