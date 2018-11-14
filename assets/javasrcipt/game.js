$(document).ready(function () {


    // Global Variables placed into variable object "game" ** DON'T FORGET IT'S ALL IN AN OBJECT **
    // Variable names match ids

    var game = {
        userSum: 0,

        crystal_1: 0,
        crystal_2: 0,
        crystal_3: 0,
        crystal_4: 0,

        // Data Types
        winValue: 0,
        lossesValue: 0
    };



    // Reset function
    // function reset() {
    //     var game = {
    //         userSum: 0,

    //         crystal_1: 0,
    //         crystal_2: 0,
    //         crystal_3: 0,
    //         crystal_4: 0,


    //     };

    // }

    function reset() {
        game.userSum = 0;
        game.crystal_1 = 0;
        game.crystal_2 = 0;
        game.crystal_3 = 0;
        game.crystal_4 = 0;
        updateUserSum(game.userSum);
    }

    // Single Functions

    // Random numbers for each crystal button
    game.crystal_1 = Math.floor(Math.random() * 12) + 1;
    game.crystal_2 = Math.floor(Math.random() * 12) + 1;
    game.crystal_3 = Math.floor(Math.random() * 12) + 1;
    game.crystal_4 = Math.floor(Math.random() * 12) + 1;

    console.log("This is Crystal 1 Value " + game.crystal_1);
    console.log("THis is Crystal 2 Value " + game.crystal_2);
    console.log("This is Crystal 3 Value " + game.crystal_3);
    console.log("This is Crystal 4 Value " + game.crystal_4);

    // Random number for computer
    randomForComputer = Math.floor(Math.random() * 102) + 18;
    console.log("computerChoic: " + randomForComputer);

    // computerChoice gets displayed
    $("#computerChoice").html(randomForComputer);

    // Function to update userSum to be called for each crystal button click
    function updateUserSum(x) {
        $("#userSum").html(x);
    }
    // on click funcion for each cryastal button
    $("#crystal_1").click(function () {

        console.log("crystal _1: " + game.crystal_1)

        // This ads the buton value to usersum evertimg its clicked
        game.userSum += game.crystal_1;

        // Calls the updateUserSum so that so that userSum display is updated.
        updateUserSum(game.userSum);
        console.log(game.userSum);

        // Calls the checkForWIn function to run
        checkForWin();

    });
    $("#crystal_2").click(function () {

        console.log("crystal _2: " + game.crystal_2);

        // This ads the buton value to usersum evertimg its clicked
        game.userSum += game.crystal_2;
        console.log(game.userSum);

        // Calls the updateUserSum so that so that userSum display is updated.
        updateUserSum(game.userSum);

        // Calls the checkForWIn function to run
        checkForWin();
    })

    $("#crystal_3").click(function () {

        console.log("crystal _3: " + game.crystal_3)

        // This ads the buton value to usersum evertimg its clicked
        game.userSum += game.crystal_3;
        console.log(game.userSum);

        // Calls the updateUserSum so that so that userSum display is updated.
        updateUserSum(game.userSum);

        // Calls the checkForWIn function to run
        checkForWin();
    })

    $("#crystal_4").click(function () {

        console.log("crystal _4: " + game.crystal_4)

        // This ads the buton value to usersum evertimg its clicked
        game.userSum += game.crystal_4;
        console.log(game.userSum);

        // Calls the updateUserSum so that so that userSum display is updated.
        updateUserSum(game.userSum);

        // Calls the checkForWIn function to run
        checkForWin();
    })

    //Check for win
    function checkForWin() {
        // Checks to see if user sum is equal to the computer sum
        if (game.userSum == randomForComputer) {

            // If they do match, then...

            // Ticks up win by 1,
            game.winValue++;

            // Displays alert of a win,
            alert("Wow! You can add. YOU WIN")

            // and updates display of wins
            $("#winValue").html(game.winValue);

            // runs the reset function,
            reset();
            console.log(game.userSum + ";" + randomForComputer)
            console.log(game.winValue);


        }
        // Checks for loss
        else if (game.userSum > randomForComputer) {
            // If the user sum exceeds the computer number then...
            // losses ticks up loss by 1,
            game.lossesValue++;
            console.log("Losses: " + game.lossesValue)

            // displays alert that you loose
            alert("Sorry. You're dumber than you thought. YOU LOOSE")

            // and updates display of lossees
            $("#lossesValue").html(game.lossesValue);

            reset();
            console.log(randomForComputer  + ";" + game.userSum )
        }
    };







});
