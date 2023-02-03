const quotes = ["Life is 10% what happens to us and 90% how we react to it.", "The only way to do great work is to love what you do.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Believe you can and you're halfway there.", "It does not matter how slowly you go as long as you do not stop.", "Happiness is not something ready made. It comes from your own actions.", "Positive anything is better than negative nothing.", "Don't watch the clock; do what it does. Keep going.", "Success is not how high you have climbed, but how you make a positive difference to the world.", "The only limit to our realization of tomorrow will be our doubts of today."];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const quote = getRandomQuote();
console.log(quote);