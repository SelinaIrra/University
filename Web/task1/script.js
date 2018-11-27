var doc = document;


function setBackgroundColor() {
	var color1 = doc.querySelectorAll('input')[0];
	var color2 = doc.querySelectorAll('input')[1];
	doc.body.style = '--color1:' + color1.value + '; --color2:' + color2.value;
}

function setHeaderColor() {
	var color = doc.querySelectorAll('input')[2];
	doc.querySelector('header').style = 'background:' + color.value;
}

function setBorderImg() {
	var select = doc.querySelector('#borderImg select');
	var width = doc.querySelectorAll('input')[3];
	var color = doc.querySelectorAll('input')[4];
	doc.querySelectorAll('img')[1].style = 'border-style:' + select.value + '; border-color:' + color.value + '; border-width:' + width.value + 'px;';
}

doc.querySelector('#background select').onclick = function(){
	var select = doc.querySelector('#background select');
	doc.body.className = doc.body.className.replace(/background_.+/, select.value);
};

doc.querySelector('#font select').onclick = function(){
	var select = doc.querySelector('#font select');
	doc.body.style = 'font-family:' + select.value;
};

$(document).ready(function(){
			$("#menu").click(function(){
				$(".settings").slideDown(function(){
					$(".settings").css('display', 'flex');
				}); 
			});

			$("button.btn_close").click(function(){
				$(".settings").slideUp();
			});
		});