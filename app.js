const addTodo = document.querySelector('.js-add-todo');
let todos = document.querySelector('.js-todos-list');
const input = document.querySelector('.js-todo-input');


const createTodo = (todo) => {
    let output = "";
    output +=`
    <li>
        <input type="checkbox">
        <label>${todo}</label>
        <button class="delete">Delete</button>
    </li>
    `;
    return todos.innerHTML = output;
}


// Event Listeners
addTodo.addEventListener('click', (event) => {

    if (input.value === "") {
        return
    } else {
        // Add todo
        createTodo(input.value);

        // Reset the input
        input.value = "";
    }
})