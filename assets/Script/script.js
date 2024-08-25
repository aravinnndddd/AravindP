// Enter name

$("a").click(function(){
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
    });
    function EnterName(){
      let userName =prompt("Enter your name to see Magic");
              if (userName != null) {
                  document.getElementById("name-add").innerHTML = `${userName.charAt(0).toUpperCase()+ userName.slice(1).toLowerCase()}, `;
  }
    }

// Navbar scroll events

    window.addEventListener('scroll', scrollEv);

    function scrollEv() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const nav = document.querySelector("#nav");
        if (scrollTop >= 100) {
            nav.style="height:40px;margin-top:1px;";
        } else {
          nav.style="height:70px;margin-top:20px;";

        }
    }
    
// Dark mode and Light mode

let darkmode = document.querySelector(".Dmode")
darkmode.onclick=function(){

  document.querySelector(".Dmode").style.display="none";
  document.querySelector(".Lmode").style.display="block";
  document.querySelector("div#Work.art-works.block3").style.backgroundColor="black";
  document.querySelector("#project").style.backgroundColor="black";
  document.querySelector("#About").style.backgroundColor="black";
  document.querySelector(".about p").style.color="white";
  document.querySelector("#nav").style="filter:drop-shadow(4px 0px 10px white)";
  document.querySelector("#nav a").style.color="white";
  
}
let lightmode = document.querySelector(".Lmode")
lightmode.onclick=function(){

  document.querySelector(".Lmode").style.display="none";
  document.querySelector(".Dmode").style.display="block";
  document.querySelector("div#Work.art-works.block3").style.backgroundColor="";
  document.querySelector("#project").style.backgroundColor="";
  document.querySelector("#About").style.backgroundColor="";
  document.querySelector(".about p").style.color="";
  document.querySelector("#nav").style="filter:drop-shadow(4px 0px 19px black)";
  document.querySelector("#nav a").style.color="black";
}