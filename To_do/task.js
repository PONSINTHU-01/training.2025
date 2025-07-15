document.addEventListener("DOMContentLoaded", async()=>{
    const todoInput=document.getElementById("task");
    const addBtn=document.getElementById("addbtn");
    const todoList=document.getElementById("todolist");
    let todos=[];
    async function loadTodos(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const data=JSON.parse(localStorage.getItem("todos"))
                resolve(data);
            },1000);
        });
    }    
    
    function saveTodos(){
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    function renderTodos(taskList = todos){
        todoList.innerHTML="";
        taskList.map((todo,index)=>{
            const li=document.createElement("li");
            
            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            checkbox.checked=todo.completed;
            checkbox.addEventListener("change",()=>{
                todo.completed=checkbox.checked;
                saveTodos();
                renderTodos();
                renderCompletedTasks();
            });
    
            const taskText=document.createElement("span")
            taskText.textContent=todo.text;
            if(todo.completed){
                taskText.style.textDecoration="line-through";
                taskText.style.color="red";
            }

            const editBtn=document.createElement("button");
            editBtn.textContent="Edit";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click",()=>{
                const newText=prompt("Edit Text:",todo.text);
                if(newText!==null){
                    todo.text=newText.trim();
                    saveTodos();
                    renderTodos();
 
                }
            });
                 
            const deleteBtn=document.createElement("button");
            deleteBtn.textContent="Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click",()=>{
                todos.splice(index,1);
                saveTodos();
                renderTodos();
                renderCompletedTasks();
            })
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
    function renderCompletedTasks(){
        const completedList=document.getElementById("completedlist");
        completedList.innerHTML="";
        const completedTasks=todos.filter(todo=>todo.completed);
        if(completedTasks.length===0){
            const li=document.createElement("li");
            li.textContent="No Completed Tasks";
            completedList.appendChild(li);
        }else{
        completedTasks.map((todo)=>{
            const li=document.createElement("li");
            li.textContent=todo.text;
            li.style.color="green";
            li.style.textDecoration="linethrough";
            completedList.appendChild(li);
        });
    }
}

    addBtn.addEventListener("click",()=>{
        const text=todoInput.value.trim();
        if(text){
            todos.push({text,completed:false});
            todoInput.value=""
            saveTodos();
            renderTodos();
        }
    });
    document.getElementById("showCompleted").addEventListener("click",()=>{
        renderCompletedTasks();
    });
    todoInput.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            addBtn.click();

        }
    })
    todos= await loadTodos();
    renderTodos();
    renderCompletedTasks();
});
