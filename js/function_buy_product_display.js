// get data from local storage
var popup_shop_value = localStorage.getItem('popup_shop_value');
if (popup_shop_value === null) {
    popup_shop_value = 0;
} else {
    popup_shop_value = parseInt(popup_shop_value);
}
// get data from local storage
var localStorage_products_list = localStorage.getItem('products');
var list_product_check = localStorage.getItem('checklist');
if (list_product_check == null) {
    list_product_check = [];
}
else {
    list_product_check = list_product_check.split(',');
}
if (localStorage_products_list !== null) {
    localStorage_products_list = localStorage_products_list.split(',');
}
else {
    localStorage_products_list = [];
}
// function that will clear the cart items
function clear_all() {
    localStorage.removeItem('popup_shop_value');
    localStorage.removeItem('checklist');
    localStorage.removeItem('products');
    popup_shop_value = 0;
    location.reload();
}
const localStorage_products = [];
const div_product_list = document.getElementById("cart_items");
const buttonClear = document.getElementById("clearButton");
// function that will run when the page is reloaded
function onLoad() {
    var popup_shop = document.getElementById('popup');
    popup_shop.innerHTML = popup_shop_value;
    for (var i = 0; i < (localStorage_products_list.length); i++) {
        if (i % 2 == 0) {
            const ul_product_list = document.createElement('ul');
            ul_product_list.classList.add('list-group', 'list-group-flush');
            const li_product_list = document.createElement('ul');
            li_product_list.classList.add("list-group-item");
            var localStorage_products_list_id = localStorage_products_list[i];
            localStorage_products_list_id = localStorage_products_list_id.split('-----');
            content = localStorage_products_list[i] + "= " + localStorage_products_list[i + 1]
            li_product_list.textContent = content;
            const add_button_product = document.createElement('div');
            add_button_product.classList.add("buy_bt");
            const add_button = document.createElement('a');
            add_button.href = '#';
            add_button.id = localStorage_products_list_id[0];
            add_button.onclick = (function(name, price, quantity) {
                return function() {
                    buy_product_display(name, price, quantity);
                };
            })(localStorage_products_list_id[0], localStorage_products_list_id[1], localStorage_products_list[i + 1]);
            add_button.textContent = '+';
            add_button_product.appendChild(add_button);
            ul_product_list.appendChild(li_product_list);
            ul_product_list.appendChild(add_button_product);
            ul_product_list.appendChild(buttonClear);
            div_product_list.appendChild(ul_product_list);
        }
    }
}
// function to add product to the list
function buy_product_display(name, price, quantity) {
    console.log(name);
    var popup_shop = document.getElementById('popup');
    var popup_shop_value = popup_shop.textContent.trim();
    var popup_shop_value = Number(popup_shop_value);
    if (list_product_check.includes(name) == false) {
        list_product_check.push(name);
        popup_shop_value = popup_shop_value + 1;
        popup_shop.innerHTML = popup_shop_value;
        localStorage.setItem('popup_shop_value', popup_shop_value);
        const ul_product_list = document.createElement('ul');
        ul_product_list.classList.add('list-group', 'list-group-flush');
        const li_product_list = document.createElement('ul');
        li_product_list.classList.add("list-group-item");
        li_product_list.id = name;
        const text_in_else = name + "-----" + price + "-----Quantity=" + quantity
        li_product_list.textContent = text_in_else;
        const add_button_product = document.createElement('div');
        add_button_product.classList.add("buy_bt");
        const add_button = document.createElement('a');
        add_button.href = '#';
        add_button.id = name;
        add_button.onclick = function () {
            buy_product_display(name,price,quantity);
        }
        add_button.textContent = '+';
        add_button_product.appendChild(add_button);
        if (div_product_list !== null) {
            ul_product_list.appendChild(li_product_list);
            ul_product_list.appendChild(add_button_product);
            div_product_list.appendChild(ul_product_list);
        }
        const xyz = li_product_list.textContent.split('=')
        localStorage_products_list.push(xyz[0], xyz[1]);
        localStorage.setItem('checklist', list_product_check);
        localStorage.setItem('products', localStorage_products_list); 
    }
    else {
        var same_text = name + "-----" + price + "-----Quantity";
        for (var i = 0; i < localStorage_products_list.length; i++) {
            if (localStorage_products_list[i] == same_text) {
                // console.log('ho')
                localStorage_products_list[i + 1]++;
                const initial_x = document.getElementById(name);
                if (initial_x !== null) {

                    initial_x.innerHTML = name + "-----" + price + "-----Quantity" + localStorage_products_list[i + 1];
                }
                localStorage.setItem('products', localStorage_products_list);
                location.reload();
            }
        }
    }
}
// Creating the clear button
const clear_button = document.createElement('div');
clear_button.classList.add("buy_bt");
const clear = document.createElement('a');
clear.href = '#';
clear_button.appendChild(clear);
buttonClear.appendChild(clear_button);
clear.onclick = function () {
    clear_all();
};
clear.textContent = 'clear';



