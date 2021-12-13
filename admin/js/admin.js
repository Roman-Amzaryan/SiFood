let tbody = document.getElementsByTagName('tbody')[0]
tbody.innerHTML = ''
for(let i = 0; i <= localStorage.length; i++){
    let product = JSON.parse(localStorage.getItem(`burger_${i}`))

    if(product != null){
        tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><img src="./image/${product.image}"></td>
                <td>
                    <div>
                        <a href="edit.html#${product.id}" class="edit">Edit</a>
                        <a href="#" class="delete"  onclick="del(${product.id}, this)">Delete</a>
                    </div>
                </td>
            </tr>
        `
    }
}


function del(id, item) {

    let product = JSON.parse(localStorage.getItem(`phone_${id}`))
  
    localStorage.removeItem(`burger_${id}`)
    item.parentElement.parentElement.parentElement.remove()

    localStorage.removeItem(`bigBurger_${id}`)
    item.parentElement.remove()
    
  
    if (localStorage.length === 1) {
      localStorage.removeItem('id')
    }
    
  }
