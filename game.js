window.onload = function() {
	var oeuf = document.getElementById("oeuf");

	if(!oeuf) {
		alert("Impossible de charger !");
		return;
	}

	var context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    context.beginPath();
    context.strokeStyle = "#ffd200";
    context.lineWidth = "2";
    context.rect(0,30,798,568);
    context.fillStyle = "#592b03";
    context.fill();
    context.stroke();
};