const {add} = require("./math.js")

// 변수 선언
var num = 42;
var name = "TOM";
let isstudent = true;

console.log(add(num, num));

var num = 5;    // 중복 선언을 해도 오류가 안뜸

//let num = 42;     // let으로 하면 중복 오류 뜸
//let num = 5;

// 배열
let color = ["red", "yellow", "blue"];

// 객체
let person = {name : "Alice", age : 30};

// 함수
function greet(name)
{
    console.log("Hello" + name + "!");
}

// 함수 호출
greet(person.name);

// 조건문
if(num > 30)
{
    console.log("Number is greater than 30")
}
else
{
    console.log("Number is lower than 30")
}

// 반복문
for(var i = 0; i < 5; i++)
{
    console.log(i);
}

// 비동기 콜백
setTimeout(() => {
    console.log("Delay Message 1")
},1000);            // 1초
setTimeout(() => {
    console.log("Delay Message 2")
},750);            // 0.75초
setTimeout(() => {
    console.log("Delay Message 3")
},500);            // 0.5초
setTimeout(() => {
    console.log("Delay Message 4")
},250);            // 0.25초
