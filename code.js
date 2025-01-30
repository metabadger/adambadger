// var figure = $(".anim").hover( play, pause );

// function play() {  
//     $('anim', this).get(0).play(); 
// }
// function pause() {
//     $('anim', this).get(0).pause(); 
// }
// function toggleText() {
//     var text = document.getElementById("description");
//     if (text.style.display === "none") {
//       text.style.display = "grid";
//     } else {
//       text.style.display = "none";
//     }
//   }

//   function toggleImage() {
//     var img = document.getElementById("bubble");
//     if (img.style.display === "none") {
//       img.style.display = "flex";
    
//     } else {
//       img.style.display = "none";
//     }
//   }

window.onload = choosePic;

var myPix = new Array("ico/gif/badger-ico1.gif", "ico/gif/badger-ico2.gif", "ico/gif/badger-ico3.gif", "ico/gif/badger-ico4.gif", "ico/gif/badger-ico5.gif", "ico/gif/badger-ico6.gif", "ico/gif/badger-ico7.gif", "ico/gif/badger-ico8.gif", "ico/gif/badger-ico9.gif", "ico/gif/badger-ico10.gif", "ico/gif/badger-ico11.gif", "ico/gif/badger-ico12.gif", "ico/gif/badger-ico13.gif", "ico/gif/badger-ico14.gif", );

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("randomLogo").src = myPix[randomNum];
    }