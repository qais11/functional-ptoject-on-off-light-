var on = document.getElementsByClassName('on');
var off = document.getElementsByClassName('off');

function turnOn(){
off[0].style.display="none";
on[0].style.display="inline-block";
}

function turnOff(){
  on[0].style.display="none";
  off[0].style.display="inline-block";
}
