let createAccount = document.getElementById('createAccount');

for(let i = 0; i < accountData.length; i++){

    let name = accountData[i].accountName;
    let username = accountData[i].accountUsername;
    let password = accountData[i].accountPassword;
}

for(let i = 0; i < subData.length; i++){
    let nameOfSub = subData[i].subNameOfSub;
    let bread = subData[i].subBread;
    let size = subData[i].subSize;
    let protein = subData[i].subProtein;
    let toppings = subData[i].subToppings;
    let sauce = subData[i].subSauce;
}

let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subNameOfSub = document.getElementById("subNameOfSub").value;
    let size = document.getElementById("size").value;

    if(size === "Full Sub"){
        orderTotal = orderTotal + 10;
    } else if(size === "Half Sub"){
        orderTotal = orderTotal + 5;
    } 

    let protein = document.getElementById("protein").value;

    if(protein === "Chicken"){
        orderTotal = orderTotal + 10;
    } else if(protein === "Bacon"){
        orderTotal = orderTotal + 8;
    }else if(protein === "Pulled Pork"){
        orderTotal = orderTotal + 8;
    }else if(protein === "Steak"){
        orderTotal = orderTotal + 12;
    }else if(protein === "Ham"){
        orderTotal = orderTotal + 6;
    }else if(protein === "Pepperoni"){
        orderTotal = orderTotal + 5;
    }

    let toppings = document.getElementById("toppings").value;

    if(toppings === "Avo"){
        orderTotal = orderTotal + 5;
    } else if(toppings === "Lettuce"){
        orderTotal = orderTotal + 3;
    }else if(toppings === "Tomato"){
        orderTotal = orderTotal + 7;
    }else if(toppings === "Cheese"){
        orderTotal = orderTotal + 9;
    }else if(toppings === "Spinach"){
        orderTotal = orderTotal + 2;
    }else if(toppings === "Pickles"){
        orderTotal = orderTotal + 7;
    }else if(toppings === "Onions"){
        orderTotal = orderTotal + 4;
    }else if(toppings === "Cucumber"){
        orderTotal = orderTotal + 5;
    }else if(toppings === "Peppers"){
        orderTotal = orderTotal + 3;
    }

    let sauce = document.getElementById("sauce").value;

    if(sauce === "Mayo"){
        orderTotal = orderTotal + 3;
    } else if(sauce === "Mustard"){
        orderTotal = orderTotal + 3;
    }else if(sauce === "Guacamole"){
        orderTotal = orderTotal + 9;
    }else if(sauce === "Hummus"){
        orderTotal = orderTotal + 12;
    }else if(sauce === "Butter"){
        orderTotal = orderTotal + 2;
    }

          // Get Radio Options
    let breadOption = document.getElementsByName("baseRadio");
    let breadValue; 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            breadValue = breadOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    subOrder.push({
        subNameOfSub: subNameOfSub,
        subSize: size,
        subProtein: protein,
        subToppings: toppings,
        subSauce: sauce,
        subBread: breadValue,
        subPrice: subTotal
    });

    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    let realTimePrice = 0;
    
    let size = document.getElementById("size").value;

    if(size === "Full Sub"){
        orderTotal = orderTotal + 10;
    } else if(size === "Half Sub"){
        orderTotal = orderTotal + 5;
    } 

    let protein = document.getElementById("protein").value;

    if(protein === "Chicken"){
        orderTotal = orderTotal + 10;
    } else if(protein === "Bacon"){
        orderTotal = orderTotal + 8;
    }else if(protein === "Pulled Pork"){
        orderTotal = orderTotal + 8;
    }else if(protein === "Steak"){
        orderTotal = orderTotal + 12;
    }else if(protein === "Ham"){
        orderTotal = orderTotal + 6;
    }else if(protein === "Pepperoni"){
        orderTotal = orderTotal + 5;
    }

    let toppings = document.getElementById("toppings").value;

    if(toppings === "Avo"){
        orderTotal = orderTotal + 5;
    } else if(toppings === "Lettuce"){
        orderTotal = orderTotal + 3;
    }else if(toppings === "Tomato"){
        orderTotal = orderTotal + 7;
    }else if(toppings === "Cheese"){
        orderTotal = orderTotal + 9;
    }else if(toppings === "Spinach"){
        orderTotal = orderTotal + 2;
    }else if(toppings === "Pickles"){
        orderTotal = orderTotal + 7;
    }else if(toppings === "Onions"){
        orderTotal = orderTotal + 4;
    }else if(toppings === "Cucumber"){
        orderTotal = orderTotal + 5;
    }else if(toppings === "Peppers"){
        orderTotal = orderTotal + 3;
    }

    let sauce = document.getElementById("sauce").value;

    if(sauce === "Mayo"){
        orderTotal = orderTotal + 3;
    } else if(sauce === "Mustard"){
        orderTotal = orderTotal + 3;
    }else if(sauce === "Guacamole"){
        orderTotal = orderTotal + 9;
    }else if(sauce === "Hummus"){
        orderTotal = orderTotal + 12;
    }else if(sauce === "Butter"){
        orderTotal = orderTotal + 2;
    }
    
        let breadOptions = document.getElementsByName("breadRadio");
        for(let i = 0; i < toppingOptions.length; i++){
            if(toppingOptions[i].checked){
                realTimePrice = realTimePrice + + breadOptions[i].dataset.cost
            }
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00";

    displayOrder = () => {

        let area = document.getElementById("orders");
        let cost = document.getElementById("orderTotal");
    
        let overallTotal = 0;
    
        for(let i = 0; i < subOrder.length; i++){
    
            let nameOfSub = subOrder[i].subNameOfSub;
            let bread = subOrder[i].subBread;
            let size = subOrder[i].subSize;
            let protein = subOrder[i].subProtein;
            let toppings = subOrder[i].subToppings;
            let sauce = subOrder[i].subSauce;
            let price = subOrder[i].subPrice;
    
            overallTotal += price;
    
            cost.innerHTML = "R" + overallTotal + ".00";
    
            area,innerHTML += `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${nameOfSub}</h5>
              <p class="card-text"><strong>${bread}:</strong> Value</p>
              <p class="card-text"><strong>${size}:</strong> Value</p>
              <p class="card-text"><strong>${protein.join(", ")}:</strong> Value</p>
              <p class="card-text"><strong>${toppings.join(", ")}:</strong> Value</p>
              <p class="card-text"><strong>${sauce.join(", ")}:</strong> Value</p>
              <p class="card-text"><strong>${price}:</strong> Value</p>
            </div>
          </div>`
            
          total.innerHTML = "R" + overallTotal + ".00"
        }
    }
    
    checkout = () => {
        let data = JSON.stringify(pizzaOrder)
        localStorage.setItem('order',data)
    }