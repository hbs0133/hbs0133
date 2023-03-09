$(function() {
  $('nav a').click(function(e) {
    $.scrollTo(this.hash || 0, 850);
    e.preventDeafult();
  });
});