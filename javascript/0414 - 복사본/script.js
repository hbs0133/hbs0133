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
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const btn  = document.querySelector("button")
const resultbox = document.querySelector(".result")


function getResult(num1,num2) {
  let result = 0;
  for (let i =1; i <= Math.max(num1.value,num2.value);i++){
    if(num1 % i == 0 && num2 % i== 0){
      result = i;
    }
  }return result
}


btn.onclick = function(){
  resultbox.innerHTML = `${getResult(num1.value,num2.value)}`
}
