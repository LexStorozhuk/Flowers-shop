function popOpen() {
    let  one = document.querySelector(".pop");
     one.style.display = "block";
}
 function closePop() {
    let  one = document.querySelector(".pop");
    one.style.display = "none"; 
 }
 function openMain () {
   let one = document.querySelector(".main");
   two = document.querySelector(".intro")
   one.style.display = "block";
   two.style.display ="none"
 }
 let map = 0;
 function openLocation() {
  map++;
  let two= document.querySelector(".map_pop")
  three = document.querySelector(".map_pop");

  two.style.display="block"
  three.style.animation="right_to_left 3s"

if (map > 1) {
 let three = document.querySelector(".map_pop");

  three.style.animation="left_to_right 3s forwards  "
  map=0;
}
 }