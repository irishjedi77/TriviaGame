$(document).ready(function () {
    //Trivia variables

    //Checks the responses and tallies correct and incorrect answers.
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer;
    var clock;

    function check() {
        var question1 = $(".question1").find("input:checked").val();
        var question2 = $(".question2").find("input:checked").val();
        var question3 = $(".question3").find("input:checked").val();
        var question4 = $(".question4").find("input:checked").val();
        var question5 = $(".question5").find("input:checked").val();

        if (question1 == "c") {
            correct++;
        } else if (!question1) {
            unanswered++;
        } else if (question1 !== "c") {
            incorrect++;
        }


        if (question2 == "c") {
            correct++;
        }
        else if (!question2) {
            unanswered++;
        }
        else if (question2 !== "c") {
            incorrect++;
        }


        if (question3 == "a") {
            correct++;
        }
        else if (!question3) {
            unanswered++;
        }
        else if (question3 !== "a") {
            incorrect++;
        }


        if (question4 == "b") {
            correct++;
        }
        else if (!question4) {
            unanaswered++;
        }
        else if (question4 !== "b") {
            incorrect++;
        }


        if (question5 == "d") {
            correct++;
        }
        else if (!question5) {
            incorrect++;
        }
        else if (question5 !== "d") {
            incorrect++;
        }
        //document.getElementById("#after-submit").style.visibility = "visible";
        //$("#number-correct").innerHTML = "You got " + correct + "correct," + incorrect + "incorrect, and" + unanswered + "unanswered."

    };


    //shows the loading gif when start button is clicked and hides the questions and timer for 3 seconds

    $("#start-button").click(function () {
        $("#allQuestions").hide();
        $("#image-holder").show();
        $("#after-submit").hide();
        $(this).hide();
        setTimeout(function () {
            $("#image-holder").hide();
            $("#allQuestions").hide();
            $("#allQuestions").show();
            $("#timer").show();
            startTimer(80);
        }, 1000);

    });


    $("#finished").click(function (e) {
        e.preventDefault();
        clearInterval(clock);
        $("#allQuestions").hide();
        $("#start-button").hide();
        check();
        $("#timer").hide();
        alert("You got " + correct + " " + "correct, " + incorrect + " " + "incorrect, and " + unanswered + " " + "unanswered.")
        if (correct == 5) {
            alert("Perfect score! You are stark raving mad!");
        }
        if (correct !== 5) {
            alert("Off with your head!");
        }

    });

    function startTimer(duration) {
        var minutes, seconds;
        timer = duration
        clock = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $("#timer").text(minutes + ":" + seconds);

            if (--timer < 0) {
                clearTimeout(clock);
            }

        }, 1000);
    }

});






