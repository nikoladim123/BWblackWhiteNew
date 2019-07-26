// work text
var recentWorkImgDivHtwo = document.getElementsByClassName('recentWorkImgDivHtwo');
var recentWorkImgDiv = document.getElementsByClassName('recentWorkImgDiv');
var recentWorkImgDivHtwoAnim = document.getElementsByClassName('recentWorkImgDivHtwoAnim');
var spanCapital = document.getElementsByClassName('spanCapital');

// recentWorkImgDiv[0].addEventListener('mouseenter',()=>{
//   recentWorkImgDivHtwo[0].style.backgroundPosition = '0%';
// });
function recentWorkText() {
  if(window.innerHeight / 100 * 80 >= recentWorkImgDivHtwo[0].getBoundingClientRect().bottom){
    recentWorkImgDivHtwoAnim[0].style.left = '100%';
    setTimeout(function () {
      recentWorkImgDivHtwo[0].style.opacity = '0.5';

      setTimeout(function () {
        recentWorkImgDivHtwo[0].style.fontSize = '3.5vw';
        spanCapital[0].style.fontSize = '9.76vw';
        spanCapital[1].style.fontSize = '9.76vw';
        recentWorkImgDiv[0].style.marginTop = '18.789vw';
      }, 500);
    }, 500);
  }
}



// davidOmid Italy Fun
var recentImgItaly = document.getElementsByClassName('recentImgItaly');
var recentImgItalyContainer = document.getElementsByClassName('recentImgItalyContainer');


function davidOmidFire() {
  if(window.innerHeight / 100 * 78 >= recentImgItaly[0].getBoundingClientRect().bottom){
    recentImgItalyContainer[0].style.width = '33vw';
  }
}


// picture hover layerinside rnd
var rnd = document.getElementsByClassName('rnd');
var rndInside = document.getElementsByClassName('rndInside');
var rndTextBox = document.getElementsByClassName('rndTextBox');
var rndInsideContent = document.getElementsByClassName('rndInsideContent');
var rndTwoTextBox = document.getElementsByClassName('rndTwoTextBox');
  // rnd1
rnd[0].addEventListener('mouseenter',()=>{
  rndInside[0].style.opacity = '1';
  rndInsideContent[0].style.width = '80%';
  rndInsideContent[0].style.height = '85%';
});

rnd[0].addEventListener('mouseleave',()=>{
  rndInsideContent[0].style.width = '0%';
  rndInsideContent[0].style.height = '0%';
  rndInside[0].style.opacity = '0';
});

  // rnd2
rnd[1].addEventListener('mouseenter',()=>{
  rndInside[1].style.opacity = '1';
  rndInsideContent[1].style.width = '81%';
  rndInsideContent[1].style.height = '85%';
});

rnd[1].addEventListener('mouseleave',()=>{
  rndInsideContent[1].style.width = '0%';
  rndInsideContent[1].style.height = '0%';
  rndInside[1].style.opacity = '0';
});

// davidOmid TEXT
var sideImgText = document.getElementsByClassName('sideImgText');
var rndTwo = document.getElementsByClassName('rndTwo');


function davidOmid() {
  if(window.innerHeight / 100 * 15 < rnd[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '12vw';
  }
  if(window.innerHeight / 100 * 25 > rnd[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '27vw';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 80 > rnd[0].getBoundingClientRect().bottom){
    rndTextBox[0].style.left = '0';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 25 > rndTwo[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '12vw';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 80 > rndTwo[0].getBoundingClientRect().bottom){
    rndTwoTextBox[0].style.left = '0';
  }
}




window.addEventListener("scroll",()=>{
  // recentWorkText();
  davidOmidFire();
  davidOmid();
  console.log(123);
});
