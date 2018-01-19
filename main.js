var items = ['roc','pap','sciz']; //puts 3 choices in an array
var userCount = 0;
var computerCount = 0;

// console.log(computerChoice);

function choice(event){
	var computerChoice = items[Math.floor(Math.random()*items.length)];
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
	}
	else if(rps == 'pap' && computerChoice == 'roc'){
		userCount = userCount + 1;
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
		document.getElementById('you').innerText = userCount.toString();
	}
	else if(rps == 'pap' && computerChoice == 'sciz'){
		computerCount += 1;
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
		document.getElementById('comp').innerText = computerCount.toString();
		
	}
	else if(rps == 'roc' && computerChoice == 'pap'){
		computerCount += 1;
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
		document.getElementById('comp').innerText = computerCount.toString();
	}
	else if(rps == 'roc' && computerChoice == 'sciz'){
		userCount = userCount + 1;
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
		document.getElementById('you').innerText = userCount.toString();
	}
	else if(rps == 'sciz' && computerChoice == 'roc'){
		computerCount += 1;
		document.getElementById('msg').innerHTML = '<h2> You lose </h2>';
		document.getElementById('comp').innerText = computerCount.toString();
	}
	else if(rps == 'sciz' && computerChoice == 'pap'){
		userCount = userCount + 1;
		document.getElementById('msg').innerHTML = '<h2> You win </h2>';
		document.getElementById('you').innerText = userCount.toString();
	}
}
