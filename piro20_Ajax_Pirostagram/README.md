1. 유저 로그인, 로그아웃, 회원가입
2. 게시글 올리기
   (
3. 좋아요
4. 댓글 추가 (댓글은 상세페이지에서만 구현, 로그인 안하면 작성 불가)
5. 댓글 삭제 (댓글 작성자만 삭제 가능)
   )
6. 로그인 안하면 글 작성 불가, 댓글 작성 불가

7. 좋아요.

- 유저가 로그인해서 main 에 들어오게 된다면, 자신이 이미 눌렀던 좋아요 버튼은 색칠이 되어있고, 아직 안누른 게시글의 좋아요 버튼은 색칠이 되어있지 않다.

아쉬운점 :
Like 객체의 속성 중 Liker 가 아닌 Writer 라고 쓴 것이 조금 아쉽지만
수정해야한다면 한두 부분 수정해야하는 것이 아니라...

또 아쉬운 점은 중간에 통신 오류가 발생한다면, Post 모델의 좋아요 수는 올라가지 않았는데, Like 모델이 새로 하나가 생성이 될 수 있다는 것이다. 이를 트랜잭션 처리를 통해 관리해준다면, DB의 Consistency 를 보장할 수 있을 것이다.

혹은 Like 모델 중 post 가 해당 post 객체 인것들만 개수를 세어서 보내주는 방법도 있겠지만, 이러한 방식은 매번 좋아요 숫자를 표시해야 할 때마다 조인 연산을 해야하므로 프로그램이 조금 무거워질 수도 있을 것이라고 생각한다.

댓글은 해당 댓글 작성자만 삭제할 수 있게 구현하였지만,
게시글은 같은 방법으로 진행하면 되지만 구현하지는 않았다. (추후에 가능성)
