$(window).scroll(function() {

        if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
        {
            $('.opaque-navbar').addClass('opaque');
        } else {
            $('.opaque-navbar').removeClass('opaque');
        }

        $('#title-article').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("expandUp");
          }
        });

        $('#title-article-nosotros').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("expandUp");
          }
        });

        $('#title-article-servicios').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("expandUp");
          }
        });

        $('#animation-iconservice-uno').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("hatch");
          }
        });

        $('#animation-iconservice-dos').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("hatch");
          }
        });

        $('#animation-iconservice-tres').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+400) {
            $(this).addClass("hatch");
          }
        });

        $('#animation-iconservice-cuatro').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideRight");
          }
        });

        $('#animation-iconservice-cinco').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideLeft");
          }
        });
});