const newProject = document.querySelector('.new-project')
const form = document.querySelector('form')
const project = document.querySelector('.project')
newProject.addEventListener('click', () => {
    form.style.display = 'flex'
    project.style.display = 'none'
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
view.addEventListener('click', () => {
    
})