function players()
{
  var p1=document.getElementById("p1").value;
  var p2=document.getElementById("p2").value;
  if((p1==" "||p1=="")||(p2=="" || p2==" "))
  {
    alert("Please enter names first !!!");
  }
  else {
    alert(p1+" will start with X and \r\n"+p2+" will start with O");
    next();
  }
  //export{p1,p2};
}
function next()
{
  window.open("page3.html","_self");
}

