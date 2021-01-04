function players()
{
  let p1=document.getElementById("p1").value;
  let p2=document.getElementById("p2").value;
  alert(p1+" will start with X and \r\n"+p2+" will start with O");
  //export{p1,p2};
  next();
}
function next()
{
  window.open("page3.html","_self");
}
