$(document).ready(function() {
  $('#hello').click(function() {
    alert('Hello world.');
  });

  $('.accordion').accordion({ active: 2});
  $('#sortable').sortable();
  $('#sortable').disableSelection();

  $('#hide-me').click(function() {
    $('p').hide();
  });

  $('#show-me').click(function() {
    $('p').show();
  });

  $('.move-right').click(function() {
    $('.blue-div').animate({ "left": "+=50px" }, "slow" );
  });

  $('.move-left').click(function() {
    $('.blue-div').animate({ "left": "-=50px" }, "slow" );
  });

  $('#change-div').click(function() {
    $('.blue-div').animate({ width: '500px' }, 1000).css('background', 'green');
  });


});
