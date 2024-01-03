json 을 사용하고 나서 
html 에 link 로 연결시켜주지 않았으므로 html 에 추가되지 않는다.

이는 아마 json 에 데이터를 보관하여 데이터들을 보호보다는 관리...?
html 완료가 되고, javascript 가 실행 되어야지 json 이 실행된다.


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
  //index.html 에서 id가 item인 곳의 내부 <ul> 태그들의 html코드들을 받아온다.
  const container = document.querySelector(".items");
  //ul 을 받아와서 li 태그로 달라진 것을 HTML 내부에 생성한다.
  //joing을 이용하여 items 내부에서 생성된 여러 li 태그 안의 있는 값들을 합친다.
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}


//아래에서 사용되는 map 의 경우 배열을 쉽게 조정하기 이한 메소드이다.
//모든 배열에 대해 순회하면서 일관적으로 처리해주는 함수이다.

function createHTMLString(item) {
  // `` 으로 string 입력
  //li 생성
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

// then 이란 위의 함수가 실행이 완료 된 이후에 실행한다는 것을 의미한다.
//main
loadItems()
  .then((items) => {
    displayItems(items);
    //setEventListteners(items);
  })
  .catch(console.log());
