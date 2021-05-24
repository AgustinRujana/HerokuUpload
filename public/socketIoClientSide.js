const socket = io();
const formProducts = document.getElementById('inputForm');
const inputProduct = document.getElementsByClassName('inputProduct');
const cuerpoTablaProducts = document.getElementById('cuerpoTablaProducts')

const messagesForm = document.getElementById('messagesForm')
const inputMessage = document.getElementsByClassName('inputMessage')
const cuerpoTablaMsg = document.getElementById('cuerpoTablaMsg')

//let sessionId = localStorage.getItem('sessionId')

formProducts.addEventListener('submit', (e) =>{
    e.preventDefault()
    let productoNuevo = { title: inputProduct[0].value, price: inputProduct[1].value, thumbnail: inputProduct[2].value}

    socket.emit('Producto Nuevo', productoNuevo)

    for (let i = 0; i < 3; i++) {
        inputProduct[i].value = ''
    }
})

//Messages
messagesForm.addEventListener('submit', (event) => {
    event.preventDefault()
    socket.emit('message', {
        author: {
            id: inputMessage[0].value,
            nombre: inputMessage[1].value,
            apellido: inputMessage[2].value,
            edad: inputMessage[3].value,
            alias: inputMessage[4].value,
            avatar: inputMessage[5].value,
        },
        text: inputMessage[6].value
    })
    inputMessage[6].value = ''
})

socket.on('message', (msg) =>{
    let lineaNueva = document.createElement('tr')
    lineaNueva.innerHTML = `<td><span class="mail">${msg.author.id}</span><span class="mensaje">${msg.text}</span></td>`
    cuerpoTablaMsg.appendChild(lineaNueva)
})

socket.on('Mensajes Anteriores', (msg) =>{
    msg.forEach(element => {
        let lineaNueva = document.createElement('tr')
        lineaNueva.innerHTML = `<td><span class="mail">${element.author.id}</span><span class="mensaje">${element.text}</span></td>`
        cuerpoTablaMsg.appendChild(lineaNueva)
    })
})

//Productos
socket.on('Producto Nuevo', (prod) =>{
    let lineaNueva = document.createElement('tr')
    lineaNueva.innerHTML = `<td><img height=75px src="${prod.thumbnail}" alt="${prod.title}"></td><td>${prod.title}</td><td>${prod.price}</td>`
    cuerpoTabla.appendChild(lineaNueva)
})