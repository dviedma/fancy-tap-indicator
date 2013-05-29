var $tapIndicator = $('#tap-indicator'),
    animationClass = 'tap-indicator-animation';

$('body').on('click', function(e) {

  $tapIndicator.css( {'left': e.clientX, 'top': e.clientY} )
               .removeClass( animationClass );

  //Hack to force animation restart
  setTimeout(function(){
    $tapIndicator.addClass( animationClass );
  }, 0);

});

//Only Webkit
$tapIndicator.bind('webkitAnimationEnd', function(e) {
  $tapIndicator.removeClass( animationClass );
});
