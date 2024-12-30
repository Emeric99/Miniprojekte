let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', function() {
    body.classList.add('active');
});
closeShopping.addEventListener('click', function() {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Bajri flour 1kg',
        image: 'Bajri flour 1kg.jpg',
        price: 19.99
    },
    {
        id: 2,
        name: 'Bananablüten',
        image: 'Bananablüten.jpg',
        price: 24.99
    },
    {
        id: 3,
        name: 'Bubble Milk tea',
        image: 'Bubble Milk tea.jpg',
        price: 14.99
    },
    {
        id: 4,
        name: 'camel antiseptic', 
        image: 'camel antiseptic.jpg',
        price: 14.99
    },
    {
        id: 5,
        name: 'Capri-sun',
        image: 'Capri-sun.jpg',
        price: 14.99
    },
    {
        id: 6,
        name: 'chio tortillas hot chili',
        image: 'chio tortillas hot chili.jpg',
        price: 14.99
    },
    {
        id: 7,
        name: 'chio tortillas wild paprika',
        image: 'chio tortillas wild paprika.jpg',
        price: 14.99
    },
    {
        id: 8,
        name: 'comb thru extra streng',
        image: 'comb thru extra streng.jpg',
        price: 14.99
    },
    {
        id: 9,
        name: 'chupa chups fraise',
        image: 'chupa chups fraise.jpg',
        price: 14.99
    }

];

let listCards = [];

function initApp() {
    for (var i = 0; i < products.length; i++) {
        var value = products[i];
        var newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${i})">In den Warenkorb</button>`;
        list.appendChild(newDiv);
    }
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = {
            id: products[key].id,
            name: products[key].name,
            image: products[key].image,
            price: products[key].price,
            quantity: 1
        };
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    var count = 0;
    var totalPrice = 0;
    for (var i = 0; i < listCards.length; i++) {
        var value = listCards[i];
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;

            var newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    }
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity == 0) {
        listCards[key] = null;
    } else {
        listCards[key].quantity = newQuantity;
        
    }
    reloadCard();
}
