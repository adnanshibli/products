var myvideo = document.getElementById("video1");

function playPause() {
    if (myvideo.paused)
         myvideo.play();
    else
        myvideo.pause();
}

$(document).ready(function() {
    
    $(function () {
        $("#commentForm").validate();
    });

});
