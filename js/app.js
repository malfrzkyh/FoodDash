
let pizza = document.querySelectorAll(".buy");

// pizza.forEach(function(piz){
//     piz.addEventListener("click", function(){
//         console.log("wow");
//     });
// });

// navbar only

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//end of navbar


// checkout menu element
const checkoutMenu = document.querySelector('.checkout-menu');

// Function to toggle the checkout menu
function toggleCheckout() {
    checkoutMenu.classList.toggle('active');
}

// harga
const prices = {
    Thigh: 32000,
    Drumstick: 27500,
    Keel: 30500,
    Wing: 18900,
    Burger: 28000,
    Nugget: 22500,
    Fanta: 8000,
    Sprite: 9000,
    CocaCola: 10000,
    Rice : 7000,
    Spaghetti : 16500,
    FrenchFires : 13000,
    Kebab : 10000,
    Soup : 14500
};

//update checkout total
function updateTotal() {
    const checkoutTotalElement = document.getElementById('checkoutTotal');
    const items = document.querySelectorAll('.checkout-item');
    let total = 0;
    items.forEach(item => {
        total += prices[item.dataset.item] * parseInt(item.dataset.quantity);
    });
    checkoutTotalElement.innerText = total;
}

// nambah ke checkout menu
function addToCheckout(itemName) {
    const checkoutItems = document.querySelector('.checkout-items');
    const existingItem = checkoutItems.querySelector(`[data-item="${itemName}"]`);
    if (existingItem) {
        existingItem.dataset.quantity = parseInt(existingItem.dataset.quantity) + 1;
        const quantityElement = existingItem.querySelector('.quantity');
        quantityElement.innerText = existingItem.dataset.quantity;
        showNotification();
    } else {
        const newItem = document.createElement('div');
        newItem.classList.add('checkout-item', 'added'); 
        newItem.dataset.item = itemName;
        newItem.dataset.quantity = 1;
        newItem.innerHTML = `
            <img src="assets/img/${itemName.toLowerCase()}.png" alt="${itemName}">
            <p>${itemName}</p>
            <p>x<span class="quantity">${newItem.dataset.quantity}</span></p>
            <p class="item-total">${prices[itemName]}</p>
        `;
        checkoutItems.appendChild(newItem);
        showNotification();
    }
    updateTotal();
}



// pembayaran berhasil
function processPayment() {
    const checkoutItems = document.querySelectorAll('.checkout-item');
    if (checkoutItems.length === 0) {
        // Tampilkan notifikasi jika checkout kosong
        showEmptyCheckoutNotification();
        return;
    }
    window.location.href = 'pembayaranberhasil.html';
}

// notifikasi checkout kosong
function showEmptyCheckoutNotification() {
    const notification = document.querySelector('.empty-notification');
    notification.classList.add('active');

    setTimeout(function () {
        notification.classList.remove('active');
    }, 2000); // Notifikasi akan hilang setelah 2 detik (2000 milidetik)
}

// pembayaran reset
function resetPaymentNdes(){
    location.reload();
}

//jadi logika nya cuma reset" page doang wkwkwk

// Add event listener buat buy nambah ke checkout
const buyButtons = document.querySelectorAll('.buy');
buyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const itemName = this.closest('.item').querySelector('.judulItem').innerText;
        addToCheckout(itemName);
    });
});

//fitur cari
const searchInput = document.querySelector('.search-container input');
const menuItems = document.querySelectorAll('.item');

searchInput.addEventListener('keyup', function (event) {
  const searchTerm = event.target.value.toLowerCase();
  menuItems.forEach((item) => {
    const itemName = item.querySelector('.judulItem').innerText.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

//notif masuk checkout
function showNotification() {
    const notification = document.querySelector('.notification');
    notification.classList.add('active');
  
    setTimeout(function () {
      notification.classList.remove('active');
    }, 2000); // Waktu dalam milidetik, dalam contoh ini notifikasi akan hilang setelah 2 detik (2000 milidetik)
  }

// img slider
// Function ganti active slide
let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide-item').length;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide-item');
    if (slideNumber < 1) {
        currentSlide = totalSlides;
    } else if (slideNumber > totalSlides) {
        currentSlide = 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[currentSlide - 1].classList.add('active');
}

// Function handle slide navigation
function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

//initial slide
showSlide(currentSlide);






//bismillahirrohmanirahin aallahuma bariklana fima razaktana wakina adabanar
//kenapa berdoa bang?
//ya karna gw mau makan dulu cape bego ngoding mulu
//nb: gw cape buat ginian kalo copas minimal kasih author nya siapa makasi :)

// home section

