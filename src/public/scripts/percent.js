const btn = document.querySelector('.x')
const yesDiv = document.getElementById('yes')
const noDiv = document.getElementById('no')


const totalText = document.getElementById('total')

fetch(`/results`,{
    method: "POST"
})
.then(res => res.json())
.then(data =>{
    let total = 0
    console.log('test');
    console.log(data);
    console.log(data.Yes);
    yesDiv.style.width = ((data.Yes / 229 ) * 100 ) + '%'
    noDiv.style.width = ((data.No / 229 ) * 100 ) + '%'

    const yText = document.createElement('p')
    yText.classList.add('text')
    yText.textContent = Math.floor(((data.Yes / 229 ) * 100 )) + '%'

    const nText = document.createElement('p')
    nText.classList.add('text')
    nText.textContent = Math.floor(((data.No / 229 ) * 100 )) + '%'

    yesDiv.append(yText)
    noDiv.append(nText)

    total = data.Yes + data.No
    totalText.textContent = total
})


