function cheapestDoubleRoom(){
    var Persons = 0;
    var numberOfPersons = 0;
    var index = 0;
    var min = Math.min();
    var res = document.getElementById("hprt-table");
    var rows = res.getElementsByClassName("js-rt-block-row");
    for(var i = 0; i < rows.length; i++){
      Persons = rows[0].getElementsByClassName("c-occupancy-icons hprt-occupancy-occupancy-info");
      numberOfPersons = Persons[0].getElementsByClassName("bicon bicon-occupancy");
      if(numberOfPersons.length == 2){
        var price = rows[0].getElementsByClassName("prco-valign-middle-helper");
        price = price[0].innerText;
        var num = price.match(/\d/g);
        num = num.join("");
        price = Number(num);
        if(price < min){
          min = price;
          index = i;
        }
      }
    }
  
    var getID = rows[index].getElementsByClassName("hprt-nos-select js-hprt-nos-select")[0].id;
    document.getElementById(getID).selectedIndex = "1";
    $("#"+getID).trigger("change");
    document.querySelector('.txp-bui-main-pp.bui-button.bui-button--primary.hp_rt_input.js-reservation-button').click();
  }