/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Arkan - 07/19/2019
******************************************/

var quotes = [
  {
    quote: 'I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.',
    source: 'Og Mandino',
    citation: 'University of Success',
    year: '1980'

  },
  {
    quote: 'No man has a good enough memory to be a successful liar.',
    source: 'Abraham Lincoln',
    tags: 'Funny'
  },
  {
    quote: 'Positivity, confidence, and persistence are key in life, so never give up on yourself.',
    source: 'Khalid',
    year: '1993'
  },
  {
    quote: 'Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.',
    source: 'Ileana D\'Cruz',
    tags: 'Love'
  },
  {
    quote: 'One touch of nature makes the whole world kin.',
    source: 'William Shakespeare',
    citation: 'Troilus and Cressida, Act III, Scene iii - Ulysses',
    tags: 'Nature'
  },
];

console.log(quotes);

// Gets a random quotes from quotes array
 
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

// Prints random quotes in 'quote-box' class with it's specific properties


function printQuote(){
  var randomQuote = getRandomQuote();
  var html = '';
  
  changeBackgroundColor();

  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation !== undefined){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.tags !== undefined){
    html += '<span class="tags">' + randomQuote.tags + '</span>';
  } 
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;

}

console.log(printQuote());

// Changes background color randomly

function changeBackgroundColor(){
  var allchar = '0123456789ABCDEF';
  var  randcol= '';
    for(var i=0; i<6; i++){
     randcol += allchar[Math.floor(Math.random() * 16)];
    }
  document.body.style.backgroundColor= '#' + randcol;
}

// Print a new quote in every 20 secs.

setInterval(printQuote, 20000);

// Listen the button and check whether button is clicked, if so it runs 'printQuote' function

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.