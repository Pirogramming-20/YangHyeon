//json 파일에서 데이터 받아오기
function loadItems() {
  // 데이터를 url 을 통해서 받아 올 수 있다.
  return (
    fetch("data/data.json")
      .then((response) => response.json())
      //윗줄에서 변환한 json 을 아래에서 변환
      .then((json) => json.items)
  );
}

function displayItems(items) {
  //item 내부의 <ul> 태그들의 html코드들을 받아온다.
  const container = document.querySelector(".items");
  //ul 을 받아와서 li 태그로 달라진 것을 HTML 내부에 생성한다.
  //join을 이용하여 items 내부에서 생성된 여러 li 태그 안의 있는 값들을 합친다.
  // 아래의 items 들은 json 내부에 있는 items 로, 각각의 배열 안 모두를  li로 변환 시켜,
  // join 으로 한줄로 만들어 inner HTML 에 추가해준다.

  //이때의 innerHTML 이란 받아온 <ul> 태그 안의 내부를 의미하는 것이다.
  //따라서 join 의 경우 ul 뒤가 아닌 내부에 붙게 된다.
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  // `` 으로 string 입력
  //li 생성
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

//버튼 클릭시 발생하는 이벤트
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  //filter 을 이용하면 기존 박스를 계속 다시 재생성하여 붙여넣으므로 무거워진다.
  const filtered = items.filter((item) => item[key] === value);
  console.log(filtered);
  displayItems(filtered);
}

function setEventListteners(items) {
  const logo = document.querySelector(".logo");
  //  const buttons = document.querySelector(".btn);
  // 으로 작성하게 된다면, 첫 번째의 tshirts 만 작동하게 된다. 이는 querySelector 가 처음 것만 가져오기 때문이다.
  const buttons = document.querySelector(".buttons");

  //click은 string 의 역할이 아닌 옵션 지정자이다.
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

//main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListteners(items);
  })
  .catch(console.log());
