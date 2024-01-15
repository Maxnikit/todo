const taskList = [];
class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  toggleDone() {
    this.isDone = !this.isDone;
  }
  static addTask() {
    taskList.push(this);
  }
  removeTask() {
    taskList.splice(taskList.indexOf(this), 1);
  }
  editTask() {}
}

let task1 = new Task("Task 1", "Description 1", "2022-01-01", "high");
console.log(task1);
Task.addTask(task1);
console.log(taskList);
