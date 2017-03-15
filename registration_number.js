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



function filterAdd() {
  //var opt all,capeTown, bellville, paarl, gauteng, li;
  var opt = document.getElementById("option").value;
  allReg = document.getElementById("all").innerHTML;
  cape = document.getElementById("capeTown").innerHTML;
  bels = document.getElementById("bellville").innerHTML;
  paarl = document.getElementById("paarl").innerHTML;
  gau = document.getElementById("gauteng").innerHTML;
  list = document.getElementsByTagName("li");

for(var i =0; i<list.length; i++){
  var curElem = list[i];
  var x = list[i].textContent.toUpperCase();
  if(opt === allReg){
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
