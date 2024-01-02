const quotes = [
	{ 
		"quote" : "The only sin is ignorance", 
		"author" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"author" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"author" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"author" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"author" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine", 
		"author" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"author" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"author" : "Desiderius Erasmus"
	}
]

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

function newQuote(){
    let index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index].quote;
    author.textContent = "- " + quotes[index].author;
}

btn.addEventListener("click",newQuote);