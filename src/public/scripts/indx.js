console.log('hello world');

const yesCheck = document.getElementById('yesCheck')
const noCheck = document.getElementById('noCheck')
const form = document.getElementById('form')

const abs = document.getElementById('abs-message')
const btn = document.getElementById('button')

const next = document.getElementById('continue')
const cancel = document.getElementById('cancel')
const choise = document.getElementById('choise')

let vote = undefined

yesCheck.addEventListener('change',(e)=>{
    if(vote == true){
        vote = undefined
    }else{
        vote = true
    }
    if(e.target.checked){
        noCheck.checked = false
    }
})

noCheck.addEventListener('change',(e)=>{
    if(vote == false){
        vote = undefined
    }else{
        vote = false
    }
    if(e.target.checked){
        yesCheck.checked = false
    }
})

const grade = document.getElementById('grade')
const family = document.getElementById('family')

grade.addEventListener('change',(e)=>{
    console.log(e.target.value);
    if(e.target.value === "none"){
        family.disabled = true
    }else{
        while(family.childNodes.length != 0){
            family.removeChild(family[0])
        }
        family.disabled = false
        fetch(`/familyGrade/${e.target.value}`,{
            method: "POST"
        })
        .then(res => res.json())
        .then(data => {
            const fragment = document.createDocumentFragment()
            for(each of data){
                if(each.Voto == false){
                    const option = document.createElement('option')
                    option.value = each.Familia
                    option.textContent = each.Familia
                    fragment.append(option)
                }
            }
            family.append(fragment)
        })
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(vote!=undefined && grade.value!='none' && family.value!=undefined){
        abs.style.display = 'flex'
        choise.textContent = ''
        if(vote){
            choise.textContent = 'Si'
        }else if (!vote){
            choise.textContent = 'No'
        }else{
            choise.textContent = 'error'
        }
    }
    // form.submit()
    
})

next.addEventListener('click',(e)=>{
    form.submit()
})
cancel.addEventListener('click',(e)=>{
    abs.style.display = 'none'
})