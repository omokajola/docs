

let input = document.getElementById("todo-text")
let button = document.getElementById("add-btn")
let summary = document.getElementById("input-summary")


button.addEventListener("click", function(){

    let todoList = input.value.trim();

    if(todoList === ""){
        alert("kindly input a task")
        return;

    }

    let task = document.createElement("li");

    task.textContent = todoList


    summary.appendChild(task) 


    input.value = "";

      let count = summary.children.length 
    // count++;

    // alert(`you have number ${count} list `)

 
 

    task.addEventListener("click", function(){
        task.classList.toggle("strike");
        
    //     if(task.classList.toggle("strike") === false ){
    //   alert(`you have number ${count} list `)
    // }
   
    })
    
    
})