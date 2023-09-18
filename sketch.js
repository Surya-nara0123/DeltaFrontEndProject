
let url = "https://delta-website.vercel.app/api/inductions/get-products";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let a1 = data;
        [a1] = Object.values(a1);
        for (a in a1) {
            let div1 = document.createElement("div");
            div1.id = a1[a]["model"];
            b = a1[a]["id"];
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
            label1.appendChild(radio1)
            label1.innerHTML += a1[a]["RAM"][0]["size"] + " : " + a1[a]["RAM"][0]["price"] + "<br>";
            //label1.appendChild(radio1);
            div1.appendChild(label1)

            let radio2 = document.createElement("input");
            radio2.name = b + "1";
            radio2.id = 2;
            radio2.type = "radio";
            let label2 = document.createElement("label");
            radio2.value = 1;
            label2.appendChild(radio1)
            label2.innerHTML += a1[a]["RAM"][1]["size"] + " : " + a1[a]["RAM"][1]["price"] + "<br>";
            //label1.appendChild(radio1);
            div1.appendChild(label2)

            div1.innerHTML += "<br><h4>Storage : </h4>";

            radio1 = document.createElement("input");
            radio1.id = 3;
            radio1.name = b;
            radio1.type = "radio";
            label1 = document.createElement("label");
            radio1.value = 0;
            label1.appendChild(radio1)
            label1.innerHTML += a1[a]["storage"][0]["type"] + " " + a1[a]["storage"][0]["size"] + " : " + a1[a]["storage"][0]["price"] + "<br>";
            //label1.appendChild(radio1);
            div1.appendChild(label1)

            radio1 = document.createElement("input");
            radio1.name = b;
            radio1.id = 4;
            radio1.type = "radio";
            label1 = document.createElement("label");
            radio1.value = 1;
            label1.appendChild(radio1)
            label1.innerHTML += a1[a]["storage"][1]["type"] + " " + a1[a]["storage"][1]["size"] + " : " + a1[a]["storage"][1]["price"] + "<br>";
            //label1.appendChild(radio1);
            div1.appendChild(label1)

            let button = document.createElement("button");
            button.innerHTML = "add to cart";
            div1.appendChild(button)

            document.body.appendChild(div1);
            console.log(a1[a]["id"]);
        }
    }
    )

    