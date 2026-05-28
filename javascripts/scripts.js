let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let bask = document.querySelector(".bask");

burger.onclick = function () {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  bask.classList.toggle("hide");
};

let products = [
  {
    id: 1,
    title: 'Карта',
    price: 500,
    image: 'images/i1.png'
  },
  {
    id: 2,
    title: 'Спички',
    price: 300,
    image: 'images/i2.png'
  },
  {
    id: 3,
    title: 'Шопер',
    price: 1200,
    image: 'images/i3.png'
  },
  {
    id: 4,
    title: 'Диск',
    price: 700,
    image: 'images/i4.png'
  },
  {
    id: 5,
    title: 'Зажигалка',
    price: 450,
    image: 'images/i5.png'
  },
  {
    id: 6,
    title: 'Карта',
    price: 500,
    image: 'images/i6.png'
  }
]

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]))
}

renderProducts()
updateCartCount()

function renderProducts() {
  let productList = document.querySelector('.productList')

  if (!productList) {
    return
  }

  productList.innerHTML = ''

  products.forEach((product) => {
    let productCard = document.createElement('article')
    productCard.classList.add('product')

    productCard.innerHTML = `
      <div class="productImage">
        <img src="${product.image}" alt="${product.title}" />
      </div>

      <div class="productBottom">
        <div class="productText">
          <h3>${product.title}</h3>
          <p>${product.price}₽</p>
        </div>

        <button class="productCart" type="button" onclick="addToCart(${product.id})">
          <img src="images/basket.svg" alt="Добавить в корзину" />
        </button>
      </div>
    `

    productList.appendChild(productCard)
  })
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))

  updateCartCount()
  renderProducts()
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || []
}

function getProductCount(productId) {
  let cart = getCart()
  let item = cart.find((p) => p.id === productId)

  return item ? item.quantity : 0
}

function removeFromCart(productId) {
  let cart = getCart()
  let index = cart.findIndex((p) => p.id === productId)

  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1
    } else {
      cart.splice(index, 1)
    }
  }

  setCart(cart)
}

function addToCart(productId) {
  let cart = getCart()
  let index = cart.findIndex((p) => p.id === productId)

  if (index !== -1) {
    cart[index].quantity += 1
  } else {
    let item = products.find((p) => p.id === productId)

    if (item) {
      cart.push({ ...item, quantity: 1 })
    }
  }

  setCart(cart)
}

function updateCartCount() {
  let cart = getCart()
  let cnt = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)
  let productCnt = document.querySelector('.productCnt')

  if (productCnt) {
    productCnt.innerHTML = cnt
  }
}