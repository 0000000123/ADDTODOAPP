var inp=document.getElementById("inp");
var toDoList=document.getElementById("toDoList");
var toDoData=[];
function addToDo(){
    toDoData.push(inp.value);
    inp.value=''
    render();
}
function render(deleteAll){
    toDoList.innerHTML='';
    if(deleteAll) return;
    for(var i=0;i<toDoData.length;i++) {
        toDoList.innerHTML+=`<li class='toDoItem'>${toDoData[i]}  <button class='btn' onclick='editToDo(${i})'>Edit</button>   <button class='btn' onclick='deleteToDo(${i})'>Delete</button></li>`
    }
}
function editToDo(i){
    toDoData[i]=prompt('enter your value');
    render();
}
function deleteToDo(i){
    toDoData.splice(i,1);
    render();
}
function deleteAllTodos(){
    toDoData=[];
    toDoList.innerHTML='';
    render(True);
}