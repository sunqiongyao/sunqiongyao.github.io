    var Swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        mousewheelControl: true,
        speed: 400,
        direction: 'vertical',
        initialSlide: 0,
        onInit: function(swiper) {
            $('.slide-index .animated').addClass('active')
        },
        onSlideChangeEnd: function(swiper) {
            console.log(swiper.activeIndex)
            if (swiper.activeIndex == 0) {
                $('.slide-forth .animated').removeClass('active')
                $('.slide-second .animated').removeClass('active')
                $('.slide-index .animated').addClass('active')
            }
            if (swiper.activeIndex == 1) {
                $('.slide-index .animated').removeClass('active')
                $('.slide-third .animated').removeClass('active')
                $('.slide-second .animated').addClass('active')
            }
            if (swiper.activeIndex == 2) {
                $('.slide-second .animated').removeClass('active')
                $('.slide-forth .animated').removeClass('active')

                $('.slide-third .animated').addClass('active')
            }
            if (swiper.activeIndex == 3) {
                $('.slide-index .animated').removeClass('active')
                $('.slide-third .animated').removeClass('active')
                $('.slide-forth .animated').addClass('active')
            }
        }
    });

    $(document).ready(function() {
        $(".three-11").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active1");
        });
        $(".three-12").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active2");
        });
        $(".three-13").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active3");
        });
        $(".three-14").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active4");
        });
        $(".three-15").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active5");
        });
        $(".three-16").click(function() {
            $(".three-10").removeClass("active1 active2 active3 active4 active5 active6");
            $(".three-10").addClass("active6");
        });
    });

    $('#nextpage').click(function() {
        Swiper.slideNext();
    });
