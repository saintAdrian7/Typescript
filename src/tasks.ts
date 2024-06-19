const taskForm = document.querySelector<HTMLFormElement>('.form');

const formInput = document.querySelector<HTMLInputElement>('.form-input');


const taskListElement = document.querySelector<HTMLUListElement>('.list');




type Task = {
    description:string,
    isCompleted:boolean
};

function loadTasks():Task[]{
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks? JSON.parse(storedTasks) : []
}

const tasks:Task [] = loadTasks();

tasks.forEach(renderTask)

taskForm?.addEventListener('submit', (event) =>{
    event.preventDefault()
    const taskDescription = formInput?.value
    if(taskDescription){
const task:Task = {
    description:taskDescription,
    isCompleted:false,
};
 //add task to list
 addTask(task);

//render tasks
renderTask(task)

//update localstorage


updateStorage()

       
        
        formInput.value = '';
        return
    }
    alert('Please enter a task description')
});


function addTask(task:Task):void{
    tasks.push(task);
    console.log(tasks);
    
}

function renderTask(task:Task):void{
const taskElement = document.createElement('li')
taskElement.textContent = task.description
const taskCheckBox = document.createElement('input')
taskCheckBox.type = 'checkbox'
taskCheckBox.checked = task.isCompleted;

taskCheckBox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    updateStorage()
})


taskElement.appendChild(taskCheckBox);
taskListElement?.appendChild(taskElement)
}

function updateStorage(): void{
localStorage.setItem('tasks', JSON.stringify(tasks))
}
