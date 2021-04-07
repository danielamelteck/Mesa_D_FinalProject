(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);

//console.log(planSelectorNav.length);
		
})();

let surround = document.querySelector('#Product-1');
let surround2 = document.querySelector('#Product-2');
let surround3 = document.querySelector('#Product-3');
let surround4 = document.querySelector('#Product-4');

//functions--add console.log

function show() {
  let welcome = document.querySelector('#sub1');
  welcome.style.display = '';
}

function hide() {
  let welcome = document.querySelector('#sub1');
  welcome.style.display = 'none';
}

function show2() {
  let welcome = document.querySelector('#sub2');
  welcome.style.display = '';
}

function hide2() {
  let welcome = document.querySelector('#sub2');
  welcome.style.display = 'none';
}

function show3() {
  let welcome = document.querySelector('#sub3');
  welcome.style.display = '';
}

function hide3() {
  let welcome = document.querySelector('#sub3');
  welcome.style.display = 'none';

}

function show4() {
  let welcome = document.querySelector('#sub4');
  welcome.style.display = '';
}

function hide4() {
  let welcome = document.querySelector('#sub4');
  welcome.style.display = 'none';
}


surround.addEventListener("mouseover", show);
surround.addEventListener("mouseout", hide);

surround2.addEventListener("mouseover", show2);
surround2.addEventListener("mouseout", hide2);

surround3.addEventListener("mouseover", show3);
surround3.addEventListener("mouseout", hide3);

surround4.addEventListener("mouseover", show4);
surround4.addEventListener("mouseout", hide4);


