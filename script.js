
//Select element & assign to variabls

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');

let todoUl = document.querySelector('#items');
let compleateUl = document.querySelector('.complete-list ul');

//function

let createTask =function(task){

        let listItem =document.createElement('li');
        let checkbox =document.createElement('input');
        let label = document.createElement('label');

        label.innerText= task;
        checkbox.type='checkbox';


        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        return listItem;


}

let addTask =function(event){
    event.preventDefault();
    let listItem =createTask(newTask.value);

    todoUl.appendChild(listItem);
    newTask.value="";


    //Bind the new list item to the incompleate list

    bindInCompleateItems(listItem,completeTask);

}

let completeTask= function(){
    let listItem =this.parentNode;

    let deletebBtn = document.createElement('button');
    deletebBtn.innerText= 'Delete';
    deletebBtn.className ='delete';
    listItem.appendChild(deletebBtn);


    let checkbox = listItem.querySelector('input[type="checkbox"]');

    checkbox.remove();

    compleateUl.appendChild(listItem);

    bindCompleateItems(listItem,deleteTask);


}

let deleteTask = function(){

    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let bindInCompleateItems = function(taskItem ,checkboxClick){


    let checkbox =taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;

}

let bindCompleateItems= function(taskItem,deleteButtonclick){

    let deleteButton = taskItem.querySelector('.delete');

    deleteButton.onclick = deleteButtonclick;
    
}


for (i=0;i<todoUl.children.length;i++){

    bindInCompleateItems(todoUl.children[i],completeTask);

}

for (i=0;i<compleateUl.children.length;i++){

    bindCompleateItems(compleateUl.children[i],deleteTask);

}
form.addEventListener('submit',addTask);