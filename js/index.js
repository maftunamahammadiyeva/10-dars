const elForm = document.querySelector (".form");
const elInput = document.querySelector (".input");
const elFormInput = document.querySelector (".form__input");
const elContainer = document.querySelector (".container");
const todos =[]
 elForm.addEventListener ("submit", function (evt){
   evt.preventDefault()
   const todoValue = elInput.value;
   const nameValue = elFormInput.value;

   const list ={
    name:nameValue,
    todo:todoValue
   }
   todos.push(list);
  //  todoValue=null;
  //  nameValue=null;
   for (let tod of todos){
     let nameP=document.createElement("p");

     elContainer.appendChild(nameP)
     nameP.textContent=`${tod.name} (${tod.todo})`

     nameP.style.color="blue"
   }

 })