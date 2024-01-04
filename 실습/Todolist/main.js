const addTaskBtn = document.getElementById("addTaskBtn");
const listContainer = document.getElementById("listContainer");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  //li 태그 만들기
  const li = document.createElement("li");

  //input 태그 만들기
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "할 일을 입력하세요.");
  input.setAttribute("id", "taskInput");

  //div 태그 만들기
  const btn = document.createElement("div");
  btn.classList.add("add-task-btn");
  btn.addEventListener("click", confirmTask);

  //icon 태그 만들기
  const icon = document.createElement("i");
  icon.classList.add("ri-add-line");

  //구조화
  btn.appendChild(icon);
  li.appendChild(input);
  li.appendChild(btn);

  listContainer.appendChild(li);
}

function confirmTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (task === "") {
    alert("문자열 입력하세요.");
  } else {
    //li 태그 만들기
    const li = document.createElement("li");
    li.innerText = task;

    listContainer.appendChild(li);
    listContainer.removeChild(taskInput.parentElement);
  }
}
