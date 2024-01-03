// 전체 시도 횟수 선언 초기화의 편리를 위해 default는 0
let count = 0;
// display 변수에 class="result-display" 태그 영역 연결
const display = document.querySelector(".result-display");
// 결과에 따른 성공 실패를 표시하기 위한 id="game-result-img" 태그와의 연결
const resultImg = document.querySelector("#game-result-img");
/* 
함수명 : init_game
전달인자 : none;
반환 값 :  rand_num (3자리 난수 배열)
기능 : 기록을 초기화,
        input 값 초기화,
        게임을 위한 중복되지 않는 3자리 난수 생성
*/
function init_game() {
  // 중복되지 않는 3자리의 난수 발생
  let rand_num = [];
  rand_num.push(Math.floor(Math.random() * 10)); // 첫 번째
  let temp_num;
  for (let i = 0; i < 2; i++) {
    temp_num = Math.floor(Math.random() * 10);
    //안에 있는 숫자일 경우 다시 추출
    while (rand_num.includes(temp_num)) {
      temp_num = Math.floor(Math.random() * 10);
    }
    rand_num.push(temp_num);
  }

  // 시도 횟수 초기화
  count = 9;

  // 입력칸 초기화
  const box = document.querySelector(".input-box");
  const boxchild = box.children;
  boxchild[0].value = "";
  boxchild[1].value = "";
  boxchild[2].value = "";

  // 결과창 초기화
  display.innerHTML = "";

  //초기 세팅 전달
  return rand_num;
}

//게임 초기화 , 칸 비우고 중복되지 않는 난수 3자리 생성
let correct_num = init_game();

console.log(correct_num);

/* 
함수명 : make_displayHTML
전달인자 : strikeNum, ballNum, inputNum
반환 값 : HTML 코드 내용;
기능 : strkeNum, ballNum 을 받아서 개수에 맞는 HTML 코드 생성
*/
function make_displayHTML(strikeNum, ballNum, inputNum) {
  if (strikeNum == 0 && ballNum == 0) {
    //out부분
    return `<div class="check-result">
    <div class="left">${inputNum[0]} ${inputNum[1]} ${inputNum[2]}</div>
    :
    <div class="right">
      <div class="out num-result">O</div>
    </div>
  </div>`;
  } else {
    //strike, ball 부분 :  3 STRIKE 시에도 생성됨
    return `<div class="check-result">
        <div class="left">${inputNum[0]} ${inputNum[1]} ${inputNum[2]}</div>
        :
        <div class="right">
          ${strikeNum}
          <div class="strike num-result">S</div>
          ${ballNum}
          <div class="ball num-result">B</div>
        </div>
      </div>`;
  }
}

/* 
함수명 : check_numbers
전달인자 : none;
반환 값 :  none;
기능 : input 에서 3자리 숫자 받기
        correct_num 과 비교하여 숫자 야구 게임 결과 계산
        해당 결과에 따른 페이지 출력
        성공 여부에 따른 페이지 출력
*/
function check_numbers() {
  let strikeNum = 0;
  let ballNum = 0;
  let inputNum = []; //사용자가 입력한 숫자 저장소
  const input = document.querySelector(".input-box");
  const input_list = input.children;

  //더이상 기회가 남아있지 않을 때 : 입력 불가.
  if (count == 0) return;

  inputNum[0] = input_list[0].value;
  inputNum[1] = input_list[1].value;
  inputNum[2] = input_list[2].value;

  /*입력이 모두 되었을 경우에만 실행 */
  if (!inputNum.includes("")) {
    //숫자 비교 부분
    for (let i = 0; i < 3; i++) {
      if (inputNum[i] == correct_num[i]) strikeNum++;
      else if (correct_num.includes(Number(inputNum[i]))) ballNum++;
    }

    //내부의 HTML 코드에 매 시도 마다 이어 붙이기
    display.innerHTML = display.innerHTML.concat(
      make_displayHTML(strikeNum, ballNum, inputNum)
    );

    /*어떠한 입력이든 버튼을 눌렀으면 칸을 비워준다.*/
    const box = document.querySelector(".input-box");
    const boxchild = box.children;
    boxchild[0].value = null;
    boxchild[1].value = null;
    boxchild[2].value = null;

    // 3 STRIKES!!!
    if (strikeNum == 3) {
      resultImg.src = "./success.png";
      count = 0; //성공 이후 입력 기회 없음.
      return;
    }

    //기회 모두 소진..
    count -= 1;
    if (count == 0) {
      resultImg.src = "./fail.png";
    }
  } else {
    alert("3개의 숫자를 모두 입력해주세욧!");
  }
}
