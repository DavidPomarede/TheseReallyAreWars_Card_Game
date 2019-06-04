var characters = $("#characters");
var enemies = $("#enemies");
var fightSection = $("#fightSection");
var button = $("#button");
var defender = $("#defender");
var reset = $("#reset");

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
            card.attr("class", "col-md-2 text-center luke");
            $("#rowCardSlot").append(card);
            var cardName = $("<div>");
            card.attr("class", "col-md-2 text-center luke2");
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
    var wins;
    var losses;

// variable that stores HP
    var cardsLeft = 4;
    var characterCard;

    var yourHp;
    var yourAttk;
    var enemyHp;
    var enemyAttk;
    var isEnemyClicked = false;

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
            var characterCard = $("<button>");
            characterCard.attr("class", "col-md-2 text-center luke obi");
            $("#arena2").append(characterCard);
            var cardName = $("<div>");
            characterCard.attr("class", "col-md-2 text-center luke2 obi");
            characterCard.attr("id", cardID.number)
            cardName.text(cardID.name);
            characterCard.append(cardName);
            var cardImg = $("<img>");
            cardImg.attr("src", cardID.img);
            characterCard.append(cardImg);
            var cardHp = $("<div>");
            enemyHp = cardID.hp;
            cardHp.text(enemyHp);
            characterCard.append(cardHp);
            cardHp.attr("id", "enemyHpDisplay");
            enemyAttk = cardID.att;
            var cardIDID = "#" + characterList[0][this.id].number;
            $(cardIDID).hide();
            cardsLeft--;
            isEnemyClicked = true;
            $("#enemies").text(enemyHp);
        } else {
    
            var characterCard = $("<button>");
            characterCard.attr("class", "col-md-2 text-center luke obi");
            $("#arena1").append(characterCard);
            var cardName = $("<div>");
            characterCard.attr("class", "col-md-2 text-center luke2 obi");
            characterCard.attr("id", cardID.number)
            cardName.text(cardID.name);
            characterCard.append(cardName);
            var cardImg = $("<img>");
            cardImg.attr("src", cardID.img);
            characterCard.append(cardImg);
            var cardHp = $("<div>");
            yourHp = cardID.hp;
            cardHp.text(yourHp);
            cardHp.attr("id", "yourHpDisplay");
            characterCard.append(cardHp);

            yourAttk = cardID.att;
            var cardIDID = "#" + characterList[0][this.id].number;
            $(cardIDID).hide();
            cardsLeft--;
            $("#defender").text(yourHp);
        }


});
    $("#buttonAttk").on("click", function() {
        if ((enemyHp !== 0) && (yourHp !== 0)) {
            enemyHp = enemyHp - yourAttk;
            yourHp = yourHp - enemyAttk;
            yourAttk = yourAttk + 8;
            console.log(yourAttk);
            $("#defender").text(yourHp);
            $("#enemies").text(enemyHp);
            // $("#enemyHpDisplay").text(enemyHp);
            // $("#yourHpDisplay").text(yourHp);

            if ((enemyHp === 0 ) && (cardsLeft === 0)) {
                isEnemyClicked = false;
                wins++;
                $("#winsDisplay").text("Wins: " + wins);
                alert("Well done! You Win");
                $(".obi").hide();
                game();
            } 

        } 
        
        if (yourHp < 0) {
            alert("you lost!");
            losses++;
            $("#lossesDisplay").text(losses);
            $(".obi").hide();
            game();

        } 

        if (enemyHp < 0) {
            enemyHp = 0;
            $("#enemies").text(enemyHp);
            isEnemyClicked = false;
            console.log("you defeated the enemy")
        }
        console.log(enemyHp);


    });

    $("#reset").on("click", function() {
        window.location.reload();
    });



    // var characterCard = $("<button>");
    // characterCard.attr("class", "col-md-2 text-center luke");
    // $("#arena1").append(characterCard);
    // var cardName = $("<div>");
    // characterCard.attr("class", "col-md-2 text-center luke2");
    // characterCard.attr("id", cardID.number)
    // cardName.text(cardID.name);
    // characterCard.append(cardName);
    // var cardImg = $("<img>");
    // cardImg.attr("src", cardID.img);
    // characterCard.append(cardImg);
    // var cardHp = $("<div>");
    // cardHp.text(cardID.hp);
    // characterCard.append(cardHp);

    // var cardIDID = "#" + characterList[0][this.id].number;
    // $(cardIDID).hide();
    // console.log(cardID.number);








    // console.log(chosenCard);
    // Inside the on-click event...

    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    // var fridgeMagnet = $("<div>");

    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    // fridgeMagnet.addClass("letter fridge-color");

    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
    // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
    // fridgeMagnet.text($(this).attr(characterList[0][i].hp));

    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
    // Again you can see we use that find, and once its found we append the item
    // $("#display").append(fridgeMagnet);





// move that card to the character slot
// collect a click from the card list
// move that card to the enemy slot

// attack button click
// function minus hp by the attack number on charCard
// minus hp by the attack number on enemyCard

// when hp = zero, make the card invisible
// make the card list clickable
// when hp of enemy is zero and the card list is empty, add a win, start over.
// when hp of character is zero, add a loss, start over.











}

game();
