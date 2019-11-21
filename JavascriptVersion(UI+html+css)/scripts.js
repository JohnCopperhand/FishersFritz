
// var parentElement = 0;
// var kartenfarbe = 0;
// var kartenfisch = 0;
var farbwurf="";
var fischwurf="";

var activeplayer="player1";


// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });
// document.getElementsByClassName('back-face')[0]
//         .addEventListener('click', function (event) {
//         this.style.visibility= 'hidden';
//         });
//
// document.getElementsByClassName('back-face')[0]
//         .addEventListener('click', function (event) {
//         this.style.visibility= 'hidden';
//         });

// var karten = document.getElementsByClassName("karten");
//
// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };
//
// for (var i = 0; i < classname.length; i++) {
//     classname[i].addEventListener('click', myFunction, false);
// }


//fischer yates shuffle um das board zu mischen
//+ umwandlung von nodelist in array und remove, append

function shuffle() {
    var array = Array.from(document.querySelectorAll(".karten"));
    var remainingElements = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== remainingElements) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * remainingElements);
        document.querySelectorAll(".karten")[0].remove();                        // removing divs from DOM while shuffling :)
        remainingElements -= 1;

        // And swap it with the current element.
        temporaryValue = array[remainingElements];
        array[remainingElements] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //add shuffled Elements to DOM (.board is parent of .karten)
    for (var i = 0; i < array.length;i++) {
        document.querySelector(".board").appendChild(array[i]);
    }
//sources
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//https://stackoverflow.com/questions/13427287/shuffle-all-divs-with-the-same-class
//https://www.freecodecamp.org/forum/t/custom-bad-shuffling-in-javascript-troubleshoot/327115/

}






function wurfeln() {
    var fischzahl = Math.floor(Math.random()*6+1);
    var farbzahl = Math.floor(Math.random()*6+1);

    if ( fischzahl === 1 || fischzahl === 2 ) {
      fischwurf = "fisch";
    } else if ( fischzahl === 3) {
      fischwurf ="kugel";
    } else if (fischzahl === 4) {
      fischwurf = "krake";
    } else if ( fischzahl === 5) {
      fischwurf = "forelle";
    } else if (fischzahl === 6) {
      fischwurf = "saege";
    }

    if ( farbzahl === 1 || farbzahl === 2 ) {
      farbwurf = "farbe";
    } else if ( farbzahl === 3) {
      farbwurf = "red";
    } else if (farbzahl === 4) {
      farbwurf = "yellow";
    } else if ( farbzahl === 5) {
      farbwurf = "green";
    } else if (farbzahl === 6) {
      farbwurf = "blue";
    }
    console.log(farbwurf + " " + fischwurf);
    return farbwurf, fischwurf;

};


document.getElementById("Wuerfelknopf").onclick = wurfeln;
// knopf.onclick = alert()


document.body.addEventListener('click', function (e) {
  if (e.target.className === 'back-face') {
    toggleElement = e.target.parentElement
    selectedfarbe = e.target.parentNode.dataset.farbe
    selectedfisch = e.target.parentNode.dataset.fisch

    // kartenselector(selectedfarbe,farbwurf,selectedfisch,fischwurf)
    // console.log(e);
    // console.log(parentElement);
    console.log(selectedfarbe);
    console.log(selectedfisch);
    if ((selectedfarbe === farbwurf || farbwurf === "farbe" || farbwurf ==="schuh") && (selectedfisch === fischwurf || fischwurf ==="fisch" || fischwurf ==="schuh") ) {

        console.log("spieler1 hat " + selectedfarbe + " " + selectedfisch + " genommen")
//hier kommt Append child hin (d.h. die karte wird vom board genommen und kommt zum aktiven spieler)
        document.getElementById("player1").appendChild(toggleElement);

    } else {
        console.log("falsche Karte! Du hast " + selectedfarbe + " " + selectedfisch + " genommen. Du musstest aber die Karte: " + farbwurf + " " + fischwurf + " nehmen" )
        //hier passiert nichts, der andere Spieler ist an der Reihe
    }
  }
});

// var listening = function(toll) {
//     console.log(toll)
//     if (this.target.className === 'back-face') {
//       parentElement = this.target.parentElement
//       selectedfarbe = this.target.parentNode.dataset.farbe
//       selectedfisch = this.target.parentNode.dataset.fisch
// //      kartenselector(selectedfarbe,farbwurf,selectedfisch,fischwurf)
//       console.log(this);
//       console.log(parentElement);
//       console.log(selectedfarbe);
//       console.log(selectedfisch);
//     }
//
// };
// document.body.addEventListener('click', listening.bind(this, "mega"));


function kartenselector (selectedfarbe,farbwurf,selectedfisch,fischwurf) {
    if ((selectedfarbe === farbwurf || selectedfarbe === "farbe" || selectedfarbe ==="schuh") && (selectedfisch === fischwurf || selectedfisch ==="fisch" || selectedfisch ==="schuh") ) {
        console.log("spieler1 hat " + selectedfarbe + " " + selectedfisch + " genommen")
    } else {
        console.log("falsche Karte! Du hast " + selectedfarbe + " " + selectedfisch + " genommen. Du musstest aber die Karte: " + farbwurf + " " + fischwurf + " nehmen" )
    }
}

// document.getElementsByClassName('togglest').addEventListener('click', function () {
//   console.log("You finally clicked without jQuery");
// });

// function nehmen() {
//   var fragment = document.createDocumentFragment();
//   fragment.appendChild(document.querySelector('[data-farbe="blauss"][data-fisch="forelle"]'));
//   document.getElementsByClassName('player1').appendChild(fragment);
// }
//
// var fragment = document.querySelector('[data-farbe="blauss"][data-fisch="forelle"]');
// console.log(interesting);
//
// function MoveDiv() {
// 	var fragment = document.createDocumentFragment();
// 	fragment.appendChild(document.getElementById('source'));
// 	document.getElementById('destination').appendChild(fragment);
// }


// function checkForMatch() {
//     if (firstCard.dataset.fisch === Wuerfel.dataset.fisch && firstCard.dataset.farbe ===Wuerfel.dataset.farbe) {
//         //karte nehmen
//     } else if (firstCard.dataset.fisch === "schuh") {
//         //karte nehmen else
//     } else {
//         //falshce karte--> karte zurück
//     }
//
