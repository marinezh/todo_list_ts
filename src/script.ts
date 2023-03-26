const input = document.querySelector(".input__todo") as HTMLInputElement;
const addBtn = document.querySelector(".btn__add") as HTMLButtonElement;
const list = document.querySelector("ul") as HTMLUListElement;
const twoButtons = document.createElement("div") as HTMLDivElement;

const addNewTask = () => {
  // creation li elements with new tasks
  let ul = document.querySelector(".todo") as HTMLUListElement;
  let newTodo = document.createElement("li") as HTMLLIElement;
  newTodo.className = "new__todo";

  newTodo.innerHTML = `<input type='checkbox' class='checkbox'><span>${input.value}</span><button class='delete'>❌</button>`;

  //  do not add empty line
  if (input.value != "") {
    ul.prepend(newTodo);
  }
  // adding delete buttons only after 1st task item exist
  if (newTodo.innerHTML.length > 0) {
    const el = document.querySelector<HTMLElement>(".two__buttons")!;
    el.style.display = "flex";
  }

  // delete done tasks
  let deleteButton = document.querySelector(".delete") as HTMLButtonElement;
  let checkedItem = document.querySelector(".checkbox") as HTMLInputElement;
  let doneItem = document.querySelector("span") as HTMLSpanElement;

  // if task checked add new style
  const cheacked = (): void => {
    doneItem.classList.toggle("mystyle");
  };
  checkedItem.addEventListener("click", cheacked);

  // delete task if it is done
  const deleteFunc = (): void => {
    if (doneItem.classList.contains("mystyle")) {
      newTodo.remove();
    }
  };
  deleteButton.addEventListener("click", deleteFunc);

  const deleteDone = document.querySelector(
    ".delete__done"
  ) as HTMLButtonElement;
  const deleteAllBtn = document.querySelector(
    ".delete__all"
  ) as HTMLButtonElement;

  // function for button DELETE ALL
  const deletionAllfunc = () => {
    newTodo.remove();
    const el = document.querySelector<HTMLElement>(".two__buttons")!;
    el.style.display = "none";
  };

  deleteDone.addEventListener("click", deleteFunc);
  deleteAllBtn.addEventListener("click", deletionAllfunc);
  // clear input area text, agter adding item to the list
  input.value = "";
};
addBtn.addEventListener("click", addNewTask);

// delete_buttons creation
let todoWrap = document.querySelector(".todo__wrap") as HTMLDivElement;

twoButtons.className = "two__buttons";
twoButtons.innerHTML = `<button class = "delete__done"> Delete Done </button> <button class = "delete__all"> Delete All </button>`;
todoWrap.append(twoButtons);
const el = document.querySelector<HTMLElement>(".two__buttons")!;
el.style.display = "none";
