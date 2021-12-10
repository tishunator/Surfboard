
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'custom',
        bulletClass: 'swiper_pagination_img',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

$('#click').click(function(){ $('#desc1').show(); $('#click').hide(); });
$('#click').click(function(){ $('#clickReverse').show();});
$('#clickReverse').click(function(){ $('#desc1').hide();});
$('#clickReverse').click(function(){ $('#desc1').hide(); $('#clickReverse').hide(); $('#click').show();  });



$('#click2').click(function(){ $('#desc2').show(); $('#click2').hide();  });
$('#click2').click(function(){ $('#clickReverse2').show();});
$('#clickReverse2').click(function(){ $('#desc2').hide();});
$('#clickReverse2').click(function(){ $('#desc2').hide(); $('#clickReverse2').hide(); $('#click2').show();  });

$('#click3').click(function(){ $('#desc3').show(); $('#click3').hide();  });
$('#click3').click(function(){ $('#clickReverse3').show();});
$('#clickReverse3').click(function(){ $('#desc3').hide();});
$('#clickReverse3').click(function(){ $('#desc3').hide(); $('#clickReverse3').hide(); $('#click3').show();  });

$('#click4').click(function(){ $('#desc4').show(); $('#click4').hide();  });
$('#click4').click(function(){ $('#clickReverse4').show();});
$('#clickReverse4').click(function(){ $('#desc4').hide();});
$('#clickReverse4').click(function(){ $('#desc4').hide(); $('#clickReverse4').hide(); $('#click4').show();  });


