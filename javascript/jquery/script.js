$(function(){
  $(".btn1").on({
    "mouseover": function(){
      $(".txt1")
      .css({
        "backgroundColor" : "yellow"
      });
    },
    "mouseout": function(){
      $(".txt1")
      .css({
        "background" : "none"
      })
    }
  });

$(".btn2").hover(function(){
  $(".txt2")
  .css({
    "backgroundColor" : "aqua"
  })
},function(){
  $(".txt2")
  .css({
    "background" : "none"
  })
}
)

})