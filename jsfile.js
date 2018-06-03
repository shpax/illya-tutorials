window.addEventListener("load", function(){
 const addTaskButton = document.getElementById("addButton");
 renderToDos();
});

function createToDo(text) {
  return {text, done: false};
};

const toDoStore = [

  ];

function renderToDos() {
  const toDosContainer = document.getElementById("toDosList");
  const html = toDoStore.map(function (toDo) {
    return "<li class=\"list-group-item\">" + toDo.text + "</li>";
  }).join("\n");
  toDosContainer.innerHTML = html;
};





