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
});


/*------------------SCROLL MAGIC---------------*/
//implement scroll magic
var scrollController = new ScrollMagic.Controller();

//set up about section ease in
var aboutScene = new ScrollMagic.Scene({
    triggerElement: '.about-row',
    reverse:false
})
    .setClassToggle('.about-row','about-show')
    .addTo(scrollController);

//set up skill-chart ease in
var  skillScene1 = new ScrollMagic.Scene({
   triggerElement: '#skills',
    reverse:false
})
    .setClassToggle('.more-skills-container', 'skills-show')
    .addTo(scrollController);

//set up edu section ease in
var eduScene = new ScrollMagic.Scene({
    triggerElement: '.edu-scroll',
    reverse:false
})
    .setClassToggle('.edu-scroll','edu-show')
    .addTo(scrollController);

//set up animations for projects
var pro1Scene = new ScrollMagic.Scene({
    triggerElement: '.pro1-scroll',
    reverse:false
})
    .setClassToggle('.pro1-scroll','pro1-show')
    .addTo(scrollController);

var pro2Scene = new ScrollMagic.Scene({
    triggerElement: '.pro2-scroll',
    reverse:false
})
    .setClassToggle('.pro2-scroll','pro2-show')
    .addTo(scrollController);


//set active class toggles
var aboutToggle = new ScrollMagic.Scene({
    triggerElement: '#about',
    duration: "50%"
})
    .setClassToggle('.classToggle','active')
    .addTo(scrollController);

var skillsToggle = new ScrollMagic.Scene({
    triggerElement: '#skills',
    duration: "100%"
})
    .setClassToggle('.skillsToggle','active')
    .addTo(scrollController);

var eduToggle = new ScrollMagic.Scene({
    triggerElement: '#education',
    duration: "100%"
})
    .setClassToggle('.eduToggle','active')
    .addTo(scrollController);

var proToggle = new ScrollMagic.Scene({
    triggerElement: '#projects',
    duration: "100%"
})
    .setClassToggle('.proToggle','active')
    .addTo(scrollController);

var conToggle = new ScrollMagic.Scene({
    triggerElement: '#conTrigger',
    duration: "75%"
})
    .setClassToggle('.conToggle','active')
    .addTo(scrollController);
