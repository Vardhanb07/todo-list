import deleteImg from './images/delete.svg'
import statminusImg from './images/stat-minus-1.svg'
import { format } from 'date-fns'
const form = document.querySelector('.new-project-add')
const project = document.querySelector('.project')
const create = document.querySelector('.create')
let c = 2;
create.addEventListener('click', (e) => {
    e.preventDefault()
    let value = document.querySelector('#title').value
    if(value != ''){
        let outerDiv = document.createElement('div')
        outerDiv.classList.add('p-1')
        outerDiv.setAttribute('data-id', `p-${c}`)
        project.appendChild(outerDiv)
        let p = document.createElement('p')
        p.classList.add('project-title')
        p.textContent = `${value}`
        outerDiv.appendChild(p)
        let innerDiv = document.createElement('div')
        outerDiv.appendChild(innerDiv)
        let button = document.createElement('button')
        button.classList.add('view')
        button.textContent = 'VIEW'
        innerDiv.appendChild(button)
        button = document.createElement('button')
        button.classList.add('remove')
        button.textContent = 'REMOVE'
        innerDiv.appendChild(button)
        form.style.display = 'none'
        project.style.display = 'flex'
        form.reset()
        outerDiv = document.createElement('div')
        outerDiv.classList.add('todos')
        outerDiv.setAttribute('data-id', `p-${c}-todos`)
        innerDiv = document.createElement('div')
        innerDiv.classList.add('todo-header')
        p = document.createElement('p')
        p.classList.add('todos-project-name')
        p.textContent = `${value}`
        innerDiv.appendChild(p)
        button = document.createElement('button')
        button.classList.add('todo-add')
        button.setAttribute('title', 'Add todo')
        button.textContent = 'Add'
        innerDiv.appendChild(button)
        outerDiv.appendChild(innerDiv)
        innerDiv = document.createElement('div')
        innerDiv.classList.add('todo')
        outerDiv.appendChild(innerDiv)
        outerDiv.style.display = 'none'
        document.querySelector('.project-section').appendChild(outerDiv)
        c++;
    }
})
const add = document.querySelector('.todo-add')
add.addEventListener('click', () => {
    document.querySelector('.todos').style.display = 'none'
    document.querySelector('.todo-add-form').style.display = 'flex'
})
const todoFormAdd = document.querySelector('.todo-form-add')
todoFormAdd.addEventListener('click', (e) => {
    e.preventDefault()
    let todoTitle = document.querySelector('#todo-title').value
    if(todoTitle != ''){
        let outerDiv = document.createElement('div')
        outerDiv.classList.add('todo')
        let innerDiv = document.createElement('div')
        innerDiv.classList.add('todo-start-show')
        let div1 = document.createElement('div')
        div1.classList.add('todo-status')
        div1.setAttribute('title', 'check if completed')
        let div2 = document.createElement('div')
        div2.classList.add('todo-color')
        div2.setAttribute('data-color', 'red')
        div1.appendChild(div2)
        innerDiv.appendChild(div1)
        div1 = document.createElement('div')
        div1.classList.add('todo-about')
        let p = document.createElement('p')
        p.classList.add('todo-name')
        p.textContent = `${todoTitle}`
        div1.appendChild(p)
        let viewImg = document.createElement('img')
        viewImg.src = statminusImg
        viewImg.alt = 'stat-minus-1.svg'
        viewImg.setAttribute('title', 'view')
        viewImg.setAttribute('height', '34')
        viewImg.setAttribute('width', '34')
        div1.appendChild(viewImg)
        innerDiv.appendChild(div1)  
        div1 = document.createElement('div')
        let removeImg = document.createElement('img')
        removeImg.src = deleteImg
        removeImg.alt = 'delete.svg'
        removeImg.title = 'remove todo'
        removeImg.setAttribute('width', '34')
        removeImg.setAttribute('height', '34')
        div1.appendChild(removeImg)
        innerDiv.appendChild(div1)
        outerDiv.appendChild(innerDiv)
        innerDiv = document.createElement('div')
        innerDiv.classList.add('todo-info')
        innerDiv.setAttribute('data-hidden', 'true')
        div1 = document.createElement('div')
        div1.classList.add('todo-info-description')
        p = document.createElement('p')
        p.classList.add('description-label')
        p.textContent = 'DESCRIPTION'
        div1.appendChild(p)
        p = document.createElement('p')
        p.classList.add('description-text')
        if(document.querySelector('#todo-description').value == ""){
            p.textContent = 'none'
        }else {
            p.textContent = `${document.querySelector('#todo-description').value}`
        }
        div1.appendChild(p)
        innerDiv.appendChild(div1)
        div1 = document.createElement('div')
        div1.classList.add('numerical-data')
        div2 = document.createElement('div')
        div2.classList.add('todo-info-duedate')
        p = document.createElement('p')
        p.classList.add('duedate-label')
        p.textContent = 'DUE-DATE'
        div2.appendChild(p)
        p = document.createElement('p')
        p.classList.add('duedate')
        p.textContent = `${format(document.querySelector('#todo-duedate').value, "dd/MM/yyyy")}`
        div2.appendChild(p)
        div1.appendChild(div2)
        div2 = document.createElement('div')
        div2.classList.add('todo-info-priority')
        p = document.createElement('p')
        p.classList.add('priority-label')
        p.textContent = 'PRIORITY'
        div2.appendChild(p)
        p = document.createElement('p')
        p.classList.add('priority')
        p.textContent = document.querySelector('#todo-priority').value
        div2.appendChild(p)
        div1.appendChild(div2)
        innerDiv.appendChild(div1)
        outerDiv.appendChild(innerDiv)
        document.querySelector('.todos').appendChild(outerDiv)
        document.querySelector('.todos').style.display = 'flex'
        document.querySelector('.todo-add-form').style.display = 'none'
        document.querySelector('.todo-form').reset()
    }
})
const todoFormReturn = document.querySelector('.todo-form-return')
todoFormReturn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.todos').style.display = 'flex'
    document.querySelector('.todo-add-form').style.display = 'none'
})
document.addEventListener('click', e => {
    if(e.target.matches('img[title="view"]')){
        if(e.target.parentElement.parentElement.parentElement.querySelector('.todo-info').getAttribute('data-hidden') == 'true'){
            e.target.parentElement.parentElement.parentElement.querySelector('.todo-info').style.display = 'flex'
            e.target.parentElement.parentElement.parentElement.querySelector('.todo-info').setAttribute('data-hidden', 'false')
        }else {
            e.target.parentElement.parentElement.parentElement.querySelector('.todo-info').style.display = 'none'
            e.target.parentElement.parentElement.parentElement.querySelector('.todo-info').setAttribute('data-hidden', 'true')
        }
    }
    if(e.target.matches('img[alt="delete.svg"]')){
        e.target.parentElement.parentElement.parentElement.style.display = 'none'
    }
    if(e.target.matches('.todo-color')){
        if(e.target.getAttribute('data-color') == 'red'){
            e.target.style.backgroundColor = 'rgba(4, 228, 4, 0.74)'
            e.target.setAttribute('data-color', 'green')
        }else {
            e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.76)'
            e.target.setAttribute('data-color', 'red')
        }
    }
    if(e.target.matches('.remove')){
        e.target.parentElement.parentElement.style.display = 'none'
    }
    if(e.target.matches('.view')){
        let dataId = e.target.parentElement.parentElement.getAttribute('data-id')
        let cs = dataId + '-todos'
        e.target.parentElement.parentElement.parentElement.parentElement.querySelector(`div[data-id="${cs}"]`).style.display = 'flex'
        e.target.parentElement.parentElement.parentElement.style.display = 'none'
    }
    if(e.target.matches('#new-project')){
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.new-project-add').style.display = 'flex'
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.project').style.display = 'none'
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.todos').forEach(todo => {
            todo.style.display = 'none'
        });
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo-add-form').style.display = 'none'
    }
    if(e.target.matches('.projects-text')){
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.new-project-add').style.display = 'none'
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.todos').forEach(todo => {
            todo.style.display = 'none'
        })
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo-add-form').style.display = 'none'
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.project').style.display = 'flex'
    }
})