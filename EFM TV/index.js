var selectMenu = document.querySelector('.select_menu');
var inputQuantity = document.querySelector('input[type="number"]');
var addToCartButton = document.querySelector('.conf_btn');
var pan = document.getElementById('panier');
var prixHT = document.getElementById('prix-ht');
var prixTTC = document.getElementById('prix-ttc');

var TVPrices = {
    "TV OLED": { "image": "oled.jpg", "priceHT": 1000 },
    "TV LCD": { "image": "lcd.png", "priceHT": 800 },
    "TV SAMSUNG": { "image": "tvsam.jpg", "priceHT": 1200 },
    "TV ITEL": { "image": "tvitel.png", "priceHT": 900 },
    "TV APPLE": { "image": "apple.jpg", "priceHT": 1500 },
    "TV 8K": { "image": "8k.jpg", "priceHT": 2000 }
};

addToCartButton.addEventListener('click', addToCart);

function addToCart() {
    var selectedTV = selectMenu.value;
    var quantity = parseInt(inputQuantity.value);
    var priceHT = TVPrices[selectedTV].priceHT;
    var totalPriceHT = priceHT * quantity;
    var totalPriceTTC = totalPriceHT * 1.2; // Assuming 20% tax

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${selectedTV}</td>
        <td>${quantity}</td>
        <td>${priceHT}</td>
        <td><img src="${TVPrices[selectedTV].image}" alt="${selectedTV}"></td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Supprimer</button></td>
    `;

    pan.appendChild(newRow);

    updatePrices();
}

function deleteRow(button) {
    var row = button.closest('tr');
    row.remove();
    updatePrices();
}

function updatePrices() {
    var totalPriceHT = 0;
    var rows = pan.querySelectorAll('tr');
    rows.forEach(function(row) {
        var priceHT = parseInt(row.children[2].textContent);
        var quantity = parseInt(row.children[1].textContent);
        totalPriceHT += priceHT * quantity;
    });

    var totalPriceTTC = totalPriceHT * 1.2;

    prixHT.textContent = totalPriceHT;
    prixTTC.textContent = totalPriceTTC.toFixed(2);
}
