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

//데어터 저장하는 함수
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//데이터를 불러오는 함수
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
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
    saveData();
  }
}

//체크표시 구현
listContainer.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");

  let checkedTodos = document.getElementById("today").innerText;

  if (e.target.tagName === "LI") {
    //변형해야해서 let 사용함.
    if (e.target.classList.contains("checked")) {
      checkedTodos = parseInt(checkedTodos) + 1;
    } else if (checkedTodos != 0) {
      checkedTodos = parseInt(checkedTodos) - 1;
    }

    saveData();
    document.getElementById("today").innerText = checkedTodos;
  }
});

showData();
localStorage.clear();

// const TODO_LIST_DATA = [
//   "동아리",
//   "후회없는 여름방학 보내기",
//   "좋은 인연 많이 만들기",
//   "헤맨만큼 내 땅이다! 마음껏 헤매기",
//   "자식같은 프로젝트 해보기",
// ];

// TODO_LIST_DATA.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerText = item;
//   listContainer.appendChild(li);
// });

const TODO_LIST_DATA = [
  {
    category: "방학목표",
    todolist: [
      "후회없는 여름방학 보내기",
      "좋은 인연 많이 만들기",
      "헤맨만큼 내 땅이다! 마음껏 헤매기",
      "자식같은 프로젝트 해보기",
    ],
  },
  {
    category: "학교",
    todolist: ["등교하기", "하교하기"],
  },
];

const main = document.getElementsByClassName("main")[0];

TODO_LIST_DATA.forEach((block) => {
  //category 태그
  const category = document.createElement("div");
  category.classList.add("category");

  //카테고리 이름 태그
  const categoryName = document.createElement("p");
  categoryName.innerText = block.category;

  //버튼 태그 만들기
  const btn = document.createElement("div");
  btn.classList.add("add-task-btn");
  btn.setAttribute("id", "addTaskBtn");

  const icon = document.createElement("i");
  icon.classList.add("ri-add-line");

  btn.appendChild(icon);
  category.appendChild(categoryName);
  category.appendChild(btn);
  main.appendChild(category);

  //리스트 컨테이너
  const ul = document.createElement("ul");
  ul.setAttribute("id", "listContainer");

  block.todolist.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });

  main.appendChild(ul);
});
