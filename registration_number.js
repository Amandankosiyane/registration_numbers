var ul = document.getElementById("AddedRegNums")

function clickMe() {
  var a = document.getElementById("user_reg").value;
  if(a.length > 0 && a !== undefined){
    var lists = document.createElement("li");
    lists.textContent = a;
    ul.appendChild(lists);
  }
  document.getElementById("user_reg").value="";
}


//when filter button is clicked
function filterAdd() {
  //declare variables to store the innerHTML option lsit
  //var opt all,capeTown, bellville, paarl, gauteng, li;
  var opt = document.getElementById("option").value;
  allReg = document.getElementById("all").innerHTML;
  cape = document.getElementById("capeTown").innerHTML;
  bels = document.getElementById("bellville").innerHTML;
  paarl = document.getElementById("paarl").innerHTML;
  gau = document.getElementById("gauteng").innerHTML;
  //store the list items
  list = document.getElementsByTagName("li");

for(var i =0; i<list.length; i++){
  //store the looped items
  var curElem = list[i];
  var x = list[i].textContent.toUpperCase();
  //if the filter textbox is typed cape town and the looped list content startsWith "CA"
  if(opt === allReg){
    // display them
    curElem.style.display = "inline-block"
  } else if(opt === cape && x.startsWith("CA")){
    curElem.style.display = "inline-block";
  }else if(opt === bels && x.startsWith("CY")){
    curElem.style.display = "inline-block";
  } else if(opt === paarl && x.startsWith("CJ")){
    curElem.style.display = "inline-block";
  } else if(opt === gau && x.endsWith("GP")){
    curElem.style.display = "inline-block";
  } else {
    curElem.style.display = "none";
  }
}
}
