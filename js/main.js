jQuery(document).ready(function(){

    // Social block with buttons
    $(".social-buttons .tabs li").click(function () {
      if ($(this).hasClass('current')) {
          $(".social-buttons").animate({"right": 0}, 800);
          $('ul.tabs li').removeClass('current');
      } else {
          $(".social-buttons").animate({"right": 350}, 800);
          $('ul.tabs li').removeClass('current');
          $(this).addClass('current').siblings().removeClass('current').parents('.social-buttons').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
      }
        return false;
    });
    $('.social-buttons .box').append('<a class="close_btn" href="#">Close (x)</a>');
    $(".close_btn").click(function () {
        $(".social-buttons").animate({"right": 0}, 800);
        $('ul.tabs li').removeClass('current');
    });

});