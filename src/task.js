export default class Task {
  constructor(
    name,
    description = "No description",
    dueDate = "No Date",
    priority = "No priority",
    timeRemaining = "No time remaining",
    isDone
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
    this.timeRemaining = timeRemaining;
  }
  setIsDone() {
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
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
}
