
function chance(n,b){
var c=0;

for(i=1;i<n+1;i++){

	for(j=0;j<(n-b);j++){

	c += (1/n)*((b/n)**(i-1))*((n-j)/n)**(n-i);
	
	}

}

return c;

}







for(n=4;n<300;n++){
	
	biggestValue = 0;

	for(b=0; b<n ; b++){

		

		if (chance(n,b) > biggestValue){
			biggestValue = chance(n,b);
		}


	}


	if (chance(n,(n-2)) != biggestValue){

		document.write('logical fallacy at n is'+n+'<br>');
	}


}

console.log('finito');

