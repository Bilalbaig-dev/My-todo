const todoElement=document.querySelector('.input-todo');
const dateElement=document.querySelector('.input-date');
let display=document.querySelector('.js-display');
let dataBase=[];

        
    function getData(){
      if(todoElement.value===''||dateElement.value===''){
         return;
      }
          let object={
            name:todoElement.value,
            date:dateElement.value
        }
        dataBase.push(object); 
      render();
    }
  
  function render(){
       display.innerHTML='';
      for(let i=0;i<dataBase.length;i++){
      display.innerHTML+=`
    <div class="todo-container">
      <h4>${dataBase[i].name}</h4>
      <h4>${dataBase[i].date}</h4>
      <button id="red" class="btn"
     onclick="
      deleteBtn(${i})
      "
      >Delete</button>
    </div>`;
    }
  }
  function deleteBtn(index){
   dataBase.splice(index,1);
   render();
  }

 