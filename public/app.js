var Quote = function(text,author){
  this.text = text;
  this.author = author; 
};

Quote.prototype = {

};

var ricksQuote = new Quote("Cool"," Rick");
var valQuote = new Quote("A magical land full of magic","Valerie");
var jayQuote = new Quote("Functino!"," Jay");
var keithQuote = new Quote("No Blockers"," Keith");
var marcQuote = new Quote("Agile"," Marc");

var AllQuotes = function(){
  this.quotes = [ricksQuote,valQuote,jayQuote,keithQuote,marcQuote];
  this.listAt = 0;
};

AllQuotes.prototype = {
  addQuote: function(text,author){
    quote = new Quote(text,author);
    this.quotes.push(quote);
  },
  listQuote: function(){
    var quoteList = document.getElementById("quote-list");
    for( this.listAt; this.listAt < this.quotes.length; this.listAt++){
      var article = document.createElement("article");
      var newQuote = document.createElement("blockquote");
      var newCite = document.createElement("cite");
      newQuote.innerText = this.quotes[this.listAt].text; 
      newCite.innerText = " " + this.quotes[this.listAt].author;
      quoteList.appendChild(article);
      article.appendChild(newQuote);
      newQuote.appendChild(newCite);
    }
  }

  
  }


var init = function(){
    var pageQuotes = new AllQuotes();
     pageQuotes.listQuote();
     
     var click = function(e){
      e.preventDefault();
      var userTextInput = document.getElementById('quote-text-input').value;
      var userAuthorInput = document.getElementById('quote-author-input').value;
      pageQuotes.addQuote(userTextInput,userAuthorInput);
      pageQuotes.listQuote();
     };
    
    var button = document.getElementById("user-quote-button");
    button.onclick = click;

   
  }

window.onload = init;