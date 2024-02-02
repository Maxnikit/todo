import "normalize.css";
import "./style.css";
import { Project } from "./project.js";
import { todoList } from "./todoList.js";

export default class dom {
  //   loadProjects() {
  //     todoList.getProjects().forEach((project) => {if(
  //         project.name !== "Inbox" &&
  //         project.name !== "Today" &&
  //         project.name !== "Upcoming")
  //     });
  //   }
  createProject(name, color) {
    const userProjects = document.getElementById("projectList");
  }
}
