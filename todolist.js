const todoList = [
  {
    name: "work out",
    date: "10/8/2024",
  },
  {
    name: "go to school",
    date: "10/8/2024",
  },
];

const nameInput = document.querySelector(".js-name-input");
const dateInput = document.querySelector(".js-date-input");
const displayList = document.querySelector(".js-display-list");

generateListTodo();

function generateListTodo() {
  displayList.innerHTML = "";
  todoList.forEach((item, index) => {
    const html = `
    <p>${item.name}</p>
    <p>${item.date}</p>
    <button class="delete-btn js-delete-btn"
    
    >Delete</button>
    `;
    displayList.innerHTML += html;
  });
  // we need to generate all button delete first when we add todolist and then we are able to click button delete
  document.querySelectorAll(".js-delete-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      todoList.splice(index, 1);
      generateListTodo();
    });
  });
}
document.querySelector(".js-add-btn").onclick = () => {
  const name = nameInput.value;
  const date = dateInput.value;
  todoList.push({ name, date });
  nameInput.value = "";
  generateListTodo();
};
