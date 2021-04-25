function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function myFunction2() {
    var x = document.getElementById("myLinks2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 //add image in 1 column//

  function myFunctionWelurOne() {
var img = document.createElement("img");
img.src = "gallery/welur1.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
 document.getElementById("demo-describe").innerHTML = "Welur-1";
}
  function myFunctionWelurTwo() {
var img = document.createElement("img");
img.src = "gallery/welur2.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Welur-2";
}
  function myFunctionWelurThree() {
var img = document.createElement("img");
img.src = "gallery/welur3.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Welur-3";
}
////
function myFunctionPlecionkaOne() {
var img = document.createElement("img");
img.src = "gallery/plecionka1.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Plecionka-1";
}
  function myFunctionPlecionkaTwo() {
var img = document.createElement("img");
img.src = "gallery/plecionka2.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Plecionka-2";
}
  function myFunctionPlecionkaThree() {
var img = document.createElement("img");
img.src = "gallery/plecionka3.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Plecionka-3";
}
///
  function myFunctionNobukOne() {
var img = document.createElement("img");
img.src = "gallery/nobuk1.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Nobuk-1";
}
  function myFunctionNobukTwo() {
var img = document.createElement("img");
img.src = "gallery/nobuk2.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Nobuk-2";
}
  function myFunctionNobukThree() {
var img = document.createElement("img");
img.src = "gallery/nobuk3.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Nobuk-3";
}
///
  function myFunctionMikroOne() {
var img = document.createElement("img");
img.src = "gallery/mikrofibra1.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Mikrofibra-1";
}
  function myFunctionMikroTwo() {
var img = document.createElement("img");
img.src = "gallery/mikrofibra2.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Mikrofibra-2";
}
  function myFunctionMikroThree() {
var img = document.createElement("img");
img.src = "gallery/mikrofibra3.jpg";
var src = document.getElementById("demo");
src.appendChild(img);
document.getElementById("demo-describe").innerHTML = "Mikrofibra-3";
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


filterSelection2("all")
function filterSelection2(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}





function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


////////modal/////


