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


  var containerBtnAddCard = document.createElement('div');
  var btnAddCard = document.createElement('button');
  btnAddCard.classList.add("btnAddCard");
  var btnAddCardText = document.createTextNode('Add a card...');
  containerBtnAddCard.classList.add('containerBtnAddCard');

  btnAddCard.appendChild(btnAddCardText);
  containerBtnAddCard.appendChild(btnAddCard);
  container.appendChild(containerBtnAddCard);


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
    container.appendChild(containerTextarea);

    btnAddList.addEventListener("click", function(){
      var textareaValue = textarea.value;
      textarea.value = "";
      var textareaText = document.createTextNode(textareaValue);
      var textareaParagraph = document.createElement("p");
      var containerTextareaParagraph = document.createElement("div");

      textareaParagraph.appendChild(textareaText);
      containerTextareaParagraph.appendChild(textareaParagraph);
      container.insertBefore(containerTextareaParagraph, containerTextarea);
    })
 })
})
