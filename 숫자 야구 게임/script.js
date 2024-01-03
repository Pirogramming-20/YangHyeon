let count = 9;

/*게임 초기화 세팅 함수*/
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
  const for_empty_result = document.querySelector(".result-display");
  for_empty_result.value = null;

  //초기 세팅 전달
  return rand_num;
}

let correct_num = init_game();

console.log(correct_num);

/*숫자 비교 함수*/
function check_numbers() {
  let strikeNum = 0;
  let ballNum = 0;
  let inputNum = []; //사용자가 입력한 숫자 저장소
  const input = document.querySelector(".input-box");
  const input_list = input.children;

  inputNum[0] = input_list[0].value;
  inputNum[1] = input_list[1].value;
  inputNum[2] = input_list[2].value;

  console.log(count);
  console.log(inputNum);

  /*입력이 모두 되었을 경우에만 실행 */
  if (!inputNum.includes("")) {
    //숫자 비교 부분
    for (let i = 0; i < 3; i++) {
      if (inputNum[i] == correct_num[i]) strikeNum++;
      else if (correct_num.includes(inputNum[i])) ballNum++;
    }

    //out부분
    if (strikeNum == 0 && ballNum == 0) {
      console.log("OUT");
    } else {
      //strike, ball 부분 :  3 STRIKE 시에도 출력함.
    }

    // 3 STRIKES!!!
    if (strikeNum == 3) {
      //성공 출력부분
      console.log("3 STRIKE");
      return;
    }

    //기회 모두 소진..
    count -= 1;
    if (count == 0) {
      /*실패 출력 부분*/
      /*버튼 락 부분*/
    }
  } else {
    alert("3개의 숫자를 모두 입력해주세욧!");
  }

  /*어떠한 입력이든 버튼을 눌렀으면 칸을 비워준다.*/
  const box = document.querySelector(".input-box");
  const boxchild = box.children;
  boxchild[0].value = null;
  boxchild[1].value = null;
  boxchild[2].value = null;
}
