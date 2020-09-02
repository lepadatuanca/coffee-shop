const list = document.getElementById('list');

/*
function getCoffee() {

      fetch('http://localhost:3000/coffee')
        .then(function (response) {
            
            response.json().then(function (coffee) {
                appendToDOM(coffee);
            });
        });
        
};



function appendToDOM(coffee) {
    for (let i = 0; i < coffee.length; i++) {
       
       var idx = i + 1;
        //create elements
        let img = document.createElement('img');
        img.src = coffee[i].img;
        img.className = "gallery-img"; 
		
		let fig = document.createElement('figure');
        fig.className = "gallery-item-" + idx;
		fig.appendChild(img);
		
     
        list.appendChild(fig);
    }
}
*/

var grade = ["How intense?"];
var star = ["*"];
var aroma = grade.concat(star);
aroma = grade.concat(" ");
document.getElementById("question").innerHTML = aroma;

function myFunction1() {
  star.push("*");
  document.getElementById("intense").innerHTML = star;
}

function myFunction2() {
  star.pop();
  document.getElementById("intense").innerHTML = star;
}

 getCoffee();
