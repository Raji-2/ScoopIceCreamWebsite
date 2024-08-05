var cnt=0;
const cartItems = [];  
const cartContainer = document.getElementById('scr');  
const totalAmountElement = document.getElementById('totalAmount');  
  
document.addEventListener('DOMContentLoaded', () => {  
  const addCartButtons = document.querySelectorAll('.card button');  
  addCartButtons.forEach((button) => {  
button.addEventListener('click', (e) => {  
 const itemName = e.target.getAttribute('data-item-name');  
 const itemPrice = parseInt(e.target.getAttribute('data-item-price'));  
 const itemImage = e.target.getAttribute('data-item-image');  
 addItemToCart(itemName, itemPrice, itemImage);  
 });  
  });  
});  
  
function addItemToCart(itemName, itemPrice, itemImage) {  
  const cartItem = {  
 name: itemName,  
 price: itemPrice,  
 image: itemImage,  
  };  
  cartItems.push(cartItem);  
  cnt++; 
  document.getElementById("count").innerHTML=cnt; 
  updateCartDisplay();  
  updateTotalAmount();  
}
/*  
function updateCartDisplay() {  
  cartContainer.innerHTML = '';  
  document.getElementById("scr").style.display="block";
  cartItems.forEach((item) => {  
 const cartItemHTML = `
 <div style="display: flex; align-items: center; margin-bottom: 10px;margin-left:100px;flex-wrap:wrap;border:1px  solid black;justify-content:space-between;width:200px;">  
  <img height="150px" width="200px" src="${item.image}">  
   <h2>${item.name}</h2>        <br><br>
   <h2>Rs. ${item.price}</h2> 
   <button data-item-index="${cartItems.indexOf(item)}" class="remove-button" style="border:transparent;width:80px;height:30px;">  
  <i class="fa-solid fa-trash"></i> Remove  
</button> 
 </div>`;  
    cartContainer.innerHTML += cartItemHTML;  
  });  
  const removeButtons = cartContainer.querySelectorAll('.remove-button');  
  removeButtons.forEach((button) => {  
 button.addEventListener('click', (e) => {  
 const itemIndex = parseInt(e.target.getAttribute('data-item-index'));  
 removeItemFromCart(itemIndex);  
 });  
  });  
} 
*/ 
function updateCartDisplay() {  
  cartContainer.innerHTML = '';  
  document.getElementById("scr").style.display="block";  
  cartItems.forEach((item) => {  
 const cartItemHTML = `  
 <div style="display: inline-block; margin: 10px; width: 200px; border: 1px solid black;">  
  <img height="150px" width="200px" src="${item.image}">  
 <h2>${item.name}</h2>    
 <h2>Rs. ${item.price}</h2>  
 <button data-item-index="${cartItems.indexOf(item)}" class="remove-button" style="border:transparent;width:110px;height:30px;">  
  <i class="fa-solid fa-trash"></i> Remove  
  </button>  
 </div>  
 `;  
 cartContainer.innerHTML += cartItemHTML;  
  });  
  const removeButtons = cartContainer.querySelectorAll('.remove-button');  
  removeButtons.forEach((button) => {  
 button.addEventListener('click', (e) => {  
 const itemIndex = parseInt(e.target.getAttribute('data-item-index'));  
 removeItemFromCart(itemIndex);  
 });  
  });  
}


function removeItemFromCart(itemIndex) {  
  cartItems.splice(itemIndex, 1);  
  cnt--; // decrement cnt here  
  document.getElementById("count").innerHTML = cnt; // update #count here  
  updateCartDisplay();  
  updateTotalAmount();  
}

  
function updateTotalAmount() {  
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);  
  totalAmountElement.textContent = `Rs. ${totalAmount}`;  
}

var a = document.getElementById("srch");
var c = document.getElementById("disp");
var b = ['Chocolate Cone','Strawberry Cone','Pista Cone','Blueberry Cup','Strawberry Cup','Tender Coconut Cup','Chocolate Cup','Vanilla Cup','Chocolate Shake','Mango Shake','Strawberry Shake','Casatta Slice','Chocolate Vanilla Slice','Pista Slice','Mango  Slice','Badam Kulfi','Milk Kulfi','Pista Kulfi'];

a.addEventListener('input', () => {
    var d = a.value.toLowerCase();
    c.innerText = '';
    if (d === '') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        var e = b.filter(fruit =>
             fruit.toLowerCase().startsWith(d));
        e.forEach(fruit => {
            var f = document.createElement('div');
            f.classList.add('fruit');
            f.textContent = fruit;
            c.appendChild(f);
        });
    }
});