/** THIS IS A COMMENT IN JAVASCRIPT **/
//YOU CAN ALSO DO THIS.

function test(){
	//ALERT BOX ASKS FOR INPUT OF THE CAT PHOTO
	var w = prompt("Enter Width: ");
	var h = prompt("Enter Height: ");
	//CREATE THE URL FOR THE API ADDRESS YOU WANT
	var placeKitten = "http://placekitten.com/" + w + "/" + h;

	alert("You said " + w + " x " + h);
 	return placeKitten;
}//END TEST

function openPhoto(){
	//ALERT BOX ASKS FOR INPUT OF THE CAT PHOTO
	var w = prompt("Enter Width: ");
	var h = prompt("Enter Height: ");
	//CREATE THE URL FOR THE API ADDRESS YOU WANT
	var placeKitten = "http://placekitten.com/" + w + "/" + h;
	//CREATE THE PHOTO
	var img = document.createElement("img");
    img.src = placeKitten;
    img.width = w;
    img.height = h;
    //ADD PHOTO TO THE <body> TAG
    document.body.appendChild(img);
}