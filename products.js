// Crear productos deportivos
const products = [
  {id: 1, name: 'Casas Campestre Tapao', price: '100000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa1.jpg', area: '100.025m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ' },

  {id: 2, name: 'Conjunto residencial las palmas', price: '400000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464924/imagenes%20carrito%20de%20compras/casa2.jpg', area: '100.444m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ' },

  {id: 3, name: 'Conjunto Residencial Aborigenes', price: '360000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa3.jpg', area: '155.025m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ★ ' },

  {id: 4, name: 'Conjunto residencial Buena vista', price: '950000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa4.jpg', area: '400.025m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 5, name: 'Cojunto Residencial Villa del Eden', price: '900000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa5.jpg', area: '644.025m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ★ ★'},

  {id: 6, name: 'Conjunto Santa Maria del Parque', price: '850000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa6.jpg', area: '440.025m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ '},

  {id: 7, name: 'Cojunto residencial Norte', price: '590000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa7.webp', area: '100.065m2', tipo: 'Venta', ciudad:'Pereira', estrellas: ' ★ ★ ★ ★' },

  {id: 8, name: 'Casas Campestres del Cafe', price: '1100000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa8.jpg', area: '200.444m2', tipo: 'Venta', ciudad:'Pereira', estrellas: ' ★ ★ ★ ★ ' },

  {id: 9, name: 'Casas Campestres del Cafe', price: '1355000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa9.jpg', area: '400.000m2', tipo: 'Venta', ciudad:'Pereira', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 10, name: ' Edificio Bahia Plaza ', price: '300000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464927/imagenes%20carrito%20de%20compras/casa10.jpg', area: '345.025m2', tipo: 'Venta', ciudad:'Pereira', estrellas: ' ★ ★ ★ ' },

  {id: 11, name: 'Hotel VIP', price: '510000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa11.jpg', area: '650.025m2', tipo: 'Venta', ciudad:'Cali', estrellas: ' ★ ★ ★ ★ ' },

  {id: 12, name: 'Hotel Nuevo Quindio', price: '573000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa12.jpg', area: '200.444m2', tipo: 'Venta', ciudad:'Cali', estrellas: ' ★ ★ ★ ★ ' },

  {id: 13, name: 'Conjunto Residencial VISTAMAR', price: '500000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa13.jpg', area: '123.578m2', tipo: 'Venta', ciudad:'Cali', estrellas: ' ★ ★ ★ ★ ' },

  {id: 14, name: 'Conjunto campestre universo  ', price: '1000000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa14.webp', area: '441.578m2', tipo: 'Venta', ciudad:'Cali', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 15, name: 'Conjunto Residencial  Toro', price: '110000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464927/imagenes%20carrito%20de%20compras/casa15.webp', area: '341.456m2', tipo: 'Venta', ciudad:'Cali', estrellas: ' ★ ★ ★ ★ ' },

  {id: 16, name: 'Conjunto Residencial las Camelias', price: '200000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa16.jpg', area: '100.025m2', tipo: 'Venta', ciudad:'Medellin', estrellas: ' ★ ★ ★ ' },

  {id: 17, name: 'Casas Campestres Coffe', price: '3500000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa17.jpg', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 18, name: 'Conjunto del Sur', price: '480000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa18.jpg', area: '200.000m2', tipo: 'Venta', ciudad:'Medellin', estrellas: ' ★ ★ ★' },

  {id: 19, name: 'Conjunto Residencial Cielo Abierto', price: '300000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa19.jpg', area: '100.000m2', tipo: 'Venta', ciudad:'Medellin', estrellas: ' ★ ★ ★ ★ ' },

  {id: 20, name: 'Casas Campestres el Bosque', price: '980000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa20.jpg', area: '345.876m2', tipo: 'Venta', ciudad:'Medellin', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 21, name: 'Hotel Constelaccion', price: '485000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa21.jpg', area: '463.876m2', tipo: 'Venta', ciudad:'Bogota', estrellas: ' ★ ★ ★ ★ ' },

  {id: 22, name: 'Hotel Nuevo Armenia', price: '610000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464924/imagenes%20carrito%20de%20compras/casa22.jpg', area: '234.765m2', tipo: 'Venta', ciudad:'Bogota', estrellas: ' ★ ★ ★ ' },

  {id: 23, name: 'Hotel AXM', price: '390000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464923/imagenes%20carrito%20de%20compras/casa23.jpg', area: '132.777m2', tipo: 'Venta', ciudad:'Bogota', estrellas: ' ★ ★ ★ ' },

  {id: 24, name: ' Edificio Asturias ', price: '250000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa24.jpg', area: '321.456m2', tipo: 'Venta', ciudad:'Bogota', estrellas: ' ★ ★ ★ ' },

  {id: 25, name: 'Casas Campestres el Caimo', price: '950000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464924/imagenes%20carrito%20de%20compras/casa25.webp', area: '122.334m2', tipo: 'Venta', ciudad:'Bogota', estrellas: ' ★ ★ ★ ★ ★ ' },

  {id: 26, name: 'Cojunto residencial Priedra Blanca', price: '900000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa26.jpg', area: '188.987m2', tipo: 'Venta', ciudad:'Cartagena', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 27, name: 'Edificio Estelar', price: '900000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa27.jpg', area: '223.555m2', tipo: 'Venta', ciudad:'Cartagena', estrellas: ' ★ ★ ★ ★ ' },

  {id: 28, name: 'Casas Campestre Tapao', price: '1450000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa28.webp', area: '100.566m2', tipo: 'Venta', ciudad:'Cartagena', estrellas: ' ★ ★ ★ ★ ★' },

  {id: 29, name: 'Conjunto Casa Billion', price: '4700000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464926/imagenes%20carrito%20de%20compras/casa29.jpg', area: '223.555m2', tipo: 'Venta', ciudad:'Cartagena', estrellas: ' ★ ★ ★ ★ ★' },
  
  {id: 30, name: 'Edificio Nuevo Armenia', price: '1200000000',img: 'https://res.cloudinary.com/dasuy0gun/image/upload/v1656464925/imagenes%20carrito%20de%20compras/casa30.jpg', area: '345.766m2', tipo: 'Venta', ciudad:'Armenia', estrellas: ' ★ ★ ★ ★ ' },
];