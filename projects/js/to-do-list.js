const taskArea_div = document.querySelector('.task-area');
const taskDescription_input = document.getElementById('task-description');

function createTask(description) {
    let taskInfo_p = document.createElement('p');
    let infoText = document.createTextNode(description);
    taskInfo_p.appendChild(infoText);
    taskInfo_p.classList.add('task-info');

    let taskDone_button = document.createElement('button');
    let doneText = document.createTextNode('o');
    taskDone_button.appendChild(doneText);
    taskDone_button.classList.add('task-done');

    let taskRemove_button = document.createElement('button');
    let removeText = document.createTextNode('-');
    taskRemove_button.appendChild(removeText);
    taskRemove_button.classList.add('task-remove');

    let taskData_div = document.createElement('div');
    taskData_div.classList.add('task-data');
    taskData_div.appendChild(taskInfo_p);
    taskData_div.appendChild(taskDone_button);
    taskData_div.appendChild(taskRemove_button);

    taskArea_div.appendChild(taskData_div);

    addEvents(taskDone_button,taskRemove_button);
};

function addEvents(btnDone,btnRemove) {
    btnDone.addEventListener('click',function(){
        btnDone.previousElementSibling.classList.toggle('task-completed');
    });

    btnRemove.addEventListener('click',function(){
        taskArea_div.removeChild(btnRemove.parentElement);
    });
}

const taskAdd_button = document.getElementById('task-add');
taskAdd_button.addEventListener('click',function() {
    let description = taskDescription_input.value;
    if (description != '') {
        createTask(description);
        taskDescription_input.value = '';
    }
});