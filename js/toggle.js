// let menu = document.querySelector('.menu');
// let btn = menu.querySelector('.gg-menu');
// btn.addEventListener('click', evt => {
// 	menu.classList.toggle('active');
// })
function openNav(){
//     // document.getElementById("mobile");
    document.getElementById("navmob").style.display="block";
    document.getElementById("opennav").style.display="none";
    document.getElementById("refnav").style.display="none";
    // document.getElementsById("iconmobile").style.display="none"; 


}
function closeNav(){
    //     // document.getElementById("mobile");
        document.getElementById("navmob").style.display="none";
        document.getElementById("opennav").style.display="grid";
        document.getElementById("refnav").style.display="grid";
        // document.getElementsById("iconmobile").style.display="grid";
    }
// function openNav(){
//   let y = document.getElementsByClassName("nav-toggle");
// //   let x = document.getElementsByClassName("active");
//     if (y.style.display === "none") {
//         onclick.y.style.display = "block";    
//     }
//      else 
//     {
//     y.style.display = "none";
//     }
// }