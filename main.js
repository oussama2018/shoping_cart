var i=0;
var number=0;
var addedProducts = [];
var cart = document.getElementById("cart");
var Totalprice=cart.querySelector('h1')

function addToCart(productName, price, imageUrl) {
    var number =0;
    if (addedProducts.includes(productName)) {
        alert('This product has already been added to the cart.');
        return;
    }
    

    addedProducts.push(productName);
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
    numberProd.setAttribute("class", "numberProd");
    cartItem.setAttribute("id", "Div1");
    priceItem.setAttribute("id", "prix");
    priceItem.setAttribute("class", "prix");
    minButton.setAttribute("id", "min");
    plusButton.setAttribute("id", "plus");
    dltButton.setAttribute("id", "delete");
    heartButton.setAttribute("id", "heart");
    somAff.setAttribute("id", "sum");
    somAff.setAttribute("class", "sumClass")



    var product = document.getElementsByClassName('numberProd')
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
    //remove product function
    dltButton.addEventListener('click', function() {
        subCart.remove();
        addedProducts = addedProducts.filter(function(product) {
            return product !== productName;
        });
        updatePrice();
    });
    
    heartButton.addEventListener('click', function() {
        heartButton.style.color = 'red';
    });

    updatePrice();
    
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
    updatePrice();
}

function increment(event){
    var mo = event.target.parentElement;
    var getCounter=mo.querySelector('p');
    var counter = Number(getCounter.innerText);
    counter++;
    getCounter.innerHTML = counter;
    updatePrice();
}

function updatePrice() {
    var product = document.getElementsByClassName('numberProd')

    var getSumm = document.getElementsByClassName('prix')
   console.log(getSumm)
   var final_sum=0;
    for (i=0;  i<getSumm.length; i++)
    {
        var somTotal =Number(getSumm[i].innerText);
        console.log(somTotal)
        var numProduct = Number(product[i].innerText)
        console.log(numProduct)
        final_sum=final_sum+(somTotal*numProduct)
        console.log(final_sum)


        
    }
    console.log(final_sum)
Totalprice.innerText="Total Price:"+final_sum



    // somEl.innerText =
    
    // recalculate the total price
    // var subTotals = document.querySelectorAll('#sum');
    // var totalPrice = 0;
    // for (var i = 0; i < subTotals.length; i++) {
    //     totalPrice += parseFloat(subTotals[i].innerText);
    // }
    // var totalPriceEl = document.querySelector('#totalPrice');
    // totalPriceEl.innerText = totalPrice;
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

