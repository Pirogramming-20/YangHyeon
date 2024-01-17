function submitSelect() {
  document.getElementById("sort_form").submit();
}

/*---------------------------------------------------- */
const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value;
function upinterst(pk, dir) {
  fetch("/ideas/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ pk: pk, dir: dir }),
  })
    .then((response) => response.text())
    .then((data) => {
      const selector = `.interst_${pk}`;
      const interst = document.querySelector(selector);
      interst.innerHTML = Number(interst.innerHTML) + 1;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function downinterst(pk, dir) {
  fetch("/ideas/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ pk: pk, dir: dir }),
  })
    .then((response) => response.text())
    .then((data) => {
      const selector = `.interst_${pk}`;
      const interst = document.querySelector(selector);
      interst.innerHTML = Number(interst.innerHTML) - 1;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

/*---------------------------------------------------- */
const data = document.querySelectorAll(".idea-block");
const totalnum = data.length;

const blockcount = 4;
const totalPageCount = Math.ceil(totalnum / blockcount);
let currentpage = 1;

const numlist_box = document.querySelector(".page_number_list");
for (let i = 2; i <= totalPageCount; i++) {
  numlist_box.innerHTML += `<span class="page_btn"> ${i} </span> `;
}

/*---------------------------------------------------- */

const all_page_btn = document.querySelectorAll(".page_btn");

function highlightPage() {
  all_page_btn.forEach((btn) => {
    if (btn.classList.contains("current-page")) {
      btn.classList.remove("current-page");
    }
  });
  all_page_btn[currentpage - 1].classList.add("current-page");
}

/*---------------------------------------------------- */
const box_list = document.querySelector(".idea-block-list");
const allBlock = document.querySelectorAll(".idea-block");

function createPage(num) {
  highlightPage();
  box_list.innerHTML = "";

  for (let i = blockcount * (num - 1); i < blockcount * num; i++) {
    if (allBlock[i].innerHTML != undefined) {
      const block = document.createElement("div");
      block.classList.add("idea-block");
      block.innerHTML = allBlock[i].innerHTML;
      box_list.appendChild(block);
    } else break;
  }
}

createPage(1);

const before_btn = document.querySelector(".before_page_btn");
const after_btn = document.querySelector(".after_page_btn");

before_btn.addEventListener("click", () => {
  if (currentpage > 1) {
    currentpage -= 1;
    createPage(currentpage);
  }
});

after_btn.addEventListener("click", () => {
  if (currentpage < totalPageCount) {
    currentpage += 1;
    createPage(currentpage);
  }
});
