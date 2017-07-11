console.log("js loaded");
function replacer(){ 
    //replaces taaapic id with taaapic of the day
    var elements = document.getElementsByClassName("taaapic");
    var result = tp[Math.floor(Math.random()*tp.length)];  //rnd element between 0 and length of array

    //same thing each day method
    var today = new Date();
    var first = new Date(today.getFullYear(), 0, 1);
    var rnd = "" + Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0) + (new Date().getYear());
    var result = tp[rnd % tp.length ];

    //fully random method
    document.getElementById("category").innerHTML = result.c;
    for (i=0; i<elements.length; i++) {
        var element = elements[i];
        element.innerHTML = result.t;
        element.setAttribute("href", "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords="+ encodeURIComponent(result.t));
    }

     // Set the time counting down
    var countDownDate = new Date().getTime() + (10 * 60 * 3002);

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //keeps consistant amount of digits on screen   
    if (seconds < 10) {
    seconds = "0" + seconds;
    }

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Time's up!";
    }
    }, 1000);

    var btn = document.getElementById("showme");
    var info = document.getElementById("description");
    var foo = false;
    btn.addEventListener('click', function(){
      if (foo) {
        foo = false;
        info.setAttribute('style','visibility: hidden');
      } else {
        foo = true;
        info.setAttribute('style','visibility: visible');  
      }

    });
};  