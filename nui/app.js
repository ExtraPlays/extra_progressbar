
$(function(){
    window.onload = (e) => { 
        window.addEventListener('message',(event) => {
            var item = event.data;
            if (item !== undefined && item.type === "ui") {		                
                if (item.display === true) {
                    $("#progress").show();
                    var start = new Date();
                    var maxTime = item.time;
                    var text = item.text;
                    var timeoutVal = Math.floor(maxTime/100);
                    animateUpdate();

                    $('.progress-title').text(text);

                    function updateProgress(percentage) {
                        $('.bar').css("width",percentage+"%");
                    }

                    function animateUpdate() {
                        var now = new Date();
                        var timeDiff = now.getTime() - start.getTime();
                        var perc = Math.round((timeDiff/maxTime)*100);
                        if (perc <= 100) {
                            updateProgress(perc);
                            $(".left").text(`${perc}% Progresso`)
                            $("#timer").text(Math.floor(maxTime/1000) + "s")
                            setTimeout(animateUpdate, timeoutVal);
                        } else {
                            $("#progress").fadeOut();
                        }
                    }
                } else {
                    $("#body").hide();
                }
            }
        });
    };
});