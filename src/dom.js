import deleteImg from './images/delete.svg'
import statminusImg from './images/stat-minus-1.svg'
import { format } from 'date-fns'
const newProject = document.querySelector('.new-project')
const form = document.querySelector('.new-project-add')
const project = document.querySelector('.project')
newProject.addEventListener('click', () => {
    form.style.display = 'flex'
    project.style.display = 'none'
    document.querySelector('.todos').style.display = 'none'
    document.querySelector('.todo-add-form').style.display = 'none'
})
document.querySelector('.projects-text').addEventListener('click', () => {
    document.querySelector('.new-project-add').style.display = 'none'
    document.querySelector('.todos').style.display = 'none'
    document.querySelector('.todo-add-form').style.display = 'none'
    document.querySelector('.project').style.display = 'flex'
})
document.querySelector('.remove').addEventListener('click', () => {
    document.querySelector('.p-1').style.display = 'none'
})
const create = document.querySelector('.create')
create.addEventListener('click', (e) => {
    e.preventDefault()
    let value = document.querySelector('#title').value
    if(value != ''){
        let outerDiv = document.createElement('div')
        outerDiv.classList.add('p-1')
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
        button.addEventListener('click', () => {
            outerDiv.style.display = 'none'
        })
        innerDiv.appendChild(button)
        form.style.display = 'none'
        project.style.display = 'flex'
        form.reset()
    }
})
const view = document.querySelector('.view')
const todos = document.querySelector('.todos')
view.addEventListener('click', () => {
    project.style.display = 'none'
    todos.style.display = 'flex'
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
        viewImg.addEventListener('click', () => {
            if(document.querySelector('.todo-info').getAttribute('data-hidden') == 'true'){
                document.querySelector('.todo-info').style.display = 'flex'
                document.querySelector('.todo-info').setAttribute('data-hidden', 'false')
            }else {
                document.querySelector('.todo-info').style.display = 'none'
                document.querySelector('.todo-info').setAttribute('data-hidden', 'true')
            }
        })
        div1.appendChild(viewImg)
        innerDiv.appendChild(div1)  
        div1 = document.createElement('div')
        let removeImg = document.createElement('img')
        removeImg.src = deleteImg
        removeImg.alt = 'delete.svg'
        removeImg.title = 'remove todo'
        removeImg.setAttribute('width', '34')
        removeImg.setAttribute('height', '34')
        removeImg.addEventListener('click', () => {
            document.querySelector('.todo').style.display = 'hidden'
        })
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
        let dateList = document.querySelector('#todo-duedate').value.split('-')
        p.textContent = `${format(new Date(dateList[2], dateList[1], dateList[0]), "dd/MM/yyyy")}`
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
const remove = document.querySelector('img[alt="delete.svg"]')
remove.addEventListener('click', () => {
    remove.parentElement.parentElement.style.display = 'none'
})
document.querySelector('img[title="view"]').addEventListener('click', () => {
    if(document.querySelector('.todo-info').getAttribute('data-hidden') == "true"){
        document.querySelector('.todo-info').style.display = 'flex'
        document.querySelector('.todo-info').setAttribute('data-hidden', 'false')
    }else {
        document.querySelector('.todo-info').style.display = 'none'
        document.querySelector('.todo-info').setAttribute('data-hidden', 'true')
    }
})