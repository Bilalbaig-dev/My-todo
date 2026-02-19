const todoElement=document.querySelector('.input-todo');
const dateElement=document.querySelector('.input-date');
   let dataBase=[];
let display=document.querySelector('.js-display');
        
    function getData(){
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
      <h4>${dataBase[i].name}</h4>
      <h4>${dataBase[i].date}</h4>
      <button id="red" class="btn" onclick="
      deleteBtn(${i})
      ">Delete</button>
      `;
    }
  }
  function deleteBtn(index){
   dataBase.splice(index,1);
   return render();
  }