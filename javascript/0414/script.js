// const selectMenu = document.querySelector("#option")

// function displaySelect() {
//   let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText
//   alert(`[${selectedText}]를 선택했습니다!`)
// }

// selectMenu.onchange = displaySelect

let btn = document.querySelector("#view")

btn.onclick = function() {
  document.querySelector("#detail").classList.toggle("hide")
  if(document.querySelector("#detail").classList.contains("hide")){
    btn.innerText = "상세설명 보기"
  }else {
    btn.innerText = "상세설명 닫기"
  }
}