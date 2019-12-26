
// Scroll Functions

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: false
});



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(`.navbar`).removeClass(`navbar-light`);
            $(`.navbar`).addClass(`solid`);
            $(`.navbar`).addClass(`navbar-brandActive`);
            $(`.navbar`).removeClass(`trans`);
        }
        else if ($(document).scrollTop() < 50) {
            $(`.navbar`).removeClass(`solid`);
            $(`.navbar`).removeClass(`navbar-brandActive`);
            $(`.navbar`).addClass(`navbar-light`);
            $(`.navbar`).addClass(`trans`);
        }
    })
})

$(function() {
    var $mybook 		= $('#mybook');
    var $bttn_next		= $('#next_page_button');
    var $bttn_prev		= $('#prev_page_button');
    var $loading		= $('#loading');
    var $mybook_images	= $mybook.find('img');
    var cnt_images		= $mybook_images.length;
    var loaded			= 0;
     
    $mybook_images.each(function(){
        var $img 	= $(this);
        var source	= $img.attr('src');
        $('<img/>').load(function(){
            ++loaded;
            if(loaded == cnt_images){
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                $mybook.show().booklet({
                    name:               null,                            //  
                    width:              800,                             //  
                    height:             500,                             //   
                    speed:              600,                             //  
                    direction:          'LTR',                           //  
                                               //  
                    next:               $bttn_next,          			//  
                    prev:               $bttn_prev,          			//  
                                           
                });
                Cufon.refresh();
            }
        }).attr('src',source);
    });
    
});
