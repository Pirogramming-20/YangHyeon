//   기록 저장 ul, 시간 표시 div 태그
const record = document.getElementById("record-list");
const time = document.getElementById("time-display");

// 시간을 저장하는 배열
let second = [0, 0];
let milli_second = [0, 0];

//상단 버튼
const start_btn = document.getElementById("start-btn");
const stop_btn = document.getElementById("stop-btn");
const reset_btn = document.getElementById("reset-btn");

//하단 버튼
const all_check_btn = document.getElementById("checkAll-btn");

const trash_btn = document.getElementById("delete-btn");

//숫자 표시 함수
function display_time() {
  const time_html = `
  <span>${second[1]}${second[0]}</span>
  :
   <span>${milli_second[1]}${milli_second[0]}</span>
    `;

  time.innerHTML = time_html;
}

//숫자 기록 함수
function record_time() {
  const record_html = `         
 <li class="record-li">
  <div class="check-btn"></div>
  <div id="time">
    <span>${second[1]}${second[0]}</span>
    :
    <span>${milli_second[1]}${milli_second[0]}</span>
  </div>
</li>`;
  record.innerHTML = record.innerHTML.concat(record_html);
}

//초기값 출력
display_time();

//각 인터벌을 저장할 ID
let upsecond1;

//start 상태 체크
//이게 없으면 start 두번 누르면 stop 해도 멈추지 않는다.
let flag = 0;

let time_value = 0;

// 숫자 카운트 시작
start_btn.addEventListener("click", () => {
  if (flag == 0) {
    flag = 1;
    upsecond1 = setInterval(() => {
      time_value++;
      milli_second[0] = time_value % 10;
      milli_second[1] = Math.floor(time_value / 10) % 10;
      second[0] = Math.floor(time_value / 100) % 10;
      second[1] = Math.floor(time_value / 1000) % 10;
      display_time();
    }, 10);
  }
});

/*작동 중 숫자 카운트 일시정지*/
stop_btn.addEventListener("click", () => {
  record_time();
  clearInterval(upsecond1);
  flag = 0;
});

//숫자 카운트 초기화
reset_btn.addEventListener("click", () => {
  second[0] = second[1] = milli_second[0] = milli_second[1] = 0;
  clearInterval(upsecond1);
  display_time();
  flag = 0;
  time_value = 0;
});

/*개별 영역 */
/*하나라도 지워지면 전체 영역 해제*/
const ul = document.getElementById("record-list");
ul.addEventListener("click", (e) => {
  const check_btn = document.getElementsByClassName("check-btn");
  const cbtn = Array.from(check_btn);
  if (e.taget.tagName === "DIV") {
    e.target.classList.toggle("body-checked");
  }
});

// /* 전체 영역 체크 */
all_check_btn.addEventListener("click", (e) => {
  const check_btn = document.getElementsByClassName("check-btn");
  const cbtn = Array.from(check_btn);
  if (cbtn.length !== 0) {
    e.target.classList.toggle("all-checked");
    /*전체 체크 해제 및 선택*/

    cbtn.forEach((element) => {
      element.classList.toggle("body-checked");
    });
  }
});

// /*표시된 영역 삭제*/
trash_btn.addEventListener("click", () => {
  const checked_list = document.getElementsByClassName("body-checked");
  const cbtn = Array.from(checked_list);
  cbtn.forEach((element) => {
    console.log(element);
    record.removeChild(element.parentElement);
  });
});
