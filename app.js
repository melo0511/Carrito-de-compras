const container = document.getElementById("container-cards")
const selectProducts = document.getElementById("select-products")
const btnCreate = document.getElementById("btn-create")

const shopping_card = document.querySelector('#products');
const overlay = document.querySelector("#overlay");
const popup= document.querySelector("#popup")
const btn_close_popup = document.querySelector("#btn-close-popup");
const shoppingCart_container= document.querySelector(".shoppingCart-container");
const totel = document.querySelector("#total");
let imgSelected = " "
let cartProduct = []

const modal = document.querySelector('.modal')
const closeModal = document.getElementById('close-modal')
const newProduct = document. getElementById('new-product')
const newPrice = document.getElementById('new-price')
const newImage = document.getElementById('new-image')
const btnNewProduct = document.getElementById('btn-new-create')
const filterXPrice = document.getElementById('filterXPrice')

window.addEventListener("load",listSelect)
selectProducts.addEventListener('change',renderCards)
btnCreate.addEventListener('click', showModal)
btnNewProduct.addEventListener('click', createNewProduct)
newImage.addEventListener('change', importImg)
closeModal.addEventListener('click', removeModal)
filterXPrice.addEventListener('change', filterProducts)

function filterProducts(event){
    const responseFilter = event.target.value === 'Menor a 400'
    ? products.filter(product => product.price < 400)
    : event.target.value === 'Entre 400 y 800'
    ? products.filter(product => product.price >= 400 && product.price <= 800)
    : event.target.value === 'Mayores a 800'
    ? products.filter(product => product.price > 800)
    : null

    container.innerHTML = ''
    responseFilter.map(product => createCards(product))
}

function importImg(event){
    const currentImg = event.target.files[0]
    const objectURL = URL.createObjectURL(currentImg)
    imgSelected = objectURL
}

function createNewProduct(){
    idProduct++
    const titleProduct = newProduct.value
    const priceProduct = newPrice.value
    const id = idProduct


    const newProduct = {id:id , name: titleProduct, price: priceProduct,img: imgSelected, descripcion: descripcionSelect}

    products.push(newProduct)
    listSelect()
    modal.style.display = 'none'
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
    btnAdd.addEventListener('click', addCarrito)
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



shopping_card.addEventListener('click', showCarrito)

function showCarrito() {
    overlay.classList.add('activate')
    popup.classList.add('activate')
}

btn_close_popup.addEventListener('click', close_cart)

function close_cart(){
overlay.classList.remove('activate');
popup.classList.remove('activate');
}

const subtract_food = (event) => {
    let item = event.target.getAttribute('id') 
    cartProduct.splice(parseInt(cartProduct.indexOf(item)),1)
    showCart();
}

const delete_cart = (event) => {
    let item = event.target.getAttribute('id');
    
    cartProduct = cartProduct.filter((id_product) => {
return id_product !== item;
    });

    showCart();
}



const showCart = () => {

    shoppingCart_container.innerHTML = ''
    let list = [...new Set(cartProduct)]

    list.forEach(item => {

        const productos = products.filter( products => {
            return products.id === parseInt(item)
        })
        let cont = 0
        let total = 0
        
        for(let id of cartProduct){
            if (id === item){
                cont ++
                total = total + parseInt(productos[0].price)
            }
        }

        const card = document.createElement('div');
        const imagen = document.createElement('img');
        const cardContent = document.createElement('div');
        const deletec = document.createElement('p');
        const title_card=document.createElement('h2');
        // const info=document.createElement('p');
        const containerQuantityNumber= document.createElement('div');
        const quantity =document.createElement('h4');
        const quantityNumber=document.createElement('div');
        const sum =document.createElement('p');
        const number=document.createElement('p');
        const subtract=document.createElement('p');
        const pricecart=document.createElement('p');

        sum.setAttribute('id', productos[0].id);
        subtract.setAttribute('id',productos[0].id);

        card.classList.add('card');
        cardContent.classList.add('cardContent');
        deletec.classList.add('delete');
        containerQuantityNumber.classList.add('quantityNumber');
        quantity.style.fontStyle='oblique';
        quantityNumber.classList.add('numberQuantity');
        sum.classList.add('circle');
        subtract.classList.add('circle');
        pricecart.classList.add('price');

        deletec.textContent='X';
        imagen.src=productos[0].img;
        title_card.textContent=productos[0].name;
        quantity.textContent='Cantidad';
        sum.textContent='+';
        number.textContent=cont;
        subtract.textContent='-';
        pricecart.textContent=total;

        card.appendChild(imagen);
        cardContent.appendChild(title_card);
        cardContent.appendChild(containerQuantityNumber);
        containerQuantityNumber.appendChild(quantity);
        containerQuantityNumber.appendChild(quantityNumber);
        quantityNumber.appendChild(subtract);
        quantityNumber.appendChild(number);
        quantityNumber.appendChild(sum);
        cardContent.appendChild(pricecart);
        card.appendChild(deletec);
        card.appendChild(cardContent);

        sum.addEventListener('click', addCarrito);
        subtract.addEventListener('click', subtract_food);

        shoppingCart_container.appendChild(card);

        // const delete_cart = (event) =>{
        //     let restar  = Number(compras.textContent)-cont
        //     compras.textContent = restar

        //     let item = event.target.getAttribute('id')
        //     cartProduct = cartProduct.filter((id_product) => {
        //         return id_product !== item;
        //     });
        //     showCart()
        // }

        deletec.setAttribute('id',productos[0].id);
        deletec.addEventListener('click', delete_cart)
    })
}

const addCarrito = (event) =>{
    cartProduct.push(event.target.getAttribute('id'))
    showCart()
    console.log('agrega')
}

// createCards()