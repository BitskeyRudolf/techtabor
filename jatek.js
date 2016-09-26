window.onload = function(){
	var labda = document.getElementsByClassName("labda")[0],
		elet = 3,
		pontszam = 0,
		szint = 1,
		sebessegek = [192,144,108,80,60,45],
		kosarak = [10,90,170,250,330,410],
		szin,
		szinek = ["#f00","#0f0","#00f","#f0f","#000","#ff0"],
		oldalsav = document.getElementById("oldal"),
		eletSzamlalo = oldalsav.getElementsByClassName("eletek")[0],
		pontSzamlalo = oldalsav.getElementsByClassName("pontszam")[0],
		szintSzamlalo = oldalsav.getElementsByClassName("szint")[0],
		kontrol = function(par) {
			var labda = document.getElementsByClassName("labda")[0],
				bal = +labda.style.left.slice(0,-2);
			console.log (idozito);
			switch(par.keyCode) {
			case 37:
				if(idozito && bal>10) {
					labda.style.left = bal-20+"px";
				}
				break;
			case 39:
				if(idozito && bal<450) {
					labda.style.left = bal+20+"px";
				}
				break;
			case 83:
				start();
				break;
			case 80:
				if (idozito){
					clearInterval(idozito);
					idozito=null;
					
				} else {
					idozito=setInterval(zutty,sebessegek[szint-1]);		
				} 
				break;
			case 82:
				start();
				clearInterval(idozito);
				idozito=null;
				break;
			}
		},
		zutty = function(){
			var labda = document.getElementsByClassName("labda")[0],
				top = +labda.style.top.slice(0,-2),
				bal;
		
			labda.style.top = top+20+"px";
			if (top == 490){
				bal = +labda.style.left.slice(0,-2);
				if (bal>=kosarak[szin] && bal<=kosarak[szin]+40){
					pontszam+=1;
					if (pontszam%10 == 0 && szint<sebessegek.length) {
						szint+=1;
						szintSzamlalo.innerHTML = szint;
						clearInterval(idozito);
						idozito = null;
						idozito = setInterval(zutty,sebessegek[szint-1]);
					}
					pontSzamlalo.innerHTML = pontszam;
				} else {
					elet-=1;
					eletSzamlalo.innerHTML = elet;
				}
				if (elet == 0) {
					clearInterval(idozito);
					idozito = null;
					if (szint<6){
						document.getElementsByClassName("gameover")[0]
						.innerHTML = "GAME OVER";
						
					} else {
						document.getElementsByClassName("gameover")[0]
						.innerHTML = "Get dunked on";
					}
						
				} else {
					labda.style.left="230px";
					labda.style.top="10px";
					szin = Math.floor(Math.random()*6);
					labda.style.backgroundColor = szinek[szin];
				}
			}
		},
		start = function(){
			document.getElementsByClassName("gameover")[0]
			.innerHTML = "";
			elet = 3;
			pontszam = 0;
			szint = 1;
			eletSzamlalo.innerHTML = elet;
			pontSzamlalo.innerHTML = pontszam;
			szintSzamlalo.innerHTML = szint;
			labda.style.left="230px";
			labda.style.top="10px";
			if(idozito) {
				clearInterval(idozito);
				idozito = null;
			}
			idozito = setInterval(zutty,sebessegek[szint-1]);
		},
		idozito;

	labda.style.left="230px";
	labda.style.top="10px";
	document.getElementsByClassName("kosar piros")[0].style.backgroundColor = szinek[0];
	document.getElementsByClassName("kosar zold")[0].style.backgroundColor = szinek[1];
	document.getElementsByClassName("kosar kek")[0].style.backgroundColor = szinek[2];
	document.getElementsByClassName("kosar lila")[0].style.backgroundColor = szinek[3];
	document.getElementsByClassName("kosar fekete")[0].style.backgroundColor = szinek[4];
	document.getElementsByClassName("kosar sarga")[0].style.backgroundColor = szinek[5];
	szin = Math.floor(Math.random()*6);
	labda.style.backgroundColor = szinek[szin];
	document.onkeydown=kontrol;
}