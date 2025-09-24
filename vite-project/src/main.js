import './style.css'
const form = document.querySelector('#form')
const input = document.querySelector('#text')
const list = document.querySelector('#list');

console.log(form, input , list);

form.addEventListener('submit', (event) => {
  event.preventDefault()

const task = input.value.trim();
if(!task)return;

const li = document.createElement('li');
li.innerHTML =` 
<span>${task}</span>
<button class="edit">Edit</button>
<button class="delete">Delete</button>
`

const deleteBtn = li.querySelector('.delete')
deleteBtn.addEventListener('click', () => {
  li.remove();
})

let span = li.querySelector('span')
const editBtn = li.querySelector('.edit')

editBtn.addEventListener('click', () => {
  const currentlyEditing = li.querySelector('input');

  if(!currentlyEditing){
    const inputEdit = document.createElement('input')
    inputEdit.value = span.textContent;
    span.replaceWith(inputEdit) 
    inputEdit.focus()
    editBtn.textContent = 'save';

    inputEdit.addEventListener('keydown', (e) =>{
      if (e.key === 'Enter') editBtn.click()
      if (e.key === 'Escape')  {
        inputEdit.replaceWith(span)
        editBtn.textContent = 'edit';
      }
    })
  } else{
    const newtext = currentlyEditing.value.trim()
    if(!newtext) return 
    const newSpan = document.createElement('span')
    newSpan.textContent = newtext
    currentlyEditing.replaceWith(newSpan);
    span = newSpan
    editBtn.textContent = 'edit'
  }
})

list.appendChild(li);

input.value = '';
input.focus();
})  

