// get the navbar address
const navbar_element = document.getElementById('home-menu');
 
// create all the elmnets needed andd append it to designated div's
const div_container = document.createElement('div');
div_container.classList.add('container');
 
const anchor_1 = document.createElement('a');
anchor_1.classList.add('logo');
anchor_1.href = 'index.html';
 
const anchor_1_image = document.createElement('img');
anchor_1_image.src = "images/logo.png";
anchor_1.appendChild(anchor_1_image);
 
const button_navbar_toggler = document.createElement('button');
button_navbar_toggler.type = "button";
button_navbar_toggler.setAttribute('data-toggle', 'collapse');
button_navbar_toggler.setAttribute('data-target', '#navbarSupportedContent');
button_navbar_toggler.setAttribute('aria-controls', 'navbarSupportedContent');
button_navbar_toggler.setAttribute('aria-expanded', 'false');
button_navbar_toggler.setAttribute('aria-label', 'Toggle navigation');
 
const span_icon = document.createElement('span');
span_icon.classList.add('navbar-toggler-icon');
button_navbar_toggler.appendChild(span_icon);
 
const div_with_id = document.createElement('div');
div_with_id.classList.add('collapse', 'navbar-collapse');
div_with_id.id = "navbarSupportedContent";
 
const ul_list = document.createElement('ul');
ul_list.classList.add('navbar-nav', 'mr-auto');
 
const page_address = [
    { 'link': 'index.html', 'name': 'Home' },
    { 'link': 'about.html', 'name': 'About' },
    { 'link': 'design.html', 'name': 'Our Design' },
    { 'link': 'shop.html', 'name': 'Shop' },
    { 'link': 'contact.html', 'name': 'Contact Us' },
]
for (i = 0; i < page_address.length; i++) {
    const list_element = document.createElement('li');
    list_element.classList.add('nav-item');
    const anchor_list = document.createElement('a');
    anchor_list.classList.add("nav-link");
    anchor_list.href = page_address[i].link;
    anchor_list.textContent = page_address[i].name;
    list_element.appendChild(anchor_list);
    ul_list.appendChild(list_element);
}
 

const cart_icon = document.createElement('li'); 
cart_icon.classList.add('nav-item', 'cart-icon'); 
const cart_link = document.createElement('a');
const badge = document.createElement('span');
badge.classList.add('badge')
badge.id = 'popup'
cart_link.classList.add('nav-link', 'cart_link'); 
cart_link.href = 'buy_page.html';
const cart_img = document.createElement('img');
cart_img.src = 'images/cart.png';
cart_link.appendChild(cart_img);
cart_link.appendChild(badge);
badge.innerHTML = 0;
cart_icon.appendChild(cart_link);
 
ul_list.appendChild(cart_icon);
div_with_id.appendChild(ul_list);
const form_element = document.createElement('form');
form_element.classList.add("form-inline", "my-2", "my-lg-0");
const div_search_icon = document.createElement('div');
div_search_icon.classList.add("search_icon");
const ul_list_2 = document.createElement('ul');
ul_list_2.classList.add('search-profile-buttons');
const img_address = ["images/search-icon.png", "images/user-icon.png"];
for (i = 0; i < 2; i++) {
    const list_element_2 = document.createElement('li');
    const anchor_list_element_2 = document.createElement('a');
    anchor_list_element_2.href = "#";
    const img_list_element_2 = document.createElement('img');
    img_list_element_2.src = img_address[i];
    anchor_list_element_2.appendChild(img_list_element_2);
    list_element_2.appendChild(anchor_list_element_2);
    ul_list_2.appendChild(list_element_2);
}
 
div_search_icon.appendChild(ul_list_2);
form_element.appendChild(div_search_icon);
div_container.appendChild(anchor_1);
div_container.appendChild(button_navbar_toggler);
div_container.appendChild(div_with_id);
div_container.appendChild(form_element);
navbar_element.appendChild(div_container);
var body = document.getElementsByTagName('body');
body.onLoad = onLoad();
 
const navLinks = document.querySelectorAll('.nav-link');