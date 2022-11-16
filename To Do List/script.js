function addToTask(text){
    //add task
    if(text == ''){

    }else{
        localStorage.setItem("tasks", JSON.stringify(tasks));
        const btn = document.createElement('span')
        btn.classList.add('delete')
        btn.innerHTML = "X"
        let li = document.createElement('li')
        li.innerHTML = `<p>${text}</p>`
        li.appendChild(btn)
        appendToList.append(li)
        textContent.value = ''
        count.innerText++

        //delete task
        btn.addEventListener('click', () =>{
            count.innerText--
            btn.parentElement.remove()
            tasks = tasks.filter(x => x !== text)
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })
    }
    
}

let submitBtn = document.querySelector('.submit-btn')
let textContent = document.querySelector('.inp-txt')
let appendToList = document.querySelector('.to-do-list')
let count = document.querySelector('.counter')


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(addToTask)

submitBtn.addEventListener('click', () =>{
    let text = textContent.value
    tasks.push(text)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    addToTask(text)
})

textContent.addEventListener('keypress', function(a){
    if(a.keyCode == 13){
        let text = textContent.value
        tasks.push(text)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        addToTask(text)
    }
})



