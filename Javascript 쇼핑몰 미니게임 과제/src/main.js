//json 파일에서 데이터 받아오기
function loadItems() {
  // 데이터를 url 을 통해서 받아 올 수 있다.
  return (
    fetch("data/data.json")
      .then((response) => response.json())
      //윗줄에서 변환한 json 을 아래에서 변환
      .then((json) => console.log(json.items))
  );
}

//main
loadItems()
  .then((items) => {
    // displayItems(items);
    // setEventListteners(items);
  })
  .catch(console.log());
