function submitSelect() {
  document.getElementById("sort_form").submit();
}

const idea_list = document.querySelector(".marker-exist");

idea_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("marker")) {
    //e.target.classList.toggle("checked-marker");
  }
});

function mark() {
  console.log("mark");
}

function unmark() {
  console.log("unmark");
}

function upinterst() {}

function downinterst() {}
