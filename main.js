var items = ['rock','paper','scissors']; //puts 3 choices in an array
var computerChoice = items[Math.floor(Math.random()*items.length)];
// console.log(computerChoice);

function choice(event){
	var rps = event.target.id;

	if(rps == 'roc'){
		alert("you chose rock, the computer chose "+computerChoice);
		winner(rps, computerChoice);
	} else if (rps == 'pap') {
		alert("You chose paper the computer chose "+computerChoice);
		winner(rps, computerChoice);
	} else if(rps == 'sciz'){
		alert("You chose scissors the computer chose "+computerChoice);
		winner(rps, computerChoice);
	} else{
		alert("Try again");
	}
}

function winner(rps, computerChoice){
	if(rps == computerChoice){
		document.getElementById('msg').innerHTML = '<h2> Its a tie </h2>';
		// console.log('???');
	}
	else if(rps == 'pap' && computerChoice == 'rock'){
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
	}
	else if(rps == 'pap' && computerChoice == 'scissors'){
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
	}
	else if(rps == 'roc' && computerChoice == 'paper'){
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
	}
	else if(rps == 'roc' && computerChoice == 'scissors'){
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
	}
	else if(rps == 'sciz' && computerChoice == 'rock'){
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
	}
	else if(rps == 'sciz' && computerChoice == 'paper'){
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
	}
}