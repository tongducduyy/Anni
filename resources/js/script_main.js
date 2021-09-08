let interval;
let count = 0;
document.getElementById('myvideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
  $('.video').css('opacity','0');
  $('.table-love').css('opacity','1');
  $('.table-love').css('animation-name','table-effect');
  $('.table-love').css({'top':300});
  $('.image').css('opacity','1');
  $('.thank').css('opacity','1');
}

createTimer();

// create the interval that creates the timer
function createTimer() {
  clearInterval(interval);
  count = 0;
  
  interval = setInterval(() => {
    count+=0.002;
    
    // calculate the offset and apply it
    $('.container').css({"width":(count/3)*300})

    // what happens when countdown is done
    if ((count/3)*300 >= 295) {
      // go to the next episode
      
      $('.process-bar').css('opacity','0');
      $('.video').css('opacity','1');
      clearInterval(interval);
    }
  }, 1);
}