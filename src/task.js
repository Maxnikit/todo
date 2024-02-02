export class Task {
  constructor(
    name,
    description = "No description",
    dueDate = "No Date",
    priority = "No priority"
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  toggleDone() {
    this.isDone = !this.isDone;
  }

  getTask() {
    return {
      name: this.name,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      isDone: this.isDone,
    };
  }
}
