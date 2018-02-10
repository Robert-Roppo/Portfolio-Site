$(function() {
    $('.chart').easyPieChart({
        barColor: '#2196f3',
        trackColor: '#ffffff',
        scaleColor: false,
        lineWidth: 12,
        lineCap: 'butt',
        size: 160,
        animate: 1000
    });
});

//smooth scroll
$(document).ready(function() {

    var scrollLink = $('.scroll');

    //scroll
    scrollLink.click(function(event){
        event.preventDefault();
        $('body,html').animate({
           scrollTop: $(this.hash).offset().top - 30
        }, 1000);
    });

    //active link switching
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top;

            if(sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().remove('active');
            }
        })
    })
});

//implement scroll magic
var scrollController = new ScrollMagic.Controller();

//set up about container ease in
var aboutScene = new ScrollMagic.Scene({
    triggerElement: '.about-row'
})
    .setClassToggle('.about-row','about-show')
    .addTo(scrollController);

//set up skill-chart ease in
var  skillScene1 = new ScrollMagic.Scene({
   triggerElement: '#skills'
})
    .setClassToggle('.more-skills-container', 'skills-show')
    .addTo(scrollController);