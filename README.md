# loginFormProject

## layout

* 0. side라는 flex-grow가 1인 요소를 이용해서 flexbox를 구성했다.

## Loading

* 1.Loading page
   * 1-1. html
       * 1-1-1. DomContentLoaded까지 동작할 페이지를 구성한다. 기존에 side를 활용하여 레이아웃을 구성한다.
   * 1-2.  css
       * 1-2-1. fixed를 활용하여 뒷 배경을 만든다. 크기는 body를 모두 포함해야 하므로 100%
       * 1-2-2. background-image의 linear-gradient를 활용하여 (오른쪽 위로 아래 녹색, 위쪽 빨간색을 가진 것 제작) 크리스마스 느낌을 냄.
       * 1-2-3. z-index를 form보다 낮게 정해서 뒤로 가게 한다.
       * 1-2-4. form 설정
           * 1-2-4-1. keyframes를 이용해서 사용자지정 animation을 제작한다. linear-gradient 가 100%일 때 왼쪽 아래로 간다.
           * 1-2-4-2. form을 오른쪽 위에 있는 linear-gradient를 가로가 2배 확대 세로 1배 확대로 지정해놓는다.
           * 1-2-4-3. form의 animation을 지정하는데, 사용자지정 animation을 이용하여 3초 ease-in-out으로 무한히 돌리게 한다.

## header

* 2.Odin Logo
   * 1-1. 3vh*3vh의 크기로 logo를 맞춘다.

## main

* 3.Form-input
    * 3-1. appearance: none; 으로 인해서 기본 input 설정을 초기화 하고 js로 설정을 바꿔준다.
    * 3-2. hiddenLabel은 처음에는 display:none이지만 :placeholder-shown 이나 :focus일때 나오게 되면서 입력값 앞쪽에 표시되게 된다.
    * 3-3. *="Container"을 이용해서 Container가 뒤에 붙어 있는 모든 id들을 꺼내서 relative를 적용한다.
    * 3-4. scope
      * 3-4-1. 비밀번호가 표시되는 scope를 js를 이용해서 구현한다. DOM을 이용해 type을 password에서 text로 바꿔준다. mouse leave, mouse up하면 바로 돌아가야 한다.
      * 3-4-2. Array.from을 이용해서 scope 노드 리스트를 array로 바꿔서 forEach를 돌린다. mousedown, mouseup, mouseleave 이벤트를 만들어야 한다. 각각
* 4.Email
    * 4-1. email의 최초 메세지 (비어 있으면 안되는) 지정하고
    * 4-2. 입력 할때마다 validity들을 검사한다. 두가지 경우가 있다. 패턴을 맞추지 못한 경우, 적지 않은 경우
    * 4-3. 다 괜찮다면 사용자 지정 오류 메세지를 초기화해주는 코드가 있어야 한다.
* 5.Phone Number
    * 5-1. focus 시 text가 xxx-xxxx-xxxx로 변경 blur(focus의 반대) 시 text가 다시 원래로 변경
    * 5-2. 더할 때 번호를 맞춰서 "-"을 더한다.
    * 5-3. keydown이벤트로 하기 때문에 Backspace, Delete 키를 제외해야 -가 계속 써지면서 막히지 않는다.
    * 5-4. typeMismatch, valueMissing, patternMismatch 세가지 경우를 고려하여 다른 메세지를 출력해야 한다. 기본값은 valueMissing
* 6.Password
    * 6-1. password confirm 기능 js : password가 비어있거나 password와 password confirm과 다르다면 사용자 지정 (setCustomValidity(message)) 오류 메세지를 전송한다.
* 7.Submit button
* 8.pattern
  * 8-1. 정규표현식을 이용해서 input의 pattern을 정할 수 있다.