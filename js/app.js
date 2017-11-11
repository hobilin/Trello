var btnAdd = document.getElementById("btnAdd");
document.getElementById("firstForm").style.display = "none";

btnAdd.addEventListener("click", function(){
 var container = document.getElementById("container")
  var containerForm = document.getElementById("firstForm");
  btnAdd.style.display = "none";
  containerForm.style.display = "inline-block";

});
