// Importa aquí las funciones necesarias si las hay
// function render() {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     let taskContainer = document.getElementById("task-container");
//     taskContainer.innerHTML = "";

//     tasks.forEach((task, index) => {
//         let taskEl = document.createElement("div");
//         taskEl.classList.add("task-item");

//         taskEl.innerHTML = `
//             <h2>Title: ${task.title}</h2>
//             <p>Description: ${task.description}</p>
//             <p>Due Date: ${task.dueDate}</p>
//             <button class="remove-btn" onclick="removeTask(${index})">Delete</button>
//         `;

//         taskContainer.appendChild(taskEl);
//     });
// }



export function createToDoForm() {
    // const content = document.querySelector("#content");
    // content.innerHTML = ''; // Limpiar el contenido anterior si lo hay
   


    let toDoArray = [];

    const createToDo = (title, description, dueDate, priority, checklist) => {
        console.log('Llamando al módulo createToDo... Creando tarea ahora');
        console.log({ title, description, dueDate, priority, checklist });

        // Crear un objeto que represente la tarea
        const task = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checklist: checklist
        };

        // Obtener las tareas almacenadas en el localStorage
        let toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];

        // Agregar la nueva tarea al array
        toDoArray.push(task);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray));

        // Imprimir el array de tareas en la consola (opcional)
        console.log(toDoArray);

        return task;
    };


    // Crear un contenedor de página
    const pageContent = document.createElement("div");
    pageContent.classList.add("todo-form");

    // Crear un formulario
    const form = document.createElement("form");
    form.setAttribute("id", "new-task-form");

    // Crear campos de entrada y etiquetas
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("required", true);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("placeholder", "Description");
    descriptionInput.setAttribute("required", true);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date:";
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("id", "due-date");
    dueDateInput.setAttribute("name", "due-date");
    dueDateInput.setAttribute("required", true);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");
    prioritySelect.setAttribute("name", "priority");
    prioritySelect.setAttribute("required", true);
    const lowOption = document.createElement("option");
    lowOption.textContent = "Low";
    lowOption.setAttribute("value", "low");
    const mediumOption = document.createElement("option");
    mediumOption.textContent = "Medium";
    mediumOption.setAttribute("value", "medium");
    const highOption = document.createElement("option");
    highOption.textContent = "High";
    highOption.setAttribute("value", "high");
    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    const checklistContainer = document.createElement("div");
    checklistContainer.classList.add("checkbox-container");
    const checklistLabel = document.createElement("label");
    checklistLabel.textContent = "Checklist:";
    const checklistInput = document.createElement("input");
    checklistInput.setAttribute("type", "checkbox");
    checklistInput.setAttribute("id", "checklist");
    checklistInput.classList.add("checkmark");
    checklistContainer.appendChild(checklistInput);
    checklistContainer.appendChild(checklistLabel);

    // Botones de enviar y resetear
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

//     // Agregar evento click al botón de enviar
// submitButton.addEventListener("click", function(event) {
//     // Prevenir el comportamiento predeterminado del botón de enviar
//     event.preventDefault();
    
//     // Redirigir a la página principal
//     window.location.href = "../dist/index.html";
// });

    

    submitButton.addEventListener("click", function () {
        form.classList.toggle("show");
    
});

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset Form";

    // Agregar campos y botones al formulario
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(checklistContainer);
    form.appendChild(submitButton);
    form.appendChild(resetButton);

    // Agregar formulario al contenido de la página
    pageContent.appendChild(form);

    // Agregar el contenido de la página al contenedor principal
    content.appendChild(pageContent);

    // Agregar evento de submit al formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, llamando a una función para crear la tarea
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const checklist = checklistInput.checked;
        console.log("Tarea creada con los siguientes datos:");
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Due Date:", dueDate);
        console.log("Priority:", priority);
        console.log("Checklist:", checklist);
        // Llamar a la función para crear la tarea con los datos del formulario
        // createToDo(title, description, dueDate, priority, checklist);
        // Aquí puedes realizar cualquier acción adicional que desees después de crear la tarea

        // pageContent.style.display = "none";
        //window.location.href = "../dist/index.html";
    });
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Capturar los datos del formulario
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const checklist = checklistInput.checked;

        // Crear elementos HTML para mostrar los datos del formulario
        // aqui es donde se esta hACIENDO PARA VERSE
        const formDataContainer = document.createElement("div");
        formDataContainer.classList.add("form-data-container");

        const titleElement = document.createElement("p");
        titleElement.textContent = "Titledd: " + title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = "Description: " + description;

        const dueDateElement = document.createElement("p");
        dueDateElement.textContent = "Due Date: " + dueDate;

        const priorityElement = document.createElement("p");
        priorityElement.textContent = "Priority: " + priority;

        const checklistElement = document.createElement("p");
        checklistElement.textContent = "Checklist: " + (checklist ? "Yes" : "No");

        // Agregar los elementos al contenedor
        formDataContainer.appendChild(titleElement);
        formDataContainer.appendChild(descriptionElement);
        formDataContainer.appendChild(dueDateElement);
        formDataContainer.appendChild(priorityElement);
        formDataContainer.appendChild(checklistElement);

        // Agregar el contenedor al contenido de la página
        content.appendChild(formDataContainer);

        // Limpiar el formulario después de enviar
        form.reset();
    });

    // Aplicar clase al body cuando el formulario está presente
    // classList.add('form-present');
    return formDataContainer;
}

export default createToDoForm;