$(function() {
  $('#wrap #nav #nav_left a').click(function(e) {
    $.scrollTo(this.hash || 0, 850);
    e.preventDeafult();
  });
});