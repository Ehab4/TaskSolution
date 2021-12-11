function print(){
    var t = document.querySelector('.bui-list__item');
    var r = document.querySelector('.bp-price-details__charge-value.e2e-price-details__total-charge--user');
    var price =  r.innerText.replace(/[^\d]/g, '');
    var currency = r.innerText.replace(/[0-9]./g, '');
  
    console.log("Price: " + price);
    console.log("currency" + currency);
    console.log("You selected: " + t.innerText);
  }