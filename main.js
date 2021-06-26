var menuDurum = 0;
// Sayfa Yüklendiğinde menu div'i kapalı olacak.

function menuDegistir(){

var menuObj = document.getElementById("menu");
if(menuDurum == 0){

menuObj.style.display = "block";
menuDurum = 1;

}

else{

menuObj.style.display = "none";
menuDurum = 0;

}

}