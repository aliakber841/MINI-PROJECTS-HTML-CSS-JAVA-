const todolist=[{
  name:'make dinner',
  duedate: '2022-12-22'},
{
  name:'wash dishes',
  duedate: '2022-12-22'
}
];

rendertodolist();

      function rendertodolist(){
      let todolistHtml='';

      todolist.forEach((todoObject,index)=>{    
       const{name,duedate}=todoObject;
       const html=`
      <div class="data">${name} </div>
      <div class="data"> ${duedate} </div>
        <button class="delete-todo-button js-delete-todo-button" ><span>Delete</span></button>
      `;
      
       todolistHtml+=html;
      });
      document.querySelector('.js-todolist').innerHTML=todolistHtml;

      document.querySelectorAll('.js-delete-todo-button')
      .forEach((deletebutton,index)=>{
         deletebutton.addEventListener('click',()=>{
          todolist.splice(index,1);
        rendertodolist();
         });
      })
      }

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateinputElement=document.querySelector('.js-duedate-input');
  const duedate=dateinputElement.value;
  todolist.push({
    name,
    duedate
  })
  
  inputElement.value='';

  rendertodolist();
}
document.querySelector('.js-add-todo-button')
.addEventListener('click',()=>{
addTodo();
});

const add= document.querySelector(".add-todo-button");
add.addEventListener("mouseover"),function(event){
   const x= (event.pageX - add.offsetLeft)
    const y = (event.pageY - add.offsetTop);

     add.style.setProperty("--xPos", x, "px")
    add.style.setProperty("--yPos", y + "px");
}
