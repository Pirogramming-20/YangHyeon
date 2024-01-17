const markers = document.getElementsByClassName("marker");
const mark_array = Array.from(markers);

const idea_list = document.querySelector(".marker-exist");

idea_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("marker")) {
    e.target.classList.toggle("checked-marker");
  }
});

function submitSelect() {
  document.getElementById("sort_form").submit();
}

function upinterst() {}

function downinterst() {}
