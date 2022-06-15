let task_name = document.getElementById('task-name');
let task_container = document.getElementsByClassName('tasks-container')[0];
let number_of_tasks;
let count = 0;
let task;
let value;
let task_div;
let error = document.getElementsByClassName('error')[0]

let toastTrigger;
let toastLiveExample;
let toast;
let toast_body = document.getElementsByClassName('toast-body')[0];


if (task_container.children.length==0){
    task_container.innerHTML = 'There is no task for today!';
}

const addTask = () => {
    if (task_name.value==''){
        error.style = 'display:block'
    }

    else{
        error.style = 'display:none;'

        number_of_tasks = task_container.children.length;
        
        if (number_of_tasks==0){
            task_container.innerHTML='';
        }

        count+=1;

        task_container.insertAdjacentHTML('beforeend',`
        <div class="tasks my-row" id='tasks-${count}'>
            <div class="text-div">
                <input type="text" id='${count}' value="${task_name.value}" maxlength="40" disabled>
            </div>
            <div class="icon-container">
                <i class="fa fa-circle-check" id="liveToastBtn" onclick="taskDone(${count})"></i>
                <i class="fa fa-pen-to-square" onclick="taskEdit(${count})"></i>
                <i class="fa fa-circle-xmark" data-bs-toggle="modal" 
                data-bs-target="#exampleModal" value='${count}'></i>
            </div>
        </div>
        `)
    }
}


const taskDone = (index) => {
    completed_task_name = document.getElementById(index).value    
    
    task_div = document.getElementById(`tasks-${index}`)
    task_container.removeChild(task_div)

    if (task_container.children.length==0){
        task_container.innerHTML = 'There is no task for today!';
    }

    showToast(completed_task_name)
}

const taskDelete = (index) => {
    task_div = document.getElementById(`tasks-${index}`)
    task_container.removeChild(task_div)

    if (task_container.children.length==0){
        task_container.innerHTML = 'There is no task for today!';
    }
}

const taskEdit = (index) => {
    task = document.getElementById(index)
    value = task.value
    task.removeAttribute('disabled')
    task.focus()


    task.addEventListener('focusout',function(){
        if (task.value==''){
            task.value = value
        }
        else{
            task.setAttribute('disabled','true')
        }
    })
}

const clearItems = () => {
    error.style = 'display:none;'
    task_container.innerHTML = 'There is no task for today!';
}


// ? TOASTS START

const showToast = (param) => {
    toast_body.innerHTML = `Task Named "${param}" Completed`
    toastLiveExample = document.getElementById('liveToast')
    toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}


// if (toastTrigger) {
//     toastTrigger = document.getElementById('liveToastBtn')
//     toastLiveExample = document.getElementById('liveToast')

//     toastTrigger.addEventListener('click', () => {
//         const toast = new bootstrap.Toast(toastLiveExample) 
//         toast.show()
//     })
// }


// ? TOASTS END