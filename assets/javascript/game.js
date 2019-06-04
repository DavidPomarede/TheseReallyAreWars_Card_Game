var characters = $("#characters");
var enemies = $("#enemies");
var fightSection = $("#fightSection");
var button = $("#button");
var defender = $("#defender");
var reset = $("#reset");


var characterList = [{
    0: {
        name: "Obi-Wan Kenobi",
        img: "../images/obi.jpg",
        hp: 120,
        att: 8,
    },
    1: {
        name: "Luke Skywalker",
        img: "assets/images/luke.jpg",
        hp: 100,
        att: 5,
    },
    2: {
        name: "Darth Sidious",
        img: "../images/sidious.jpg",
        hp: 150,
        att: 20,
    },
    3: {
        name: "Darth Maul",
        img: "../images/maul.jpg",
        hp: 180,
        att: 25,
    }
}]

var obi = {
    name: "Obi-Wan Kenobi",
    img: "assets/images/obi.jpg",
    hp: 120,
    att: 8,
}

var skywalker= {
    name: "Luke Skywalker",
    img: "assets/images/luke.jpg",
    hp: 100,
    att: 5,
}

var sidious ={
    name: "Darth Sidious",
    img: "assets/images/sidious.jpg",
    hp: 150,
    att: 20,
}
var maul ={
    name: "Darth Maul",
    img: "assets/images/maul.jpg",
    hp: 180,
    att: 25,
}


var chars = [1,2,3,4];
console.log(characterList[0][0].name);

function game() {



    for(var i = 0; i < chars.length; i++) {

        var card = $("<div>");
        card.attr("class", "col-md-2 text-center luke");
        $("#rowCardSlot").append(card);
        var cardName = $("<div>");
        cardName.text(characterList[0][i].name);
        card.append(cardName);
        var cardImg = $("<img>");
        cardImg.attr(characterList[0][i].img);
        card.append(cardImg);
        var cardHp = $("<div>");
        cardHp.text(characterList[0][i].hp);
        card.append(cardHp);
    }

// variable that stores wins/losses
// variable that stores HP
// variable that sotres enemyHP

// variable that stores increasing attack power
// function that increases attack power with each attack

// collect a click from the card list
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
