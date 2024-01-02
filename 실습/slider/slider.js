const slider = document.getElementById("slide");
const text = document.querySelector(".main-top");

//children 이라는 명령어와 같은 역할
console.log(text.children);

const texts = text.children;
//inputEventLinster
slider.addEventListener("input", (event) => {
  for (let text of texts) {
    //target 은 event가 발생한 대상을 의미
    text.style.fontWeight = event.target.value * 10;
  }
});
