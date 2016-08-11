$(function() {
    var $navBar = $("nav");
    $(window).scroll(function(){
    　　var scrollTop = $(this).scrollTop();
    　　var scrollHeight = $(document).height();
    　　var windowHeight = $(this).height();
    　　if(scrollTop > 0){
    　　　　$navBar.addClass('nav-scoll');
    　　}
        else {
            $navBar.removeClass('nav-scoll');
        }
    });
});
