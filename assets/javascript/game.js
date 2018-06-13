var toGuess = Math.round(Math.random() * 100);
var cry1 = Math.round(Math.random() * 20);
var cry2 = Math.round(Math.random() * 20);
var cry3 = Math.round(Math.random() * 20);
var cry4 = Math.round(Math.random() * 20);
var guessed = 0;
var wins = 0;
var losses = 0;

function init() {

    $("#randomNumber").text(toGuess);
    $("#guessed").text(guessed);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

$(".cry1").on("click", function () {

    guessed += cry1;
        $("#guessed").text(guessed);
        checkOver();
});

$(".cry2").on("click", function () {

    guessed += cry2;
        $("#guessed").text(guessed);
        checkOver();
});

$(".cry3").on("click", function () {

   

    guessed += cry3;
    $("#guessed").text(guessed);
    checkOver();

});

$(".cry4").on("click", function () {

        guessed += cry4;
        $("#guessed").text(guessed);
        checkOver();
});

function checkOver(){

    if(guessed === toGuess)
    {
        wins++
        $("#wins").text(wins);
        reset();
    }
    else if (guessed >= toGuess)
    {
        losses++;
        $("#losses").text(losses);
        reset();
    }


}

function reset() {
    toGuess = Math.round(Math.random() * 100);
    cry1 = Math.round(Math.random() * 20);
    cry2 = Math.round(Math.random() * 20);
    cry3 = Math.round(Math.random() * 20);
    cry4 = Math.round(Math.random() * 20);
    guessed = 0;
    $("#randomNumber").text(toGuess);
    $("#guessed").text(guessed);
    $("#wins").text(wins);
    $("#losses").text(losses);
}
init();


