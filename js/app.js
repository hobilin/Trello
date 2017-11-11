document.getElementById("firstForm").style.display = "none";
var section = document.getElementById("section");

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function(){
 var containerForm = document.getElementById("containerForm")
  var containerForm = document.getElementById("firstForm");
  btnAdd.style.display = "none";
  containerForm.style.display = "inline-block";
});

var btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function(){
  var containerList = document.getElementById("containerList");
  document.getElementById("containerForm").style.float = "left";
  document.getElementById("containerList").style.float = "left";

  var title = document.getElementById("firstInput").value;
  document.getElementById("firstInput").value = "";
  var titleText = document.createTextNode(title);
  var containerTask = document.createElement("div");
  containerTask.classList.add("containerTask");
  var paragraphTitle = document.createElement("p");

  paragraphTitle.appendChild(titleText);
  containerTask.appendChild(paragraphTitle);
  containerList.appendChild(containerTask);

containerTask.style.float = "left";

  var containerBtnAddCard = document.createElement('div');
  var btnAddCard = document.createElement('button');
  btnAddCard.classList.add("btnAddCard");
  var btnAddCardText = document.createTextNode('Add a card...');
  containerBtnAddCard.classList.add('containerBtnAddCard');

  btnAddCard.appendChild(btnAddCardText);
  containerBtnAddCard.appendChild(btnAddCard);
  containerTask.appendChild(containerBtnAddCard);



  btnAddCard.addEventListener('click', function(){
    containerBtnAddCard.style.display='none';
    var containerTextarea = document.createElement("div");
    containerTextarea.classList.add("containerTextarea");
    var textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    var btnAddList = document.createElement("button");
    btnAddList.classList.add("btnAddList");
    var btnAddListText = document.createTextNode("Add");

    btnAddList.appendChild(btnAddListText);
    containerTextarea.appendChild(textarea);
    containerTextarea.appendChild(btnAddList);
    containerTask.appendChild(containerTextarea);

    btnAddList.addEventListener("click", function(){
      var textareaValue = textarea.value;
      textarea.value = "";
      var textareaText = document.createTextNode(textareaValue);
      var pencil = document.createElement("i");
        pencil.classList.add('fa', 'fa-pencil', 'pencil');
      var textareaParagraph = document.createElement("p");
      var containerTextareaParagraph = document.createElement("div");

      textareaParagraph.appendChild(textareaText);
      containerTextareaParagraph.appendChild(textareaParagraph);
      containerTextareaParagraph.appendChild(pencil);
      containerTask.insertBefore(containerTextareaParagraph, containerTextarea);
      textareaParagraph.style.display = "inline-block";
      pencil.style.display = "inline-block";


    })
 })
   section.insertBefore(containerList, containerForm);
})
