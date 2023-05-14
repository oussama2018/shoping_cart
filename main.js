var i=0;
var number=0;
var addedProducts = [];
function addToCart(productName, price, imageUrl) {
    var number =0;
    if (addedProducts.includes(productName)) {
        alert('This product has already been added to the cart.');
        return;
    }
    

    addedProducts.push(productName);
    var cart = document.getElementById("cart");
    var subCart = document.createElement("subCart");
    var numberProd = document.createElement("p");
    var cartItem = document.createElement("div");
    var productImage = document.createElement("img");
    var priceItem = document.createElement("p");
    var minButton = document.createElement("button");
    var plusButton = document.createElement("button");
    var dltButton = document.createElement('button');
    var heartButton =document.createElement('button');
    var somAff = document.createElement("p");
    numberProd.setAttribute("id", "numberProd");
    cartItem.setAttribute("id", "Div1");
    priceItem.setAttribute("id", "prix");
    minButton.setAttribute("id", "min");
    plusButton.setAttribute("id", "plus");
    dltButton.setAttribute("id", "delete");
    heartButton.setAttribute("id", "heart");
    somAff.setAttribute("id", "sum");

    numberProd.innerText ='1';
    productImage.src = imageUrl;
    cartItem.innerText = productName;
    priceItem.innerText = price;
    minButton.innerText ='-';
    plusButton.innerText ='+';
    dltButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    heartButton.innerHTML ='<i class="bi bi-heart"></i>';

    subCart.appendChild(numberProd);
    subCart.appendChild(cartItem);
    subCart.appendChild(priceItem);
    subCart.appendChild(productImage);
    subCart.appendChild(minButton);
    subCart.appendChild(plusButton);
    subCart.appendChild(dltButton);
    subCart.appendChild(heartButton);
    subCart.appendChild(somAff);
    cart.appendChild(subCart);
    var elem=document.querySelectorAll("#prix");

}


function decrement(event){
    var mo = event.target.parentElement;
    var getCounter=mo.querySelector('p');
    var counter = Number(getCounter.innerText);
    counter--;
    if (counter < 1){
        counter =1;
    }
    getCounter.innerHTML = counter;
    updatePrice(mo);
}

function increment(event){
    var mo = event.target.parentElement;
    var getCounter=mo.querySelector('p');
    var counter = Number(getCounter.innerText);
    counter++;
    getCounter.innerHTML = counter;
    updatePrice(mo);
}

function updatePrice(mo) {
    var priceEl = mo.querySelector('#prix');
    var quantityEl = mo.querySelector('p');
    var subTotalEl = mo.querySelector('#sum');
    var price = parseFloat(priceEl.innerText);
    var quantity = parseInt(quantityEl.innerText);
    var subTotal = price * quantity;
    subTotalEl.innerText = subTotal;
    
    // recalculate the total price
    var subTotals = document.querySelectorAll('#sum');
    var totalPrice = 0;
    for (var i = 0; i < subTotals.length; i++) {
        totalPrice += parseFloat(subTotals[i].innerText);
    }
    var totalPriceEl = document.querySelector('#totalPrice');
    totalPriceEl.innerText = totalPrice;
}







function myEvent(event){
    var targett = event.target;
    var parent = targett.parentElement;
    var btn = parent.querySelectorAll('button');
    
    if (btn[0] === targett) {
        btn[0].addEventListener("click", decrement(event))
    }
    else if (btn[1] === targett) {
        btn[1].addEventListener("click", increment(event))
    }
}

