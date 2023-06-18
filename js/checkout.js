display.Check = () =>{

    let data= JSON.parse(localStorage.getItem('order'));
    let items= document.getElementById('checkoutOrder');
    let totalArea= document.getElementById('totalOut'); 

    let checkTotal = 0; 

    for(let i=0; i < data.length; i++){
        let nameOfSub = subData[i].subNameOfSub;
        let size = subData[i].subSize;
        let bread = subData[i].subBread;
        let protein = subData[i].subProtein;
        let toppings = subData[i].subToppings;
        let sauce = subData[i].subSauce;
        let price = subData[i].subPrice;

        items.innerHTML += `
            <div class= "orderLine">
                <p><strong>Pizza:</strong> ${nameOfSub}</p>
                <p><strong>Size:</strong> ${size}</p>
                <p><strong>Bread:</strong> ${bread}</p>
                <p><strong>Protein:</strong> ${protein.join(', ')}</p>
                <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                <p><strong>Sauce:</strong> ${sauce.join(', ')}</p>
                <p><strong>Price:</strong> R${price}.00</p>
            </div>`
        
        totalArea.innerHTML = "R" + checkTotal + ".00"
    }

}