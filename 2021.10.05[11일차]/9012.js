// 괄호 출처다국어
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	95833	42461	30617	43.090%
// 문제
// 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 

// 여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 

// 입력
// 입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다. 

// 출력
// 출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다. 

// 예제 입력 1 
// 6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(
// 예제 출력 1 
// NO
// NO
// YES
// NO
// YES
// NO
// 예제 입력 2 
// 3
// ((
// ))
// ())(()
// 예제 출력 2 
// NO
// NO
// NO

const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = input.shift();
let arr = [];
for (let i = 0; i < T; i++) {
  let str = input[i].split('');
  let result = "YES";
  arr = [];
  
  for (let j = 0; j < str.length; j++) {
    mark = str[j];
    if(mark == '('){ //열린 괄호면 push
      arr.push(mark);
    }else if(mark == ')'){ // 닫힌괄호
      if(arr[arr.length-1] != "(") { // 열린괄호 없으면 NO
        result = 'NO';
        break;
      }else{ // 아니라면
        arr.pop();
      };
    };
  }

  if(arr.length != 0 && result == 'YES'){ // 빈배열이 아니면 ( 이 남아있으므로 NO
    result = 'NO';
  }

  console.log(result)
}

