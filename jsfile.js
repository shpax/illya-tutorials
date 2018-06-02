window.addEventListener("load", function(){
 const addTaskButton = document.getElementById("addButton");
 renderToDos();
});

const TODO = {
  text: "on pokazyval pisun",
  done: false
};

function createToDo(text) {
  return {text, done: false};
};

const toDoStore = [
  createToDo("testToDo1"),
  createToDo("testToDo2")
];


function renderToDos() {
  const toDosContainer = document.getElementById("addButton");
  const html = toDoStore.map(function (toDo) {
    return "<li class=\"list-group-item\">" + toDo.text + "</li>";
  }).join("\n");
  toDosContainer.innerHTML = html;
};
