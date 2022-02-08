/* To Do list */
const addForm = document.querySelector(".add");
const list = document.querySelector(".toDos");
const search = document.querySelector(".search input");

const generateTemplate = (toDo) => {
  //Creat template
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${toDo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //eliminate spaces method
  const toDo = addForm.add.value.trim();
  //console.log(toDo);

  if (toDo.length) {
    generateTemplate(toDo);
    addForm.reset();
  }
});

// delete toDos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterToDos = (term) => {
  Array.from(list.children)
    .filter((toDo) => !toDo.textContent.toLowerCase().includes(term))
    .forEach((toDo) => toDo.classList.add("filtered"));

  Array.from(list.children)
    .filter((toDo) => toDo.textContent.toLowerCase().includes(term))
    .forEach((toDo) => toDo.classList.remove("filtered"));
};

//keyUp event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterToDos(term);
});
