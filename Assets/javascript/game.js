// here we make sure that the page fully loads before we perform any actions
$(document).ready(function() {


    // we set our values needed for the game
    var numOptions = [];
    var counter = 0;
    var total = 0;
    var wins = 0;
    var losses = 0;
    var buttonImg = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];
    console.log(numOptions);
    console.log(buttonImg.length);
    console.log(buttonImg);
    console.log(random);
    console.log(typeof random);
    var random = getRandomInteger(19, 121);


    // for when page loads all random #'s are on the page 
    document.getElementById('answer').innerHTML = random;
    randomArray();


    // here we're getting a random # between the min and max
    function getRandomInteger(min, max) {
        var randomN = Math.floor(Math.random() * (max - min)) + min;
        return randomN;
        console.log(randomN);
    }


    // here we're pushing 4 numbers into our array to distribute to the images later
    function randomArray() {
        for (i = 0; i < 4; i++) {
            numOptions[i] = getRandomInteger(1, 13);
        }
    }


    // we're resetting all the values needed to bring the game back to 0
    // we leave the wins and losses because we want to continue to add to those values
    // we change the html in the game to reflect the new values counter back to 0
    // new random #
    function startGame() {
        numOptions = [];
        random = 0;
        total = 0;
        randomArray();
        random = getRandomInteger(19, 121);
        counter = 0;
        document.getElementById("pScore").innerHTML = "Your total score is: " + counter;
        document.getElementById("answer").innerHTML = random;
    }



    // building 4 buttons each with the same class so click function works on each
    // using the 4 images in buttons array and attaching one to each button[i]
    // attaching a value to each from numOptions array to give each a value

    for (var i = 0; i < numOptions.length; i++) {
        var newButton = $("<button>");
        newButton.attr("id", "mybutton" + [i]);
        $("mybutton").attr("class", "crystals");
        newButton.addClass("crystals");
        $("#buttons").append(newButton);

        var newImage = $("<img>");
        newImage.attr("id", "myImg");
        $("newImage").attr("class", "images");
        newImage.addClass("images");
        newImage.attr("src", buttonImg[i]);
        newImage.attr("data-cValue", numOptions[i]);
        $("#mybutton" + [i]).append(newImage);
    }




    // if user clicks on an image game will take the value from that button and makes it a number.
    // the game then adds that number to the current count
    $(".images").on("click", function() {
        var cValue = ($(this).attr("data-cValue"));
        var cValue = parseInt(cValue);
        counter += cValue;
        console.log(counter);
        document.getElementById("pScore").innerHTML = "Your total Score is: " + counter;




        // here we just have our simple game rules.  Win is if the random # equals the counter
        // a loss is if we go over
        // we restart the game in either event we add a win or loss to those totals
        if (counter === random) {
            wins++;
            console.log(wins);
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            startGame();
        } else if (counter > random) {
            losses++;
            console.log(losses);
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            startGame();
        }

    });





});
