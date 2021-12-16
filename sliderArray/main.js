let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../sliderArray/assets/1.jpeg';

imgArray[1] = new Image();
imgArray[1].src = '../sliderArray/assets/2.jpeg';

imgArray[2] = new Image();
imgArray[2].src = '../sliderArray/assets/3.jpeg';

imgArray[3] = new Image();
imgArray[3].src = '../sliderArray/assets/4.jpeg';

imgArray[4] = new Image();
imgArray[4].src = '../sliderArray/assets/5.jpeg';
  
let slide = document.getElementById("slide");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let i = 0;
  
slide.src = imgArray[i];
  
//pour aller en avant
btn2.onclick = () => {
  i++;
  if (i > imgArray.length - 1) {
    i = 0;
  }
  slide.src = imgArray[i];
};
  
//pour aller en arrière
btn1.onclick = () => {
  i--;
  if (i < 0) {
    i = imgArray.length - 1;
    }
  slide.src = imgArray[i];
};