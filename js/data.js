let buildSub = document.getElementById('subOut');

for(let i = 0; i < subData.length; i++){

    let name = subData[i].subName;
    let size = subData[i].subSize;
    let bread = subData[i].subBread;
    let protein = subData[i].subProtein;
    let toppings = subData[i].subToppings;
    let sauce = subData[i].subSauce;
    let price = subData[i].subPrice;
}

let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let bread = document.getElementById("bread").value;

    if(size === "Sourdough"){
        subTotal = subTotal + 25;
    } else if(size === "Ciabatta"){
        subTotal = subTotal + 25;
    } else if(size === "French Baguette"){
        subTotal = subTotal + 30;
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

    let proteinOptions = document.getElementsByName("protein");
    let Array = [];
    for(let i = 0; i < proteinOptions.length; i++){
        if(proteinOptions[i].checked){
            Array.push(proteinOptions[i].value);
            subTotal = subTotal + +proteinOptions[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    let bottomArray = [];
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            bottomArray.push(sauceOptions[i].value);
            subTotal = subTotal + +sauceOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subSize: size,
        subBread: breadValue,
        subProtein: Array,
        subToppings: topArray,
        subSauce: bottomArray,
        subPrice: subTotal
    });

    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    let realTimePrice = 0;
    
    let bread = document.getElementById("bread").value;
    
        if(size === "Sourdough"){
            subTotal = subTotal + 25;
        } else if(size === "Ciabatta"){
            subTotal = subTotal + 25;
        } else if(size === "French Baguette"){
            subTotal = subTotal + 30;
        }
    
        let breadOptions = document.getElementsByName("breadRadio");
        for(let i = 0; i < toppingOptions.length; i++){
            if(toppingOptions[i].checked){
                realTimePrice = realTimePrice + + breadOptions[i].dataset.cost
            }
        }
    }