
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

$('#click').click(function(){ $('#main').show(); $('#click').hide(); });

$('#clickk').click(function(){ $('#mainn').show(); $('#clickk').hide();  });
$('#clickk').click(function(){ $('#MAT').show();});
$('#MAT').click(function(){ $('#mainn').hide();});
$('#MAT').click(function(){ $('#mainn').hide(); $('#MAT').hide(); $('#clickk').show();  });


