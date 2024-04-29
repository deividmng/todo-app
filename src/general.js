// En el archivo donde importas createToDoForm

import { createToDoForm } from './formulario';

const createGeneralHomePage = () => {
    // Obtener el contenedor de contenido
    const content = document.querySelector('#content');

    // Limpiar el contenido anterior si lo hay
    content.innerHTML = '';

    // Crear elementos para el encabezado y el botón de nueva tarea
    const pageContent = document.createElement('div');
    const general = document.createElement('h1');
    general.textContent = 'General';
    const p = document.createElement('p');
    p.textContent = 'A list of todos';
    const newTaskButton = document.createElement("button");
    newTaskButton.setAttribute("id", "button-task");
    newTaskButton.textContent = "Add Task";
    

    // Agregar los elementos al contenido de la página
    pageContent.appendChild(general);
    pageContent.appendChild(p);
    pageContent.appendChild(newTaskButton);
    content.appendChild(pageContent);

    // Agregar un event listener al botón de nueva tarea
    newTaskButton.addEventListener("click", function() {
        // Llamar a createToDoForm y guardar el contenedor de datos del formulario en una variable
        const formDataContainer = createToDoForm();
        // Limpiar el contenido anterior si lo hay
        content.innerHTML = '';
        // Agregar el contenedor de datos del formulario al contenido de la página
        content.appendChild(formDataContainer);
        document.body.classList.add("active");
    });

    const formDataContainer = document.createElement("div");
        formDataContainer.classList.add("form-data-container");

        const titleElement = document.createElement("p");
        titleElement.textContent = "Titledddd: " + title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = "Description: " + description;

        const dueDateElement = document.createElement("p");
        dueDateElement.textContent = "Due Date: " + dueDate;

        const priorityElement = document.createElement("p");
        priorityElement.textContent = "Priority: " + priority;

        const checklistElement = document.createElement("p");
        checklistElement.textContent = "Checklist: " + (checklist ? "Yes" : "No");

};


// Llamar a la función para crear la página principal cuando se cargue la página
createGeneralHomePage();
