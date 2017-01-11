// create word list with array
for(var k=0;k<26;k++){
	var letter=String.fromCharCode(k+65);
	// console.log(letter);
	$('#letter-buttons').append('<button>'+letter+'</button');
}

var wordList=["apple", "banana", "grape", "watermelon", "peach"];
//this is how to get a random word in javascript with math function
// mutiplied with the wordList.length to drop the decimal
 var word=wordList[Math.floor(Math.random()*wordList.length)];
// alert(word);
// treat the string word as a array
for( var i=0; i<word.length; i++){
	//for each letter add _ , underscore
	$('#blanks').append("<span>_</span");

}
// button inside the div :  #letter-buttons button
//set remaining guesses
var remainingGuesses=10;

$('#letter-buttons button').on('click',function(){

// "this" refers to specific button clicked on
//also disable button so user clicks one button once
  	$(this).prop("disabled","true");
  	$(this).addClass("completed");
  	var wefoundOne=false;
    //didnt find a letter yet
	var showLetter=$(this).html();
	// alert(showLetter);
	//look at each letter one at a time, use another four loop!
	for(var j=0; j<word.length; j++){
		if(word[j].toLowerCase()===showLetter.toLowerCase())
		{
			// if this showLetter is equal to the word that was guessed with the math generrator

			//fill in the blank

			//subtract 1 from remainingGusses

			//update in html(); and eq finds index
				$('#blanks span').eq(j).html(showLetter);
		   // if found one, a match between word[j] and showLetter
	 		wefoundOne=true;
		}
			

	}
    //when we are done with loop if we didnt fill in any or one blank(s)
   if(!wefoundOne){
   	remainingGuesses--;
   	// let user know how many guesses they have left
   	alert("Wrong! Remaining guesses:"+ remainingGuesses);
   }
	
});
