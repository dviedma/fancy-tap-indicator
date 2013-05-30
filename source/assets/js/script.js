var animationClass = 'tap-indicator-animation';

$('body').on('click', function(e) {

  var tapIndicator = document.getElementById('tap-indicator');

  $(tapIndicator).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
    $($tapIndicator).removeClass( animationClass );
  });

  $(tapIndicator).css( {'left': e.clientX, 'top': e.clientY} )
               .addClass( animationClass );

  var newOne = tapIndicator.cloneNode(true);
  tapIndicator.parentNode.replaceChild(newOne, tapIndicator);
});

