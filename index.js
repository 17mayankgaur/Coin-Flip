
var randomNumber2=Math.floor(Math.random()*2)+1;
var randomImageSource2="images/coin"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource2);

function refresh()//Use to refresh the page onclick
{location.reload();}
