let card = document.getElementsByClassName(`card`)[0]
let card1 = document.getElementsByClassName(`card1`)[0]
let card2 = document.getElementsByClassName(`card2`)[0]
let card3 = document.getElementsByClassName(`card3`)[0]
let imgArr = ['image/1', 'image/2']
let mainImg = document.getElementById(`main-img`)
function showCard() {
    card
        .classList
        .toggle('show')

}

function showCard1() {
    card1
        .classList
        .toggle('show')
}

function showCard2() {
    card2
        .classList
        .toggle('show')
}

function showCard3() {
    card3
        .classList
        .toggle('show1')
}

let index = 0

mainImg.style.backgroundImage = `url(${imgArr[0]}.jpg) `

setInterval(function () {

    if (index === imgArr.length) {
        index = 0
    }
    mainImg.style.backgroundImage = `url(${imgArr[index]}.jpg) `

    index++
}, 3000)

let menu = document.getElementById(`menu`)
let basket = document.getElementById('basket')
let basketItems = document.getElementById('basketItems')
let basketItem = document.getElementsByClassName('basketItem')
let cardd = document.getElementsByClassName('cardd')
let items = document.getElementsByClassName('items')[0]
let span = document.getElementsByTagName(`span`)[0]
let totalBox = document.getElementById('total')
totalBox.innerHTML = 'Card is empty'
let count = 1
let sum = 0

function showCardNav() {
    basket
        .classList
        .toggle('show4')
}

for (let i = 1; i <= localStorage.length; i++) {

    let item = JSON.parse(localStorage.getItem(`burger_${i}`))

    if (item != null) {
        items.innerHTML += `
      <div class="cardd">
        <img class="card-img-top" src="./image/${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}</p>
          <a href="#" class="btn btn-primary" id="btn" onclick="add(${item.id},this)">BUY NOW</a>
        </div>
      </div>
    `
    }

}

function add(id, item) {

    let price = item.previousElementSibling.innerText
    let title = item.parentElement.firstElementChild.innerText
    let image = item
        .parentElement
        .previousElementSibling
        .getAttribute("src")

    if (localStorage.getItem(`bigBurger_${id}`) != null) {
        let product = JSON.parse(localStorage.getItem(`bigBurger_${id}`))
        product.price = price * product.count
        product.count++
        localStorage.setItem(`bigBurger_${id}`, JSON.stringify(product))
        show()
        return
    }

    let newTitle = {
        id: id,
        title: title,
        price: price,
        image: image,
        count: count

    }

    localStorage.setItem(`bigBurger_${id}`, JSON.stringify(newTitle))
    localStorage.setItem(`id`, id)

    show()
}

function summ() {
    for (let j = 0; j < localStorage.length - 1; j++) {

        localStorage.getItem()
    }

}

function show() {
    let newId = localStorage.getItem(`id`)
    let sum = 0
    basketItems.innerHTML = ''
    span.innerHTML = 0
    totalBox.innerHTML = `Card is empty`

    for (let i = 0; i < newId; i++) {
        let product = JSON.parse(localStorage.getItem(`bigBurger_${i + 1}`))
        if (product != null) {
            sum += +product.price
            totalBox.innerHTML = `Total: ${sum} $`

            basketItems.innerHTML += `
      <div class="basketItem">
      <div class="basketItemImg" style="background-image: url(${product.image});"></div>
      <p class="xxx">x${product.count}</p>
      <div class="basketItemInfo">
      <p>${product.price}$</p>
      <p>${product.title}</p>
      </div>
      <i class="fas fa-trash" onclick="del(${product.id}, this)"></i> 
      </div>
      `
            span.innerHTML = basketItem.length
        }
    }

}

function del(id, item) {

    let product = JSON.parse(localStorage.getItem(`bigBurger_${id}`))

    sum -= product
        .price

        localStorage
        .removeItem(`bigBurger_${id}`)
    item
        .parentElement
        .remove()

    if (localStorage.length === 1) {
        localStorage.removeItem('id')
    }

    show()
}
show()


$.getJSON('data.json', data => {
    data.map(post => {

        let title = post
            .title
            .substr(0, 20)
        let descr = post
            .body
            .substr(0, 50)

        $('#itemssss').append(
            `
            <div class="item">
                <div class="item-img">
                    <img src="./image/${post.image}" alt="img">
                </div>
                <div class="item-info">
                    <h3>${title} ...</h3>
                    <p>${descr} ...</p>
                    <a href="post.html#${post.id}">Read more</a>
                </div>
            </div>
        `
        )
    })
})




$('input').on('click', () => {
    $('#searchBox').toggleClass('show')
})

$('input').on('input', () => {
    let val = $('input').val()
    $('#searchBox').html('')

    $.getJSON('data.json', data => {
        data.map(post => {
            if (post.title.includes(val)) {

                let title = post
                    .title
                    .substr(0, 15)

                $('#searchBox').append(
                    `
                    <div class="search-item">
                        <img src="./image/${post.image}">
                        <h5><a href="post.html#${post.id}">${title} ...</a></h5>
                    </div>
                `
                )
            }
        })
    })
})