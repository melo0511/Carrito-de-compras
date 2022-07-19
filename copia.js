const container = document.getElementById("container-cards")
const selectProducts = document.getElementById("select-products")
const btnCreate = document.getElementById("btn-create")

const shopping_card = document.querySelector('#products');
const overlay = document.querySelector("#overlay");
const popup= document.querySelector("#popup")
const btn_close_popup = document.querySelector("#btn-close-popup");
const shoppingCart_container= document.querySelector(".shoppingCart-container");
const totel = document.querySelector("#total");
let cartProduct = []

const modal = document.querySelector('.modal')
const modalSesion = document.getElementById("modal-sesion")
const closeModal = document.getElementById('close-modal')
const closeModalSesion = document.getElementById('close-modal-sesion')
const filterXPrice = document.getElementById('filterXPrice')

window.addEventListener("load",listSelect)
selectProducts.addEventListener('change',renderCards)
btnCreate.addEventListener('click', showModal)
closeModal.addEventListener('click', removeModal)
closeModalSesion.addEventListener('click', removeModalSesion)
filterXPrice.addEventListener('change', filterProducts)

function filterProducts(event){
    const responseFilter = event.target.value === 'Menor a 400'
    ? products.filter(product => product.price < 400)
    : event.target.value === 'Entre 400 y 800'
    ? products.filter(product => product.price >= 400 && product.price <= 800)
    : event.target.value === 'Mayores a 800'
    ? products.filter(product => product.price > 800)
    : null
    responseFilter.map(product => createCards(product))
}


function showModal() {
    modal.style.display = 'flex'
}

function removeModal(){

    modal.style.display = 'none'
}

function renderCards (){

    products.map( product => {product.name ===  selectProducts.value ? createCards(product): null})
}

function listSelect(){
    selectProducts.innerHTML = '' 
    const anyOption = document.createElement('option')
    selectProducts.appendChild(anyOption)
    anyOption.textContent = 'Select a Product'
    products.map( product => {
        const option = document.createElement('option')
        option.value = product.name
        option.textContent = product.name
        selectProducts.appendChild(option)
        })
}
 
function createCards(product){
    const{id, name, price, img, area, tipo, ciudad, estrellas } = product

    const card = document.createElement("div")
    card.classList.add('card-product')

    const imgCard  = document.createElement('img')
    imgCard.setAttribute('src',img)
    imgCard.setAttribute('alt',name)
    imgCard.classList.add('img-product')

    const nameCard = document.createElement('p')
    nameCard.textContent = name
    nameCard.classList.add('name-product')

    const tipoCard = document.createElement('p')
    tipoCard.textContent = 'Tipo: ' + tipo

    const ciudadCard = document.createElement('p')
    ciudadCard.textContent = 'Ciudad: ' + ciudad

    const areaCard = document.createElement('p')
    areaCard.textContent = 'Area: ' + area
    
    const priceCard = document.createElement('p')
    priceCard.textContent = 'Precio: $' + price

    const estrellaCard = document.createElement('p')
    estrellaCard.textContent = '' + estrellas



    const btnAdd = document.createElement('button')
    btnAdd.setAttribute ('id',id)
    btnAdd.textContent = 'add to the cart'
    btnAdd.addEventListener('click', showWarning)
    btnAdd.classList.add('btn-add')

    const btnElim = document.createElement('button')
    btnElim.textContent = 'X'
    btnElim.addEventListener('click',ELiminar)
    btnElim.classList.add('btn-add')

    card.appendChild(imgCard)
    card.appendChild(nameCard)
    card.appendChild(tipoCard)
    card.appendChild(ciudadCard)
    card.appendChild(areaCard)
    card.appendChild(priceCard)
    card.appendChild(estrellaCard)
    card.appendChild(btnAdd)
    card.appendChild(btnElim)

    container.appendChild(card)

    function ELiminar(){

    container.removeChild(card)
}
}

function showWarning(){

    modalSesion.style.display = 'flex'
}

function removeModalSesion(){

    modalSesion.style.display = 'none'
}