function submitSelect() {
  document.getElementById("sort_form").submit();
}

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
