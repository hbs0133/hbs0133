/*------------------------Page Scroll-------------------------------------*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
		navigation: true,  //우측페이저유무
		navigationPosition: 'right', // left,right(default) 페이저 위치
		autoScrolling:true,
		scrollHorizontally: true,
		slidesNavigation: false, // 슬라이드섹션 네비게이션 유무
		slidesNavPosition: 'top', //네비게이션 위치 (top,bottom)
		navigationTooltips: ['firstSlide', 'secondSlide'], //navigation active시 타이틀 노출여부(hover포함)
		showActiveTooltip: false,  //네비게이션 hover(default:false)시 툴팁 표기
		fitToSection: true,
		fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
		keyboardScrolling: false, // 키보드 방향키로 스크롤 컨트롤 여부
		animateAnchor: true,
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'] // 섹션별 컬러
	});
});

/*--------------------------------- 마우스 이동 이벤트 -------------------------------------*/
let pointSize = $(".pointer").width();
$("body").mousemove(function(e){
  $(".pointer").css("top", e.pageY)
  $(".pointer").css("left", e.pageX)
});





/* ----------------------------------슬로건페이지 이미지바꿈 -------------------------------*/

// let img = document.querySelector(".SloganImg")

// function imgchange() {
// 	img.src= "/img/circle.png"
// };
// setTimeout(imgchange, 2000)


// $('.hipster').fadeOut(2000,function() {

// 	$('#developer').display = "";  

// 	$('.developer').fadeIn(2000);
// });

$(window).on("wheel", function (event){
  // deltaY obviously records vertical scroll
  
  // event.originalEvent → JavaScript 의 wheelEvent 객체
  // deltaY 값은 개인이 마우스 설정에서 설정한 휠 설정 값에 따라 다르다.
  // console.log(event.originalEvent.deltaY);

  if (event.originalEvent.deltaY > 0) {
    // wheeled down
		$('.Slogan-container').display = ""; 
		$('.Slogan-container').fadeIn(3000);
		$('.hipster').fadeOut(10000,function() {

			$('#developer').display = "";  
		
			$('.developer').fadeIn(3000);
		});
  }
});
/* ---------------------슬로건 텍스트 한글자씩 -------------------------------------*/

const SloganSpace = document.querySelector("e");
const texts = ["Hipster","힙스터"];
const speed = 500;
let e = 0;

const typing = async () => {  
  const text = texts[e].split("");
  
  while (text.length) {
    await wait(speed);
    SloganSpace.innerHTML += text.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const text = texts[e].split("");
  
  while (text.length) {
    await wait(speed);
    
    text.pop();
    SloganSpace.innerHTML = text.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  e = !texts[e+1] ? 0 : e + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


/* ---------------프로젝트페이지 애니메이션---------------*/
/* 버튼 오버*/
const ProjectBtn = document.querySelector(".ProjectBtn")
const ProjectBtnImg = document.querySelector(".ProjectBtn img")
const anibox = document.querySelector(".aniBox")
const ProjectBtnBox = document.querySelector(".ProjectBtnBox")
const Project = document.querySelector("figure")

ProjectBtnImg.src = "/img/button(final).png"

ProjectBtn.addEventListener("mouseenter", function(){
  ProjectBtnImg.src = "/img/buttonhover(final).png"
})
ProjectBtn.addEventListener("mouseleave", function(){
  ProjectBtnImg.src = "/img/button(final).png"
})


ProjectBtn.addEventListener("click", () => {
  function anidisplay(){
    ProjectBtnBox.style.display = "none"
    Project.style.display = "block"
  }
  anibox.style.transform = "translateX(0)"
  anibox.style.transform = "translateX(100%)"
  setTimeout(anidisplay, 2000)
})








/* -----------------------뮤직플레이어---------------------------------*/
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists) {
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(/img/작업물${i+1}.png)`;
  i++;  
};

/* 회전액션 */
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;

prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == 0) ? active = len : active--;
  activation(active, lists)
})

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == len) ? active = 0 : active++;
  activation(active, lists)
})

/* 가운데 있는 패널 활성화 */
let active = 0;

function activation(index, lists) {
  for(let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}
