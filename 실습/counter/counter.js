// id 가 minus 인 태그를 가져온다.
const minusbtn = document.getElementById("minus");
// id 가 plus 인 태그를 가져온다.
const plusbtn = document.getElementById("plus");

//cnt 라는 txt 가 저장되는 것이기 때문에  const 문제 없다.
const countText = document.getElementById("cnt");

minusbtn.addEventListener("click", () => {
  countText.innerText = countText.innerText - 1;
});

plusbtn.addEventListener("click", () => {
  countText.innerText = countText.innerText + 1;
});
