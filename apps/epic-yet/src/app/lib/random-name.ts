const funnyNames = ['Brah', 'Brodawg', 'Homie', 'Woadie', 'Grrl', 'Boi']
export const randomFunnyName = function() {
  return funnyNames[Math.floor(Math.random() % funnyNames.length)%funnyNames.length];
}