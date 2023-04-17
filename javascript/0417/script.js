// const selectMenu = document.querySelector("#option")

// function displaySelect() {
//   let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText
//   alert(`[${selectedText}]를 선택했습니다!`)
// }

// selectMenu.onchange = displaySelect

// let btn = document.querySelector("#view")

// btn.onclick = function() {
//   document.querySelector("#detail").classList.toggle("hide")
//   if(document.querySelector("#detail").classList.contains("hide")){
//     btn.innerText = "상세설명 보기"
//   }else {
//     btn.innerText = "상세설명 닫기"
//   }
// }
// const num1 = document.querySelector("#num1")
// const num2 = document.querySelector("#num2")
// const btn  = document.querySelector("button")
// const resultbox = document.querySelector(".result")


// function getResult(num1,num2) {
//   let result = 0;
//   for (let i =1; i <= Math.max(num1,num2);i++){
//     if(num1 % i == 0 && num2 % i== 0){
//       result = i;
//     }
//   }return result
// }


// btn.onclick = function(){
//   resultbox.innerHTML = `${getResult(num1.value,num2.value)}`
// }

// const body = document.body;
// const result = document.querySelector("#result")

// body.addEventListener("keydown", function(e){
//   result.innerText = `code:${e.code},key:${e.key}`
// })
/*키보드 뜨;ㅣ우기*/



  // const btn = document.querySelector("#btn")
  // btn.addEventListener("click", function(){
  //   const word = document.querySelector("#word")
  //   let count = word.value.length
  //   const result = document.querySelector("#result")

  //   result.innerText = `${count}`
  // })

  // const box = document.querySelector("#box")

  // box.addEventListener("click", (e) => {
  //   alert(`이벤트발생위치: ${e.pageX},${e.pageY}`)
  // })


  // const body = document.body
  // const result = document.querySelector("#result")

  // body.addEventListener ("keydown", (e) => {
  //   result.innerText = `code : ${e.code},key: ${e.key}`
  // })









  // window.addEventListener("contextmenu", function(e){
  //   e.preventDefault()
  //   this.alert("오른쪽 버튼을 사용할수없습니다")
  // })
  // const container = document.querySelector("#container")
  // const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg", "pic-6.jpg"]
  // container.style.backgroundImage = `url(/img/${pics[0]})`

  // const arrows = document.querySelectorAll(".arrow")
  // let i = 0

  // arrows.forEach(function(e){
  //   e.addEventListener("click", (e) => {
  //     if(e.target.id === "left") {
  //       i--;
  //       if(i < 0){
  //         i = pics.length -1;
  //       }
  //     }else if (e.target.id === "right"){
  //       i++
  //       if(i >= pics.length) {
  //         i = 0;
  //       }
  //     }
  //     container.style.backgroundImage = `url(/img/${pics[i]})`
  //   })
  // })
  /*슬릭 돌리는 자바스크립트*/