function buttonAlert(){
	alert("Hello, world!");
	document.getElementById("textBox").style.fontSize = "24pt";
}

function fancify(){
	alert("Fancify!");
	document.getElementById("textBox").style.fontWeight = "bold";
	document.getElementById("textBox").style.textDecoration = "underline";
	document.getElementById("textBox").style.color = "blue";	
}

function boring(){
	alert("Boring!");
	document.getElementById("textBox").style.fontWeight = "normal";
}

function uppercase(){
	alert("Moo.");
	var str = document.getElementById("textBox").value;
	var parts = str.split(" ");

	// Check for period indicating a sentence
	for (let i = 0; i < parts.length; i++) {
		if (parts[i].endsWith(".")) {
			parts[i] = parts[i] + "-Moo";
		}
	}
	str = parts.join(" ");
	document.getElementById("textBox").value = str;
}