let productCreator = document.getElementById('productCreator');
let openClose = document.getElementById('openClose');
openClose.onclick = () => {
    productCreator.style.display = 'none';
}

let newButton = document.getElementById('newButton');
newButton.onclick = () => {
    productCreator.style.display = 'flex';
}

//////////////////////////////////////////

let productBox = document.getElementById('productBox')

let createButton = document.getElementById('createButton')





var prodform = document.getElementById('prodform');
prodform.onsubmit = (e) => {
    e.preventDefault()

    let productName = document.getElementById('productName').value
    let productPrice = document.getElementById('productPrice').value
    let productImage = document.getElementById('productImage').value
    let productDes = document.getElementById('productDes').value

    let productNameinp = document.getElementById('productName')
    let productPriceinp = document.getElementById('productPrice')
    let productImageinp = document.getElementById('productImage')
    let productDesinp = document.getElementById('productDes')

    if (productName == "") {
        alert("Error!!!    (((product's name empty")
        productNameinp.style.animation = 'shake .1s 5 ease forwards'
        setTimeout(() => {
            productNameinp.style.animation = ''
        }, 500);
    } else if (productPrice == "") {
        alert("Error!!!    (((product's price empty")
        productPriceinp.style.animation = 'shake .1s 5 ease forwards'
        setTimeout(() => {
            productNameinp.style.animation = ''
        }, 500);
    } else if (productImage == "") {
        alert("Error!!!    (((product's image URL empty")
        productImageinp.style.animation = 'shake .1s 5 ease forwards'
        setTimeout(() => {
            productNameinp.style.animation = ''
        }, 500);
    } else if (productDes == "") {
        alert("Error!!!    (((product's description empty")
        productDesinp.style.animation = 'shake .1s 5 ease forwards'
        setTimeout(() => {
            productNameinp.style.animation = ''
        }, 500);
    } else {
        productNameinp.style.animation = ''
        productPriceinp.style.animation = ''
        productImageinp.style.animtion = ''
        productDesinp.style.animation = ''

        //.........................Constructor......................//

        class Product {
            constructor(productName, productPrice, productImage, productDes) {
                this.productName = productName;
                this.productPrice = productPrice;
                this.productImage = productImage;
                this.productDes = productDes;

                this.render = function () {
                    let product = document.createElement('div');
                    product.setAttribute('class', 'product')
                    product.innerHTML = `
                    <div  class="product_image">
                        <img src="${this.productImage}">
                    </div>

                    <div class="product_info">
                        <h2>${this.productName}</h2>
                        <h3>${this.productDes}</h3>
                        <h1>${this.productPrice}$</h1>
                    </div>
                    `
                    productBox.append(product)
                }
            }
        }
        let product_1 = new Product(productName, productPrice, productImage, productDes);
        product_1.render()
        console.log(product_1);
    }
}