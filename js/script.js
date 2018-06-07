function prendiPosizione()
{
	var pos = $('#posizione').attr("position");

	$('.testo').attr("value", Math.round(pos.x) + " " + Math.round(pos.y) + " " + Math.round(pos.z));
}