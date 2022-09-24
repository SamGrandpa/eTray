var total = 0;
var itemHTML='';
var myCart = document.getElementById("cart-list")
var myReceipt = "";

// ----------------------------------------
// add order to the cart
function addItem(name, price, options){

    var newCartItem = document.createElement('li');
    newCartItem.className = "cart-item";

    if(name == undefined || price == undefined){
        name = "No item";
        price = 0;
    }
    
    // list the name, price, and add a remove button 
    //  for the added item
    newCartItem.innerHTML = `1 ${name}: $${price.toFixed(2)} 
    <button class="remove" data-name="${name}" data-price="${price}"><i class="fa fa-close"></i></button><br>
    ${options}`;

    // add the li element to the ul element
    myCart.appendChild(newCartItem);
   
    
    total += price;
    document.getElementById("myTotal").innerHTML=
    'Total: $' + total.toFixed(2);
    console.log(newCartItem);
    console.log(total);
}
//-----------------------------------------


//-------------------------------------------
// Event handler to handle clicks in the cart

myCart.onclick = function (e) {
    // console.log("Clicked List!!!!");
    console.log(e.target);

    //if you click on something in the cart and it is 
    //a remove button, then call the remove function to remove
    //that specific cart item.
    if(e.target && e.target.classList.contains('remove')){
        const name = e.target.dataset.name;
        const price = e.target.dataset.price;
        console.log(price);
        removeItem(name, price);
    }
}


//-------------------------------------------
//remove item from cart
function removeItem(name, price){
    var listElements = myCart.getElementsByClassName("cart-item"); // list elements
    var length = listElements.length; // # of li elements 
    var found = false;
    

    for(var i = 0; i < length; i++){
        if (listElements[i].innerHTML.indexOf(name) != -1)
        {
             myCart.removeChild(listElements[i]);
             found="true";
             total -= price;
             document.getElementById("myTotal").innerHTML=
            'Total: $' + total.toFixed(2);
             break;
        }
    }

}
//------------------------------------------

//big mac modal
//open modal window when the 'add to order' button is clicked
document.getElementById('add-bigmac').addEventListener('click', 
function(){
    document.getElementById("total").value = "$" + 5.69;
    document.querySelector('.bg-modal-bigmac').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-bigmac').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-bigmac').style.display = 'none';
});

//cheeseburger modal
document.getElementById('add-cburger').addEventListener('click', 
function(){
    document.getElementById("total2").value = "$" + 1.69;
    document.querySelector('.bg-modal-cburger').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-cburger').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-cburger').style.display = 'none';
});

//mcdouble modal
document.getElementById('add-mcdouble').addEventListener('click', 
function(){
    document.getElementById("totalMcDouble").value = "$" + 2.29;
    document.querySelector('.bg-modal-mcdouble').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-mcdouble').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-mcdouble').style.display = 'none';
});

//quarter pounder modal
document.getElementById('add-qp').addEventListener('click', 
function(){
    document.getElementById("totalQuarterPounder").value = "$" + 2.29;
    document.querySelector('.bg-modal-qp').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-qp').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-qp').style.display = 'none';
});

//coke modal
document.getElementById('add-coke').addEventListener('click', 
function(){
    document.getElementById("totalCocaCola").value = "$" + 2.24;
    document.querySelector('.bg-modal-coke').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-coke').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-coke').style.display = 'none';
});

//Fruitopia Strawberry modal
document.getElementById('add-fs').addEventListener('click', 
function(){
    document.getElementById("totalFruitopia").value = "$" + 2.24;
    document.querySelector('.bg-modal-fs').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-fs').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-fs').style.display = 'none';
});

//Orange Juice modal
document.getElementById('add-oj').addEventListener('click', 
function(){
    document.getElementById("totalOrangeJuice").value = "$" + 1.99;
    document.querySelector('.bg-modal-oj').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-oj').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-oj').style.display = 'none';
});

//Sprite modal
document.getElementById('add-sprite').addEventListener('click', 
function(){
    document.getElementById("total-sprite").value = "$" + 2.24;
    document.querySelector('.bg-modal-sprite').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-sprite').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-sprite').style.display = 'none';
});

//big mac meal modal
document.getElementById('add-bigmac-meal').addEventListener('click', 
function(){
    document.getElementById("totalBMMeal").value = "$" + 9.49;
    document.querySelector('.bg-modal-bigmac-meal').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-bigmac-meal').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-bigmac-meal').style.display = 'none';
});

//McChicken meal modal
document.getElementById('add-mcchicken-meal').addEventListener('click', 
function(){
    document.getElementById("totalMccMeal").value = "$" + 9.49;
    document.querySelector('.bg-modal-mcchicken-meal').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-mcchicken-meal').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-mcchicken-meal').style.display = 'none';
});

//6pc McNuggets meal modal
document.getElementById('add-6mcnugget-meal').addEventListener('click', 
function(){
    document.getElementById("total6McnMeal").value = "$" + 9.49;
    document.querySelector('.bg-modal-6mcnugget-meal').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-6mcnugget-meal').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-6mcnugget-meal').style.display = 'none';
});

//10pc McNuggets meal modal
document.getElementById('add-10mcnugget-meal').addEventListener('click', 
function(){
    document.getElementById("total10McnMeal").value = "$" + 10.89;
    document.querySelector('.bg-modal-10mcnugget-meal').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-10mcnugget-meal').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-10mcnugget-meal').style.display = 'none';
});

//fries modal
document.getElementById('add-fries').addEventListener('click', 
function(){
    document.getElementById("total-fries").value = "$" + 1.69;
    document.querySelector('.bg-modal-fries').style.display = 'flex';
});
//close the window when the close button is clicked
document.getElementById('close-fries').addEventListener('click', 
function(){
    document.querySelector('.bg-modal-fries').style.display = 'none';
});


// Raad's add to total function for food customization options
// big mac total function
window.totalIt= function() {
    var input = document.getElementsByClassName("option-bigmac");
    var total1 = 5.69;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total").value = "$" + (total1.toFixed(2));
}

// cheeseburger total function
window.totalIt2= function() {
    var input = document.getElementsByClassName("option-cburger");
    var total1 = 1.69;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total2").value = "$" + (total1.toFixed(2));
}

//McDouble total function
window.totalMcdouble= function() {
    var input = document.getElementsByClassName("option-mcdouble");
    var total1 = 2.29;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalMcDouble").value = "$" + (total1.toFixed(2));
}

//Quarter Pounder total function
window.totalQp= function() {
    var input = document.getElementsByClassName("option-qp");
    var total1 = 5.69;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalQuarterPounder").value = "$" + (total1.toFixed(2));
}

//Coke total function
window.totalCoke= function() {
    var input = document.getElementsByClassName("option-coke");
    var total1 = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalCocaCola").value = "$" + (total1.toFixed(2));
}

//Fruitopia Strawberry total function
window.totalFs= function() {
    var input = document.getElementsByClassName("option-fs");
    var total1 = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalFruitopia").value = "$" + (total1.toFixed(2));
}

//Orange Juice total function
window.totalOj= function() {
    var input = document.getElementsByClassName("option-oj");
    var total1 = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalOrangeJuice").value = "$" + (total1.toFixed(2));
}

//Sprite total function
window.totalSprite= function() {
    var input = document.getElementsByClassName("option-sprite");
    var total1 = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total-sprite").value = "$" + (total1.toFixed(2));
}

//big mac meal total function
window.totalBMmeal= function() {
    var input = document.getElementsByClassName("option-bigmac-meal");
    var total1 = 9.49;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalBMMeal").value = "$" + (total1.toFixed(2));
}

//McChicken total function
window.totalMcCMeal= function() {
    var input = document.getElementsByClassName("option-mcchicken-meal");
    var total1 = 9.49;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("totalMccMeal").value = "$" + (total1.toFixed(2));
}

//6pc McNugget Meal total function
window.total6McNMeal= function() {
    var input = document.getElementsByClassName("option-6mcnugget-meal");
    var total1 = 9.49;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total6McnMeal").value = "$" + (total1.toFixed(2));
}

//10pc McNugget Meal total function
window.total10McNMeal= function() {
    var input = document.getElementsByClassName("option-10mcnugget-meal");
    var total1 = 10.89;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total10McnMeal").value = "$" + (total1.toFixed(2));
}

//fries total function
window.totalFries= function() {
    var input = document.getElementsByClassName("option-fries");
    var total1 = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total1 +=parseFloat(input[i].value);
      }
    }
   
    document.getElementById("total-fries").value = "$" + (total1.toFixed(2));
}


// ----------------------------------------
// add to order, and add name, price, and options to innerHTML of the cart item

function addBigMac(){
    var userSelection = document.getElementsByClassName("option-bigmac");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Big Mac", 5.69 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-bigmac').style.display = 'none'; //close window
}

function addCheeseburger(){
    var userSelection = document.getElementsByClassName("option-cburger");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Cheeseburger", 1.69 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-cburger').style.display = 'none'; //close window
}

function addMcDouble(){
    var userSelection = document.getElementsByClassName("option-mcdouble");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("McDouble", 2.29 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-mcdouble').style.display = 'none'; //close window
}

function addQp(){
    var userSelection = document.getElementsByClassName("option-qp");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Quarter Pounder", 5.69 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-qp').style.display = 'none'; //close window
}

function addCoke(){
    var userSelection = document.getElementsByClassName("option-coke");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.size + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Coca-Cola", orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-coke').style.display = 'none'; //close window
}

function addFs(){
    var userSelection = document.getElementsByClassName("option-fs");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.size + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Fruitopia Strawberry", orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-fs').style.display = 'none'; //close window
}

function addOj(){
    var userSelection = document.getElementsByClassName("option-oj");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.size + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Orange Juice", orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-oj').style.display = 'none'; //close window
}

function addSprite(){
    var userSelection = document.getElementsByClassName("option-sprite");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.size + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Sprite", orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-sprite').style.display = 'none'; //close window
}

function addBMMeal(){
    var userSelection = document.getElementsByClassName("option-bigmac-meal");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'side' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.side + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'drinks' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.drink + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Big Mac Meal", 9.49 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-bigmac-meal').style.display = 'none'; //close window
}

function addMcCMeal(){
    var userSelection = document.getElementsByClassName("option-mcchicken-meal");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'side' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.side + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'drinks' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.drink + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].name + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("McChicken Meal", 9.49 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-mcchicken-meal').style.display = 'none'; //close window
}

function add6McNMeal(){
    var userSelection = document.getElementsByClassName("option-6mcnugget-meal");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'side' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.side + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'drinks' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.drink + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'sauce' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.sauce + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("6pc Chicken McNuggets Meal", 9.49 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-6mcnugget-meal').style.display = 'none'; //close window
}

function add10McNMeal(){
    var userSelection = document.getElementsByClassName("option-10mcnugget-meal");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'side' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.side + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'drinks' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.drink + " $" + userSelection[i].value + "<br>";
        }
        else if( userSelection[i].checked && userSelection[i].getAttribute('name') == 'sauce' ){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.sauce + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("10pc Chicken McNuggets Meal", 10.89 + orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-10mcnugget-meal').style.display = 'none'; //close window
}

function addFries(){
    var userSelection = document.getElementsByClassName("option-fries");
    var orderTotal = 0;
    var orderOptions = "";

    for (var i = 0; i < userSelection.length; i++){
        if(userSelection[i].checked){
            orderTotal += parseFloat(userSelection[i].value);
            orderOptions+= " - " + userSelection[i].dataset.size + " $" + userSelection[i].value + "<br>";
        }
    }

    console.log(orderOptions);

    addItem("Fries", orderTotal, orderOptions);

    
    document.querySelector('.bg-modal-fries').style.display = 'none'; //close window
}


//------------------------
// function to keep your order's html elements
function saveToReceipt(){
    myReceipt = document.getElementById("cart-content").outerHTML;
    localStorage.setItem("receipt", myReceipt);
    console.log(myReceipt);
}
//------------------------