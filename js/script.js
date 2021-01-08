var quotes = [
   'BlindFold Drawing',
  'Reading out alphabets in a reverse order',
  'Guess the song lyrics while wearing headphones',
  'Do a modelwalk/catwalk in the mp hall',
  'Read a paragraph with mouthful of chocolates',
  'Sing a song',
  'Narrate a ghost story'
]

function getQuote() {
  var randNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[randNum];
}
