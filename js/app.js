//para que nos e muestre el formulario antes de que se cliquee en el botón add a list.
document.getElementById("firstForm").style.display = "none";
//sección que contiene todas las listas
var section = document.getElementById("section");

//primera función a ejecutar cuando se cliquee en el botón add a list.
var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function(){
 var containerForm = document.getElementById("containerForm")
  var containerForm = document.getElementById("firstForm");
  btnAdd.style.display = "none";
  containerForm.style.display = "inline-block";

  //función para regresar a add a list cuando se cliquea en la x
  var firstEx = document.getElementById("firstEx");
  firstEx.addEventListener("click", function(){
    containerForm.style.display = "none";
    btnAdd.style.display = 'inline-block';
  })
});

//segunda función a ejecutar cuando se cliquee el botón save.
var btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function(){
  var containerList = document.getElementById("containerList");
  document.getElementById("containerForm").style.float = "left";
  document.getElementById("containerList").style.float = "left";

  var title = document.getElementById("firstInput").value;
  document.getElementById("firstInput").value = "";
  var titleText = document.createTextNode(title);
  var ellipsis = document.createElement("i");
    ellipsis.classList.add('fa', 'fa-ellipsis-h');
  var containerTask = document.createElement("div");
  containerTask.classList.add("containerTask");
  var paragraphTitle = document.createElement("p");
  paragraphTitle.classList.add("paragraphTitle");

  paragraphTitle.appendChild(titleText);
  paragraphTitle.appendChild(ellipsis);
  containerTask.appendChild(paragraphTitle);
  containerList.appendChild(containerTask);


  var containerBtnAddCard = document.createElement('div');
  var btnAddCard = document.createElement('a');
  btnAddCard.classList.add("btnAddCard");
  var btnAddCardText = document.createTextNode('Add a card...');
  containerBtnAddCard.classList.add('containerBtnAddCard');

  btnAddCard.appendChild(btnAddCardText);
  containerBtnAddCard.appendChild(btnAddCard);
  containerTask.appendChild(containerBtnAddCard);


//tercera función a ejecutar cuando se cliquee el botón add a card
  btnAddCard.addEventListener('click', function(){
    containerBtnAddCard.style.display='none';
    var containerTextarea = document.createElement("div");
    containerTextarea.classList.add("containerTextarea");
    var textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    var btnAddList = document.createElement("button");
    btnAddList.classList.add("btnAddList");
    var btnAddListText = document.createTextNode("Add");
    var ex = document.createElement("i");
    ex.classList.add('fa', 'fa-times', 'times');

    btnAddList.appendChild(btnAddListText);
    containerTextarea.appendChild(textarea);
    containerTextarea.appendChild(btnAddList);
    containerTextarea.appendChild(ex);
    containerTask.appendChild(containerTextarea);

//función para regresar a add a card cuando se cliquea en la x
ex.addEventListener("click", function(){
  containerTextarea.style.display = "none";
  containerBtnAddCard.style.display = 'inline-block';
})


//cuarta función a ejecutar cuando se cliquee el botón add.
    btnAddList.addEventListener("click", function(){
      var textareaValue = textarea.value;
      textarea.value = "";
      var textareaText = document.createTextNode(textareaValue);
      var pencil = document.createElement("i");
      pencil.classList.add('fa', 'fa-pencil', 'pencil');
      var textareaParagraph = document.createElement("p");
      textareaParagraph.classList.add("textareaParagraph");
      var containerTextareaParagraph = document.createElement("div");
      containerTextareaParagraph.classList.add("containerTextareaParagraph");

      textareaParagraph.appendChild(textareaText);
      textareaParagraph.appendChild(pencil);
      containerTask.insertBefore(textareaParagraph, containerTextarea);
      containerTask.insertBefore(textareaParagraph, containerBtnAddCard);



    })
 })
   section.insertBefore(containerList, containerForm);
})
