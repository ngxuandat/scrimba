const menuItems = [
    {
        title: "pizza",
        graphic: "🍕",
        description: "pepperoni,mushrom,mozarella",
        price: 14
    },
    {
        title: "hamburger",
        graphic: "🍔",
        description: "beef,lettuce,tomato,cheese",
        price: 12
    },
    {
        title: "hotdog",
        graphic: "🌭",
        description: "sausage,bun,condiments",
        price: 10
    },
    {
        title: "sandwich",
        graphic: "🥪",
        description: "bread,meat,vegetables",
        price: 8
    },
    {
        title: "taco",
        graphic: "🌮",
        description: "tortilla,meat,cheese,lettuce",
        price: 9
    },
    {
        title: "beer",
        graphic: "🍺",
        description: "cold and refreshing",
        price: 5
    }
];

const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const completeOrderBtn = document.getElementById("complete-order-btn");
completeOrderBtn.disabled = true;
completeOrderBtn.addEventListener("click", ()=> {
    document.getElementById("enter-card-info-form").style.display = "inline";
    document.getElementById("overlay").style.display = "block";
});
const enterCardInfoForm = document.getElementById("card-info-form");
enterCardInfoForm.addEventListener("submit", postCheckOut);

const checkOutItem = [];


function renderMenuItems() {
    let menuHtml = '';
    menuItems.forEach((item, index) => {
        menuHtml += `
                <div class="menu-item">
                    <p class="item-graphic">${item.graphic}</p>
                    <div>
                        <p class="item-title">${item.title}</p>
                        <p class="item-des">${item.description}</p>
                        <p class="item-price">$${item.price}</p>
                    </div>
                    <button class="add-to-cart-btn" data-item-id="${index}">+</button>
                </div>
                <hr>
        `
    });
    menu.innerHTML = menuHtml;
    console.log(document.querySelectorAll(".add-to-cart-btn"));
    document.querySelectorAll(".add-to-cart-btn").forEach((btn)=>{
        console.log(btn)
        btn.addEventListener("click", addItemForCheckout)
    })
}

function addItemForCheckout(e) {
    checkOutItem.push(e.target.dataset.itemId);
    console.log(checkOutItem);
    renderCheckOut();
}

function renderCheckOut() {
    let cartContentHtml = '';
    let total = 0;
    checkOutItem.forEach((itemId, index)=> {
        const menuItemIndex = Number(itemId);
        cartContentHtml += `
                    <div class="checkout-item">
                        <div>
                            <p>${menuItems[menuItemIndex].title}</p>
                            <button class="remove-item-btn" data-checkout-item-index="${index}">remove</button>
                        </div>
                        <p>$${menuItems[menuItemIndex].price}</p>
                    </div>
        `;
        total += menuItems[menuItemIndex].price;
    });
    cart.innerHTML = cartContentHtml;
    document.getElementById("total-price").textContent = "$"+total;
    document.querySelectorAll(".remove-item-btn").forEach((btn) => {
        btn.addEventListener("click", removeItem)
    });
    if (checkOutItem.length > 0) {
        completeOrderBtn.disabled = false;
    } else { completeOrderBtn.disabled = true; }
}

function removeItem(e) {
    const itemToRemove = e.target.dataset.checkoutItemIndex;
    checkOutItem.splice(itemToRemove, 1);
    console.log(checkOutItem);
    renderCheckOut()
}

function postCheckOut(e) {
    e.preventDefault();

    const paymentData = new FormData(enterCardInfoForm);
    const userName = paymentData.get("userName");

    document.getElementById("enter-card-info-form").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("checkout").style.display = "none";

    document.getElementById("thankyou-and-review").innerHTML = `
        <p id="thankyou-msg">Thanks, ${userName}! Your order is on its way!</p>
        <p id="review-prompt">Rate your experience with us:</p>
        <input type="range" min="0.5" max="5" step="0.5" value="2.5" class="rating" style="--val:2.5" oninput="this.style='--val:'+this.value">
    `

    document.getElementById("thankyou-and-review").style.display = 'inline';

}

renderMenuItems();
