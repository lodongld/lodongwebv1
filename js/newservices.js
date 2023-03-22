
$(".services").hover(function(){
    $(this).removeClass('col-xxl-1');
    $(this).removeClass('col-lg-1');

    $(this).addClass('col-xxl-4');
    $(this).addClass('col-lg-4');
    $(this).addClass('mobile-expand');

    $(this).find('.tag').removeClass('d-bock').hide();
    $(this).find('.tag-desc').removeClass('d-none').hide();
    $(this).find('.tag-desc').delay('800').fadeIn();

  }, function() {
    $(this).removeClass('col-xxl-4');
    $(this).removeClass('col-lg-4');
    $(this).removeClass('mobile-expand');

    $(this).addClass('col-xxl-1');
    $(this).addClass('col-lg-1');

    $(this).find('.tag').addClass('d-bock').show();
    $(this).find('.tag-desc').addClass('d-none');
  });
