let isEnd = true;
let hublot = new fullpage ("#main",{
    scrollBar: true,
    onLeave:function(origin,destination,direction){ //origin:출발 구역, destination:목적지 구역, direction:스크롤하는 방향에 따라 up 또는 down
        pageNum = destination.index+1; 
    }, 
    afterLoad:function(){
        isEnd=true; //스크롤이 끝나고 나면 isEnd=true로 바뀜
    }
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS("bg", {
    "particles": {
      "number": {
        "value": 19,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  } //particles.json 파일을 갖다 붙인 것.
  );

let pageNum = 1;
//document.querySelector(".btns .btnDown").addEventListener("click");
$(".btns .btnDown").on("click",function(){ //다운 버튼 
    if(pageNum<6){
        if(isEnd){
        pageNum++;
        fullpage_api.moveTo(pageNum);
        isEnd=false;
    }}
    return false; //return false를 붙히면 기존에 있던 기능들이 없어진다.
});

$(".btns .btnUp").on("click",function(){ //업 버튼
    if(pageNum>1){
        if(isEnd){
        pageNum--;
        fullpage_api.moveTo(pageNum);
        isEnd=false;
}}
    return false;
});














