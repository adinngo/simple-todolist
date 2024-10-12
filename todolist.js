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
    data-index="${index}"
    >Delete</button>
    `;
    displayList.innerHTML += html;
  });
  console.log(displayList.innerHTML);
}
document.querySelector(".js-add-btn").onclick = () => {
  const name = nameInput.value;
  const date = dateInput.value;
  todoList.push({ name, date });
  nameInput.value = "";
  generateListTodo();
};
document.querySelectorAll(".js-delete-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data-index");
    console.log(index);
    todoList.splice(index, 1);
    generateListTodo();
  });
});
