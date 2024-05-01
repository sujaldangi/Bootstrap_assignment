const products = [

    {
        "name": "Red sofa",
        "image": "images/chair_1.png",
        "price": "Price $120",
        'quantity': 1 

    },
    {
        "name": "Chair throne",
        "image": "images/chair_2.png",
        "price": "Price $80",
        'quantity': 1

    },
    {
        "name": "Japanese table",
        "image": "images/table_1.png",
        "price": "Price $50",
        'quantity': 1

    },
    {
        "name": "King size chair",
        "image": "images/chair_3.jpg",
        "price": "Price $110",
        'quantity': 1

    },
    {
        "name": "Chair",
        "image": "images/chair_4.jpg",
        "price": "Price $90",
        'quantity': 1

    },
    {
        "name": "Round table",
        "image": "images/table_2.png",
        "price": "Price $150",
        'quantity': 1

    },
    {
        "name": "Recline Chair",
        "image": "images/chair_5.png",
        "price": "Price $89",
        'quantity': 1

    },
    {
        "name": "Wooden Chair",
        "image": "images/chair_6.png",
        "price": "Price $79",
        'quantity': 1

    },
    {
        "name": "Square Table",
        "image": "images/table_3.png",
        "price": "Price $135",
        'quantity': 1

    }
]
// function that will display the products
function display(products) {
    const div_2 = document.createElement('div');
    div_2.classList.add("col-md-4");
    const div_3 = document.createElement('div');
    div_3.classList.add("box_main");
    const para = document.createElement('p');
    para.classList.add('chair_text');
    para.textContent = products.name;
    const div_img = document.createElement('div');
    div_img.classList.add("image_3");
    const img = document.createElement('img');
    img.src = products.image;
    img.style.height = '200px';
    div_img.appendChild(img);
    const para_2 = document.createElement('p');
    para_2.classList.add("chair_text");
    para_2.textContent = products.price;
    const div_buy = document.createElement('div');
    div_buy.classList.add("buy_bt");
    const buy = document.createElement('a');
    buy.href = '#';
    buy.onclick = function() {
        buy_product_display(products.name,products.price,products.quantity);
    };
    buy.textContent = 'Buy Now';
    div_buy.appendChild(buy);
    div_3.appendChild(para);
    div_3.appendChild(div_img);
    div_3.appendChild(para_2);
    div_3.appendChild(div_buy);
    div_2.appendChild(div_3);
    return div_2;
}
// append it to the designated div's
const main_1 = document.getElementById("designer-1");
const div_main_1 = document.createElement('div');
div_main_1.classList.add('row');
main_1.appendChild(div_main_1);
const main_2 = document.getElementById("designer-2");
const div_main_2 = document.createElement('div');
div_main_2.classList.add('row');
main_2.appendChild(div_main_2);
const main_3 = document.getElementById("designer-3");
const div_main_3 = document.createElement('div');
div_main_3.classList.add('row');
main_3.appendChild(div_main_3);
// loop that will call the fucntion
for (i = 0; i < products.length; i++) {
    if (i < 3) {
        div_main_1.appendChild(display(products[i]));
    }
    else if (i > 2 && i < 6) {
        div_main_2.appendChild(display(products[i]));
    }
    else {
        div_main_3.appendChild(display(products[i]));
    }
}