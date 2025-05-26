var captionLength = 0;
var caption = 'Use Arrow-Keys for a better Experience';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    TypingEffect();
    setTimeout('ErasingEffect()', 4000);
});

function TypingEffect() {
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    setTimeout('type()', 50);
    
}

function ErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    
    erase();
    


function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    setTimeout('erase()', 50);
    
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}