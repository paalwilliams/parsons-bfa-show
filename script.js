$( document ).ready(function() {
    console.log( "ready!" );
    
    // create webticker instance on page load
    if (document.getElementById("webTicker")) {
        
        $("#webTicker").webTicker({
            duplicate: true,
            rssfrequency: 0,
            startEmpty: false,
            hoverpause: false,
            speed: 20,
            height: "50px",
        });
    }
    
    // watch for window resize
    
    if (document.getElementById("webTicker")) {
        $(window).resize(() => {
            $("#webTicker").webTicker("stop");
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(() => {
                $("#webTicker").webTicker("cont");
            }, 250);
        });
    }    
});