export class todoList {
  static taskList = [];

  static addTask(task) {
    this.taskList.push(task);
  }

  static removeTask(task) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  static getTaskList() {
    return this.taskList;
  }
}
