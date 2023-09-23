    let url = "https://delta-website.vercel.app/api/inductions/get-products";
    let cartItems = [];
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let a1 = data;
        [a1] = Object.values(a1);
        for (let a in a1) {
            let div1 = document.createElement("div");
            let b = a1[a]["id"];
        div1.id = b;
        div1.innerHTML += a1[a]["model"];
        div1.innerHTML += "<br>Base Price : " + a1[a]["basePrice"];
        
        div1.innerHTML += "<br><h4>RAM : </h4>";
        
        let radio1 = document.createElement("input");
        radio1.name = b + "1";
        radio1.id = 1;
        radio1.type = "radio";
        let label1 = document.createElement("label");
        radio1.value = 0;
        label1.appendChild(radio1);
        label1.innerHTML +=
        a1[a]["RAM"][0]["size"] + " : " + a1[a]["RAM"][0]["price"] + "<br>";
        div1.appendChild(label1);
        
        let radio2 = document.createElement("input");
        radio2.name = b + "1";
        radio2.id = 2;
        radio2.type = "radio";
        let label2 = document.createElement("label");
        radio2.value = 1;
        label2.appendChild(radio2);
        label2.innerHTML +=
        a1[a]["RAM"][1]["size"] + " : " + a1[a]["RAM"][1]["price"] + "<br>";
        div1.appendChild(label2);

        div1.innerHTML += "<br><h4>Storage : </h4>";
        
        radio1 = document.createElement("input");
        radio1.id = 3;
        radio1.name = b;
        radio1.type = "radio";
        let label3 = document.createElement("label");
        radio1.value = 0;
        label3.appendChild(radio1);
        label3.innerHTML +=
        a1[a]["storage"][0]["type"] +
        " " +
            a1[a]["storage"][0]["size"] +
            " : " +
            a1[a]["storage"][0]["price"] +
            "<br>";
            div1.appendChild(label3);
            
            radio1 = document.createElement("input");
            radio1.name = b;
            radio1.id = 4;
            radio1.type = "radio";
            let label4 = document.createElement("label");
            radio1.value = 1;
            label4.appendChild(radio1);
            label4.innerHTML +=
            a1[a]["storage"][1]["type"] +
            " " +
            a1[a]["storage"][1]["size"] +
            " : " +
            a1[a]["storage"][1]["price"] +
            "<br>";
            div1.appendChild(label4);
            
            let button = document.createElement("button");
            button.innerHTML = "add to cart";
            button.id = b;
            button.onclick = function () {
                // Add the selected item to the cart
                let selectedItem = {
                    model: a1[a]["model"],
                    basePrice: a1[a]["basePrice"],
                    selectedRAM: div1.querySelector("input[name='" + b + "1']:checked").value,
                    selectedStorage: div1.querySelector("input[name='" + b + "']:checked").value,
                };
                cartItems.push(selectedItem);
                
                // Update the shopping cart display
                updateCartDisplay();
            };
            div1.appendChild(button);
            
            document.body.appendChild(div1);;
        }
    });
    
    
    function updateCartDisplay() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = ""; // Clear the current cart display
    
    // Iterate through the cart items and display them
    for (let item of cartItems) {
        let li = document.createElement("li");
        li.innerHTML =
        `${item.model} - Base Price: $${item.basePrice}, ` +
        `Selected RAM: ${item.selectedRAM}, Selected Storage: ${item.selectedStorage}`;
        cartList.appendChild(li);
    }
}
