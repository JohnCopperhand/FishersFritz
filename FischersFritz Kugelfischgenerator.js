var cardsFische = ['Forelle', 'Saegefisch', 'Kugelfisch', 'Krake']
var cardsFarben = ['blauer', 'gruener', 'gelber', 'roter']

var currentCardFisch = 'Forelle'
var currentCardFarbe = 'gruener'

while (currentCardFisch !== 'Kugelfisch' || currentCardFarbe !== 'roter') {
  
  if (currentCardFisch === 'Forelle' || currentCardFisch === 'Krake') {
    currentCardFarbe = currentCardFarbe.slice(0, currentCardFarbe.length - 1)
  }
  
  console.log(currentCardFarbe + ' ' + currentCardFisch)
  
  var randomNumberFisch = Math.floor(Math.random() * 4)
  var randomNumberFarbe = Math.floor(Math.random() * 4)
  
  currentCardFisch = cardsFische[randomNumberFisch]
  currentCardFarbe = cardsFarben[randomNumberFarbe]
  
}

console.log('Hab den roten Kugelfisch ;)')