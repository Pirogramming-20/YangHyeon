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
const check_btn = document.getElementsByClassName("check-btn");
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
 <li>
  <div class="check-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
      class=""
    >
      <path
        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      />
    </svg>
  </div>
  <div id="time">
    <span>${second[1]}${second[0]}</span>
    :
    <span>${milli_second[1]}${milli_second[0]}</span>
  </div>
</li>`;
  record.innerHTML = record.innerHTML.concat(record_html);
}

//각 인터벌을 저장할 ID
let upsecond1;
let upsecond2;
let upmillisecond1;
let upmillisecond2;

// 숫자 카운트 시작
start_btn.addEventListener("click", () => {
  upsecond1 = setInterval(() => {
    milli_second[0]++;
    if (milli_second[0] === 10) milli_second[0] = 0;
    display_time();
  }, 10);
  upsecond2 = setInterval(() => {
    milli_second[1]++;
    if (milli_second[1] === 10) milli_second[1] = 0;
  }, 100);

  upmillisecond1 = setInterval(() => {
    second[0]++;
    if (second[0] === 10) second[0] = 0;
  }, 1000);

  upmillisecond2 = setInterval(() => {
    second[1]++;
    if (second[1] === 10) second[1] = 0;
  }, 10000);
});

/*작동 중 숫자 카운트 일시정지*/
stop_btn.addEventListener("click", () => {
  record_time();
  clearInterval(upsecond1);
  clearInterval(upsecond2);
  clearInterval(upmillisecond1);
  clearInterval(upmillisecond2);
});

//숫자 카운트 초기화
reset_btn.addEventListener("click", () => {
  second[0] = second[1] = milli_second[0] = milli_second[1] = 0;
  clearInterval(upsecond1);
  clearInterval(upsecond2);
  clearInterval(upmillisecond1);
  clearInterval(upmillisecond2);
  display_time();
});

// /*체크 박스 표시*/
// check_btn.addEventListener("click", () => {});
// /* 전체 영역 체크 */
// all_check_btn.addEventListener("click", () => {});
// /*표시된 영역 삭제*/
// trash_btn.addEventListener("click", () => {});

//초기값 출력
display_time();
