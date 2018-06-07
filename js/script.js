window.onload = function()
{
	
}

function prendiPosizione()
{
	var pos = $('#posizione').attr("position");

	$('.testo').attr("value", Math.round(pos.x) + " " + Math.round(pos.y) + " " + Math.round(pos.z));
}
/*
function posizioneCamera()
{
	var pos = $('#posizione').attr("position");

	$('.testo').attr('rotation', '0 ' + (Math.PI/2)-(Math.atan(Math.abs(pos.x)/Math.abs(pos.y))) + ' 0');
}
*/

function posizioneCamera()
{/*
	var pos = $('#posizione').attr("position");

	$('#posizione').attr("position", Math.round(pos.x) + " " + Math.round(pos.y) + " " + Math.round(pos.z));*/
}

