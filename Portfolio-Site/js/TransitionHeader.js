/**
 * Created by Robert on 9/20/2017.
 */
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if(distanceY > shrinkOn) {
            classie.add(header,"smaller");
        }else{
            if(classie.has(header,"smaller")){
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();