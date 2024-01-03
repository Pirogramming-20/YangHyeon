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
  console.log(container);
  //ul 을 받아와서 li 태그로 달라진 것을 HTML 내부에 생성한다.
  //join을 이용하여 items 내부에서 생성된 여러 li 태그 안의 있는 값들을 합친다.
  // 아래의 items 들은 json 내부에 있는 items 로, 각각의 배열 안 모두를  li로 변환 시켜,
  // join 으로 한줄로 만들어 inner HTML 에 추가해준다.

  //이때의 innerHTML 이란 받아온 <ul> 태그 안의 내부를 의미하는 것이다.
  //따라서 join 의 경우 ul 뒤가 아닌 내부에 붙게 된다.
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
  console.log(container);
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

//main
loadItems()
  .then((items) => {
    displayItems(items);
    //setEventListteners(items);
  })
  .catch(console.log());
