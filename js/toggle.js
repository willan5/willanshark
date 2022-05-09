function openNav(){

    document.getElementById("navmob").style.display="block";
    document.getElementById("opennav").style.display="none";
    document.getElementById("refnav").style.display="none";
    //document.getElementsById("iconmobile").style.display="none"; 

}
function closeNav(){
        document.getElementById("navmob").style.display="none";
        document.getElementById("opennav").style.display="grid";
        document.getElementById("refnav").style.display="grid";
      //  document.getElementsById("iconmobile").style.display="none";
}
function signs(){
    let y=document.getElementById("addsub");
    y.append('<div class="inc button">+</div><div class="dec button"')
}