document.body.style.backgroundImage = "url('assets/images/background.jpg')";

var characterList = [{
    0: {
        number: 0,
        name: "Obi-Wan Kenobi",
        img: "assets/images/kenobi.jpg",
        hp: 120,
        att: 8,
    },
    1: {
        number: 1,
        name: "Luke Skywalker",
        img: "assets/images/luke.jpg",
        hp: 100,
        att: 5,
    },
    2: {
        number: 2,
        name: "Darth Sidious",
        img: "assets/images/sidious.jpg",
        hp: 150,
        att: 20,
    },
    3: {
        number: 3,
        name: "Darth Maul",
        img: "assets/images/maul.jpg",
        hp: 180,
        att: 25,
    }
}]


var chars = [1,2,3,4];
console.log(characterList[0][0].name);

function game() {

    var card;

    var shuffle = function() {
        for(var i = 0; i < chars.length; i++) {

            card = $("<button>");
            card.attr("class", "col-md-3 text-center luke");
            $("#rowCardSlot").append(card);
            var cardName = $("<div>");
            card.attr("class", "col-md-3 text-center luke2");
            card.attr("id", characterList[0][i].number)
            cardName.text(characterList[0][i].name);
            card.append(cardName);
            var cardImg = $("<img>");
            cardImg.attr("src", characterList[0][i].img);
            card.append(cardImg);
            var cardHp = $("<div>");
            cardHp.text(characterList[0][i].hp);
            card.append(cardHp);
            $(".luke").show();
            $(".luke2").show();
        }
    };

    shuffle();

// variable that stores wins/losses
    var wins = 0;
    var losses = 0;

// variable that stores HP
    var cardsLeft = 4;
    var characterCard;

    var yourHp;
    var yourAttk;
    var enemyHp;
    var enemyAttk;
    var isEnemyClicked = false;
    var enemyTicker=3;

// variable that sotres enemyHP

// variable that stores increasing attack power
// function that increases attack power with each attack

// collect a click from the card list

$(".luke2").on("click", function() {

    // var chosenCard = this[0].name;
    console.log(this.id);
    console.log(characterList[0][this.id]);

    var cardID = characterList[0][this.id];
    characterCard = cardID;


 
        if ((cardsLeft <= 3) && (!isEnemyClicked)){
            var characterCard2 = $("<button>");
            characterCard2.attr("class", "col-md-3 text-center luke3 maul");
            $("#arena2").append(characterCard2);

            var cardName2 = $("<div>");
            characterCard2.attr("class", "col-md-3 text-center luke4 maul");
            characterCard2.attr("id", cardID.number);
            cardName2.text(cardID.name);
            characterCard2.append(cardName2);

            var cardImg = $("<img>");
            cardImg.attr("src", cardID.img);
            characterCard2.append(cardImg);

            var cardHp = $("<div>");
            enemyHp = cardID.hp;
            cardHp.text(enemyHp);
            characterCard2.append(cardHp);
            cardHp.attr("id", "enemyHpDisplay");
            enemyAttk = cardID.att;

            var cardIDID = "#" + characterList[0][this.id].number;
            $(cardIDID).hide();

            cardsLeft--;
            isEnemyClicked = true;
            $("#enemies").text(enemyHp);

            $(characterCard2).attr("class", "col-md-3 text-center luke4 maul bg-danger");
        } else {
    
            var characterCard3 = $("<button>");
            characterCard3.attr("class", "col-md-3 text-center luke3 obi");
            $("#arena1").append(characterCard3);
            var cardName3 = $("<div>");
            characterCard3.attr("class", "col-md-3 text-center luke4 obi");
            characterCard3.attr("id", cardID.number);
            cardName3.text(cardID.name);
            characterCard3.append(cardName3);
            var cardImg = $("<img>");
            cardImg.attr("src", cardID.img);
            characterCard3.append(cardImg);
            var cardHp = $("<div>");
            yourHp = cardID.hp;
            cardHp.text(yourHp);
            cardHp.attr("id", "yourHpDisplay");
            characterCard3.append(cardHp);

            yourAttk = cardID.att;
            var cardIDID = "#" + characterList[0][this.id].number;
            $(cardIDID).hide();
            cardsLeft--;
            $("#defender").text(yourHp);
            $(".luke").attr("class", "bg-danger");
            $(".luke2").attr("class", "bg-danger");



        }


});
    $("#buttonAttk").on("click", function() {
        if (yourHp < 0) {
            alert("you lost!");
            losses++;
            $(".lossesDisplay").text(losses);
            $(".obi").attr("class","d-none");
            // game();

        } 




        if ((enemyHp !== 0) && (yourHp !== 0)) {
            enemyHp = enemyHp - yourAttk;
            yourHp = yourHp - enemyAttk;
            yourAttk = yourAttk + 8;
            console.log(yourAttk);
            $("#defender").text(yourHp);
            $("#enemies").text(enemyHp);
            $("#enemyHpDisplay").text(enemyHp);
            $("#yourHpDisplay").text(yourHp);

            if (yourHp <= 0) {
                alert("you lost!");
                losses++;
                $(".lossesDisplay").text(losses);
                $(".obi").attr("class","d-none");
                // game();
            }
            // $("#enemyHpDisplay").text(enemyHp);
            // $("#yourHpDisplay").text(yourHp);

            if ((enemyHp < 0 ) && (cardsLeft < 0)) {
                isEnemyClicked = false;
                wins++;
                $(".winsDisplay").text("Wins: " + wins);
                alert("Well done! You Win");
                $(".obi").attr("class","d-none");
                game();
            } 

            if (enemyHp <= 0) {
                enemyHp = 0;
                $("#enemies").text(enemyHp);
                $(".maul").attr("class", "d-none");
                isEnemyClicked = false;
                console.log("you defeated the enemy");
                enemyTicker--;
                if (enemyTicker === 0) {
                    wins++;
                    $(".winsDisplay").text("Wins: " + wins);
                    alert("Congratulations, young padawan! You Won!");
                    // game();
                } 
            }

        }

        $("#enemyHpDisplay").text(enemyHp);   
        

 

        // if (enemyHp < 0) {
        //     enemyHp = 0;
        //     $("#enemies").text(enemyHp);
        //     $(".maul").attr("class", "d-none");
        //     isEnemyClicked = false;
        //     console.log("you defeated the enemy");
        //     enemyTicker--;
        //     if (enemyTicker === 0) {
        //         wins++;
        //         $(".winsDisplay").text("Wins: " + wins);
        //         alert("Congratulations, young padawan! You Won!");
        //         // game();
        //     }        
        // }
        // console.log(enemyHp);


    });

    $("#reset").on("click", function() {
        window.location.reload();
    });


}

game();