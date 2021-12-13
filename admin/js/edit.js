let hash = location.hash
let id = hash.slice(1, hash.length)

let product = JSON.parse(localStorage.getItem(`burger_${id}`))
let img = document.getElementById('img')
let name = document.getElementById('name')
let price = document.getElementById('price')

name.value = product.name
price.value = product.price
img.setAttribute("src", `./image/${product.image}`)

function edit(){
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value

    let imageSrc = ""
    
    if(document.getElementById('image').files[0] != undefined){
        imageSrc = document.getElementById('image').files[0]['name']
    }else{
        imageSrc = img.getAttribute("src")
        imageSrc = imageSrc.slice(7, imageSrc.length)
    }

    let productObj = {
        id:id,
        name:name,
        price:price,
        image:imageSrc
    }

    localStorage.setItem(`burger_${id}`, JSON.stringify(productObj))
    localStorage.setItem(`id`, id)

    location.href = 'admin.html'
}