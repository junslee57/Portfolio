*D.O.M 이란? Document Object Model Application Programming Interface 의 약어이다. 흔히 우리가 HTML에서 제어하는 div, span, input 등의 요소들을 Document Object Model 이라고 한다(DOM) 프로그램을 사용하기 위한 명령들의 집합을 Application Programming Interface 라고 한다.(API) 즉, DOM API는 HTML의 요소들을 JS에서 제어하기 위한 명령들의 집합을 뜻 한다.

*defer 이란? async 어트리뷰트와 마찬가지로 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 진행된다. 단, 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉, DOM 생성이 완료된 직후 DOMContentLoaded 이벤트가 발생 진행된다. 따라서 DOM 생성이 완료된 이후, 실행되어야 할 자바스크립트에 유용하다. defer 어트리뷰트는 IE10 이상에서 지원된다. IE6 ~ 9 에서도 지원되기는 하지만, 정상적으로 작동하지 않을 수 있다.

*HTML

*a 태그는? anchor 의 첫글자로서 '정박지', '닻' 이란 의미이다. 다른 문서로의 이동, 또는 같은 문서내의 이동을 위해 사용한다.

*href="#"을 쓰는 경우들: 웹페이지에서 'href="#" ' 모습을 볼 수 있는데 각 경우 별로 정리해보았다. 화면 최상단으로 이동을 목적으로 #을 쓴다면 다음 코드와 같이 window.scrollTo()를 쓰는게 더 좋은 방식이다.

*nav 태그 = navigator => 메뉴용

*fontawesome 사용하기 위해 개인 api

*Toggle button 창 줄였을 때 햄버거 버튼

*CSS

box-sizing: border-box; *테두리를 기준으로 크기를 정함

display: flex *박스를 옆으로 늘림 참조 사이트 https://studiomeal.com/archives/197

아이템들의 “사이(between)”에 균일한 간격을 만들어 줍니다. *space-between

background-color: transparent *배경색이 없습니다.

*JS