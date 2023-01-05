
document.addEventListener("DOMContentLoaded", () => {

    const url = "https://api.sampleapis.com/coffee/hot"

    let globalCoffee;

    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then(coffeeDrinks => {
                coffeeDrinks.map(coffee => {
                    globalCoffee = coffee;
                    coffeeMenu(globalCoffee);
                })

                coffeeDescription(coffeeDrinks[0]);
            })
    }

    getData();

    const coffeeMenuDiv = document.querySelector("div#coffee-menu");

    function coffeeMenu(coffee) {
        const coffeeImg = document.createElement("img");
        coffeeImg.src = coffee.image;

        coffeeImg.addEventListener("mouseover", (e) => {
            e.target.style.height = "75px"
            e.target.style.width = "75px"

            setTimeout(() => {
                e.target.style.height = ""
                e.target.style.width = ""
            }, 500)
        })

        coffeeImg.addEventListener("click", () => {
            globalCoffee = coffee
            coffeeDescription(globalCoffee);
        })

        coffeeMenuDiv.append(coffeeImg)
    }

    const descriptionImg = document.querySelector("img.coffee-img")
    const coffeeName = document.querySelector("h2.name")
    const description = document.querySelector("h3.description")
    const ingredients = document.querySelector("div#coffee-ingredients")
    const price = document.querySelector("h4#coffee-cost");
    const orderList = document.querySelector("div#order-list")
    const orderButton = document.querySelector("button#order-btn")
    const totalCost = document.querySelector("h2#total-cost")


    const ingredientList = document.createElement("ul")
    ingredients.append(ingredientList);

    let unFormattedPrices;
    let formattedPrice;

    function coffeeDescription(coffee) {
        descriptionImg.src = coffee.image;
        coffeeName.textContent = coffee.title;
        description.textContent = coffee.description;

        if (coffee.ingredients.length === 1) {
            unFormattedPrices = 1.25;
            formattedPrice = formatPrices(unFormattedPrices);
            price.textContent = formattedPrice;
        } else if (coffee.ingredients.length === 2) {
            unFormattedPrices = 2.00
            formattedPrice = formatPrices(unFormattedPrices);
            price.textContent = formattedPrice;
        } else if (coffee.ingredients.length >= 3) {
            unFormattedPrices = 3.50
            formattedPrice = formatPrices(unFormattedPrices);
            price.textContent = formattedPrice;
        }

        ingredientList.replaceChildren()
        coffee.ingredients.forEach(ingredient => {
            const coffeeIngredient = document.createElement("li");
            coffeeIngredient.innerText = ingredient;


            ingredientList.append(coffeeIngredient);
        })
    }

    orderButton.addEventListener("click", () => {
        orderButtonFunc()
    })

    function orderButtonFunc() {
        const div = document.createElement("div");
        div.textContent = `1x ${globalCoffee.title}`
        orderList.append(div);


        let cost = parseFloat(formattedPrice.replace('$', ""))
        let costSum = cost += parseFloat(totalCost.innerText.replace("$", ""));
        totalCost.textContent = formatPrices(costSum)
    }

    orderButtonFunc()


    function formatPrices(prices) {
        let formatted = Number.parseFloat(prices).toFixed(2)
        return `$${formatted}`
    }

   

    // .addEventListener("click", (e) => {
    //     orderSubmission();
    // })

    function orderSubmission() {
        orderList.empty()

        const orderSubmittedDiv = document.createElement("div")
        orderSubmittedDiv.textContent = "YOUR ORDER HAS BEEN SUBMITTED, THANK YOU FOR YOU PURCHASE!"
        orderList.append(orderSubmittedDiv)
    }
    // END OF DOMCONTENTLOADED
})
