//Calculate Order button click function call to calculate and display grant total value
function grandTotal() {  
  var subtotal = subTotal(document.orderform.price.value, document.orderform.quantity.value);
  var tax = calculateTax(subtotal);
  document.orderform.gtotal.value = "";
}

//Takes result of subTotal function to calculate tax
function calculateTax(subtotal){
  var stateCode = document.orderform.state.value;
  var taxRate;

  if(stateCode === "UT"){
    taxRate = 6.85;
  }else if(stateCode === "NV"){
    taxRate = 8.00;
  }else if(stateCode === "TX"){
    taxRate = 6.25;
  }else if(stateCode === "AL"){
    taxRate = 4.00;
  }else if(stateCode === "CA"){
    taxRate = 8.25;
  }

  var tax = subtotal * taxRate;
  document.orderform.salestax.value = tax.toFixed(2);
  return tax;
}


// Calculate sub total 
function subTotal(itemPrice, quantity){
  var productPrice = itemPrice * quantity;
  document.orderform.subtotal.value = productPrice.toFixed(2);
  return productPrice;
}
module.exports = subTotal;
