// let num = parseInt(prompt("숫자를 입력하세요"))
// let isPrime;

// if(num === 1) {
//   document.write(`${num}은 소수,합성수가 아닙니다`)
// } else if (num === 2) {
//   isPrime =true
// } else {
//   for (let i =2; i <num; i++) {
//     if (num % i ===0) {
//       isPrime = false;
//       break
//     } else{
//       isPrime = true
//     }
//   }
// }

// if(isPrime) {
//   document.write(`${num}는 소수입니다`)
// }else{
//   document.write(`${num}는 소수아닙니다`)
// }

// const num = ["1","3","5","7","9","11","13","15","17","19"]

// for (let i = 0; i < num.length; i++){
//   if(num[i] > 10) {
//     document.write(`${num[i]}<br/>`)
//   }
// }


// function multiple(a,b = 5,c = 10) {
//   return a*b +c
// }
// console.log(multiple(5,10,20))
// console.log(multiple(5,10))
// console.log(multiple(5))

// function calcSum(n) {
//   let sum = 0
//   for (let i=1;i <=n;i++){
//     sum +=i
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다`)
// } 

// calcSum(10)

// function addSum(n) {
//   var sum = 0;
//   for(var i = 1;i<=n;i++) {
//     sum+=i;
//   }
//   return sum;
// }

// var num=3;
// console.log(`1부터${num}을더하면${addSum(num)}`);


// (function(a,b){
//   let sum = a+b
//   console.log(`함수실행결과 : ${sum}`);
// }(100,200))
// const btn = document.querySelector("button")

// function display() {
//   alert("클릭했습니다.")
// }
// btn.addEventListener("click",display)

// btn.addEventListener("click", () => {
//   alert("클릭했습니다")
// })

// let num1 = parseInt(prompt("숫자입력"));
// let num2 = parseInt(prompt("숫자입력"));

// result = (num1, num2) => {
//   return num1 * num2
// };

// alert("두수의곱은"+result(num1,num2)+"입니다")



// function getdata(callback) {
//   let userName = prompt("이름을 입력하세요")
//   let userage = parseInt(prompt("나이를 입력하세요"))
//   callback(userName, userage)
// }

// function showdata(name,age) {
//   alert(`안녕하세요 ${name}님 나이가${age}살이군요`)
// }

// getdata(showdata)

/*이거는 이해르을 못하겠네*/
// let num = parseInt(prompt("숫자입력"))


// if(!isNaN(num)) {
//   positive(num)
// }

// function positive(num) {
//   if (num > 0){
//     alert("양수다")
//   }else if (num < 0){
//     alert("음수다")
//   }else
//     {"0이다"}
// }

// positive(num)

// let num1 = parseInt(prompt("숫자입력"))
// let num2 = parseInt(prompt("숫자입력"))

// function getResult() {
//   let result = 0;
//   for (let i =1; i <= num1+num2;i++){
//     if(num1 % i == 0 && num2 % i== 0){
//       result = i;
//     }
//   }return result
// }
// console.log(getResult())
/*최대값만 가져오는것이 신기하고만 */

// const userName = document.querySelector("#desc p")
// const profileImg = document.querySelector("#profile img")

// userName.onclick=() => userName.innerHTML = "이름 : <b>로고</b>"
// profileImg.onclick = ()=> profileImg.src = "/img/logo.png" 
/*클릭하면 바뀌기*/

// const title = document.querySelector("#title");
// title.onclick = () => {
//   title.style.backgroundColor = "black"
//   title.style.color = "#fff"
// }

// const title = document.querySelector("#title");

// title.onclick = () => {
//   if(!title.classList.contains("clicked")) {
//     title.classList.add("clicked")
//   }else {
//     title.classList.remove("clicked")
//   } 
// }
// title.onclick = () => {
//   title.classList.toggle("clicked")
// }
// const btn = document.querySelector("button")

// btn.onclick = function(){
//   document.querySelector("body").classList.toggle("mode")
//   if(document.querySelector("body").classList.contains("mode")){
//     btn.innerHTML="Night"
//   }else {
//     btn.innerHTML="Day"
//   }
// }

// const btn = document.querySelector("button");

// btn.onclick = () => {
//   document.querySelector("body").classList.toggle("dark")
//   document.querySelector("input").classList.toggle("dark")
//   document.querySelector("select").classList.toggle("dark")
//   document.querySelector("button").classList.toggle("dark")

//   if(document.querySelector("body").classList.contains("dark")){
//     btn.innerText="라이트모드로 바꾸기"
//   }else{
//     btn.innerText="다크모드로 바꾸기"
//   };
// };

// const selectMenu = document.querySelector("#subject");
// const userName = document.querySelector("#name");

// function optionAlert() {
//   let optionText = selectMenu.options[selectMenu.selectedIndex].innerText
//   alert(`${userName.value}님은 ${optionText} 선택`)
// }

// selectMenu.onchange = optionAlert;

/*왜 가로를 쳐야하는지 이거는 모르것다 */

// const elements = document.querySelectorAll("*")

// for(let el of elements){
//   el.addEventListener("click", e=> {
//     console.log(`event.Target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}` )
//   })
// }

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
nav.classList.toggle("active")
btn.classList.toggle('active')
});