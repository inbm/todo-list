export default class Group {
    constructor(manager /* : Employee */ ) {
      this._manager = manager;
      this._managedEmployees = [];
    }
  
    addEmployee(employee) {
      this._managedEmployees.push(employee);
    }
  }