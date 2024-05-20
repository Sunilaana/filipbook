// counter

var num1 = setInterval(projectDone, 10)
var count1 = 3100;

function projectDone(){
    count1++;
    document.querySelector("#number1").innerHTML= count1;
    // stop condition
    if(count1 == 3500){
        clearInterval(num1);
    }
};

var num2 = setInterval(projectDone2, 10)
var count2 = 1500;

function projectDone2(){
    count2++;
    document.querySelector("#number2").innerHTML= count2;
    // stop condition
    if(count2 == 1850){
        clearInterval(num2);
    }
};

var num3 = setInterval(projectDone3, 10)
var count3 = 1800;

function projectDone3(){
    count3++;
    document.querySelector("#number3").innerHTML= count3;
    // stop condition
    if(count3 == 2100){
        clearInterval(num3);
    }
};


var num4 = setInterval(projectDone4, 10)
var count4 = 12;

function projectDone4(){
    count4++;
    document.querySelector("#number4").innerHTML= count4;
    // stop condition
    if(count4 == 350){
        clearInterval(num4);
    }
};

//search bar//
	document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const cards = document.querySelectorAll('.cards');

  function filterIcons(searchQuery) {
	  const nothingfound = document.getElementById("nothing-alert");
	  let number = 0;
		cards.forEach(function (card) {
      const name = card.querySelector("h2").textContent.toLowerCase();

      if (name.includes(searchQuery.toLowerCase())) {
		 nothingfound.style.display = "none";
        card.style.display = "flex";
		number++;
      } else {
        card.style.display = "none";
      }
    });
	if(number == 0){
		nothingfound.style.display = "block";
	}
  }

  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterIcons(searchQuery);
  });
});

//book//
	var right = document.getElementsByClassName("right");
		var si = right.length;
		var z=1;
		turnRight();
		function turnRight()
		{
			if(si>=1){
				si--;
			}
			else{
				si=right.length-1;
				function sttmot(i){
					setTimeout(function(){right[i].style.zIndex="auto";},300);
				}
				for(var i=0;i<right.length;i++){
					right[i].className="right";
					sttmot(i);
					z=1;
				}
			}
			right[si].classList.add("flip");
			z++;
			right[si].style.zIndex=z;
		}
		function turnLeft()
		{
			if(si<right.length){
				si++;
			}
			else{
				si=1;
				for(var i=right.length-1;i>0;i--){
					right[i].classList.add("flip");
					right[i].style.zIndex=right.length+1-i;
				}
			}
			right[si-1].className="right";
			setTimeout(function(){right[si-1].style.zIndex="auto";},350);
		}