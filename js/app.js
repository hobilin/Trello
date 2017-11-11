document.getElementById("firstForm").style.display = "none";

var btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", function(){
 var container = document.getElementById("container")
  var containerForm = document.getElementById("firstForm");
  btnAdd.style.display = "none";
  containerForm.style.display = "inline-block";
});


var btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", function(){
  var containerForm = document.getElementById("firstForm");
  containerForm.style.display = "none";

  var container = document.getElementById("container")
  var title = document.getElementById("firstInput").value;
  var titleText = document.createTextNode(title);
  var containerTitle = document.createElement("div");
  containerTitle.classList.add("containerTitle");
  var paragraphTitle = document.createElement("p");

  paragraphTitle.appendChild(titleText);
  containerTitle.appendChild(paragraphTitle);
  container.appendChild(containerTitle);

  var containerBtnAddList = document.createElement("div");
  var btnAddList = document.createElement("button");
  var btnAddListText = document.createTextNode("Add a card...")

  btnAddList.appendChild(btnAddListText);
  containerBtnAddList.appendChild(btnAddList);
  container.appendChild(containerBtnAddList);


});
