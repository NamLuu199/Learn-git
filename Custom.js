let statusApp = ['1','2','3']
const currentStatus = '2'
const listCard = document.querySelector('#appsList .card')
let listStatus = ''
statusApp.forEach(status => {
    if (status === currentStatus) {
        listStatus += `<li style="color: red">${status}</li>`
    } else {
        listStatus += `<li>${status}</li>`
    }
})
const dropdown = `<ul>${listStatus}</ul>`
listCard.innerHTML += dropdown
console.log(dropdown)