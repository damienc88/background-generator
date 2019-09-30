var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";	
	//textContent is also a property like createTextNode, innerHTML, etc.
	css.textContent = body.style.background + ";";
}

/*The alternative is to include onclick OR oninput="function()" under the HTML file. But to keep it clean (separations of concerns), we've kept it separated).
Also, the HTML onclick or oninput="function()" only allows for 1 function to be attached to it.
EXAMPLE: <input oninput="setGradient()" class="color2" type="color" name="color1" value="#ff0000">*/
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);