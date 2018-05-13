jQuery("html,body").animate({
            scrollTop: jQuery("#footer").offset().top
        }, jQuery("#footer").offset().top / 2);
setTimeout(function(){
    jQuery('#footer').click();
},jQuery("#footer").offset().top / 2);
