var partOne = ["It's all the", "Excessive", "They won't give up", "Overspending on", "Overpriced"]
var partTwo = ["rainbow", "glitter", "goat", "dog", "artisanal", "avocado", "designer", "eco-friendly"]
var partThree = ["yoga", "lattes", "parties", "weddings", "cupcakes", "man&nbsp;buns", "beer", "iPhones"]

// alert(Math.random())
window.onload = function(){
  var answer = "".concat(partOne[Math.floor(Math.random() * partOne.length)], " ", partTwo[Math.floor(Math.random() * partTwo.length)], "&nbsp;", partThree[Math.floor(Math.random() * partThree.length)], ".")
  document.getElementById("answer").innerHTML = answer;
}
