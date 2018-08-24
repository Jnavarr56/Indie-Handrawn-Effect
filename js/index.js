let numberGenerator = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval (()=>{
  for (var x in document.getElementsByClassName("circle")) {
    if (Number(x) >= 0) {
      var top = numberGenerator(3, 1);
      var left = numberGenerator(3, 1);
      var right = numberGenerator(3, 1);
      var bottom = numberGenerator(3, 1);
      var midTop = numberGenerator(2, -2);
      var midLeft = numberGenerator(2, -2);      
      document.getElementById("intersection").style.left = `${470 + midLeft}px`;
      document.getElementById("intersection").style.top = `${440 + midTop}px`;
      document.getElementsByClassName("circle")[x].style.borderWidth = `${top}px ${right}px ${bottom}px ${left}px`;
    }  
  }
}, 100);

setInterval (()=>{
  for (var x in document.getElementsByClassName("circle")) {
    if (Number(x) >= 0) {
      var spin = numberGenerator(1, 0);
      var lLRadius = numberGenerator(50, 45);
      var lRRadius = numberGenerator(50, 45);
      var rLRadius = numberGenerator(50, 45);
      var rRRadius = numberGenerator(50, 45);
      document.getElementsByClassName("circle")[x].style.borderRadius = `${lLRadius}% ${lRRadius}% ${rLRadius}% ${rRRadius}%`;
      if (spin) {
        document.getElementsByClassName("circle")[x].classList.remove("spinL");
        document.getElementsByClassName("circle")[x].classList.add("spinR");
        
        document.getElementsByClassName("circle")[x].children[0].classList.remove("spinR");
        document.getElementsByClassName("circle")[x].children[0].classList.add("spinL");
      }
      else {
        document.getElementsByClassName("circle")[x].classList.remove("spinR");
        document.getElementsByClassName("circle")[x].classList.add("spinL");
        
        document.getElementsByClassName("circle")[x].children[0].classList.remove("spinL");
        document.getElementsByClassName("circle")[x].children[0].classList.add("spinR");
      }
    }  
  }
}, 10);