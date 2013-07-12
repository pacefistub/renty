$.fn.dropMenu = function(){

    var selectorArray = new Array();
    $('.btn_ul_wrap').each(function(){
        $(this).parent().mousemove(function(){
            $(this).addClass("hover");
        }).mouseout(function(){
                var text = $(this).text();
                $(this).removeClass("hover");
        });
        $(this).find('li').click(function(){
            var selector = $(this).text();
            if($(this).parents().children().hasClass('select_block_check')){
                $(this).toggleClass('check');
                var indexOf = selectorArray.indexOf(selector);
                if (indexOf === -1){
                    selectorArray.push(selector);
                }else{
                    selectorArray.splice(indexOf,1);
                }
                selectorArray.sort();
                 $('.select_block_check').text(selectorArray);

            }else{
                $(this).addClass('check').siblings().removeClass('check');
                $(this).parents().eq(2).find('.select_block').text(selector);

                var placementCheck = $(this).hasClass('check');

                if($(this).text() === 'Комнати'){
                    $('.btn_amt').fadeIn().removeClass('dn');
                }else if($(this).text() === 'Квартиру'){
                    $('.btn_room_square').fadeIn().removeClass('dn');
                }else{
                    $(this).hasClass(function(){
                        if("check"){
                            $('.btn_amt').removeClass('dn')
                        }else{
                            $('.btn_amt').addClass('dn')
                        }
                    });

                $('.btn_room_square').addClass('dn');
                }
            }


        });

    });

    return $(this);
}

$(document).ready(function () {
    $('.btn_group').find('.btn').click(function () {
        $(this)
            .toggleClass('active_btn')
            .not('.check_box').not('.dropdown-toggle')
            .parent()
            .siblings()
            .find('.btn')
            .removeClass('active_btn');
    });
    $('.dropdown-toggle').click(function () {
        $(this).parent().find('.check_box_wrap').toggleClass('displ_block');
    });

                                                  /* ======= price ======= */
    $('.dropdown-menu > li > a').click(function () {
        var currency = $(this).text();
        var nbu = ['7.99', '10.48', 1, '0.28'];
        var number = $(this).parent().parent().find('a').index(this);
        var price_uk = $(this).parent().parent().siblings().find('.js__price').data('price_ap');
        $(this).parent().parent().siblings().find('.js__price').text((price_uk / nbu[number]).toFixed(2));
        $(this).parent().parent().siblings().find('.js__currency').text(currency);
    });

    $('.dropdown-menu a').click(function () {
        $(this).parents('.btn-group').find('.selected-value').html($(this).html());
    });
                                                 /* ======= price ======= END*/

                                           /* ======= background_header_img ======= */
    var bgImage = $('.background-image');
    function resizeImg() {
        var imgwidth = bgImage.width(),
            imgheight = bgImage.height(),
            winwidth =  $(".header_carousel").width(),
            winheight = $(".header_carousel").height(),
            widthratio = winwidth / imgwidth,
            heightratio = winheight / imgheight,
            widthdiff = heightratio * imgwidth,
            heightdiff = widthratio * imgheight;
        if(heightdiff>winheight) {
            bgImage.css({
                width: winwidth+'px',
                height: heightdiff+'px'
            });
        } else {
            bgImage.css({
                width: widthdiff+'px',
                height: winheight+'px'
            });
        }
        $(".background-image").show();
    }
    resizeImg();
    $(window).resize(function() {
        resizeImg();
    });
                                           /* ======= background_header_img END======= */


    $('.page_btn_action').each(function (i) {
        $(this).click(function(){
            $(this).siblings(i).addClass('dn');
            $('.page_btn_home').removeClass('dn');
            $('.page_btn_form').removeClass('dn');
        });
    });
    $('.page_btn_home').click(function(){
        $(this).addClass('dn');
        $('.page_btn_action').removeClass('dn');
        $('.page_btn_form').addClass('dn');
    });

    $('.drop_menu').dropMenu();

//    $('.btn_lease').click(function(){
//        var textBtn = $(this).text();
//        $('.btn_advert').addClass('dn');
//        $('.btn_amt').addClass('dn');
//        $('.btn_home').removeClass('dn');
//        $('.btn_action').removeClass('dn').find('.select_block').text(textBtn);
//        $('.btn_placement').removeClass('dn');
//        $('.btn_price').removeClass('dn');
//        $('.btn_room_filer').removeClass('dn');
//    });

    $('.btn_buy, .btn_lease').click(function(){
        var textBtn = $(this).text();
        $('.btn_advert').addClass('dn');
        $('.btn_amt').addClass('dn');
        $('.btn_home').removeClass('dn');
        $('.btn_action').removeClass('dn').find('.select_block').text(textBtn);
        $('.btn_placement').removeClass('dn');
        $('.btn_price').removeClass('dn');
        $('.btn_room_square').removeClass('dn');
    });

//
//    $('.btn_advert')
//    $('.btn_all_filter')

});
