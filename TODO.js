/* Created by Salma Essam  on 19/08/2024. */
document.querySelector('#push').onclick = function(){
if(document.querySelector('#newTask input').value.length==0){
  alert('Please Enter a Task')
}else{
  document.querySelector('#Tasks').innerHTML+=
  ` <div class="Task">
  <span id="taskName">${document.querySelector('#newTask input').value}</span>
  <button class="delete">
  <i class="fa-solid fa-trash-can"></i>

  </button>
  </div>`;
  var CurrentTasks=document.querySelectorAll('.delete')
 for(var i=0;i<CurrentTasks.length;i++){
 CurrentTasks[i].onclick = function(){
  this.parentNode.remove()
    }
 }
 var Tasks=document.querySelectorAll('.Task')
 for(var i=0;i<Tasks.length;i++){
  Tasks[i].onclick = function(){
   this.classList.toggle('Completed')
     }
  }
  document.querySelector('#newTask input').value="";
}
}
//<i class="fa-solid fa-trash"></i>
 // <i class="fa-solid fa-trash-can"></i>
 //<img src="images/Delete.png">