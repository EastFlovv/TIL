# 네카라쿠배 온라인 프론트엔드 TIL 문서

1차 결과물은 새 파일에 모아두고 2차 TIL을 작성합니다.

## 1차 결과물 링크
[1차 학습 결과물 살펴보기](https://goofy-pike-2843c1.netlify.app/)  
[1차 TIL README.md 보기](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/1%EC%B0%A8_TIL)

## 2차 각 일차별 TIL 상세보기(링크)

1. [2021.09.25[1일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.25%5B1%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.26[2일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/commit/eeff49d887ca6455880f7f867d831c6377fdb594)
1. [2021.09.27[3일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.27%5B3%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.28[4일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.28%5B4%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.29[5일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.29%5B5%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.30[6일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.30%5B6%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.01[7일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.01%5B7%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.02[8일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.02%5B8%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.03[9일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.03%5B9%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.04[10일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.04%5B10%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.05[11일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.05%5B11%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.06[12일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.06%5B12%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.07[13일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.07%5B13%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.08[14일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.08%5B14%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.09[15일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.10.09%5B15%EC%9D%BC%EC%B0%A8%5D)
1. [2021.10.10[16일차] TIL]()

## 2021.09.25 [1일차]

코딩 테스트 통과를 위한 본격적인 JavaScript 수업을 듣기 시작했다.  
기존에 알던 내용이지만 기초일수록 순간적으로 기억이 나지 않는 경우가 있어 차근차근 공부 해 기초를 확실히 다질 생각이다.  
네카라쿠배 2차로 진출하면서 기존 TIL파일을 수정해 쓰기 위해 1차 TIL파일을 폴더로 정리하고 기존 방식대로 2차 TIL을 작성한다.

## 공부한 내용

- 코딩테스트가 주로 어떤 문제를 내는지 그리고 어떤 플랫폼에서 연습할 수 있는지 알게되었다. 백준에서만 연습하던 나에게 큰 도움이 됬다.  
- 자바스크립트의 사용을 위해 Node.js가 무엇인지 배웠다. 
- 기본 입출력에 대해 배웠다. fs모듈을 통한 파일 읽기와 console.log()를 통한 출력을 했는데 강사님이 소개해주신 code runner확장자가 루트폴더가 아닌곳에서 실행한 fs모듈 사용시 경로 오류를 일으키는것 같다 이에 대한 해결 방법을 꽤 많이 찾아봤으나 C++에 대한 대답이 주류여서 해결하지 못하였다.  
따라서 입출력 실습의 확인은 node 'js파일명' 명령어를 통해 실행했다. 
- 변수와 상수에 차이를 공부했다. 
- 호이스팅에 대해 알게되었다. 예전에 JS를 처음배울때 변수 선언을 var로 하라고 배웠었는데 현재는 let을 권장하고 있다. 하지만 나는 let과 var를 둘다 사용하면서 큰 차이를 느끼지 못했는데 호이스팅에 대해 알게되면서 let을 권장하는 이유를 알게되었다.
- 자료형과 객체타입에 대해 알게 되었다.
- 객체타입을 공부하며 객체의 복사에 대해 알게 되었다. 특히 얕은 복사와 깊은 복사에 대해 공부하면서 깊은 복사의 JSON을 이용해 문자열을 다시 객체로 만드는 복사를 보고 꽤 놀랐다.
- 형변환에 대해 공부하였다.  
- 산술연산자, 대입연산자, 비교논리 연산자에 대해 공부하게 되었다.  
- scope에 대해 배웠다. scope는 JS를 공부하면서 처음 접하게 되었는데 실제로 이것을 사용해본적이 없어 상당히 흥미롭게 보며 배웠다.
- 조건문 if와 switch를 공부했다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '강의소개' ~ '17. 연습문제' 

## 2021.09.26 [2일차]

오늘도 JavaScript기본문법을 공부했다.  
아는 내용도 있고 잘 사용하지 않아서 놓치고 있던 내용도 있었다.  
공부하던중 크게 놀란것이 배열이 Hash객체라는것이였다.  
아직 기초문법을 가르치는 단계라서 연습문제 난이도가 그렇게 어렵지는 않다.

## 공부한 내용

- 반복문 `for`와 `while`을 배웠다.
- 반복문을 제어하기 위한 `break`, `continue`, `Label`을 배웠다.  
- 함수의 정의와 함수의 선언과 호출에 대해 배웠다.  
- 자기 자신을 호출하는 재귀함수를 배웠다.  
- 함수의 매개변수로 전달되기 위한 함수는 콜백함수이다.  
- 콜백함수를 매개변수로 사용하느 함수는 고차함수이다.  
- `method`는 객체내의 함수이다.  
- Number타입의 속성과 메서드의 종류 그리고 그 사용법을 배웠다.
- String타입의 속성과 메서드의 종류 그리고 그 사용법을 배웠다
- 문자열을 가공하거나 변환하여 여러 값을 얻는 방법을 배웠다.
- 배열에 대해 배웠다. JS의 배열은 일반적인 연속성을 가진 dense array가 아닌 sparse array이다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '18. 반복문' ~ '30. Array' 

## 2021.09.27 [3일차]
어제에 이어 자바스크립트 문법을 공부해 기초문법과정을 끝냈다.  
Collection과 iterator속성 Map, Set은 생소한 개념이였지만 막상 익혀보니 그렇게 어렵지 않았다. 남은것은 연습문제 풀기이다.  
TIL제출 후에 연습문제를 풀기 시작해서 내일 마무리한뒤 수학과정까지 해야겠다.

## 공부한 내용

- 배열에 값을 추가/삭제하는 등의 배열 조작법을 익혔다. 배열을 반복문을 통해 사용할 수 있다.  
- 배열을 탐색하는 메서드들을 익혔다.  
- 고차함수 sort, map, find, filter등을 배웠다. 특히 sort의 문제점과 한계점을 극복하는 방법을 배웠다.
- 객체의 틀을 미리 만들어 두고 쉽게 새 객체를 만들수 있는 생성자를 배웠다.
- Collection에 대해 배웠다.
- Map은 key-value형태로 자료를 저장할 수 있는 Collection이다.
- Set은 value만 사용하여 자료를 저장하는 Collection이다.
- Built-in객체 Math를 통해 여러 수학 함수를 사용할 수 있다. 이를 통해 수를 더 쉽게 다룰 수 있다.
- Built-in객체 Date를 통해 날짜를 가져오고 삽입하는등 여러 함수를 사용할 수 있다. 이를 이용해 benchmark로 여러 모듈의 성능 측정을 할 수 있다.
- 다차원 배열에 대해 배웠다. 주로 사용하는 다차원 배열은 2차원 배열이다.
- 2중 for문을 통해 2차원 배열을 모두 탐색할 수 있다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '31. 배열조작' ~ '41. N차원 Array' 

## 2021.09.28 [4일차]

오늘은 자바스크립트 기본문법의 문제풀이를 했다.  
강사님의 도움없이 문제만 읽은 뒤 풀어냈다. 중간에 기억이 나지 않거나 헷깔리는 부분은 이전의 TIL을 보거나 인터넷 검색을 통해 해당 문법을 찾아내 풀었다.  
기초 문제라 그런지 논리적으로 어려운 문제는 없었다.  
복습 개념의 문제풀이 이다보니 새로 배운내용은 거의 없다.

## 공부한 내용
오늘 문제풀이는 사실상 복습에 가까운 학습이였다.
- 문자열은 덧셈으로도 문자열을 더할수 있다.
- 제 3의 변수를 이용해 두 변수의 내용을 바꿀 수 있다.
- break를 통해 무한 반복문을 제어할수있다.  
- 논리 연산자를 통해 보다 복잡한 조건문을 만들 수 있다.
- 메서드 사용 없이 제곱, 배열 뒤집기, 최대/최소값 구하기를 할 수 있다.
- 배열의 중복을 제거할 수 있다.
- `Date()`를 사용할 수 있다.
- 이중 배열을 탐색할 수 있다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '42. 기본문제풀이(가이드)' ~ '62. 기본문제풀이(종합) 2차원배열의 곱셈의 합' 

## 2021.09.29 [5일차]

오늘은 코딩을 하기위해 필요한 수학개념에 대해 알게되었다.  
고등학교때 잠깐 보고 지나간 순열과 조합도 다시 공부하게 되었고 재귀를 이용한 점화식의 사용을 할 수 있게 되었다.  
빅오 표기법의 경우 원래 알고는 있었지만 이번 강의를 통해 좀 더 쉽게 이해하게 됬다.
그 외에는 모두 문제풀이였는데 바로 해답을 보지않고 문제를 풀려고 하다보니 시간이 오래걸려 목표한 수학단원 끝내기엔 실패했다.

## 공부한 내용

- 빅오표기법에 대해 공부했다.  
시간복잡도는 낮을 수록 좋다. n^2이상의 복잡도는 사용하지 않는것이 좋다.
- 순열과 조합을 통해 경우의 수를 쉽게 구할수 있게 되었다.
- 재귀를 이용한 점화식으로 비슷한 작업의 반복을 시간 복잡도를 높이지 않고 진행할 수 있다.
- 자바스크립트의 특수한 문법인 구조분해 할당에 대해 알게되었다.  
강의 진행중에 이해가 되지 않는 코드여서 직접 찾아보았다.
- 실전 문제 풀이를 진행하며 삼항연산자를 많이 연습할 수 있었다. 
- `repeat()`메서드에 대해 알게되었다. 코드 최적화가 중요하다는것을 알게되었다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 수학 '1. Overview' ~ '16. 실전 문제 풀이(기본)' 직사각형 별찍기

## 2021.09.30 [6일차]

오늘은 정기테스트를 보는 날이여서 오전에 기존문제를 다시한번 풀어보고 그후에 나머지 진도를 나갔다.  
실전 문제풀이의 경우 나와 같은 코드로 푸는 경우도 있지만 강사님의 풀이가 더욱 간결하게 될수록 살력의 차이를 느끼고 있다.  
단순히 함수를 사용할줄 아는것 보다 어떻게 사용하는가가 더 중요하게 느껴진다.  
그 이후에 배열 문제를 풀면서 점점 단순화된 코드를 만들수 있게되면서 실력이 늘어감을 느끼고 있다.  
다음주 화요일까지 내야할 과제의 주제를 잡기가 너무 힘들다. 하루빨리 방법을 찾아야겠다.    
아직까지의 전체적인 문제풀이는 대부분 배열을 이용한 문제가 대부분인것 같다.  
배열의 여러 메서드를 사용해보고 그 이해를 확실히 하므로써 다음 개념을 익힐때 이러한 문제로 발목을 잡히면 안될것 같다.

## 공부한 내용

- map()함수를 더욱 많이 사용할 수 있게 되었다. 이전까지 생소해서 잘 손이 가지 않았던 메서드이지만 앞으로 이런 메서드를 적극적으로 사용하기위해 시도해야겠다.
- filter()메서드를 통해 배열에서 원하는 값만 남길수 있다. 별도의 데이터 조작없이 원하는 조건에 따라 값을 남기기 위해선 이쪽이 더 효율적인것 같다.
- Math.abs()함수와 Math.min()/max()를 직접 사용하므로써 사용법을 몸에 익히게 되었다. 더욱이 스프레드 연산자를 통해 배열의 값을 반복문없이 넣을수 있게되었다.
- sort가 고차함수라는걸 알게되면서 sort()를 통해 수를 손쉽게 정렬할수 있게 되었다. 
- repeat()를 실제로 사용해봄으로써 다음에 쉽게 사용할 수 있을것 같다.  

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 수학 '실전문제풀이(기본)-두 정수 사이의 합' ~ 자료구조 '7. 배열문제 풀이 나무그리기'

## 2021.10.01 [7일차]

오늘은 어제 마무리하지 못한 배열 문제풀이와 백준의 수학문제를 풀어 복습을 진행했다.  
프로그래머스에서 문제를 풀고 싶었는데 주제별 찾기가 없는것 같아 백준으로 복습했다.  
오늘 푼 문제는 대개 강사님과 나의 풀이가 같아 내가 잘 풀고있다는것을 알아 좋았다.  
문제는 배열 마지막 문제였는데 머리속으론 어떻게 해야할지 알고 있으나 막상 코드로 옮겨 만들려고 하니 맘처럼 되지 않아 꽤나 힘든 시간을 보냈다.  
결국 강사님의 코드를 보고 따라하여 문제를 풀었지만 스스로 풀지 못했다는것이 너무 아쉽다.  
그후로 백준 문제를 풀었는데 백준문제는 보기보다 문제를 푸는데 소요되는 시간측정에도 신경을 써야하는 문제가 종종나와 최적화에 중점을 두면서 풀었다.  
실제로 몇문제는 시간초과가 나와 다시풀어야만 했다.  

문제풀이에 시간이 생각보다 오래걸려 작성한 내용이 많이 부실하게 느껴진다.  
어떻게 해야 이러한 코딩테스트 문제를 빠르고 쉽게 풀 수 있을지 고민해봐야 할것같다.

## 공부한 내용
- 시간복잡도를 줄이기 위해 이중 for문처럼 보이는 문제도 일반 for문으로 고칠수 있다면 고쳐야한다.
- `fill()`함수를 통한 이중 for문을 만들땐 두 새 `Array()`사이에 `.map()`함수를 통해 만들어야한다.
- % 와 / 연산을 통해 수의 각 자리수를 구할수 있다.
- 재귀 함수를 사용하여 반복적인 규칙을 가진 문제를 해결 할 수 있다. (백준 2775)
- BigInt를 사용해 큰 수를 처리 할 수 있다. 이때 `toString()`을 하게되면 뒤에 붙은 n이 사라진다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '8.Two Sum' ~ 자료구조 '12. 달팽이 만들기' + 백준 문제풀이

## 2021.10.02 [8일차]

오늘은 자료구조중 연결리스트에 대해 공부했다.  
연결리스트란 각각의 노드 객체가 다음 노드의 정보를 담고있어 순차적으로 연결된 자료구조이다.  
연결리스트의 종류로는 일반, 이중, 원형 연결리스트가 있는데 그중 오늘은 일반 연결리스트와 이중 연결리스트의 공부를 진행했다.  
이중 연결리스트의 경우 그 모양이 마치 블록체인과 비슷한 것 같았다.  
코드를 따라하면서도 이해가 되지 않는 부분이 많이 강의를 여러번 돌려보며 봐야했다.  
특히 현재 이중연결리스트의 insert()에서 몇가지 문제를 겪고있다.

## 공부한 내용
- 자바스크립트는 prototype을 통해 객체를 복사한다.
- 연결리스트는 data와 다음 객체를 향한 pointer를 가진 노드들의 연결형태이다.
- 연결리스트는 일반 연결리스트, 이중연결리스트, 원형연결리스트가 있다.
- 생성자로 연결리스트의 선언, 노드 선언을 할 수 있다.
- '생성자명.prototpye.메서드명'에 함수를 선언해 메서드를 생성 할 수 있다.
- 연결리스트의 연결 자체는 마치 제3의 변수를 이용한 두수의 위치 바꾸기와 비슷하다.
- 연결리스트의 삭제는 이전 연결리스트의 포인터를 삭제하고자 하는 연결리스트가 가리키는 노드에 연결하면 된다.
- 이중 연결리스트는 연결리스트가 일방향으로만 참조하는것과 다르게 이전의 노드도 참조한다.
- 따라서 이중연결리스트는 노드의 삽입 삭제시 두개의 포인터를 조작해야 한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '13. 프로토 타입' ~ 자료구조 '23. 이중 연결리스트 구현하기'(진행중)

## 2021.10.03 [9일차]

오늘은 어제 하던 연결리스트를 이어서 공부했다.  
일반 연결리스트 까지는 이해하기 쉬웠으나 이중연결리스트와 원형 연결리스트가 조금 까다로웠다.  
특히 원형 연결리스트는 순환하는 형태임을 알고 있는데 자꾸 사소한 부분에서 노드의 조건이나 변수를 잘못적어 실행되지 않는 코드를 만들어 버리고서는 한참을 고치는데 소비하곤 했다.  
아직 연결리스트의 사용이 익숙치 않은 탓 인것 같다.  
내일은 스택과 큐를 마무리하고 연결리스트, 스택 큐와 관련된 여러문제를 풀어 익숙해져야겠다.

## 공부한 내용

- 이중 연결리스트는 노드가 이전 노드와 다음 노드의 주소를 모두 가지는 형태의 양방향 연결 노드이다.  
- 이중연결리스트의 노드의 추가시 양방향의 연결을 고려하여 연결해야 한다.  
- 이중연결리스트의 노드 삭제시 이전 노드의 다음 노드 주소를 삭제하는 노드의 다음 노드 주소로 연결해주어야 한다. 반대로 삭제 노드의 다음노드의 이전 노드주소를 삭제노드의 이전 노드의 주소로 할당해주어야 한다.
- 연결리스트에서 참조를 잃은 노드는 가비지 콜렉터에 의해 자동으로 삭제된다.
- 원형 연결리스트는 마지막 노드가 다음노드로 연결리스트의 head로 지정된 노드를 가리키는 순환형 연결리스트이다.
- 원형 연결리스트의 여러 조건을 설정 할때 끝노드를 지칭할떈 다음노드를 null이 아닌 연결리스트의 head를 지칭하여 조건을 만들어야한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '23. 이중 연결리스트 구현하기' ~ 자료구조 '31. 연결리스트 문제풀이-대표선출'

## 2021.10.04 [10일차]

스태과 큐에 대해 배웠다.  
스택과 큐는 자바스크립트의 배열을 중심으로 다룰 수 있어 보기보다 익히기는 쉬웠다.  
다만 스택과 큐를 이용한 문제풀이에선 제한된 스텍과 큐의 움직임을 이용해 문제를 풀려고 하다보니 어려움이 많았다.  
내일은 스택과 큐 문제를 풀어보고 과제를 마무리 하여 제출해야겠다.  

## 공부한 내용

- 스택에 대해 배웠다.  
- 스택은 선입후출의 방식을 가진 자료 구조이다.
- 뒤로가기, Ctrl+Z, 괄호검사 등에서 스택 자료구조를 활용한다.
- 스택의 자료구조는 제한적인 움직임을 제외하면 배열로 구현할 수 있어 새롭게 익힐만한 메서드는 딱히 없었다. 예약된 메서드가 아닌 주어진 개념을 배열로 만드는 것이기 떄문이다.
- 자료구조 큐에 대해 배웠다.
- 큐는 스택과 다르게 선입선출 구조를 가진 자료구조이다.
- 큐는 스택과 대부분의 메서드 구조를 공유한다.
- 큐는 스택과 다르게 큐 전체를 지우는 clear()메서드가 존재한다.
- 큐의 삽입/제거문을 최적화 할 경우 시간복잡도가 O(n)에서 O(1)로 줄어든다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '32. 스택' ~ 자료구조 '41. 큐 최적화'

## 2021.10.05 [11일차]
오늘은 스택 복습을 위해 백준에서 단계별 문제풀이 스택을 풀었다.  
총 5문제를 도전하였는데 올바르게 완성한줄 알았던 코드가 계속 시간초과나 틀렸다고 나와 상당히 힘들었다.  
더 많은 문제를 살펴보고 싶었는데 문제마다 뭔가 잘 안돼 계속 시도 해보는 와중에 시간이 너무 많이 흐르고 말았다.  
더 많은 문제를 풀고 싶은데 실력이 부족해 아직 효율이 나오지 않고 있다.
디버깅을 통해 값의 변화와 조건에 따른 분기를 모두 살펴보고 있으나 몇몇 문제는 여전히 해결하지 못하고 있다.


## 공부한 내용

- 스택문제 풀이를 도전해보았다.  
- 10828번은 명령어를 받아 스택을 구현하는 문제이다. switch문을 통해 구현하였는데 시간초과가 나왔다.  
제한시간이 0.5초여서 swith문이 문제인가 했으나 인터넷 검색에 따르면 switch문이 속도가 낮은 편이 아니라고 해 상당히 곤란을 겪고있다. (못푼문제 1)
- 10773번은 0이 아닌 수가 들어오면 그 수를 push하고 0이 들어오면 pop한다.  
그 후 스택에 남아있는 수를 모두 더해 출력한다.  
제한시간도 널널하고 상당히 풀기 쉬운 문제였다.
- 9012번은 괄호 검사 문제이다.  
괄호 검사 자체는 별로 어렵지 않았다 주어진 조건문에 따라 열린 괄호는 push 닫힌괄호가 나왔을때 pop한 값과 비교하여 쌍이 아니라면 break하여 틀린 예제임을 알린다.  
물론 모들 과정이 끝난 후 스태이 비어있는지 확인을 통해서도 올바른 괄호인지 검사해야한다.
- 1874번은 너무 복잡하게 풀어서 한참을 헤맨 문제이다.  
스택에 정수를 쌓는 방법을 너무 복잡하게 생각하여 숫자가 정렬된 배열을 생성후 인덱스 값을 따로주어 인덱스 값을 오르내리며 탐색하고 탐색값을 비교하여 스택에 넣는 방식을 썼는데  
분기해야할 조건이 너무 많고 사소한 오류들로 인해 코드가 길어지면서 도저히 손을 댈 수 없는 상태가 됬다.  
결국 모두 지우고 다시 풀어 풀어낼 수 있었다.
- 4949번은 대괄호와 소괄호를 동시에 검사하는 문제이다.  앞선 문제와 다르게 이 문제는 여러 시도를 했음에도 불구하고 아직까지 해결하지 못하고 있는데, 처음에는 시간초과로 인해 문제가 풀리지 않는줄 알았다.  
하지만 split을 통해 문자열을 줄이고 다시 해보니 vsCode에서는 답이 잘 나오는데 제출을 하면 계속 틀렸다고 한다.  
vsCode로 볼떈 정답이 나오니 정확한 원인을 모르고 있어 더욱 답답하다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 스택 문제 풀이

## 2021.10.06 [12일차]

오늘은 leetcode홈페이지로 가서 Stack과 연결리스트 문제를 풀었다.  
외국 사이트라 모두 영어로 되있는게 처음엔 좀 당황스러웠지만 그렇게 어려운 설명이 있지는 않았고 오히려 몇몇 문제의 경우 솔루션을 제공하기도 하고 본인이 직접 테스트케이스를 입력해 볼수 있는 등 아주 편리하고 다양한 정보를 제공해주는 코딩 연습사이트였다.  
스택을 통해 괄호찾기같은 기본문제를 비롯해 빗물받기와 같은 특이한 문제까지 풀어볼수 있었다.  
입출력이 까다롭고 문제가 적은 백준에 비해 훨씬 좋은 사이트 같다.

## 공부한 내용

- 2진수를 10진수로 바꿀때 지나치게 큰 2진수의 경우 오버플로우가 발생하여 값이 제대로 출력되지 않을수 있으니 string형태에서 변환해야한다.  
- 주어진 조건에 따라 스택과 연결리스트를 작성 할 수 있다.  
- 배열검사의 경우 균형이 맞지 않는 경우 굳이 특별한 조작을 하지않고 값을 push해버려 배열이 빈 배열이 되지 못하게 해 구별 할 수 있다.
- 배열의 높이에 따라 그 사이의 공간을 구하는 경우 이중 반복문을 사용시 시간이 너무 오래걸려 시간초과가 났다.  
따라서 O(n)의 시간복잡도를 가진 코드를 작성해 높이값을 두개의 변수로 컨트롤 해 구했다. (스택 42번)
- 스택의 경우 배열의 형태를 갖기에 커스텀 스택도 쉽게 제작가능
- 연결리스트의 경우 값을 이동 시켜야 할때 생각보다 많은 조작이 필요하다.  
매번 노드를 넣어 작성하려고 시도 했지만 지나치게 복잡해져 배열을 이용해 손쉽게 풀었다.(연결리스트 1472번)



## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 스택, 연결리스트 문제 풀이 (leetCode)


## 2021.10.07 [13일차]

오늘은 비선형 자료구조 공부를 시작했다.  
오랫만에 복습이 아닌 진도를 나가니 큐에 대한 이해가 떨어져 뒤로 돌아가 강의를 다시 봐야했다.  
우선 순위 큐는 큐의 값이 객체형태로 되어있고 이 객체 안에 우선순위를 뜻하는 값이 있어 이 값에 따라 내용을 배치하는 형태의 큐이다.  
원형 큐의 경우 배열이 시작과 끝이 정해져있지않고 (개념적으로, 물리적으론 정해져있다), head와 tail이라는 두 플래그를 사용해 순환하도록 하는 형태이다.  
데크는 배열의 앞, 뒤 모두 입출력이 가능한 형태의 자료구조인데 사실상 자바스크립트에서 사용하는 배열이 데크의 형태를 띄고 있는것 같다.  

## 공부한 내용

- 우선순위 큐는 우선순위를 가진 객체를 값으로 쓰는 큐이다. 우선순위에 따라 추가되는 값의 위치가 바뀐다.
- 우선순위 큐의 데이터 추가시 splice함수를 통해 두 객체 사이에 새로운 객체를 추가한다.
- 원형 큐의 경우 개념적을 순환하는 형태의 큐를 의미한다.
- 실제 원형큐는 메모리 상으론 원형이 아니다.  
- 원형큐를 사용하기 위해선 head와 tail 두개의 플래그를 사용하며 원형큐의 size를 통한 나머지 연산으로 head와 tail이 증가해도 전체 크기를 넘어가지 않게 한다.
- 데크는 배열의 입출력을 앞, 뒤 양쪽으로 할 수 있는 자료구조이다.
- 자바스크립트의 배열이 데크의 모양을 띄고있다. 구현하기는 매우 쉬운편이다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '1. 우선순위 큐' ~ '14. 큐, 데크의 문제풀이 - 카드 뽑기' 


## 2021.10.08 [14일차]

오늘은 어제 못푼 문제에 이어, 딕셔너리와 해시테이블에 대해 공부했다.  
특히 해시의 경우 매우 관심있던 분야인데 이해하기 힘들어서 공부하기 힘들었던 분야인데 설명을 잘 해주셔서 이해가 잘됬다.  
특히 시간을 적게 써야하는 경우에 이 해시를 할 줄 몰라 문제를 못푼경우가 많았다.  
충돌을 막기위한 여러 해시테이블도 배워서 이젠 해시문제가 자신있다.  
내일은 비선형 자료구조에서 공부해야 할 내용이 많다.  
주말이니 빡세게 달려야겠다.  

## 공부한 내용

- 딕셔너리를 통해 객체를 이용한 자료구조를 사용할 수 있다.  
- 해시테이블을 이용해 O(1)의 시간복잡도로 빠른 동작을 만들 수 있다. 단 공간은 낭비가 심할 수 있고, 충돌에 의해 데이터가 소실될 수 있다.
- djb2해시테이블, 선형조사법 해시테이블, 체이닝 해시테이블을 통해 충돌을 줄이거나 없앨 수 있다.
- djb2는 임의의 시드를 넣고 해시에 값을 더할떄 고정된 값을 곱해 만든다.
- 선형조사법은 중복되는 해시가 있을때 다음 배열의 위치로 값을 더한다.
- 체이닝 해시테이블은 중복되는 해시가 있을때 같은 배열의 위치에 연결리스트로 값들을 더한다.
- 다른 JS파일을 JS파일에 import할 수 있다.
- export, import하는 두 파일 모두 확장자를 .mjs로 바꿔야한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '15. 프린터 출력' ~ '37. 체이닝 해시테이블 구현하기(5)' 

## 2021.10.09 [15일차]

오늘은 트리에 대해 공부했다.  
트리를 이용한 구조 자체가 정렬에서도 꽤나 쓰이는것으로 알고 있는데 예전에 잠깐 배웠던 내용이였지만 역시나 오랫만에 보니 기억안나는것 투성이였다.  
자료구조의 강의가 상당히 양이 많은데 알고리즘 보다 예상 수업일수가 짧은것은 난이도의 문제이겠지만 내일정도면 자료구조 공부도 끝날것 같다.  
깜짝테스트는 잠시 바쁜일이 있어 제 시간에 오지 못해 못풀었지만 수업만큼은 열심히 들어 정규 테스트는 모두 좋은 성적을 받기위해 더 열심히 해야겠다.

## 공부한 내용

- 딕셔너리와 해시를 이용해 시간복잡도를 크게 줄일 수 있다.
- 이진트리의 개념에 대해 배웠다. 생긴것이 마치 이중 연결리스트 처럼 생겼다고 느껴졌다. 물론 이중 연결리스트 처럼 하위 요소가 상위요소로 탐색을 이어갈 순 없다.
- 따라서 하위 요소를 살펴보고 다시 상위 요소로 돌아올 수 있도록 재귀를 사용한다.  
- 이진 탐색 트리의 생김새에 따라 포화 이진트리, 완전 이진트리, 정 이진트리, 편향 이진트리, 균형 이진트리로 구분 할 수 있다.
- 이진 트리를 활용하여 탐색, 정렬등을 빠르게 수행 할 수 있다.
- 이진 트리의 순회 방법은 전위, 중위, 후위 순회와 층별 순회가 있다.
- 전, 중, 후위 순회는 코드의 순서만 다를 뿐 같은 코드를 사용하지만, 층별 순회는 큐를 사용하여 순회한다.
- 이진 탐색 트리를 활용하여 현재 노드를 기준으로 왼쪽에는 작은 값을 오른쪽엔 큰 값을 입력한다.
- 이진 탐색 트리를 사용하면 편향 이진트리가 이닌 이상 최소, 최댓값을 구하거나 특정 목표값을 찾을때 시간을 크게 줄일 수 있다.
- 이진 탐색 트리에서 값을 삭제할때 자식 노드의 수에 따라 삭제 방법이 다르다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '38. 딕셔너리, 해시테이블 문제풀이 - 출석체크' ~ '55. 이진 탐색 트리(4)' 

## 2021.10.10 [16일차]

오늘은 자바스크립트의 그래프 자료구조들에 대해 공부했다.  
그래프 자료구조는 별다른 상 하위 없이 노드들간의 간선을 통해 관계를 갖는 자료구이다.  
특히 이런 자료구조중 코딩 테스트의 단골문제인 DFS, BFS, 이진트리를 이용하는 Heap을 주력으로 공부했는데, 예전에는 어렵게 느껴졌던 요소들이 막상 알고보니 그렇게 어렵지 않게 느껴져 당황스러웠다.  
실전문제를 더 풀어서 특히 BFS, DFS는 완전히 내것으로 만들고 싶다.

## 공부한 내용
- 정점과 간선으로 구성된 그래프 자료구조에 대해 배웠다.  
- 그래프 자료구조는 방향그래프, 무방향 그래프를 비롯한 다양한 종류가 있다.
- 그래프는 인접행렬과, 인접리스트를 이용해 표현한다.
- DFS는 한 쪽 노드를 끝까지 파고들고 돌아오는 깊이 우선 탐색 기법이다.
- DFS는 스택과 재귀를 통해 구현 할 수 있으며 최단거리 탐색은 안될 수 있다.
- BFS는 큐와 스택을 이용해 구현하며 최단거리 탐색에 아주 요효하다.
- 깊이기 깊을 경우 BFS는 저장 공간이 아주 많이 필요 할 수 있다.
- Heap은 완전 이진트리로 구성된 자료구조이며 최대힙, 최소힙이 존재한다.
- 최소 힙은 root로 갈 수록 작은수가, 최대힙은 높은 수가 위치한다.
- 항상 완전 이진트리의 모습을 유지해야하는 힙의 경우 삽입 삭제등의 연산이후에 반드시 정렬 시퀸스를 실행해야한다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '56. 그래프' ~ '75. 힙(5)' 