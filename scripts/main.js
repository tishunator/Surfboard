
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

const details = document.querySelectorAll('[detail]');

details.forEach(item => {
    item.addEventListener('click', function() {
        details.forEach(item => {
            item.querySelectorAll('[detail-content]').forEach(item =>{
                item.style.display = "none"
            })
           
        })
        const dContent = item.querySelectorAll('[detail-content]')
        dContent.forEach(item=>{
            item.style.display = "block";
        })
       
    })
})

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});