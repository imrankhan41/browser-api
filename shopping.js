const displayLocalStorageCart =()=>{
    const cart =getCart();
    for(const name in cart){
        displayProducts(name);
    }
}

const addItem=()=>{
    const nameField = document.getElementById("product-name");
    const name =nameField.value;
    if(!name){
        return;
    }
    displayProducts(name);
    addPoductCart(name);
    nameField.value ="";
}

const displayProducts = name=>{
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () =>{
    const cart = localStorage.getItem("cart");
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj = {}
    }
    return cartObj;
}

const addPoductCart = name=>{
    const cart = getCart();
    if(cart[name]){
        cart[name] =cart[name]  + 1;
    }
    else{
        cart[name]=1;
    }
    console.log(cart);
    const cartString = JSON.stringify(cart);
      localStorage.setItem("cart",cartString);
}
const placeOrder = () =>{
    document.getElementById("products").innerText="";
    localStorage.removeItem("cart");
}
displayLocalStorageCart();

