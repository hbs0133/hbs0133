/*Page Scroll*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  // 무료 사용시 해당 라이센스 카피할 것(반드시 있어야함)
		navigation: true,  //우측페이저유무
		navigationPosition: 'right', // left,right(default) 페이저 위치
		autoScrolling:true,
		scrollHorizontally: true,
		slidesNavigation: true, // 슬라이드섹션 네비게이션 유무
		slidesNavPosition: 'bottom', //네비게이션 위치 (top,bottom)
		navigationTooltips: ['firstSlide', 'secondSlide'], //navigation active시 타이틀 노출여부(hover포함)
		showActiveTooltip: true,  //네비게이션 hover(default:false)시 툴팁 표기
		fitToSection: true,
		fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
		keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
		animateAnchor: true,
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'] // 섹션별 컬러
	});
});

/*마우스 이동 이벤트*/
let pointSize = $(".pointer").width();
$("body").mousemove(function(e){
  $(".pointer").css("top", e.pageY-pointSize)
  $(".pointer").css("left", e.pageX-pointSize)
});

/* 슬로건페이지 이미지바꿈 */

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
    // wheeled up
		$('.hipster').fadeOut(1000,function() {

			$('#developer').display = "";  
		
			$('.developer').fadeIn(5000);
		});
  }
});