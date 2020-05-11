
// assign color to squares
var colors =[
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)"
];
// Math.floor(Math.random()*255)

// assign RGB string to the title
var color_str = document.querySelector("#rgb_str");

// get a random color from the color list
random_i=Math.floor(Math.random()*5)
color_str.textContent = colors[random_i];

// select all the squares
squares = document.querySelectorAll(".square");

// squares
for (var i = squares.length - 1; i >= 0; i--) {
	// add color to square
	squares[i].style.backgroundColor = colors[i];

	// add click listener
	squares[i].addEventListener("click", function(){
		// get color of the square
		var picked_color = this.style.backgroundColor;

		// compare the color with picked color
		if (picked_color===colors[random_i]) {
			alert("correct!!");
		} else {
			alert("Wrong!!!");
		};

	})
};
 


